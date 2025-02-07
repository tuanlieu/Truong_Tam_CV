import { createContext } from "react";

type ControlState = {
  isDarkMode: boolean;
  isWelcome: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
  setWelcome: (isWelcome: boolean) => void;
};
const HeaderContext = createContext<ControlState | undefined>(undefined);

export default HeaderContext;