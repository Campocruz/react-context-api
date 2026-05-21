import MainSelectList from "./MainSelectList"
import FormInputText from "./FormInputText"

import { useContext } from "react"
import ProductsContext from "../contexts/ProductsContext"

export default function MainFilterBox() {

  const { setRenderList, products } = useContext(ProductsContext)

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

  return (
    <>
      <div className="row d-flex justify-content-center m-4">
        <div className="col-md-2 text-center">
          <MainSelectList productsList={products} onFindTitle={findTitle} />
        </div>
        <div className="col-md-2 text-center">
          <FormInputText onFindTitle={findTitle} />
        </div>
      </div>
    </>
  )
}