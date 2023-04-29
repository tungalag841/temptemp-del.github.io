import React, { useState, } from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import Tsag from "./Tsag";
import { Link } from "react-router-dom";
import "./head.css";

const Head = () => {

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    const { history } = this.props;
    history.push(`/search/${title}`);
  };
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  };

  return (
    <div className="dateHead">
      <div className="dateHead__container">
        <Tsag />
        <div className="dateHead__search">
          <form onChange={handleSubmit}>
            <input
              type="text"
              placeholder="Хайх..."
              onChange={handleTitleChange}
            />
            <div className="search" />
          </form>
        </div>
        <div className="dateHead__logos">
          <a href='https://www.facebook.com/profile.php?id=100075978005310'>
            <TiSocialFacebook size={30} className="dateHead__FB" />
          </a>
          <a href="#">
          <TiSocialTwitter size={30} className="dateHead__TW" />
              
          </a>
          <a href="#">
          <TiSocialYoutube size={30} className="dateHead__YT" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;

