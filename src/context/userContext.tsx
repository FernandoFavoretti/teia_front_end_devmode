import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iUserProviderValues } from "../interfaces";

export const UserContext = createContext({} as iUserProviderValues);

export const UserProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  // const navigate = useNavigate();

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
