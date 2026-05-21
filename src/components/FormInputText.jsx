import { useState } from "react"

export default function FormInputText({ onFindTitle }) {

  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <label htmlFor="inputState" className="form-label">Cerca Prodotto</label>
      <input type="text" className="form-control" value={inputValue} onChange={(e) => { setInputValue(e.target.value); onFindTitle(e.target.value) }} />
    </>
  )
}