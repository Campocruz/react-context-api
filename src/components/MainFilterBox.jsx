import { useContext } from "react"

import { useBudgetMode } from "../contexts/BudgetModeContext"

import MainSelectList from "./MainSelectList"
import FormInputText from "./FormInputText"
import ProductsContext from "../contexts/ProductsContext"
import FormInputPrice from "./FormInputPrice"

import './mainFilterBox.css'

export default function MainFilterBox() {

  const { setRenderList, products } = useContext(ProductsContext)

  const { budgetMode, toggleMode } = useBudgetMode();

  function selectedGenre(e) {
    setSelectGenre(e.target.value)
  }

  function findTitle(inputTitle) {
    if (inputTitle === "" || inputTitle === "All") {
      setRenderList(products)
    } else {
      const filteredTitle = products.filter((product) => product.category.toLowerCase().includes(inputTitle.toLowerCase()) || product.title.toLowerCase().includes(inputTitle.toLowerCase()))
      setRenderList(filteredTitle)
    }
  }

  function findPrice(inputValue) {
    if (inputValue == 0 || inputValue == "") {
      setRenderList(products)
    } else {
      const filteredTitle = products.filter((product) => product.price <= inputValue)
      setRenderList(filteredTitle)
    }
  }

  return (
    <>
      <div className="container bg-body text-body pt-2">
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 text-center">
            <MainSelectList productsList={products} onFindTitle={findTitle} />
          </div>
          <div className="col-md-2 text-center">
            <FormInputText onFindTitle={findTitle} />
          </div>
          {
            budgetMode ? (
              <div className="col-md-2 text-center">
                <FormInputPrice onFindValue={findPrice} />
              </div>
            ) :
              <></>
          }
          <div className="col-md-2 text-center">
            <div className="btn-budget-mode">
              <p>Budget Mode</p>
              <i className={`bi bi-toggle-${budgetMode ? "on" : "off"}`} onClick={() => toggleMode()}></i>
            </div>
          </div>
        </div >
      </div>
    </>
  )
}