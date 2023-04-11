import { useState, FC } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";
import firebase from "firebase/compat/app";
import { Button, TextInput, Text } from "react-native-paper";
import { StackNavigationProps } from "./Signup";
import styled from "styled-components/native";

const OTPScreen: FC<StackNavigationProps> = ({
  route,
  navigation,
}: StackNavigationProps) => {
  const [code, setCode] = useState<string>("");
  const { verificationId } = route?.params ?? {};

  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId ?? "",
        code
      );
      await firebase.auth().signInWithCredential(credential);
      setCode("");
      Alert.alert("Login Successfull");
    } catch (error) {
      Alert.alert(`${error}`);
    }
  };

  const Container = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const OTPInput = styled(TextInput)`
    height: 70px;
    font-size: 20px;
    width: 15%;
    background-color: white;
  `;

  const VerificationButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.brand.primary};
    border-radius: 0;
    height: 70px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  `;

  const VerificationLable = styled(Text)`
    font-size: 18px;
  `;

  return (
    <SafeArea>
      <View>
        <Container>
          <OTPInput
            onChangeText={setCode}
            mode="outlined"
            keyboardType="number-pad"
          />
          <OTPInput
            onChangeText={setCode}
            mode="outlined"
            keyboardType="number-pad"
          />
        </Container>
        <TouchableOpacity onPress={confirmCode}>
          <VerificationButton>
            <VerificationLable>
              Confirm Verification Verification
            </VerificationLable>
          </VerificationButton>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default OTPScreen;

// firebase
//   .auth()
//   .signInWithCredential(credential)
//   .then(() => {
//     setCode("");
//   })
//   .catch((err) => {
//     console.log({ err });
//   });
