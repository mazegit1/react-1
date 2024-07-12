import "./Hero.css";
import lupa from "../../assets/img/lupa.svg";

import hero from "../../assets/img/hero.png";
import herologo from "../../assets/img/hero-logo.png";

function Hero() {
  return (
<div className="hero">
    <div className="hero-left">
<div className="hero-logo">
  <img src={herologo} alt="" />
</div>
<div className="hero-title">
<h1>Stan Smith<span>,</span> <br />
<span>Forever!</span></h1>
<div />
<div className="hero-button">
<button>Купить</button>
</div>
</div>
    </div>
    <div className="hero-right">
        <img src={hero} alt="" />
        <img className="lupa" src={lupa} alt="" />
    </div>
</div>
  )
}

export default Hero
