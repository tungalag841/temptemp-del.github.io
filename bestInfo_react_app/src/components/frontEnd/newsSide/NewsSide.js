import React from "react";
import { Row } from "reactstrap";
import { MdAccessTime } from "react-icons/md";
import moment from "moment";
import "moment/locale/mn";
import { useGetBannerAllQuery } from "../../../store/frontEndApiSlice";
import "./newsSide.css";


const NewsSide = ({data}) => {
const {data: getBannerAll, isSuccess: bannerAllIsSuccess} = useGetBannerAllQuery()
let banners
// if(bannerAllIsSuccess){
//   if(getBannerAll.bannerG){
//     if(getBannerAll.bannerG[0]){
//      return banners = <img style={{height: "auto", width: "100%"}}src={getBannerAll.bannerG[0].image}/>
//     }
//   }else{
//     return banners = <h1>Hello</h1>
//   }
// }
 return (
  <>
    <div className="container-news-side">
    <div className="row" style={{padding: "0px", margin: "0px 0px 5px"}}>
      {/* <div className="banner-all">{banners}</div> */}
      {/* {bannerAllIsSuccess 
      ? getBannerAll 
      : <img style={{height: "auto", width: "100%"}}src={getBannerAll.bannerG[0].image}/>
      ? <ceter><h1>BG-Banner</h1></ceter>
      :null
      } */}
    </div>
    <Row
      style={{
        backgroundColor: "#FFCCE9",
        height: "auto",
        width: "100%",
        padding: "0",
        margin: "0",
      }}
    >
      <div
        style={{
          backgroundColor: "#5C325F",
          color: "white",
          padding: "0.625rem",
        }}
      >
        <center style={{fontSize: "15px"}}>ШИНЭ МЭДЭЭ</center>
      </div>
      <div className="scroller">
        <ul style={{ padding: 0, height: "605px", width: "100%" }}>
          {data.news.map((news) => (
            <li
              key={news.id}
              style={{
                borderBottom: "0.5px solid gray",
                listStyle: "none",
              }}
            >
              <a
                href={"/detail/" + news.id}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    paddingBottom: "0.3125rem",
                    paddingLeft: "0.625rem",
                  }}
                >
                  {(news.title)}
                </div>
              </a>
              <div style={{ fontSize: "11px", marginLeft: "5%" }}>
                <MdAccessTime size="11px" />{" "}
                {moment(
                  moment(news.date)
                    .tz("Asia/Ulaanbaatar")
                    .format("YYYY-MM-DD[T]HH:mm:ss")
                    .toString()
                ).fromNow()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Row>
  </div>
  </>
);
}
export default NewsSide;
