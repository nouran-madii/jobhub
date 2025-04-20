import React, { createContext, useContext, useState } from "react";

const MajorContext = createContext();

export const MajorProvider = ({ children }) => {
  const [selectedMajor, setSelectedMajor] = useState("");

  return (
    <MajorContext.Provider value={{ selectedMajor, setSelectedMajor }}>
      {children}
    </MajorContext.Provider>
  );
};

export const useMajor = () => useContext(MajorContext);
