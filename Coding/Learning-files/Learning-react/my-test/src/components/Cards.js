import katie from "../images/katie.png"
import Star from "../images/Star.png"

export default function Cards() {
  return (
    <section className="cards">

      <div className="card">
        <img src={katie}/>
        <div className="card--info">
          <p className="card--info--rating">
            <span><img src={Star}/></span>
            <span>5.0</span>
            <span className="card--info--location">(6) - USA</span>
          </p>
          <p className="card--info--desc">
            Life lessons with Katie Zaferes
          </p>
          <p className="card--info--price">
            <span className="card--info--price--bold">From $136 </span>
            <span>/ person</span>
          </p>
        </div>
      </div>

    </section>
  )
}