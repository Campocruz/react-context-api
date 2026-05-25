import { Link } from "react-router";

import { useFavourite } from "../contexts/FavouriteContext";

export default function ProductCard({ product }) {

  const { toggleFavorite, isFavorite } = useFavourite()

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6><Link to={`${product.id}`}>{product.title}</Link></h6>
        </div>
        <div className="card-body">
          <section className="product-img mb-2">
            <img src={product.image} alt="" className="card-img-top rounded mx-auto d-block" />
          </section>
          <section className="description mb-2">
            <h5>Description</h5>
            <p>{product.description}</p>
          </section>
          <hr />
          <section className="product-detail">
            <ul className="list-unstyled">
              <li><strong>Categoria: </strong>{product.category}</li>
              <li><strong>Rate: </strong>{product.rating.rate} & <strong>Count: </strong>{product.rating.count}</li>
              <li><strong>Prezzo: </strong>{product.price}&euro;</li>
            </ul>
          </section>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <button className="btn"><i className="bi bi-cart-plus"></i></button>
            <button className="btn" onClick={() => (toggleFavorite(product.id))}><i className={`bi bi-heart${isFavorite(product.id) ? "-fill" : ""}`}></i></button>
          </div>
        </div>
      </div>
    </>
  )
}