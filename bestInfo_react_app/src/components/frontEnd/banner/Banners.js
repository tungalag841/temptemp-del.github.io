import React from "react";
import './banner.css'

export const BodyBanner = ({ banner }) => {
  return (
    <div>
      <figure className="body__banner1-figure"><img className="body__banner1-img" src={banner} /></figure>
    </div>
  )
}

export const SideBanner = ({ banner }) => {
  return (
    <div>
      <figure className="sideBanner__figure">
        <img className="sideBanner__img" src={banner.banner1} style={{ marginBottom: '1.5rem' }} />
        <img className="sideBanner__img" src={banner.banner2} />
      </figure>
    </div>
  )
}
