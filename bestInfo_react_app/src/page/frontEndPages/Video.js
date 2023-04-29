import React, { Component } from "react";
import Spinner from "../../components/frontEnd/UI/Spinner/Spinner";
import { Row, Col } from "reactstrap";
import "./index.css";
import moment from "moment";
import "moment/locale/mn";
import Footer from "../../components/frontEnd/footer/Footer.js";
import { GoCalendar } from "react-icons/go";
import NewsSide from "../../components/frontEnd/newsSide/NewsSide";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [],
      name: "",
      page: "",
      isLoaded: false,
      btn: [],
      pnp: 1,
      isLoading: false,
      banner: "",
      backcolor: `${document.getElementById("1")}`,
    };
    this.getData = this.getData.bind(this);
    this.btnClick = this.getData.bind(this);
  }

  componentDidMount() {
    // const { id } = this.props.match.params;
    fetch(`https://bestinfo.mn/news/VideoAll/${1}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          video: json.video,
          page: json.page,
        });
      })
      .then((json) => {
        var a = [];
        for (var i = 1; this.state.page >= i; i++) {
          a[i - 1] = i;
        }
        const id = "C";
        fetch(`https://bestinfo.mn/news/banners/${id}`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              banner: json.banner,
              isLoading: true,
            });
          });
        this.setState({
          btn: a,
        });
        var property = document.getElementById(1);
        this.setState({ backcolor: document.getElementById(1) });
        property.style.backgroundColor = "#ffcce9";
      });
  }

  getData(btn, color) {
    var property = document.getElementById(btn);

    if (this.state.backcolor !== "null" && property !== null) {
      var property1 = this.state.backcolor;
      property1.style.backgroundColor = "white";
    }

    fetch(`https://bestinfo.mn/news/VideoAll/${1}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          video: json.video,
          page: json.page,
        });
      })
      .then((json) => {
        var a = [];
        for (var i = 1; this.state.page >= i; i++) {
          a[i - 1] = i;
        }
        this.setState({
          btn: a,
        });
        var property = document.getElementById(1);
        this.setState({ backcolor: document.getElementById(1) });
        property.style.backgroundColor = "#ffcce9";
      });
  }

  render() {
    const banners = [];
    var { isLoaded, video, btn, pnp, isLoading, banner } = this.state;
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
            alt="VideoBanner"
          />
        );
      }

      return (
        <div>
          <Row>
            <Col md="7">
              <Row>
                <Col
                  className="hide"
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

              <h1 style={{ marginLeft: "6%" }}>Бичлэг</h1>
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
              <ul>
                {video.map((video) => (
                  <li key={video.id} style={{ listStyle: "none" }}>
                    <Row className="categoryPhone1">
                      <Col md="7">
                        <iframe title="Empty" src={video.text}></iframe>
                      </Col>
                      <Col md="5">
                        <h4>{video.title}</h4>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          <GoCalendar size="13px" />{" "}
                          {moment(
                            moment(video.date)
                              .utc()
                              .format("YYYY-MM-DD")
                              .toString()
                          ).toNow(true)}{" "}
                          өмнө
                        </div>
                      </Col>
                    </Row>

                    <hr style={{ color: "lightgray" }} />
                  </li>
                ))}
                <li style={{ listStyle: "none" }}>
                  <center>
                    <div className="pagination">
                      <a onClick={this.getData.bind(this, pnp - 1, "#ffcce9")}>
                        &laquo;
                      </a>
                      {btn.map((btn) =>
                        (<a
                          key="1"
                          id="1"
                          style={{ backgroundColor: "#ffcce9" }}
                          onClick={this.getData.bind(this, 1, "#ffcce9")}
                        >
                          12
                        </a>)(
                          <a
                            key={btn}
                            id={btn}
                            onClick={this.getData.bind(this, btn, "#ffcce9")}
                          >
                            {btn}
                          </a>
                        )
                      )}
                      <a onClick={this.getData.bind(this, pnp + 1, "#ffcce9")}>
                        &raquo;
                      </a>
                    </div>
                  </center>
                </li>
                {}
              </ul>
            </Col>
            <Col md="2">
              <NewsSide />
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

export default Video;
