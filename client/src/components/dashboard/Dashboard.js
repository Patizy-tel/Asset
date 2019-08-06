import React, { Component } from "react";
import { connect } from "react-redux";
import {totalDesktops,totalLaptops, laptopRegion ,desktopRegion} from '../../redux/actions/DashboardActions'
import { Button,CardBody,Row,Col, Table,CardTitle} from 'reactstrap';
import NavDash from './NavDash'



class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
componentWillMount(){

  this.props.totalDesktops()
  this.props.totalLaptops()
  this.props.laptopRegion() ;
  this.props.desktopRegion()

  
}
  render() {

    let {totalDesks}  = this.props.totaldesks
    let {totalLaps} =  this.props.totallaptops
  
    let laptopsbyRegion =  this.props.laptopregion.map((x , i)=>(
      <tr key={x._id}>
      <th>{i +1}</th>
      <td>{x._id}</td>
      <td>{x.laptopRegion}</td>
     
    </tr>

    ))

    let dekstopbyRegion =  this.props.desktopregion.map((x , i)=>(
      <tr key={x._id}>
      <th>{i +1}</th>
      <td>{x._id}</td>
      <td>{x.desktopRegion}</td>
     
    </tr>

    ))


    
    return (
      
      <div>
      <NavDash />
      <div>
      <Row style={{marginTop:"50px"}}>

      <Col> 
      <div style={{height:"200px" ,borderRadius:'25%', borderStyle: "ridge",backgroundColor:"f1f1f1" ,textAlign:"center",fontSize:"20px",boxShadow: "10px 10px 5px green"}}>
      <CardBody>
        <CardTitle style={{textShadow: "2px 2px 5px #2b3"}}>TOTAL DESKTOPS</CardTitle>
        <Button color="success" style={{width:"100px" ,height:"80px" ,fontSize:"25px",borderRadius:"25px"}}>{totalDesks}</Button>
      </CardBody>
      </div>
      </Col>

      <Col>
      <div  style={{height:"200px" ,borderRadius:'25%', borderStyle: "ridge",backgroundColor:"f1f1f1" ,textAlign:"center",fontSize:"20px",boxShadow: "10px 10px 5px green"}}>
      <CardBody>
        <CardTitle style={{textShadow: "2px 2px 5px #2b3"}}>TOTAL LAPTOPS</CardTitle>
        <Button color="success" style={{width:"100px" ,height:"80px" ,fontSize:"25px",borderRadius:"25px"}}>{totalLaps}</Button>
      </CardBody>
      </div></Col>
    </Row>
    <div  style={{marginTop:"20px"}}>

    <h1 style={{textAlign:"center" ,textShadow: "2px 2px 5px #2b3"}}>Laptops By Center</h1>
   
    <Table hover striped size="sm" responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Center</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
    {laptopsbyRegion}
    </tbody>
  </Table>
  </div>
  <div  style={{marginTop:"20px"}}>

  <h1 style={{textAlign:"center",textShadow: "2px 2px 5px #2b3"}}>Desktops By Center</h1>
  <Table hover striped size="sm" responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Center</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
  {dekstopbyRegion}
  
  </tbody>

</Table>
   
</div>

    </div>
      
      </div>
    );
  }
}


const mapStateToProps = state => ({
 
  totaldesks:state.dashboard.totalDesk,
  totallaptops:state.dashboard.totalLap,
  laptopregion:state.dashboard.laptopregion,
  desktopregion:state.dashboard.desktopregion

});

export default connect(
  mapStateToProps,
  { totalDesktops ,totalLaptops ,desktopRegion ,laptopRegion}
)(Dashboard);
