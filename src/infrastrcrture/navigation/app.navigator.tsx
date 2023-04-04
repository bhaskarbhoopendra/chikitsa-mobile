import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../features/greetings/screens/Home";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
);

export default AppNavigator;
