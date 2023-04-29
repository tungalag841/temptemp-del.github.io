import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { useGetBloggerQuery } from "../../store/ApiSlice";
import "./index.css";
import Spinner from "../UI/Spinner/Spinner";

export default function Blogger (){
  const {data, isSuccess} = useGetBloggerQuery()
  return (
    <>
    <div className="container">
    <div className="title">
       <p>Нийтлэгч</p>
      {blogger[0].lastname}
     <Row>
        <Col md="3" id="col">
          <div
              style={{
                borderBottom: "6px solid lightgray",
                width: "200%",
                marginTop: "0.25rem",
              }}
            ></div>
          </Col>
          <Col md="9" id="col">
            <div
              style={{
                borderBottom: "1px solid lightgray",
                marginBottom: "10px",
                height: "0.625rem",
                width: "100%",
              }}
            ></div>
          </Col>
        </Row>
        <Row>
          <center></center>
        </Row>
      </div>
      <ul></ul>
    </div>

    </>
  
  );
}
// class Blogger extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogger: {},
//       isLoaded: false,
//     };
//   }

//   componentWillMount() {
//     fetch(`https://bestinfo.mn/news/blogger`)
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           isLoaded: true,
//           blogger: json.blogger,
//         });
//       });
//   }

//   render() {
//     var { isLoaded, blogger } = this.state;

//     if (!isLoaded) {
//       return <Spinner />;
//     }

   
//   }
// }
// ``;
// export default Blogger;
