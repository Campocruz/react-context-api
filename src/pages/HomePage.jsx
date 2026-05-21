import Jumbotron from "../components/Jumbotron/Jumbotron";

export default function HomePage({ titlePage }) {

  return (
    <>
      <div className="container mt-2 p-1">
        <section>
          <p>{titlePage}</p>
        </section>

        <section>
          <Jumbotron />
        </section>

      </div>
    </>
  )
}