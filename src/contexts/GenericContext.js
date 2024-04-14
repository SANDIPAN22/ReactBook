import { createContext, useContext } from "react";
const GenericContext = createContext({
  mode: "light",
  setMode: () => {},
  addPost: false,
  setAddPost: () => {},
});

export const GenericContextProvider = GenericContext.Provider;

export default function useGenericContext() {
  return useContext(GenericContext);
}
