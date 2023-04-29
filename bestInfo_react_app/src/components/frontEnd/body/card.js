import React from "react";

import "./cards.css";

const Box = ({title, img}) => {
//     let totalLength = 120;
  return (
<div className="specialNews">
        <figure className="specialNews__figure">
          <img
            className="specialNews__img"
            src={img}
            alt={title}
          />
          <figcaption className="specialNews__figcaption">
            {title}
            {/* {title.length > totalLength
              ? title.substr(0, totalLength) + "..."
              : title} */}

            {/* {title.length + title.length > titleLength
              ? title.substr(0, titleLength) + "..."
              : title} */}
          </figcaption>
        </figure>
      </div>
  )
}

export default Box;
