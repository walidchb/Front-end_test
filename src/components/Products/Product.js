import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="productView">
      <div className="imageName">
        <img className="imageproduct" src={props.img} alt="" />
        <p>{props.name}</p>
        <p>{props.artist}</p>
        <p>{props.price}</p>
      </div>

      <div className="flexprice">
        <button href={"/Pracipal/" + props.id} className="addtobasket">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
