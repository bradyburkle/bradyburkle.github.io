import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBRow,
  MDBCol
} from "mdbreact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyName from "../MyName/MyName";
import ResumeList from "../../Resume/ResumeList/ResumeList";
import About from "../../About/About";
import Skills from "../../../containers/Skills/Skills";

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      activeLink: ""
    };
    this.onClick = this.onClick.bind(this);
    this.handleActiveItemUpdate = this.handleActiveItemUpdate.bind(this);
  }

  handleActiveItemUpdate(clickedItem) {
    this.setState({
      activeLink: clickedItem
    });
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    let aboutActive = false;
    let resumeActive = false;
    let skillsActive = false;
    let storyActive = false;
    let contactActive = false;

    switch (this.state.activeLink) {
      case "about":
        aboutActive = true;
        resumeActive = false;
        skillsActive = false;
        storyActive = false;
        contactActive = false;
        break;
      case "resume":
        aboutActive = false;
        resumeActive = true;
        skillsActive = false;
        storyActive = false;
        contactActive = false;
        break;
      case "skills":
        aboutActive = false;
        resumeActive = false;
        skillsActive = true;
        storyActive = false;
        contactActive = false;
        break;
      case "story":
        aboutActive = false;
        resumeActive = false;
        skillsActive = false;
        storyActive = true;
        contactActive = false;
        break;
      case "contact":
        aboutActive = false;
        resumeActive = false;
        skillsActive = false;
        storyActive = false;
        contactActive = true;
        break;
      default:
        aboutActive = false;
        resumeActive = false;
        skillsActive = false;
        storyActive = false;
        contactActive = false;
    }

    return (
      <MDBContainer fluid>
        <Router>
          <MDBRow>
            <MDBCol>
              <MDBNavbar scrolling color="white" expand="md" fixed="top">
                <MDBNavbarBrand href="/">
                  <MyName />
                </MDBNavbarBrand>
                {!this.state.isWideEnough && (
                  <MDBNavbarToggler onClick={this.onClick} />
                )}
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active={aboutActive}>
                      <MDBNavLink
                        style={{ color: "black" }}
                        onClick={() => this.handleActiveItemUpdate("about")}
                        to="/about"
                      >
                        about
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={resumeActive}>
                      <MDBNavLink
                        style={{ color: "black" }}
                        onClick={() => this.handleActiveItemUpdate("resume")}
                        to="/resume"
                      >
                        resume
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={skillsActive}>
                      <MDBNavLink
                        style={{ color: "black" }}
                        onClick={() => this.handleActiveItemUpdate("skills")}
                        to="/skills"
                      >
                        skills
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={storyActive}>
                      <MDBNavLink
                        style={{ color: "black" }}
                        onClick={() => this.handleActiveItemUpdate("story")}
                        to="/story"
                      >
                        story
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={contactActive}>
                      <MDBNavLink
                        style={{ color: "black" }}
                        onClick={() => this.handleActiveItemUpdate("contact")}
                        to="/contact"
                      >
                        contact
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <div>
                      <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
                        <MDBMask
                          overlay="black-light"
                          className="flex-center flex-column text-white text-center"
                        >
                          <h2>Brady Burkle</h2>
                          <h5>
                            Financial professional with 7+ years experience in
                            the asset management and hedge fund industries. Deep
                            knowledge of financial products and financial
                            analysis with experience in accounting, investor
                            relations, and reporting. Driven to implement
                            process improvements and efficiencies by leveraging
                            extensive programming knowledge. Interested in
                            finance, behavioral economics, complex systems,
                            psychology, and programming languages.
                          </h5>
                          <br />
                          <p>Consultant. </p>
                          <p>Programmer. </p>
                          <p>Analyst. </p>
                        </MDBMask>
                      </MDBView>
                    </div>
                  );
                }}
              />

              <Route
                exact
                path="/resume"
                render={() => (
                  <div className="mt-5 pt-5">
                    <ResumeList />
                  </div>
                )}
              />

              <Route
                exact
                path="/nt"
                render={() => (
                  <div className="mt-5 pt-5">
                    <h1>NT Test</h1>
                  </div>
                )}
              />

              <Route
                exact
                path="/skills"
                render={() => (
                  <MDBRow>
                    <MDBCol className="m-3 p-3 mt-5">
                      <Skills />
                    </MDBCol>
                  </MDBRow>
                )}
              />

              <Route
                exact
                path="/about"
                render={() => (
                  <div className="mt-5 pt-5">
                    <About />
                  </div>
                )}
              />
            </MDBCol>
          </MDBRow>
        </Router>
      </MDBContainer>
    );
  }
}

export default FullPageIntroWithFixedNavbar;
