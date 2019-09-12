import React from "react";
import { MDBTimeline, MDBTimelineStep, MDBIcon, MDBContainer } from "mdbreact";

const TimelinePage = () => {
  return (
    <MDBContainer>
    <MDBTimeline>
      <MDBTimelineStep icon="check">
        <h4 className="font-weight-bold">Anderson Hill Capital LLC</h4>
        <p className="text-muted mt-3">
          <MDBIcon icon="clock" aria-hidden="true" /> 2018-2019
        </p>
        Consulted and what have you.
      </MDBTimelineStep>
      <MDBTimelineStep inverted color="warning-color" icon="credit-card">
        <h4 className="font-weight-bold">Northern Trust Hedge Fund Services</h4>
Glad you asked.  Oh, you didnt?  Ok well .... 
      </MDBTimelineStep>
      <MDBTimelineStep icon="credit-card" color="danger-color">
        <h4 className="font-weight-bold">Envestnet</h4>
Cheng Yeh was my boss
      </MDBTimelineStep>
      <MDBTimelineStep inverted icon="save" color="info-color">
        <h4 className="font-weight-bold">Ohio State University</h4>
Drive drive on down the field men of the scarlet and gray.
      </MDBTimelineStep>
      <MDBTimelineStep icon="thumbs-up" color="success-color">
        <h4 className="font-weight-bold">West Geauga High School</h4>
Everybody do the Wolverine rumble.
      </MDBTimelineStep>
    </MDBTimeline>
    </MDBContainer>
  );
};

export default TimelinePage;