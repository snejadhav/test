import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";

const mapStateToProps = state => {
  return { data: state };
};
class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("In EmployeeDetails",this.props.data);
  }

  state={
    companyId:"",
    name:"",
    email:"",
    hireDate:"",
  };

  handleName(e){
    this.setState({name:e.target.value});
    console.log(this.state.name);
  }
  handleEmail(e){
    this.setState({email:e.target.value});
    console.log(this.state.email);
  }
  handleHireDate(e){
    this.setState({hireDate:e.target.value});
    console.log(this.state.hireDate);
  }
  handleSubmit(){
    console.log("emp details:",this.state);
    this.setState({companyId:this.props.data.id});
    store.dispatch({type:'update_employeeDetails',payload:this.state});
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor:'white',paddingLeft:10,marginTop:30,marginLeft:20,marginRight:20}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4 align="center" style={{marginTop:20}}>Add People</h4>
                <div style={{height:650,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8}}>
                    <form>
                      <label className="radio-inline" style={{marginLeft:40,marginRight:60}}>
                        <Link to="/employees" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}} checked/>EMPLOYEE DETAILS</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/compensation" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}}/>COMPENSATION</Link>
                      </label>

                    </form>
                  </div>
                  <div className="row" style={{marginTop:30,marginLeft:70}}>
                    <div className="form-group col-xs-6 ">
                      <i className="material-icons">person</i><label className="control-label ">NAME</label><br/>
                      <input type="text"  value={this.state.name} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                         name="name" onChange={this.handleName.bind(this)}    placeholder="AB Company"/>
                      <p><br/> Lorem ipsum dolor sit amet,consectetur<br/> adipiscing elit, sed to eiusmod</p><br/>

                    </div>
                    <br/>

                    <div className="form-group  col-xs-6  ">

                      <i className="material-icons">person</i><label className="control-label ">EMPLOYEE
                      EMAIL</label><br/>
                      <input type="email"  value={this.state.email} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                          name="email" onChange={this.handleEmail.bind(this)}   placeholder="john@abc.com"/>
                      <p><br/>Lorem ipsum dolor sit amet,consectetur<br/> adipiscing elit, sed to eiusmod</p><br/>

                    </div>
                    <br/><br/>

                    <div className="form-group col-xs-6 ">
                      <i className="material-icons">today</i><label className="control-label ">HIRE DATE</label><br/>
                      <input type="date" value={this.state.hireDate} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                          name="hireDate" onChange={this.handleHireDate.bind(this)}   placeholder="Last Day of the month"/>

                      <p><br/> Lorem ipsum dolor sit amet,consectetur<br/> adipiscing elit, sed to eiusmod</p><br/>

                    </div>
                    <br/>


                  </div>

                </div>
                <div align="center" style={{marginBottom:10}}>
                  <Link to={{pathname: "/compensation",
                    data:this.state.data }}>
                  <button type="button" className="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)}>PROCEED</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
const List = connect(mapStateToProps)(EmployeeDetails);

export default List;
