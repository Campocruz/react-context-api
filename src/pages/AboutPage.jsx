import { GlobalProvider } from "../contexts/GlobalContext.jsx";

import Accordion from "../components/Accordion/Accordion";

export default function AboutPage({ titlePage }) {

  return (
    <>
      <GlobalProvider>
        <div className="container">
          <h1>{titlePage}</h1>
          <section>
            <Accordion />
          </section>
        </div>
      </GlobalProvider>
    </>
  )
}