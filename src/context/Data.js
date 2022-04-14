import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const user = {
    name: "Danu Prakoso",
  };

  return (
    <DataContext.Provider value={{ user, value, setValue }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
