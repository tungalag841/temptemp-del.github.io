import React, { Component } from "react";
import renderHTML from "react-render-html";
import Spinner from "../../components/frontEnd/UI/Spinner/Spinner";
import Card1 from "../../components/frontEnd/body/card1";
import axios from "axios";
import { Row, Col } from "reactstrap";
import "./index.css";
import moment from "moment";
import "moment/locale/mn";
import Footer from "../../components/frontEnd/footer/Footer.js";
import { GoCalendar } from "react-icons/go";
import newsSide from "../../components/frontEnd/newsSide/NewsSide";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [],
      name: "",
      page: "",
      search: [],
      isLoaded: false,
      btn: [],
      pnp: 1,
      isLoading: false,
      banner: "",
      backcolor: `${document.getElementById("1")}`,
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .post(`https://bestinfo.mn/news/search`, { id: `${id}` })
      .then((res) => {
        this.setState({
          search: res.data.search,
          isLoaded: true,
        });
      })
      .then(function (response) {
      ;
      })
      .catch(function (error) {})
      .then(() => {
        const id = "C";
        fetch(`https://bestinfo.mn/news/banners/${id}`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              banner: json.banner,
              isLoading: true,
              isLoaded: true,
            });
          });
      });
  }

  render() {
    const banners = [];
    var { isLoaded, search, isLoading, banner } = this.state;
    if (!isLoaded) {
      return <Spinner />;
    } else {
      if (isLoading === false) {
        banners[0] = (
          <center>
            <h3>C-700X90</h3>
          </center>
        );
      } else {
        banners[0] = (
          <img
            src={banner[0].image}
            height="90px"
            width="700px"
            alt="SearchBanner"
          />
        );
      }
      if (search.length === 0) {
        var a = (
          <center>
            <h1 style={{ height: "200px" }}>Илэрц олдсонгүй</h1>
          </center>
        );
      } else {
        let a = (
          <ul>
            {search.map((search) => (
              <li key={search.id} style={{ listStyle: "none" }}>
                <Row className='categoryPhone'>
                  <a href={"/search/" + search.id}>
                    <Col md="5">
                      <Card1 title={search.title} img={search.image} />
                    </Col>
                    <Col md="7">
                      <h4>
                        {search.title}
                        {search.categoryname}
                      </h4>
                      {search.category}
                      <div style={{ fontSize: "14px", color: "gray" }}>
                        <GoCalendar size="13px" />{" "}
                        {moment(
                          moment(search.date)
                            .utc()
                            .format("YYYY-MM-DD")
                            .toString()
                        ).toNow(true)}{" "}
                        өмнө
                      </div>

                      <div>{renderHTML(search.text)}</div>
                    </Col>
                  </a>
                </Row>

                <hr style={{ color: "lightgray" }} />
              </li>
            ))}
          </ul>
        );
      }

      return (
        <div>
          <Row>
            <Col md="7">
              <Row>
                <Col
                  className='hide'
                  md="12"
                  id="col"
                  style={{
                    margin: "0",
                    marginLeft: "2%",
                    padding: "0",
                    width: "96%",
                    height: "100px",
                    marginTop: "0.9375rem",
                  }}
                >
                  <center>{banners[0]}</center>
                </Col>
              </Row>

              <h1 style={{ marginLeft: "6%" }}>Хайлтын илэрц</h1>
              <Row>
                <Col md="12" id="col">
                  <div
                    style={{
                      borderBottom: "4px solid #5C325F",
                      width: "100%",
                      marginTop: "0.25rem",
                    }}
                  ></div>
                </Col>
              </Row>
              <br />
              {a}
            </Col>
            <Col md="2">
              <newsSide />
            </Col>
            <Col md="3"></Col>
          </Row>
          <Row style={{ marginLeft: "-0.9375rem", marginRight: "0", padding: "0" }}>
            <Col md="11" id="col" style={{ marginRight: "0", padding: "0" }}>
              <Footer />
            </Col>
            <Col
              md="1"
              id="col"
              style={{ marginRight: "0", padding: "0" }}
            ></Col>
          </Row>
        </div>
      );
    }
  }
}

export default Search;
