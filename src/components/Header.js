import React, { Component } from 'react'
import {Container, Navbar ,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom' ;
import LoginButton from './LoginButton' ;
import LogoutButton from './LogoutButton' ;

export class Header extends Component {
    render() {
        return (
            <>
            {
                this.props.isAuthenticated ?
                <>
                <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">{this.props.NAME}</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link tag={Link} to="/home" href="/home">Home</Nav.Link>
                  <Nav.Link tag={Link} to="/favorite" href="/favorite">Favorite</Nav.Link>
                </Nav>
                <LogoutButton />
                </Container>
              </Navbar>
              </> :
              <>
                  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">EXAM 401</Navbar.Brand>
    <LoginButton />
    <Nav className="me-auto">

    </Nav>
    </Container>
  </Navbar>
              </>
            }

            </>
        )
    }
}

export default Header
