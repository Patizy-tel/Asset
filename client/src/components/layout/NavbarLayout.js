import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Navbar ,NavbarBrand,NavbarToggler} from 'reactstrap';

class NavbarLayout extends Component {
  render() {
    return (
      <div>
      <Navbar color="success" light expand="md" style={{boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <Link to="/">
      <NavbarBrand  style={{color:"white"}} className="mr-center">Asset  Management System</NavbarBrand>
      </Link>
      </Navbar>
      </div>
    );
  }
}

export default NavbarLayout;
