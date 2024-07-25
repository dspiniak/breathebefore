import React, { createContext, useState, useContext } from 'react';

const ResetContext = createContext();

export const useReset = () => useContext(ResetContext);

export const ResetProvider = ({ children }) => {
  const [reset, setReset] = useState(false);

  const triggerReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 0); // Reset the state back after triggering the reset
  };

  return (
    <ResetContext.Provider value={{ reset, triggerReset }}>
      {children}
    </ResetContext.Provider>
  );
};