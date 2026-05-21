import { useState } from "react"

export default function AppNavSearch() {

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </>
  )
}