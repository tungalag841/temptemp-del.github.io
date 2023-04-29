import React from "react";
import Card from "../../components/frontEnd/body/card";
import Card2 from "../../components/frontEnd/body/card2";
import Card4 from "../../components/frontEnd/body/card4";
import Card5 from "../../components/frontEnd/body/card5";
import Spinner from "../../components/frontEnd/UI/Spinner/Spinner";
import NewsSide from "../../components/frontEnd/newsSide/NewsSide";
import LinkBar from "../../components/frontEnd/linkBar/LinkBar";
import "moment/locale/mn";
import { useGetNewsAllQuery, useGetVideosQuery,useGetBannerAllQuery } from "../../store/frontEndApiSlice";
import {BodyBanner, SideBanner} from "../../components/frontEnd/banner/Banners";
import "./home.css";

const Home = () => {

const {data, isSuccess} = useGetNewsAllQuery()
const {data: getVideos} = useGetVideosQuery()
const {data: getBannerAll, isSuccess: bannerAllIsSuccess} = useGetBannerAllQuery()
return (
  <>
  {isSuccess ? (<div className="master">
    <div className="masterMain">
      <div className="linkBar">
        <LinkBar />
      </div>

      <main className="mainContent">
        <div className="body">
          <div className="body__news">
            <div className="body__news_content">
              <div className="body__news_content-boy">
                <div className="body__news-special">
                  <div className="body__news-special-up">                 
                     <a href={"/detail/" + data.medee[0].id}>
                     <Card title={data.medee[0].title} img={data.medee[0].image} />
                     </a>
                  </div>

                  <div className="body__news-special-down">
                    <div className="body__news-special-down-item">
                      <a href={"/detail/" + data.medee[1].id}>
                        <Card title={data.medee[1].title} img={data.medee[1].image} />
                      </a>
                    </div>

                    <div className="body__news-special-down-item">
                      <a href={"/detail/" + data.medee[2].id}>
                        <Card title={data.medee[2].title} img={data.medee[2].image} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="body__news-moreNews">
                  <a className="body__detail" href={"/detail/" + data.news[0].id}>
                    <Card2
                      category={data.news[0].categoryname}
                      title={data.news[0].title}
                      img={data.news[0].image}
                      date={data.news[0].date}
                    />
                  </a>
                  <a className="body__detail" href={"/detail/" + data.news[1].id}>
                    <Card2
                      category={data.news[1].categoryname}
                      title={data.news[1].title}
                      img={data.news[1].image}
                      date={data.news[1].date}
                    />
                  </a>
                  <a className="body__detail" href={"/detail/" + data.news[2].id}>
                    <Card2
                      category={data.news[2].categoryname}
                      title={data.news[2].title}
                      img={data.news[2].image}
                      date={data.news[2].date}
                    />
                  </a>
                  <a className="body__detail" href={"/detail/" + data.news[3].id}>
                    <Card2
                      category={data.news[3].categoryname}
                      title={data.news[3].title}
                      img={data.news[3].image}
                      date={data.news[3].date}
                    />
                  </a>
                  <a className="body__detail" href={"/detail/" + data.news[4].id}>
                    <Card2
                      category={data.news[4].categoryname}
                      title={data.news[4].title}
                      img={data.news[4].image}
                      date={data.news[4].date}
                    />
                  </a>
                </div>
              </div>

              {bannerAllIsSuccess ? <BodyBanner banner={getBannerAll.bannerB1[0].image}/> : (<center>
            <h3>B1-940X150</h3>
           </center>)}
            </div>

            <div className="body__news_side">
             {isSuccess ? <NewsSide data={data}/> : <SideBanner/>}
            </div>
            
          </div>

          <div className="body__other">
            <div className="body__other-item">
              <Card4 title={"ОНЦЛОХ МЭДЭЭ"} medee={data.medee} />
            </div>
            <div className="body__other-item">
              <Card4 title={"НИЙТЛЭЛ"} medee={data.health} />
            </div>
            <div className="body__other-item">
              <Card4 title={"ӨМГӨӨЛӨГЧИЙН ЗӨВЛӨГӨӨ"} medee={data.law} />
            </div>
            <div className="body__other-item">
              <Card4 title={"УТГА ЗОХИОЛ"} medee={data.lite} />
            </div>
          </div>
          {bannerAllIsSuccess ? <BodyBanner banner={getBannerAll.bannerB2[0].image}/> : (<center> <h3>B2-940X150</h3></center>)}

          <div className="body__portrait">
            <div className="body__portrait-title">
              <h3>Хөрөг найруулал</h3>
              <div className="body__portrait-title_line" />
            </div>

            <div className="body__portrait-body">
              <div className="body__portrait-body_item">
                <a href={"/detail/" + data.horog[0].id}>
                  <Card5
                    title={data.horog[0].title}
                    img={data.horog[0].image}
                    date={data.horog[0].date}
                    titile={data.horog[0].title}
                  />
                </a>
              </div>
              <div className="body__portrait-body_item">
                <a href={"/detail/" + data.horog[1].id}>
                  <Card5
                    title={data.horog[1].title}
                    img={data.horog[1].image}
                    date={data.horog[1].date}
                    titile={data.horog[1].title}
                  />
                </a>
              </div>
              <div className="body__portrait-body_item">
                <a href={"/detail/" + data.horog[2].id}>
                  <Card5
                    title={data.horog[2].title}
                    img={data.horog[2].image}
                    date={data.horog[2].date}
                    titile={data.horog[2].title}
                  />
                </a>
              </div>
              <div className="body__portrait-body_item">
                <a href={"/detail/" + data.horog[3].id}>
                  <Card5
                    title={data.horog[3].title}
                    img={data.horog[3].image}
                    date={data.horog[3].date}
                    titile={data.horog[3].title}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="body__videos">
            <div className="body__videos-title">
              <h3>Видео</h3>
              <div className="body__videos-title_line" />
            </div>

            <div className="body__videos-body">
              <div className="body__videos-body_item">
                <iframe
                  title="Empty"
                  src={getVideos?.videos[0].text.split('watch?v=')[0]+'/embed/'+getVideos?.videos[0].text.split('=')[1]}
                  height="250px"
                  width="250px"
                />
              </div>
              <div className="body__videos-body_item">
                <iframe
                  className="body___video_iframe"
                  title="Empty"
                  src={getVideos?.videos[1].text.split('watch?v=')[0]+'/embed/'+getVideos?.videos[1].text.split('=')[1]}
                  height="250px"
                  width="250px"
                />
              </div>
              <div className="body__videos-body_item">
                <iframe
                  title="Empty"
                  src={getVideos?.videos[2].text.split('watch?v=')[0]+'/embed/'+getVideos?.videos[2].text.split('=')[1]}
                  height="250px"
                  width="250px"
                />
              </div>
              <div className="body__videos-body_item">
                <iframe
                  title="Empty"
                  src={getVideos?.videos[3].text.split('watch?v=')[0]+'/embed/'+getVideos?.videos[3].text.split('=')[1]}
                  height="250px"
                  width="250px"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {bannerAllIsSuccess 
            ? <center><SideBanner banner={{banner1:getBannerAll.bannerB3[0].image,banner2:getBannerAll.bannerB4[0].image}}/></center>
            : ( <center><h3>B3-160X500</h3></center> )
            }
    </div>
  </div>):<Spinner/>}
  </>
  
);
}


export default Home;