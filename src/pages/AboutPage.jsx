import Accordion from "../components/Accordion/Accordion";

export default function AboutPage({ titlePage }) {

  return (
    <>
      <div className="container">
        <h1>{titlePage}</h1>
        <section>
          <Accordion />
        </section>
      </div>
    </>
  )
}