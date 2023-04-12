import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./account.nagivation";
import AppNavigator from "./app.navigator";
import { useAuth } from "../../service/hooks/ContextHooks";

export const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
