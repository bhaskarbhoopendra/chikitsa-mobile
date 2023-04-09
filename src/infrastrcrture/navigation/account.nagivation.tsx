import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeArea } from "../../components/utility/SafeArea";
import { Auth } from "aws-amplify";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";

import { useState, useReducer, useRef } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../config";
import firebase from "firebase/compat/app";

const AccountNavigator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId]: any = useState(null);
  const recapthaVeryfier: any = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recapthaVeryfier.current)
      .then((res) => setVerificationId(res));
    setPhoneNumber("");
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
      })
      .catch((err) => {
        console.log({ err });
      });
    Alert.alert("Login Successfull");
  };

  const EleveatedButton = styled(Button)`
    margin-top: 50px;
  `;

  return (
    <SafeArea>
      <View>
        <FirebaseRecaptchaVerifierModal
          ref={recapthaVeryfier}
          firebaseConfig={firebaseConfig}
        />
        <Text>Login user OTP</Text>
        <TextInput
          placeholder="Phone Number with country code"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoComplete="tel"
          style={{ padding: 5 }}
        />
        <TouchableOpacity onPress={sendVerification}>
          <Button style={{ padding: 5, backgroundColor: "teal" }}>
            Send Verification
          </Button>
        </TouchableOpacity>

        <TextInput
          placeholder="Confirm Code"
          onChangeText={setCode}
          keyboardType="number-pad"
        />

        <TouchableOpacity onPress={confirmCode}>
          <Button>Confirm Verification Verification</Button>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default AccountNavigator;

// const username = "codetest.bhaskar@gmail.com";
// const password = "bhaskar4@Every1";
// const email = "codetest.bhaskar@gmail.com";
// const phone_number = "+917007095634";
// async function signUp() {
//   try {
//     const { user } = await Auth.signUp({
//       username,
//       password,
//       attributes: {
//         email, // optional
//         phone_number, // optional - E.164 number convention
//         // other custom attributes
//       },
//       autoSignIn: {
//         // optional - enables auto sign in after user is confirmed
//         enabled: true,
//       },
//     });
//     console.log(user);
//   } catch (error) {
//     console.log("error signing up:", error);
//   }
// }

// async function confirmSignUp() {
//   const code = "422071";
//   try {
//     await Auth.confirmSignUp(username, code);
//   } catch (error) {
//     console.log("error confirming sign up", error);
//   }
// }

// return (
//   <SafeArea>
//     <View>
//       <Text>Hello Login and Signup Buttons</Text>
//       <EleveatedButton
//         style={{ marginTop: 20 }}
//         mode="elevated"
//         // onPress={signUp}
//       >
//         Elevated
//       </EleveatedButton>
//       <EleveatedButton
//         style={{ marginTop: 20 }}
//         mode="elevated"
//         // onPress={confirmSignUp}
//       >
//         Confirm Code
//       </EleveatedButton>
//     </View>
//   </SafeArea>
// );
