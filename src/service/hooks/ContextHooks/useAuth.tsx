import { useContext } from "react";
import { AuthContext, AuthContextValue } from "../../context/AuthContext";

export const useAuth = () => {
  return useContext<AuthContextValue>(AuthContext);
};
