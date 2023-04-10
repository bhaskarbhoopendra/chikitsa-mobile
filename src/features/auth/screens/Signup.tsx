import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";
import { useState, useRef, FC } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../../../config";
import { Button } from "react-native-paper";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../infrastrcrture/navigation/account.nagivation";

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
        phoneNumber,
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
      </View>
    </SafeArea>
  );
};

export default Signup;
