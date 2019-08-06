import React from 'react';
import {Button,Row ,Col, Form, FormGroup, Label, Input} from 'reactstrap';
import NavDash from '../dashboard/NavDash'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newDesktops} from "../../redux/actions/DesktopActions"

 class newDesktop extends React.Component {
  constructor(props) {
    super(props);

    
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      errors:{},
      name:"",
      department:"",
      region:"",
      deviceName:'',
      deviceType:"",
      monitorSerial:'',
      keyboardSerial:"",
      deviceSerial:"",
      printerName:"",
      printerSerial:"",
      asset:{}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
 

    const DesktopData = {
      name:this.state.name ,
      department:this.state.department ,
      deviceName:this.state.deviceName,
      deviceType:this.state.deviceType ,
      region:this.state.region,
      monitorSerial:this.state.monitorSerial,
      keyboardSerial:this.state.keyboardSerial,
      deviceSerial:this.state.deviceSerial,
      printerName:this.state.printerName,
      printerSerial:this.state.printerSerial
      
    };
   

    this.props.newDesktops(DesktopData);
    
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
        <h4 style={{marginBottom:'20px' ,textAlign:"center",textShadow: "2px 2px 5px #2b3"}}>New Desktop</h4>
        <Form onSubmit={this.onSubmit}>
       <FormGroup row>
      <Label for="name" sm={2}>Name:</Label>
      <Col sm={10}>
        <Input type="text" name="name" id="name"  onChange={this.onChange}
        value={this.state.name}  placeholder="Name" required />
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
    value={this.state.region} id="region"> 
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
    <Input type="text" name="deviceName"  onChange={this.onChange}
    value={this.state.deviceName} id="deviceName" placeholder="device Name" required/>
  </Col>
</FormGroup> 
<FormGroup row>
<Label for="deviceType" sm={2}>DeviceType:</Label>
<Col sm={10}>
  <Input type="text" name="deviceType"   onChange={this.onChange}
  value={this.state.deviceType} id="deviceType" placeholder="Device Type" required/>
</Col>
</FormGroup> 
<FormGroup row>
<Label for="monitorSerial" sm={2}>MonitorSerial:</Label>
<Col sm={10}>
  <Input type="text" name="monitorSerial"   onChange={this.onChange}
  value={this.state.monitorSerial} id="monitorSerial" placeholder="monitor serial Number" required />
</Col>
</FormGroup> 
<FormGroup row>
<Label for="deviceType" sm={2}>KeyboardSerial:</Label>
<Col sm={10}>
  <Input type="text" name="keyboardSerial"  id="keyboardSerial"  onChange={this.onChange}
  value={this.state.keyboardSerial}  placeholder="keyboard Serial Number" required/>
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
      <Label for="printerSerial" sm={2}>PrinterSerial:</Label>
      <Col sm={10}>
        <Input type="text" name="printerSerial" id="printerSerial"   onChange={this.onChange}
        value={this.state.printerSerial}  placeholder="printer serial number" required/>
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


newDesktop.propTypes = {
  newDesktops: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  newDesktop:state.newDesktop

});


export default connect(
  mapStateToProps,
  { newDesktops }
)(newDesktop);