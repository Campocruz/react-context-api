import { func } from "prop-types";
import { createContext, useContext, useState } from "react";

const BudgetModeContext = createContext();

function BudgetModeProvider({ children }) {

  const [budgetMode, setBudgetMode] = useState(true);
  const [budgetList, setBudgetList] = useState([])

  function toggleMode() {
    setBudgetMode((prevMode) => prevMode ? false : true)
  }

  return (
    <>
      <BudgetModeContext.Provider value={budgetMode, toggleMode}>
        {children}
      </BudgetModeContext.Provider>
    </>
  )
}

function useBudgetMode() {
  const context = useContext(BudgetModeContext);
  return context;
}

export { BudgetModeProvider, useBudgetMode }                      
§à                                                                       .l    k,.llllllllllll,kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk,
              ò  utjr4èbàòghght                           mààò.lll +ù                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  80