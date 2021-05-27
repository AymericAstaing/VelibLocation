import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const NavigationBar = () => {

  const { logout } = useAuth0();

  return (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Velib location</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Find velibs arround with location..." className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link onClick={() => logout()}>Logout</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
  );
};

export default NavigationBar;