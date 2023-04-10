import { useState, FC } from "react";
import { View, Alert, TextInput, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";
import firebase from "firebase/compat/app";
import { Button } from "react-native-paper";
import { StackNavigationProps } from "./Signup";

const OTPScreen: FC<StackNavigationProps> = ({
  route,
  navigation,
}: StackNavigationProps) => {
  const [code, setCode] = useState<string>("");
  const { verificationId } = route?.params ?? {};

  const confirmCode = () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId ?? "",
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
    } catch (error) {
      Alert.alert(`${error}`);
    }
  };
  return (
    <SafeArea>
      <View>
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

export default OTPScreen;
