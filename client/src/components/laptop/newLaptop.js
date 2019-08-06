import React from 'react';
import {Button, Row ,Col, Form, FormGroup, Label, Input, } from 'reactstrap';
import {newLaptops} from '../../redux/actions/LaptopActions';
import NavDash from '../dashboard/NavDash'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class newLaptop extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true ,
      name:"",
      department:"",
      region:"",
      deviceName:"",
      deviceType:"",
      deviceSerial:"",
      printerName:"",
      printerSerialNumber:""

    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const laptopData = {
      name:this.state.name ,
      department:this.state.department ,
      region:this.state.region,
      deviceName:this.state.deviceName,
      deviceType:this.state.deviceType ,
      deviceSerial:this.state.deviceSerial,
      printerName:this.state.printerName,
      printerSerialNumber:this.state.printerSerialNumber
      
    };

    this.props.newLaptops(laptopData);
    

  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
      <NavDash />
    
        <Row style={{height:"100%" ,marginTop:"50px"}}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h4 style={{marginBottom:'20px',textAlign:"center",textShadow: "2px 2px 5px #2b3"}}>New Laptop</h4>
        <Form onSubmit={this.onSubmit}>
       <FormGroup row>
      <Label for="name" sm={2}>Name:</Label>
      <Col sm={10}>
        <Input type="text" name="name" id="name"  onChange={this.onChange}
        value={this.state.name}  placeholder="Name" required/>
      </Col>
    </FormGroup> 
    <FormGroup row>
    <Label for="department" sm={2}>Department:</Label>
    <Col sm={10}>
      <Input type="text" name="department"  onChange={this.onChange}
      value={this.state.department} id="department" placeholder="Department" required/>
    </Col>
  </FormGroup> 
  <FormGroup row>
  <Label for="region" sm={2}>Center:</Label>
  <Col sm={10}>
    <Input type="select" name="region"  onChange={this.onChange}
    value={this.state.region} id="region"
    > 
    <option>Center</option>
    <option value="Kwekwe Dictrict">Kwekwe Dictrict</option>
    <option value="Redcliff Depot">Redcliff Depot</option>
    <option value="Nkayi">Nkayi</option>
    <option value="Nembudziya">Nembudziya</option>
    <option value="Gokwe">Gokwe</option>
    <option value="Garage">Garage</option>
    <option value="Kwekwe Depot">Kwekwe Depot</option>
    </Input>
  </Col>
</FormGroup>
  <FormGroup row>
  <Label for="deviceName" sm={2}>DeviceName:</Label>
  <Col sm={10}>
    <Input type="text" id="deviceName" name="deviceName"  onChange={this.onChange}
    value={this.state.deviceName}  placeholder="device Name" required/>
  </Col>
</FormGroup> 
<FormGroup row>
<Label for="deviceType" sm={2}>DeviceType:</Label>
<Col sm={10}>
  <Input type="text" id="deviceType" name="deviceType"   onChange={this.onChange}
  value={this.state.deviceType}  placeholder="Device Type" required/>
</Col>
</FormGroup> 
       
<FormGroup row>
<Label for="deviceSerial" sm={2}>DeviceSerial:</Label>
<Col sm={10}>
  <Input type="text" name="deviceSerial" id="deviceSerial"   onChange={this.onChange}
  value={this.state.deviceSerial} placeholder="Device Serial Number" required/>
</Col>
</FormGroup> 

<FormGroup row>
<Label for="printerName" sm={2}>PrinterName:</Label>
<Col sm={10}>
  <Input type="text" name="printerName" id="printerName"   onChange={this.onChange}
  value={this.state.printerName} placeholder="Printer Name" required/>
</Col>
</FormGroup> 


<FormGroup row>
<Label for="printerSerialNumber" sm={2}>PrinterSerialNumber:</Label>
<Col sm={10}>
  <Input type="text" name="printerSerialNumber" id="printerSerialNumber"   onChange={this.onChange}
  value={this.state.printerSerialNumber} placeholder="Printer Serial Number" required/>
</Col>
</FormGroup> 

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="success" type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
        </Col>
      </Row>
      </div>
    );
  }
}



newLaptop.propTypes = {
  newLaptops: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  newLaptop:state.newLaptop

});


export default connect(
  mapStateToProps,
  { newLaptops }
)(newLaptop);