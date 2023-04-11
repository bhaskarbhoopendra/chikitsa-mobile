import { Alert, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeArea } from "../../components/utility/SafeArea";
import Signup from "../../features/auth/screens/Signup";
import OTPScreen from "../../features/auth/screens/OTPScreen";

export type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Verify: { verificationId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AccountNavigator = () => {
  const Login = () => {
    return (
      <SafeArea>
        <View>
          <Text>I am Login Page</Text>
        </View>
      </SafeArea>
    );
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Verify" component={OTPScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
