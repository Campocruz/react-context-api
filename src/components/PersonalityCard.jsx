import { Link } from "react-router";

export default function PersonalityCard({ item }) {

  return (
    <>
      <div className="card" style={{ height: "550px" }}>
        <div className="card-header bg-secondary text-white">
          <h5>{item.name}</h5>
        </div>
        <div className="card-body">
          <img src={item.image} alt={item.name} className="card-img-top" />
          <section className="mt-2">
            <ul>
              <li>Specie: {item.species}</li>
              <li>Genere: {item.gender}</li>
              <li>Stato: {item.status == "Alive" ? "vivo" : "Morto"}</li>
            </ul>
            <Link to={`/personality/${item.id}`}>View More</Link>
          </section>
        </div>
      </div >
    </>
  )
}




