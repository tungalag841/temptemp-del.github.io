import React from "react";

import "./cards.css";

const Box = ({title, img}) =>{
  return (
    <figure className="box1__figure">
      <img
        className="box1__img"
        src={img}
        alt={'Зураг'}
      />
    </figure>
  );
}


export default Box;
