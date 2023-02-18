import React, { useState, createContext, useEffect, useContext } from "react";
import { toast } from "react-toastify"
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(false)

  return <AppContext.Provider value={{ 
      
    }}>
    {props.children}
  </AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext)

export default AppContextProvider
