import { createContext, PropsWithChildren, FC, useState, useMemo } from "react";

export type AuthContextValue = {
  user: any;
  setUser: (data: any) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (data: any) => void;
};

export const AuthContext = createContext<AuthContextValue>(
  undefined as unknown as AuthContextValue
);

export const AuhtProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser]: any = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      setUser,
      isAuthenticated,
      setIsAuthenticated,
    }),
    [user, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
