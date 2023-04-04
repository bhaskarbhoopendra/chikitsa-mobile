import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import Home from "./src/features/greetings/screens/Home";
import { Navigation } from "./src/infrastrcrture/navigation";
import theme from "./src/infrastrcrture/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </ThemeProvider>
  );
}
