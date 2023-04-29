import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GoCalendar } from "react-icons/go";
import renderHTML from "react-render-html";
import Spinner from "../../components/frontEnd/UI/Spinner/Spinner";
import Card1 from "../../components/frontEnd/body/card1";
import NewsSide from "../../components/frontEnd/newsSide/NewsSide";
import moment from "moment";
import "moment/locale/mn";
import { useGetCategoryByIdQuery, useGetNewsAllQuery,useGetBannerAllQuery } from "../../store/frontEndApiSlice";
import "./list.css";

export default function List() {
  const { id } = useParams()
  const [pageNum, setPageNum] = useState(1)
  const { data } = useGetCategoryByIdQuery({ id: id, id1: pageNum })
  const {data: getNewsAll, isSuccess} = useGetNewsAllQuery()
  

  let content;
  
  if (data && data.news) {
    content =
      (<div className="category">
        <div className="category__content">
          {data.news.map((item, index) => (
            <div key={index} >
              <div className="category__items">
                <div className="category__items-img">
                  <Card1 title={item.title} img={item.image} />
                </div>
                <div className="category__items-title">
                  <a href={"/detail/" + item.id}>
                    <h4>{item.title}</h4>
                  </a>
                  {item.category}
                  <div style={{ fontSize: "14px", color: "gray" }}>
                    <GoCalendar size="13px" />
                    {` ${moment(
                      moment(item.date)
                        .utc()
                        .format("YYYY-MM-DD")
                        .toString()
                    ).toNow(true) + " өмнө"
                      }`}
                  </div>

                  <div className="category__items-title-text">
                    {/* {renderHTML(item.text.split('. ')[0]+".")} */}
                    {renderHTML(item.text.substring(0,250))}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}

          <div className="category__pagination">
            <button className="pagination__btn" onClick={() => setPageNum((prev) => Math.max(prev -= 1), 1)}>
              &laquo; Өмнөх
            </button>

            <button className="pagination__btn" onClick={() => setPageNum((prev) => prev += 1)}>
              Дараах &raquo;
            </button>
          </div>
        </div>

        <div className="category__sideNews">
      {isSuccess ? <NewsSide data={getNewsAll}/> : null}
    </div>
      </div>)

  } else {
    content = (<Spinner />)
  }

  return (
    <div>
      {content}
    </div>
  )
}

