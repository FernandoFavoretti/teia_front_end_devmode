/* import { useNavigate } from "react-router-dom";
import { iUserProviderProps } from "../interfaces";

export const UserProviders = ({}: iUserProviderProps) => {
  const navigate = useNavigate();

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
 */

/* import { createContext } from "react";
import { iUserProviderProps } from "../interfaces";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({} as iUserProviderProps);

export const UserProviders = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ navigate, children }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};

export { UserContext };
 */
