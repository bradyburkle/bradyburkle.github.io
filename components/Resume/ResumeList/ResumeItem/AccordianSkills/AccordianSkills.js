import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBView,
  MDBCardHeader,
  MDBIcon
} from "mdbreact";

class CollapsePage extends Component {
  state = {
    collapseID: "collapse0"
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const { collapseID } = this.state;

    return (
      <div>
        {this.props.data.map((el, index) => {
          
          return (
            <MDBContainer>
              <MDBContainer className="accordion md-accordion accordion-1">
                <MDBCard style={{ backgroundColor: "transparent" }}>
                  <MDBCardHeader
                    onClick={this.toggleCollapse(index)}
                    className="text-uppercase default pb-0 lighten-3"
                  >
                    <MDBCol size="6" className="d-flex">
                      <MDBIcon icon="plus" />
                      {el}
                      <hr />
                    </MDBCol>
                  </MDBCardHeader>
                  <MDBCollapse id={index} isOpen={collapseID}>
                    <MDBCardBody>
                      <MDBRow className="my-2">
                        <MDBCol md="8">{this.props.bullets[index]}</MDBCol>
                        <MDBCol md="4" className="mt-1 pt-2">
                          <MDBView className="z-depth-1">
                            <MDBCardImage
                              className="img-fluid z-depth-1"
                              src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                              alt=""
                            />
                          </MDBView>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCollapse>
                </MDBCard>
              </MDBContainer>
            </MDBContainer>
          );
        })}
      </div>
    );
  }
}

export default CollapsePage;

// <MDBCard style={{ backgroundColor: "transparent" }}>
// <MDBCollapse
//   onClick={this.toggleCollapse("collapse2")}
//   className="text-uppercase blue lighten-3 z-depth-1"
// >
//   <span className="white-text font-weight-bold">
//     I am the second title of accordion
//   </span>
// </MDBCollapse>
// <MDBCollapse id="collapse2" isOpen={collapseID}>
//   <MDBCardBody>
//     <MDBRow className="my-4">
//       <MDBCol md="8">
//         <h2 className="font-weight-bold mb-3 black-text">
//           Hi! I am the second one.
//         </h2>
//         <p></p>
//         <p className="mb-0 ">another placeholder text</p>
//       </MDBCol>
//       <MDBCol md="4" className="mt-3 pt-2">
//         <MDBView className="z-depth-1">
//           <MDBCardImage
//             className="img-fluid"
//             src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
//             alt=""
//           />
//         </MDBView>
//       </MDBCol>
//     </MDBRow>
//   </MDBCardBody>
// </MDBCollapse>
// </MDBCard>

// <MDBCard style={{ backgroundColor: "transparent" }}>
// <MDBCollapse
//   onClick={this.toggleCollapse("collapse3")}
//   className="text-uppercase blue lighten-3 z-depth-1"
// >
//   <span className="white-text font-weight-bold">
//     I am the third title of accordion
//   </span>
// </MDBCollapse>
// <MDBCollapse id="collapse3" isOpen={collapseID}>
//   <MDBCardBody>
//     <MDBRow className="my-4">
//       <MDBCol md="8">
//         <h2 className="font-weight-bold mb-3 black-text">
//           Hi! I am the third one.
//         </h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//           sed do eiusmod tempor incididunt ut labore et dolore magna
//           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//           ullamco laboris
//         </p>
//         <p className="mb-0 ">
//           Duis aute irure dolor in reprehenderit in voluptate velit
//           esse cillum dolore eu fugiat nulla pariatur.
//         </p>
//       </MDBCol>
//       <MDBCol md="4" className="mt-3 pt-2">
//         <MDBView className="z-depth-1">
//           <MDBCardImage
//             className="img-fluid"
//             src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
//             alt=""
//           />
//         </MDBView>
//       </MDBCol>
//     </MDBRow>
//   </MDBCardBody>
// </MDBCollapse>
// </MDBCard>
