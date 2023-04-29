import React from "react";

const Box3 = ({img, title}) => {
  return (
    <figure style={{ width: "100%", height: "180px" }}>
      <img
        src={img}
        alt={title}
        style={{ width: "100%", height: "100%" }}
      />
    </figure>
  );
}
export default Box3;
