export default function ProductDetail({ detail, nav }) {

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-8">
            <h3>{detail.title}</h3>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-around">
              <div className="">
                {
                  detail.id === 1 ? "" :
                    <button className="btn btn-lg btn-secondary btn-page" onClick={() => { nav(`/products/${detail.id - 1}`) }}>Precedente</button>
                }
              </div>
              <div className="">
                <button className="btn btn-lg btn-secondary btn-page" onClick={() => { nav(`/products/${detail.id + 1}`) }}>Prossimo</button>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5">
            <img src={detail.image} alt="" />
          </div>
          <div className="col-6 mt-5 d-flex justify-content-center">
            <ul className="list-unstyled">
              <li><strong>Categoria: </strong>{detail.category}</li>
              <li><strong>Rate: </strong>{detail.rating.rate}</li>
              <li><strong>Count: </strong>{detail.rating.count}</li>
              <li><strong>Prezzo: </strong>{detail.price}&euro;</li>
            </ul>
          </div>
          <div className="col-8 mt-4">
            <h4>Descrizione</h4>
            <p>{detail.description}</p>
          </div>
        </div>
      </div >
    </>
  )
}