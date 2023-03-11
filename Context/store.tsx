"use client";

import { initialStateData, reducer } from "@/Reducer/UserReducer";
import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
} from "react";

const GlobalContext = createContext(initialStateData);
interface UserProviderProps {
  children: ReactNode;
}
interface initialState {
  email: string,  password:string,
};
export const GlobalContextProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer,initialStateData)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
