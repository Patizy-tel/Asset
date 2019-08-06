import React from 'react';
import { Link } from "react-router-dom";
import NavbarLayout  from './NavbarLayout'
import {Button,Row ,Col} from 'reactstrap';

export default class LAnding extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <NavbarLayout />
        <Row style={{height:"100%" ,marginTop:"150px"}}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h4 style={{textShadow: "2px 2px 5px #2b3" ,fontSize:'40px'}} >
        ASSET MANAGMEMT SYSTEM
        </h4>

        <h6 style={{textShadow: "2px 2px 5px #f1f1f1" ,fontSize:'20px'}}>manage your assets with just a click of a button</h6><br/>

        <div >
        <Link to="/register">
   
         <Button  size="15" active style={{margin:"10px",backgroundColor:"#00e600" , width:"13%",boxShadow: "0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" ,position:"relative"}}>Register</Button>

         </Link>
         <Link to="/login">
        
         <Button color="success"  onClick={this.login} size="15" active style={{margin:"10px" ,backgroundColor:"#00e600", width:"13%" ,boxShadow: "0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>Login</Button>
         </Link>
        </div>
       
        
        
        </Col>
      </Row>
      </div>
    );
  }
}