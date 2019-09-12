import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class LightboxPage extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'http://mydigitaldialogue.com/images/courses/Excel-icon.png',
    'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/python-icon.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg',
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

  return images.map(imageSrc => {
    photoIndex++;
    const privateKey = photoIndex;
    return (
      <MDBCol md="3" key={photoIndex}>
        <figure>
          <img
            src={imageSrc}
            alt="Gallery"
            className="img-fluid z-depth-1"
            onClick={() =>
              this.setState({ photoIndex: privateKey, isOpen: true })
            }
          />
        </figure>
      </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
    <MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#fff" }}>
      <h2 class="h1 text-center text-uppercase font-weight-bold pt-5 mb-3 mt-5">Skills</h2>
      <p class="text-center text-uppercase font-weight-bold">Click through to learn more about my experience</p>
      <p class="section-description mt-5 pt-2">Finance and programming have long been passions of mine... blah blah blah... blah blah blah</p>
      <div className="mdb-lightbox p-3">
        <MDBRow>
          {this.renderImages()}
        </MDBRow>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
          }
        />
      )}
      <MDBCol md="12" className="text-center py-4">
        <MDBBtn outline color="black"><strong>more</strong></MDBBtn>
      </MDBCol>
    </MDBContainer>
    );
  }
}

export default LightboxPage;