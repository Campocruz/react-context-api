import { useEffect, useState } from "react";
import { useContext } from "react";

import ProductsContext from '../contexts/ProductsContext.jsx'
import BudgetModeContext from "../contexts/BudgetModeContext.jsx";

import LoadingPage from "../components/LoadingPage/LoadingPage";

import ProductCard from "../components/ProductCard";
import MainFilterBox from "../components/MainFilterBox";


export default function ProductsPage({ titlePage }) {

  const urlApi = "https://fakestoreapi.com/products"

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [renderList, setRenderList] = useState([]);

  const [budgetMode, setBudegetMode] = useState(false);

  function getProductsUrl(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setRenderList(data)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getProductsUrl(urlApi)
  }, [])


  if (loading) { return <LoadingPage /> }


  return (
    <>

      <ProductsContext.Provider value={{ products, setProducts, renderList, setRenderList, budgetMode, setBudegetMode }} >
        <div className="container mt-2 p-1">
          <section>
            <p>{titlePage} page</p>
          </section>
          <section>
            <div className="row align-items-end">
              <div className="col-12">
                <MainFilterBox />
              </div>
            </div>
            <div className="col-1 text-center">
              <p>{renderList.length} item</p>
            </div>
          </section>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            {
              renderList?.map(item => (
                <div key={item.id} className="col">
                  <ProductCard product={item} />
                </div>
              ))
            }
          </div>
        </div>
      </ProductsContext.Provider>

    </>
  )
}