import { useState, FC, useRef } from "react";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";
import firebase from "firebase/compat/app";
import { Button, TextInput, Text } from "react-native-paper";
import { StackNavigationProps } from "./Signup";
import styled from "styled-components/native";
import { apiClient } from "../../../api/apiClient";
import { useAuth } from "../../../service/hooks/ContextHooks";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

const OTPScreen: FC<StackNavigationProps> = ({
  route,
  navigation,
}: StackNavigationProps) => {
  const { verificationId } = route?.params ?? {};
  const inputs = useRef<(typeof TextInput & { focus: () => void })[]>([]);
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const code = values.join("");
  const { setUser, setIsAuthenticated } = useAuth();

  const focusPrevField = (index: number) => {
    inputs.current[index - 1]?.focus();
  };

  const focusNextField = (index: number) => {
    inputs.current[index + 1]?.focus();
  };

  const handleInput = (text: string, index: number) => {
    let newValues = [...values];
    newValues[index] = text;
    setValues(newValues);

    if (text.length === 1) {
      focusNextField(index);
    }
    if (text.length === 0) {
      focusPrevField(index);
    }
  };

  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId ?? "",
        code
      );
      const response = await firebase.auth().signInWithCredential(credential);
      // console.log(response.user);
      const phone_number = response?.user?.phoneNumber;
      console.log({ phone_number });
      // const res = await apiClient.post("/users", phone_number);
      const res = await axios.post(
        "https://0cbb-223-233-64-96.in.ngrok.io/users",
        phone_number
      );
      console.log({ res });
      setUser(phone_number);
      setIsAuthenticated(true);
      setValues([]);
      Alert.alert("Login Successfull");
    } catch (error) {
      Alert.alert(`${error}`);
    }
  };

  const VerificationButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.brand.secondary};
    border-radius: 0;
    height: 70px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const VerificationLable = styled(Text)`
    font-size: 18px;
    color: white;
  `;

  return (
    <SafeArea>
      <LinearGradient
        colors={["#36F0AE", "#0EBE7F"]}
        style={{
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Image
          style={{ marginLeft: 50, marginBottom: 15 }}
          source={require("../../../../assets/phoneverify.png")}
        />
        <Text style={{ fontSize: 35, color: "white" }}>Verfication</Text>
        <Text style={{ color: "white", marginTop: 10, fontSize: 15 }}>
          Enter Your OTP Code Number
        </Text>
      </LinearGradient>

      <View style={{ flex: 1, justifyContent: "flex-start", padding: "3%" }}>
        <View style={{ flexDirection: "row" }}>
          {[...Array(6)].map((_, i) => (
            <TextInput
              key={i}
              style={{
                height: 70,
                width: "14%",
                borderColor: "#36F0AE",
                borderWidth: 1,
                marginHorizontal: 5,
                textAlign: "center",
                fontSize: 18,
                backgroundColor: "white",
              }}
              onChangeText={(text) => handleInput(text, i)}
              maxLength={1}
              keyboardType="numeric"
              ref={(input: any) => {
                inputs.current[i] = input;
              }}
            />
          ))}
        </View>
        <TouchableOpacity onPress={confirmCode}>
          <VerificationButton>
            <VerificationLable>Verify</VerificationLable>
          </VerificationButton>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default OTPScreen;
