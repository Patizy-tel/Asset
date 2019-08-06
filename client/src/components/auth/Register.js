import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import {Button, Row ,Col, Form, FormGroup, Label, Input} from 'reactstrap';
import NavbarLayout from '../layout/NavbarLayout'


class Register extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    super();
    this.state = {
      name: "",
      email: "",
      username:"",
      role:"",
      password: "",
      password2: "",
      collapsed: true,
      errors:{}
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      username:this.state.username,
      email: this.state.email,
      role:this.state.role,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
  
    return (
      <div>
      <NavbarLayout />
      <Row style={{height:"100%" ,marginTop:"150px"}}>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <h4 style={{marginBottom:'20px',textAlign:"center"}}>Register</h4>
      <Form onSubmit={this.onSubmit}>
      <FormGroup row>
      <Label for="name" sm={2}>Name:</Label>
      <Col sm={10}>
        <Input type="text" name="name" id="name"  onChange={this.onChange}
        value={this.state.name}  placeholder="Enter your name" required/>
      </Col>
    </FormGroup> <FormGroup row>
    <Label for="username" sm={2}>User-Name:</Label>
    <Col sm={10}>
      <Input type="text" name="username" id="username"  onChange={this.onChange}
      value={this.state.username}  placeholder="Enter your  unique username" required />
    </Col>
  </FormGroup> <FormGroup row>
  <Label for="email" sm={2}>Email:</Label>
  <Col sm={10}>
    <Input type="email" name="email" id="email"  onChange={this.onChange}
    value={this.state.email}  placeholder="exmple@gmail.com" required/>
  </Col>
</FormGroup>
      <FormGroup row>
        <Label for="role" sm={2}>Role:</Label>
        <Col sm={10}>
          <Input type="text" name="role" id="role"  onChange={this.onChange}
          value={this.state.role} placeholder="Enter your Role" required/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="password"  onChange={this.onChange}
          value={this.state.password}  placeholder="enter your password" required/>
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" color="success">Register</Button>
        </Col>
      </FormGroup>
    </Form>
      </Col>
    </Row>
    </div>
    );
  }
}



Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
