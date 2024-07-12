import ProductCard from "../ProductCard/ProductCard";
import "./Cards.css";
import shoe1 from "../../assets/img/shoe-1.png";
import shoe2 from "../../assets/img/shoe-2.png";
import shoe3 from "../../assets/img/shoe-3.png";
import shoe4 from "../../assets/img/shoe-4.png";
import shoe5 from "../../assets/img/image 5.png";
import shoe6 from "../../assets/img/image 6.png";
import shoe7 from "../../assets/img/image 7.png";
import shoe8 from "../../assets/img/image 8.png";
import shoe9 from "../../assets/img/image 9.png";
import shoe10 from "../../assets/img/image 10.png";
import shoe11 from "../../assets/img/image 11.png";
import shoe12 from "../../assets/img/image 12.png";

function Cards() {
  return (
<div className="cards container">
<div className="cards-top">
  <h1 className="cards-title">Все кроссовки</h1>
  <div className="cards-input">
    <input type="text" placeholder="Поиск..." />
  </div>
</div>
<div className="product-cards container">
  
<ProductCard ProductImage={shoe1} ProductPrice="12 999 руб."  ProductTitle="Мужские Кроссовки Nike Blazer Mid Suede" />
<ProductCard ProductImage={shoe2} ProductPrice="12 999 руб."  ProductTitle="Мужские Кроссовки Nike Air Max 270" />
<ProductCard ProductImage={shoe3} ProductPrice="8 499 руб."  ProductTitle="Мужские Кроссовки Nike Blazer Mid Suede"/>
<ProductCard ProductImage={shoe4} ProductPrice="8 999 руб."  ProductTitle="Кроссовки Puma X Aka Boku Future Rider"/>
<ProductCard ProductImage={shoe5} ProductPrice="15 199 руб."  ProductTitle="Мужские Кроссовки Under Armour Curry 8"/>
<ProductCard ProductImage={shoe6} ProductPrice="11 299 руб."  ProductTitle="Мужские Кроссовки Nike Kyrie 7"/>
<ProductCard ProductImage={shoe7} ProductPrice="10 799 руб."  ProductTitle="Мужские Кроссовки Jordan Air Jordan 11"/>
<ProductCard ProductImage={shoe8} ProductPrice="16 499 руб."  ProductTitle="Мужские Кроссовки Nike LeBron XVIII"/>
<ProductCard ProductImage={shoe9} ProductPrice="13 999 руб."  ProductTitle="Мужские Кроссовки Nike Lebron XVIII Low"/>
<ProductCard ProductImage={shoe10} ProductPrice="8 499 руб."  ProductTitle="Мужские Кроссовки Nike Blazer Mid Suede"/>
<ProductCard ProductImage={shoe11} ProductPrice="8 999 руб."  ProductTitle="Кроссовки Puma X Aka Boku Future Rider"/>
<ProductCard ProductImage={shoe12} ProductPrice="11 299 руб."  ProductTitle="Мужские Кроссовки Nike Kyrie Flytrap IV"/>

</div>

</div>
  )
}

export default Cards
