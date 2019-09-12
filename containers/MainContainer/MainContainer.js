import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact';
import Landing from '../../components/TopNav/Landing/Landing';
import jobData from '../../data/allJobs';


class MainContainer extends Component {
    state = {
        jobData
    };

    render() {
        return (
            <MDBAnimation type="fadeIn" duration="2s">
            <MDBContainer fluid className="App">
                <MDBRow className="bg-light">>
                    <MDBCol>
                        <Landing />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>       
            </MDBAnimation>
            )
    }
}

export default MainContainer

