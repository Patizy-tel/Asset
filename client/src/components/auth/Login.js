import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import NavbarLayout from '../layout/NavbarLayout'

import {Button,Row ,Col, Form, FormGroup, Label, Input} from 'reactstrap';

 class Login extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this); 
    this.state = {
      collapsed: true
      ,username:"",
      password:"",
      errors:""
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };
     console.log(userData)
    this.props.loginUser(userData);

     
  };

  render() {
    return (
      <div>
      <NavbarLayout />
       
        <Row style={{height:"100%" ,marginTop:"150px"}}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h4 style={{marginBottom:'20px',textAlign:"center" ,textShadow: "2px 2px 5px #2b3"}}>Login</h4>
        <Form onSubmit={this.onSubmit}>
       <FormGroup row>
      <Label for="username" sm={2}>User-Name:</Label>
      <Col sm={10}>
        <Input type="text" name="username" id="username" onChange={this.onChange}
        value={this.state.username}  placeholder="Enter your username" required/>
      </Col>
    </FormGroup> 
       
        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password" onChange={this.onChange}
            value={this.state.password}  placeholder="enter your password" required/>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="success" type="submit" >Login</Button>
          </Col>
        </FormGroup>
      </Form>
        </Col>
      </Row>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
