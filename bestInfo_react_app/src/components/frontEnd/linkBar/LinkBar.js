import React from "react";

import "./linkBar.css";

const LinkBar = () =>{
  return (
    <div className="linkBar">
      <div className="linkBar__title">Холбоосууд</div>

      <div className="linkBar__links">
        <div className="linkBar__links-item">
          <a
            href="http://ama.org.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Монголын Өмгөөлөгчдийн Холбоо
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="http://parliament.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Монгол Улсын Их Хурал
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="http://conscourt.gov.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Үндсэн хуулийн цэц
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="https://mojha.gov.mn/newmojha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Хууль зүй, дотоод хэргийн яам
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="http://judcouncil.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Шүүхийн ерөнхий зөвлөл
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="http://supremecourt.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Улсын Дээд Шүүх
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="http://e-khutuch.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Эрх зүйн мэдээллийн нэгдсэн систем
          </a>
        </div>

        <div className="linkBar__links-item">
          <a href="http://ilaw.mn/" target="_blank" rel="noopener noreferrer">
            Цахим хуульч
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="http://prokuror.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Монгол улсын ерөнхий прокурорын газар
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="https://mohs.gov.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Эрүүл мэндийн яам
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="https://nema.gov.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Онцгой байдлын ерөнхий газар
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="https://burtgel.gov.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Улсын бүртгэлийн ерөнхий газар
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="https://e-mongolia.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Цахим үйлчилгээний нэгдсэн портал
          </a>
        </div>

        <div className="linkBar__links-item">
          <a
            href="https://legalinfo.mn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Хуулийн нэгдсэн портал сайт
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinkBar;
