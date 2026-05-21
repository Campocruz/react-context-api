import { useEffect, useState } from "react";
import PersonalityCard from "../components/PersonalityCard";

export default function RickMortyPage() {

  const urlApi = "https://rickandmortyapi.com/api/character/"

  const [personalitys, setPersonalitys] = useState([]);

  let prevPage;
  let nextPage;

  function getApi(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPersonalitys(data.results)
        prevPage = data.info.prev
        nextPage = data.info.next
      })
  }

  useEffect(() => {
    getApi(urlApi)
  }, [])

  function changePage() {

  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-3">
          {
            personalitys?.map((item) => (
              <div key={item.id} className="col">
                <PersonalityCard item={item} />
              </div>
            ))
          }
        </div>
        <div className="text-center mt-3 mb-3">
          {prevPage === null ? <button className="btn">Prev</button> : ""}
          {nextPage === null ? <button className="btn">Next</button> : ""}
        </div>
      </div >
    </>
  )
}