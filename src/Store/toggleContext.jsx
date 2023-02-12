import { createContext, useState } from "react";

const toggleContext = createContext({});

export const ToggleContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(true);
  };
  const hideFormHandler = () => {
    setToggle(false);
  };
  const showMenu = {
    toggleHandler,
    toggle,
    hideFormHandler,
  };
  return (
    <toggleContext.Provider value={showMenu}>{children}</toggleContext.Provider>
  );
};
export default toggleContext
