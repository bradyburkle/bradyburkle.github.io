import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBCardFooter,
  MDBCardImage,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader
} from "mdbreact";
import AccordianSkills from "./AccordianSkills/AccordianSkills";

const PanelPage = (props) => {
  console.log(props);
  
  return (
    <MDBContainer style={{ textAlign: "left" }}>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCol size="6">


              
                <MDBCardImage
                  className="img-fluid"
                  src={props.info.img}
                  style={{ width: "50%" }}
                  alt={props.info.alt}
                  waves
                />
                <p className="p-responsive">{props.info.alt}</p>
            </MDBCol>

            <MDBCol>
              <strong>
                <p>{props.info.role}</p>
              </strong>
              <p>
                {props.info.yearStart} - {props.info.yearEnd}{" "}
              </p>
              <MDBCol>
                <p>{props.info.summary}</p>
              </MDBCol>
              <hr className="my-2" />
              <div></div>

              <AccordianSkills data={props.data} bullets={props.bullets} />
            </MDBCol>

            {/* <MDBBtn color={props.info.color} href={props.info.linkRef} size="md">
              More Details
            </MDBBtn> */}
            <MDBCardFooter>
              <MDBRow>
                <MDBCol>
                  {props.info.tags.map(tag => (
                    <MDBBadge className="mr-2" pill color={props.info.tagColor}>
                      {" "}
                      {tag}{" "}
                    </MDBBadge>
                  ))}
                </MDBCol>
              </MDBRow>
            </MDBCardFooter>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PanelPage;
