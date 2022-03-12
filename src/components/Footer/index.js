import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <footer>
      
          <MDBCard
            alignment="center"
            style={{ width: "100%", margin: "0 auto" }}
          >
            <MDBCardHeader>
              <MDBCardTitle>
                <h1>Contact</h1>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                <p>some text</p>
              </MDBCardText>
            </MDBCardBody>
            
              <MDBBtn color="primary">
                <a
                  href="linkedin.com/in/nathanbatchelder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </MDBBtn>
           
          </MDBCard>
     
    </footer>
  );
}

export default Footer;
