import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import {allDesks ,deleteDesktop ,editDesktop} from '../../redux/actions/DesktopActions'
import { Table ,Button,Modal, ModalHeader,FormGroup,Label,Col,Input, ModalBody, ModalFooter} from 'reactstrap';
import NavDash from '../dashboard/NavDash'



class AllDesktop extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2:false, 
      search:"",
      item:"",
      name:"",
      department:"",
      region:"",
      deviceName:'',
      deviceType:"",
      monitorSerial:'',
      keyboardSerial:"",
      deviceSerial:"",
      printerName:"",
      printerSerialNumber:"",
      _id:""
    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle(x) {
    console.log(x.name)
    this.setState(prevState => ({
      modal: !prevState.modal ,
      name:x.name,
      department:x.department,
      region:x.region,
      deviceName:x.deviceName,
      deviceType:x.deviceType,
      monitorSerial:x.monitorSerial,
      keyboardSerial:x.keyboardSerial,
      deviceSerial:x.deviceSerial,
      printerName:x.printerName,
      printerSerialNumber:x.printerSerialNumber,
      _id:x._id
    }));
  }
  toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }));
  }
  updateSearch(e){
    this.setState({search:e.target.value.substr(0,20)})
 
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  selectItem (x){
    this.setState(prevState => ({
        modal2: !prevState.modal2,
        item:x
      }));

  }
DeleteIT = x =>{
    this.setState(prevState => ({
        modal2: !prevState.modal2
      }));
     this.props.deleteDesktop(this.state.item)
     window.location.href = "./allDesktop"
}

SaveEdit =x =>{

  this.setState(prevState => ({
    modal2: !prevState.modal2
  }));

  let editData = {
    _id:this.state._id,
    name:this.state.name ,
    department:this.state.department ,
    region:this.state.region,
    deviceName:this.state.deviceName,
    deviceType:this.state.deviceType ,
    monitorSerial:this.state.monitorSerial,
    keyboardSerial:this.state.keyboardSerial,
    deviceSerial:this.state.deviceSerial,
    printerName:this.state.printerName,
    printerSerial:this.state.printerSerial

  }
 this.props.editDesktop(editData)
 this.props.history.push("/dashboard");

}

componentWillMount(){
  this.props.allDesks()
}
  render() {


    let allDeck  = this.props.desks.alldesks.filter(  (x)=>{

      return x.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

    }).map((x,i)=>(

      <tr key={i}>
      <th>{i +1}</th>
      <td>{x.name}</td>
      <td>{x.department}</td>
      <td>{x.region}</td>
      <td>{x.deviceName}</td>
      <td>{x.deviceType}</td>
      <td>{x.monitorSerial}</td>
      <td>{x.keyboardSerial}</td>
      <td>{x.deviceSerial}</td>
      <td>{x.printerName}</td>
      <td>{x.printerSerial}</td>
      <td><Button color="success" style={{marginRight:"5px"}} onClick={()=>this.toggle(x)}>Edit</Button>
      <Button color="danger" onClick={() => this.selectItem(x._id)}>Delete</Button></td>
    </tr>
    ))

    return (
      
      <div>
      <NavDash />
      <h1  sm="12" md={{ size: 6, offset: 3 }} style={{marginTop:"50px",textAlign:"center",textShadow: "2px 2px 5px #2b3"}}>
      All DESKTOPS
      </h1>
      <Col sm={2}>
      <Input  type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="search By name" />
      </Col>
      
    <Table hover striped size="sm" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>department</th>
          <th>Center</th>
           <th>Device-Name</th> 
           <th>Device-Type</th>
           <th>Monitor-Serial-Number</th>
           <th>Keyboard-Serial-Number</th>
            <th>Device-Serial-Number</th>
             <th>Printer-Name</th>
             <th>Printer-Serial-Number</th>
             <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {allDeck}
    
      </tbody>

    </Table>

    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    <ModalHeader toggle={this.toggle}>Edit  Record</ModalHeader>
    <ModalBody>
    
                                                    <FormGroup row>
                                                    <Label for="name" sm={2}>Name:</Label>
                                                    <Col sm={10}>
                                                      <Input type="text" name="name" id="name"  onChange={this.onChange}
                                                      value={this.state.name}  placeholder="Name" />
                                                    </Col>
                                                  </FormGroup> 
                                                  <FormGroup row>
                                                  <Label for="department" sm={2}>Department:</Label>
                                                  <Col sm={10}>
                                                    <Input type="text" name="department"  onChange={this.onChange}
                                                    value={this.state.department} id="department" placeholder="Department" />
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
                                                  value={this.state.deviceName} id="deviceName" placeholder="device Name" />
                                                </Col>
                                                </FormGroup> 
                                                <FormGroup row>
                                                <Label for="deviceType" sm={2}>DeviceType:</Label>
                                                <Col sm={10}>
                                                <Input type="text" name="deviceType"   onChange={this.onChange}
                                                value={this.state.deviceType} id="deviceType" placeholder="Device Type" />
                                                </Col>
                                                </FormGroup> 
                                                <FormGroup row>
                                                <Label for="monitorSerial" sm={2}>MonitorSerial:</Label>
                                                <Col sm={10}>
                                                <Input type="text" name="monitorSerial"   onChange={this.onChange}
                                                value={this.state.monitorSerial} id="monitorSerial" placeholder="monitor serial Number" />
                                                </Col>
                                                </FormGroup> 
                                                <FormGroup row>
                                                <Label for="deviceType" sm={2}>KeyboardSerial:</Label>
                                                <Col sm={10}>
                                                <Input type="text" name="keyboardSerial"  id="keyboardSerial"  onChange={this.onChange}
                                                value={this.state.keyboardSerial}  placeholder="keyboard Serial Number" />
                                                </Col>
                                                </FormGroup> 
                                                    
                                                <FormGroup row>
                                                <Label for="deviceSerial" sm={2}>DeviceSerial:</Label>
                                                <Col sm={10}>
                                                <Input type="text" name="deviceSerial" id="deviceSerial"   onChange={this.onChange}
                                                value={this.state.deviceSerial} placeholder="Device Serial Number" />
                                                </Col>
                                                </FormGroup> 

                                                <FormGroup row>
                                                <Label for="printerName" sm={2}>PrinterName:</Label>
                                                <Col sm={10}>
                                                <Input type="text" name="printerName" id="printerName"   onChange={this.onChange}
                                                value={this.state.printerName} placeholder="Printer Name" />
                                                </Col>
                                                </FormGroup> 
                                                <FormGroup row>
                                                <Label for="printerSerial" sm={2}>PrinterSerial:</Label>
                                                <Col sm={10}>
                                                <Input type="text" name="printerSerial" id="printerSerial"   onChange={this.onChange}
                                                value={this.state.printerSerial}  placeholder="printer serial number" />
                                                </Col>
                                                </FormGroup> 
                                                    
                                                      <FormGroup check row>
                                                        <Col sm={{ size: 10, offset: 2 }}>
                                                          
                                                        </Col>
                                                      </FormGroup>
                                                    
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.SaveEdit}>Save</Button>{' '}
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>

  
  <Modal isOpen={this.state.modal2} toggle={this.toggle2}  className={this.props.className}>
  <ModalHeader toggle={this.toggle2}>Delete </ModalHeader>
  <ModalBody>
              ARE YOU SURE YOU WANT TO DELETE RECORD
  </ModalBody>
  <ModalFooter>
    <Button color="primary" onClick={this.DeleteIT}>YES</Button>{' '}
    <Button color="secondary" onClick={this.toggle2}>Cancel</Button>
  </ModalFooter>
</Modal>

 
      </div>
    );
  }
}

AllDesktop.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  allDesks :PropTypes.func.isRequired,
  editDesktop :PropTypes.func.isRequired,
  desks:PropTypes.object.isRequired,
  deleteDesktop:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  desks:state.allDesks,
  deletedesktop:state.deletedesktop
});

export default connect(
  mapStateToProps,
  { logoutUser ,allDesks,deleteDesktop ,editDesktop}
)(AllDesktop);
