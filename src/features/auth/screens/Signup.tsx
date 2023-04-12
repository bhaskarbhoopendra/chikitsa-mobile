import { View, Alert, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";
import { useState, useRef, FC } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../../../config";
import { Button, Text, TextInput } from "react-native-paper";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../infrastrcrture/navigation/account.nagivation";
import styled from "styled-components/native";

export type StackNavigationProps = StackScreenProps<RootStackParamList>;

const Signup: FC<StackNavigationProps> = ({
  navigation,
}: StackNavigationProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const recapthaVeryfier = useRef<FirebaseRecaptchaVerifierModal | null>(null);

  const sendVerification = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        `+91${phoneNumber}`,
        recapthaVeryfier.current!
      );
      setPhoneNumber("");
      if (verificationId) {
        navigation.navigate("Verify", { verificationId });
      }
    } catch (error) {
      console.log({ error });
      Alert.alert("Something Went Wrong");
    }
  };

  const Textlable = styled(Text)`
    margin: 10px;
  `;

  const VerificationButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.brand.secondary};
    border-radius: 0;
    height: 70px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  `;

  const VerificationLable = styled(Text)`
    font-size: 18px;
    color: white;
  `;

  return (
    <SafeArea>
      <View
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "5%",
        }}
      >
        <FirebaseRecaptchaVerifierModal
          ref={recapthaVeryfier}
          firebaseConfig={firebaseConfig}
        />
        <Textlable>
          Let's get Started! Please Enter your Mobile Number
        </Textlable>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            label="+91"
            selectionColor="green"
            activeOutlineColor="green"
            style={{
              height: 70,
              fontSize: 20,
              width: "20%",
              backgroundColor: "white",
            }}
            editable={false}
          />
          <TextInput
            label="Phone Number"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoComplete="tel"
            // mode="outlined"
            selectionColor="green"
            activeOutlineColor="green"
            style={{
              height: 70,
              fontSize: 20,
              width: "80%",
              backgroundColor: "white",
            }}
            maxLength={10}
          />
        </View>
        <TouchableOpacity onPress={sendVerification}>
          <VerificationButton mode="contained">
            <VerificationLable>Send Verification</VerificationLable>
          </VerificationButton>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default Signup;
