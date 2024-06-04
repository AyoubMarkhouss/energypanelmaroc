import React, { createContext, ReactNode, useContext, useState } from "react";

interface BooleanContextType {
  booleanState: boolean;
  toggleBoolean: () => void;
  sectionName: string;
  sectionPlace: (newName: string) => void;
}

const initialContext: BooleanContextType = {
  booleanState: false,
  toggleBoolean: () => {},
  sectionName: "",
  sectionPlace: () => {},
};

const BooleanContext = createContext<BooleanContextType>(initialContext);

export const useBooleanContext = () => useContext(BooleanContext);
interface Props {
  children: ReactNode;
}
export const BooleanProvider: React.FC<Props> = ({ children }) => {
  const [booleanState, setBooleanState] = useState<boolean>(false);
  const [sectionName, setSectionName] = useState<string>("");

  const toggleBoolean = () => {
    setBooleanState((prevState) => !prevState);
  };

  const sectionPlace = (newName: string) => {
    setSectionName(newName);
  };

  return (
    <BooleanContext.Provider
      value={{ booleanState, toggleBoolean, sectionName, sectionPlace }}
    >
      {children}
    </BooleanContext.Provider>
  );
};
