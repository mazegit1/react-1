import "./ProductCard.css"; 
import plus from "../../assets/img/plus.png";
import cardsHeart from "../../assets/img/cardsHeart.png";
import { useState } from "react";
function ProductCard(props) {
const [selected,setSelected] = useState(false);


  return (
<div className="product-card">
  <div className="product-card_heart">
    <img src={cardsHeart} alt="" />
  </div>
  <div className="product-card__image">
    <img src={props.ProductImage} alt="" />
  </div>
  <div className="product-title">
    <p>{props.ProductTitle}</p>
  </div>
  <div className="product-subtitle">
    <div className="subtitle-left">
      <p>Цена:</p>
      <h1>{props.ProductPrice}</h1>
    </div>
    <div className="subtitle-right">
      <button className={selected && "selected"} onClick={() => setSelected(!selected)}>      <img src={plus} alt="" />
      </button>
    </div>
  </div>
</div>
  )
}

export default ProductCard
