import { Provider as PaperProvider } from "react-native-paper";
import Home from "./src/features/greetings/screens/Home";

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}
