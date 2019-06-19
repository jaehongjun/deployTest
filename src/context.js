import React, { useState, useContext } from "react";
// 데이터 저장소
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "hong!",
    loggedIn: false
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  return (
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};
export default UserContextProvider;
