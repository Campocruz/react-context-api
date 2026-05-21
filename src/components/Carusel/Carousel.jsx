import './carousel.css'

export default function Carousel() {

  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/40/40" className="d-block w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/40/60" className="d-block w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/60/40" className="d-block w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/100/100" className="d-block w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/200/200" className="d-block w-50" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}