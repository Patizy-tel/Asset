import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link } from "react-router-dom";
import { logoutUser  } from "../../redux/actions/authActions";

import {
  Collapse,
  Navbar,
  Fade,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavDash extends React.Component {
  constructor(props) {
    super(props);
  

    this.toggle = this.toggle.bind(this);
    this.toggle2 =  this.toggle2.bind(this)
    this.state = {
      isOpen: false,
      collapse: false ,
      dropdownOpen:false
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 toggle2(){
   this.setState(prevState=>({
     dropdownOpen:!prevState.dropdownOpen
   }))
 }


  render() {

    let {user} =  this.props.auth; 
    

    return (
      <div>
        <Navbar color="success" light fixed="top" expand="md" style={{ boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

       
          <NavbarBrand href="/dashboard" style={{color:"white"}}>Asset-Management System</NavbarBrand>
         
         
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle2}>

            <DropdownToggle  color="success" >
            Menu
            </DropdownToggle>
            <DropdownMenu style={{backgroundColor:"#2b3"}}>
            <Link to="/dashboard">
           
            <DropdownItem style={{color:"white"}}>Dashboard</DropdownItem>
            </Link>
            <UncontrolledDropdown nav inNavbar >
            <DropdownItem   style={{color:"white" ,backgroundColor:"#2b3"}}>
              Laptops
            </DropdownItem>
            <DropdownMenu  style={{backgroundColor:"#2b3"}}>
            <Link  to="/newLaptop">
              <DropdownItem>
                New-Laptop
              </DropdownItem>
              </Link>
              <Link  to="/allLaptop">
              <DropdownItem>
                All-Laptops
              </DropdownItem>
              </Link>
            </DropdownMenu>
            
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar >
          <DropdownItem    style={{color:"white" ,backgroundColor:"#2b3"}}>
            Desktops
          </DropdownItem>
          <DropdownMenu  style={{backgroundColor:"#2b3"}}>
          <Link  to="/newDesktop">
            <DropdownItem>
              New-Desktop
            </DropdownItem>
            </Link>
            <Link  to="/allDesktop">
            <DropdownItem>
              All-Desktop
            </DropdownItem>
            </Link>
          </DropdownMenu>
          
        </UncontrolledDropdown>
          </DropdownMenu>
            </Dropdown>
            
    
            
            
           
            <NavItem><Button color="success">{user.username}</Button></NavItem>
            <NavItem  onClick={this.onLogoutClick} ><Button color="success">Log Out</Button></NavItem>
         </Nav>
          </Collapse>
        </Navbar>
      

      </div>
    );
  }
}

NavDash.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(
  mapStateToProps,
  { logoutUser }
)(NavDash);

