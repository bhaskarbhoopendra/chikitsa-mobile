import styled from "styled-components";
import { SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
