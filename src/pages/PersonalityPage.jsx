import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PersonalityPage() {

  const { id } = useParams();
  const [personality, setPersonality] = useState({});

  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setPersonality(data)
      })
  }, [id])

  return (
    <>
      <div className="card" style={{ height: "550px" }}>
        <div className="card-header bg-secondary text-white">
          <h5>{personality?.name}</h5>
        </div>
        <div className="card-body">
          <img src={personality?.image} alt={personality?.name} className="card-img-top" />
          <section className="mt-2">
            <ul>
              <li>Specie: {personality?.species}</li>
              <li>Genere: {personality?.gender}</li>
              <li>Stato: {personality?.status == "Alive" ? "vivo" : "Morto"}</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}