import { Text, View } from "react-native";
import { SafeArea } from "../../components/utility/SafeArea";
import { Auth } from "aws-amplify";
import { Button } from "react-native-paper";
import styled from "styled-components";

export const AccountNavigator = () => {
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

  const EleveatedButton = styled(Button)`
    margin-top: 50px;
  `;
  return (
    <SafeArea>
      <View>
        <Text>Hello Login and Signup Buttons</Text>
        <EleveatedButton
          style={{ marginTop: 20 }}
          mode="elevated"
          // onPress={signUp}
        >
          Elevated
        </EleveatedButton>
        <EleveatedButton
          style={{ marginTop: 20 }}
          mode="elevated"
          // onPress={confirmSignUp}
        >
          Confirm Code
        </EleveatedButton>
      </View>
    </SafeArea>
  );
};
