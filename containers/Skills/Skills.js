import React, { Component } from "react";

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
import {
  programSkills,
  softwareSkills,
  financeSkills
} from "../../data/allSkills";
import StickyFocus from "../../components/Skills/StickyFocus/StickyFocus";

class SkillsMain extends Component {
  state = {
    showSkill: "default",
    levelLabel: "",
    summaryInfo: "",
    showCategory: "Programming"
  };

  changeCategoryHandler(category) {
    console.log(category);
    let newState = { ...this.state };
    newState.showCategory = category;
    this.setState(newState);
  }

  changeSkillHandler(skill) {
    console.log(skill);
    let newState = { ...this.state };
    newState.showSkill = skill.label;
    newState.levelLabel = skill.levelLabel;
    newState.summaryInfo = skill.summaryInfo;
    newState.imgSrc = skill.imgSrc;
    newState.startYear = skill.startYear;
    newState.endYear = skill.endYear;
    newState.how = skill.how;
    newState.when = skill.when;
    newState.why = skill.why;

    this.setState({
      showSkill: newState.showSkill,
      levelLabel: newState.levelLabel,
      summaryInfo: newState.summaryInfo,
      imgSrc: newState.imgSrc,
      startYear: newState.startYear,
      endYear: newState.endYear,
      how: newState.how,
      when: newState.when,
      why: newState.why
    });
  }

  render() {
    let renderItems = null;
    renderItems =
      this.state.showCategory === "Programming"
        ? programSkills
        : this.state.showCategory === "Software"
        ? softwareSkills
        : financeSkills;
    console.log(this.state);

    let codeStatus,
      softwareStatus,
      financeStatus = null;
    if (this.state.showCategory === "Programming") {
      console.log("yes in the if");
      softwareStatus = true;
      financeStatus = true;
      codeStatus = false;
    } else if (this.state.showCategory === "Software") {
      softwareStatus = false;
      financeStatus = true;
      codeStatus = true;
    } else if (this.state.showCategory === "Finance") {
      softwareStatus = true;
      financeStatus = false;
      codeStatus = true;
    }
    softwareStatus = false;
    financeStatus = false;
    codeStatus = false;
    return (
      <MDBContainer>
       <StickyFocus renderItems={renderItems} changeSkillHandler={this.changeSkillHandler.bind(this)} changeCategoryHandler={this.changeCategoryHandler.bind(this)} state={this.state} />
      </MDBContainer>
    );
  }
}

export default SkillsMain;
