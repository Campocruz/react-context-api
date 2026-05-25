import { func } from "prop-types";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <GlobalContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}

function useGlobal() {
  const context = useContext(GlobalContext);
  return context;
}


export { GlobalProvider, useGlobal }