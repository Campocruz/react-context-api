import { useState } from "react"

export default function FormInputPrice({ onFindValue }) {

  const [inputValue, setInputValue] = useState("")


  return (
    <>
      <label htmlFor="inputState" className="form-label">Prezzo</label>
      <input type="number" className="form-control" value={inputValue} onChange={(e) => { setInputValue(e.target.value); onFindValue(e.target.value) }} />
    </>
  )
}