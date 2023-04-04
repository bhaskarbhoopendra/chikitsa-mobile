import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.nagivation";
import AppNavigator from "./app.navigator";

export const Navigation = () => {
  //This will come from context
  const isAuthenticated: boolean = true;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
