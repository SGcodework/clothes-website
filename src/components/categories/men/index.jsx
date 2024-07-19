import React from "react";
import "./men.scss";
import "../../../styles/index.scss";
import menherobanner from "../../../assets/images/men/men-herobanner.webp";
import tshirt from "../../../assets/images/men/tees-polos.webp";
import bottom from "../../../assets/images/men/bottom.webp";
import coordset from "../../../assets/images/men/coord-sets.webp";
import shirt from "../../../assets/images/men/shirt.webp";
import swimwear from "../../../assets/images/men/swim-wear.webp";
import hoodies from "../../../assets/images/men/jackets-hoodies.webp";

const men = [
  {
    image: shirt,
    title: "shirt",
  },
  {
    image: tshirt,
    title: "t-shirt",
  },
  {
    image: bottom,
    title: "bottom",
  },
  {
    image: coordset,
    title: "coord-sets",
  },
  {
    image: swimwear,
    title: "swim-wears",
  },
  {
    image: hoodies,
    title: "jackets",
  },
];
export default function Men() {
  return (
    <div className="men-section">
      <div className="men-herobanner">
        <img src={menherobanner} alt="men-herobanner" />
      </div>
      <div className="men-header">
        <div className="container-md">
          <h2>men's category</h2>
          <h3>The Ultimate Collection: Men's Fashion Staples</h3>

          <div className="grid">
            {men.map((item) => (
              <div className="grid-item">
                <div className="category-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
