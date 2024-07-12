
import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import user from "../../assets/img/user.svg";
import heart from "../../assets/img/heart.png";
import cart from "../../assets/img/shop-cart.svg";

function Navbar() {
  return (
<header className="navbar">
  <div className="navbar-nav container">
<div className="navbar-left">
  <div className="navbar-logo">
    <img src={logo} alt="" />
  </div>
  <div className="navbar-title">
    <h1>REACT SNEAKERS</h1>
    <p>Магазин лучших кроссовок</p>
  </div>
</div>
<div className="navbar-right">
  <div className="links">
   <div className="link">
    <div className="link-icon">    <img className="header-icons" src={cart} alt="" />
    </div>
    <div className="link-title">1205 руб</div>
   </div>
   <div className="link">
    <div className="link-icon"><img className="header-icons" src={heart} alt="" /></div>
    <div className="link-title">Закладки</div>
   </div>
   <div className="link">
    <div className="link-icon"><img className="header-icons" src={user} alt="" /></div>
    <div className="link-title">Профиль</div>
   </div>
  </div>
</div>

  </div>
</header>
  )
}

export default Navbar
