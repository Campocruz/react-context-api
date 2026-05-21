import './jumbotron.css'

export default function Jumbotron() {

  return (
    <>
      <div className="jumbotron">
        <div className='jum-title'>
          <h2>Welcome Black Friday</h2>
        </div>
        <div className='jum-description'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste libero error aut nemo, veniam, vero enim magnam rem,
            ut numquam minima ducimus consequatur quia fugiat deserunt magni? Iste, hic illum.
          </p>
        </div>
        <div className="jum-btn">
          <button>Submit</button>
        </div>
      </div>
    </>
  )
}