import React from "react";
import { 
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBBtn,
    MDBIcon,
    MDBAnimation,
    MDBSticky,
    MDBStickyContent
  } from "mdbreact";
  import SkillsCards from "../SkillsCards/SkillsCards";

const StickyPage = (props) => {
    console.log(props);
   const { showSkill } = props.state;

  return (
      <MDBStickyContent>
        <MDBSticky>
          {({ style }, showSkill) => {
            return (
              <MDBRow>
                {showSkill === "default" ? (
                  <MDBCol
                    className="mt-5 p-3"
                    style={{ backgroundColor: "#ffffff", textAlign: "left" }}
                    size="7"
                  >
                  </MDBCol>
                ) : (
                  <MDBCol
                    className="mt-5 p-3"
                    style={{ backgroundColor: "#ffffff", textAlign: "left" }}
                    size="7"
                  >
                    <MDBCol size="10" className="d-flex">
                      <img
                        alt=""
                        className="img-fluid rounded-circle"
                        src={props.state.imgSrc}
                        style={{ width: "25%", height: "25%" }}
                      />{" "}
                      {/* Image currently distorted on window size change (use win.height? / width?) */}
                      <div className="mt-5 p-3" style={{ textAlign: "left" }}>
                        <h1>
                          <strong>{showSkill}</strong>
                        </h1>
                      </div>
                    </MDBCol>

                    <hr />
                    <div className="p-3">
                      <strong>Level:</strong> {props.state.levelLabel}
                    </div>
                    <div className="p-3">
                      <strong>Started In: </strong>
                      {props.state.startYear}
                    </div>
                    <div className="p-3">
                      {props.state.endYear - props.state.startYear} Years
                      Experience
                    </div>
                    <hr />
                    <div className="p-3" style={{ textAlign: "left" }}>
                      <strong>Summary:</strong> {props.state.summaryInfo}
                    </div>
                    <hr />
                    <div className="p-3" style={{ textAlign: "left" }}>
                      <strong>Used In Roles:</strong>{" "}
                    </div>
                    <hr />
                    <div className="p-3" style={{ textAlign: "left" }}>
                      <strong>Why I Learned :</strong> {props.state.why}{" "}
                    </div>
                    <div className="p-3" style={{ textAlign: "left" }}>
                      <strong>How I Learned :</strong> {props.state.how}{" "}
                    </div>
                    <div className="p-3" style={{ textAlign: "left" }}>
                      <strong>My Take:</strong>{" "}
                    </div>

                    <div className="p-3" style={{ textAlign: "left" }}>
                      <strong>Code Snips and Screenshots:</strong>{" "}
                    </div>
                  </MDBCol>
                )}

                <MDBCol size="5">
                  <MDBCol className="p-2">
                    <MDBBtn
                      title="Programming"
                      tag="a"
                      floating
                      outline={props.codeStatus}
                      color="primary"
                      className="m-2 mt-5"
                      onClick={() => props.changeCategoryHandler("Programming")}
                    >
                      <MDBIcon icon="code" />
                    </MDBBtn>
                    <MDBBtn
                      title="Software"
                      tag="a"
                      floating
                      outline={props.softwareStatsoftwareStatus}
                      color="default"
                      className="m-2 mt-5"
                      onClick={() => props.changeCategoryHandler("Software")}
                    >
                      <MDBIcon icon="laptop" />
                    </MDBBtn>
                    <MDBBtn
                      title="Finance"
                      tag="a"
                      floating
                      outline={props.financeStatus}
                      color="green"
                      className="m-2 mt-5"
                      onClick={() => props.changeCategoryHandler("Finance")}
                    >
                      <MDBIcon icon="money-bill-wave" />
                    </MDBBtn>
                  </MDBCol>
                  <div>
                    <h3>{props.state.showCategory}</h3>
                  </div>
                  <MDBAnimation reveal type="slideInRight" duration="1s">
                    <SkillsCards
                      cardData={props.renderItems}
                      updateFocus={props.changeSkillHandler}
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            );
          }}
        </MDBSticky>
      </MDBStickyContent>
  );
};

export default StickyPage;
