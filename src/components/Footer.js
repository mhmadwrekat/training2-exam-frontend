import React, { Component } from 'react'
import {Container, Navbar ,Nav} from 'react-bootstrap';
export class Footer extends Component {
    render() {
        return (
            <>
                  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">401 EXAM</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#features"><p>All Reserve Copy Right.2021 Mhmad Wrekat</p></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            </>
        )
    }
}

export default Footer
