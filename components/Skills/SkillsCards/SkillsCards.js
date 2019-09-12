import React from "react";
import { MDBCard, MDBProgress, MDBAnimation } from "mdbreact";


const CardExample = (props) => {
  console.log(props);
  let skillLabels = props.cardData.map(skillObj => {
    //Control card margin here
    return <MDBCard color="white" onClick={() => props.updateFocus(skillObj)} key={skillObj.value} style={{width: "100%", height:"80px", alignItems: "left"}} className="m-1 px-2">
    <div className="p-3">
    <h3>{skillObj.label} </h3>
    <MDBProgress material value={skillObj.levelValue * 10} className="my-s" />
      </div>
    </MDBCard>;
  })
  console.log(skillLabels);
  return (

    <MDBAnimation reveal type="slideInRight" duration="1s">
      <div className="d-flex" style={{flexWrap: "wrap"}}>
        {skillLabels}
        
      </div>
      </MDBAnimation>
  );
}

export default CardExample;