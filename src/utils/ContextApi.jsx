import { createContext, useState } from "react";

export const context = createContext();

export const AppContext = (props) => {
  const [imageSearch, setImageSearch] = useState(false);

  return (
    <context.Provider
      value={{
        imageSearch,
        setImageSearch,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
