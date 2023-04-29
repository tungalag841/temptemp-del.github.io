import React from "react";
import { MdAccessTime } from "react-icons/md";
import Card3 from "./card3";
import LinesEllipsis from "react-lines-ellipsis";
import moment from "moment";
import "moment/locale/mn";

import "./cards.css";

const Box4 = ({title, medee, health, law, lite}) => {
  return (
    <div className="otherNews">
      <div className="otherNews__title">
        <h5>{title}</h5>

        <div className="otherNews__title-line">
          <div className="otherNews__title-line-1">
            <div className="otherNews__title-line-1_1" />
            <div className="otherNews__title-line-1_2" />
          </div>
          <div className="otherNews__title-line-2" />
        </div>
      </div>

      <div className="otherNews__items">
        <div className="otherNews__items-first">
          <div className="otherNews__items-first-img">
            <Card3 title={medee[0].title }img={medee[0].image} date={medee[0].date} />
          </div>

          <div className="otherNews__items-first-body">
            <div className="otherNews__items-first-body-title">
              <a href={"/detail/" + medee[0].id}>
                <LinesEllipsis
                  text={medee[0].title}
                  maxLine="3"
                  ellipsis=""
                  // trimRight
                  basedOn="letters"
                />
              </a>
            </div>

            <div className="otherNews__items-first-body-date">
              <MdAccessTime size="11px" />
              {" " +
                moment(
                  moment(medee[0].date)
                    .tz("Asia/Ulaanbaatar")
                    .format("YYYY-MM-DD[T]HH:mm:ss")
                    .toString()
                ).toNow(true) +
                " өмнө"}
            </div>
          </div>
        </div>

        <div className="otherNews__items-item">
          <div className="otherNews__items-item-title">
            <a href={"/detail/" + medee[1].id}>
              <LinesEllipsis
                text={medee[1].title}
                maxLine="3"
                basedOn="letters"
              />
            </a>
          </div>

          <div className="otherNews__items-item-date">
            <MdAccessTime size="11px" />
            {" " +
              moment(
                moment(medee[1].date)
                  .tz("Asia/Ulaanbaatar")
                  .format("YYYY-MM-DD[T]HH:mm:ss")
                  .toString()
              ).toNow(true) +
              " өмнө"}
          </div>
        </div>

        <div className="otherNews__items-item">
          <div className="otherNews__items-item-title">
            <a href={"/detail/" + medee[2].id}>
              <LinesEllipsis
                text={medee[2].title}
                maxLine="3"
                basedOn="letters"
              />
            </a>
          </div>

          <div className="otherNews__items-item-date">
            <MdAccessTime size="11px" />
            {" " +
              moment(
                moment(medee[2].date)
                  .tz("Asia/Ulaanbaatar")
                  .format("YYYY-MM-DD[T]HH:mm:ss")
                  .toString()
              ).toNow(true) +
              " өмнө"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box4;
