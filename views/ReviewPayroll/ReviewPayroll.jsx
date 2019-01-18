import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";

const mapStateToProps = state => {
  return { data: state };
};
class ReviewPayroll extends React.Component {
  constructor(props){
    super(props);
    console.log("In ReviewPayroll",this.props.data);
  }

  async handleSubmit(e){
      let isCreated = await axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/payroll/create', {
          data:{
              id: this.props.data.payroll.data.id,
              totalAmt: this.props.data.payroll.data.totalAmt,
              empData: this.props.data.payroll.empData
          }
      })
          .then(function (response) {
              //handle success
              if(response) {
                  console.log("success", response);
                  return true;
              }
          })
          .catch(function (response) {
              //handle error
              console.log("error",response);
              return false;
          });
      if(isCreated){
          this.props.history.push('/dashboard/' + this.props.data.id);
      }
  }
  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor:'white',paddingLeft:10,marginTop:30,marginLeft:20,marginRight:20}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4 align="center" style={{marginTop:20}}>Run Payroll</h4>
                <div style={{height:650,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8}}>
                    <form>
                      <label className="radio-inline" style={{marginLeft:40,marginRight:60}}>
                        <Link to="/addPayroll" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}} />HOURS & EARNINGS</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/reviewPayroll" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}} checked/>REVIEW AND SUBMIT</Link>
                      </label>

                    </form>
                  </div>
                  <div style={{marginTop:20}}>
                    Please preview these numbers before you submit for payroll. Your employees will be paid in their choosen wallet in 3 working days.
                  </div><br/>
                  <div className="alert alert-warning">

                    <strong><i className="material-icons">add_alert</i>  Your account will be debited with amount ${this.props.data.payroll.data.totalAmt} for this payroll. The amount will be processed in 3 days.</strong>
                  </div>
                  <div style={{marginTop:40}}>
                    <table class="table table-bordered">

                      <thead className="thead-dark">
                      <tr>
                        <th>EMPLOYEES</th>
                        <th>HOURS</th>
                        <th>GROSS PAY</th>
                        <th> TAXES</th>
                        <th>BENEFITS</th>
                        <th>SUB TOTAL </th>


                      </tr>
                      </thead>
                      <tbody>
                      {this.props.data.payroll.empData.map((dynamicComponent, i) => {
                          console.log(dynamicComponent);
                          return(
                              <tr id={i}>
                                  <td><strong>{dynamicComponent.name}</strong><br/><br/>{dynamicComponent.designation}</td>
                                  <td>{dynamicComponent.hours}</td>
                                  <td>{dynamicComponent.payAmt}</td>
                                  <td>{dynamicComponent.taxes}</td>
                                  <td>{dynamicComponent.benefits}</td>
                                  <td>{dynamicComponent.subTotal}</td>
                              </tr>
                          )
                      })}
                      </tbody>
                    </table>
                    <p style={{position:"absolute",right:30}}>Total Payroll       ${this.props.data.payroll.data.totalAmt}</p>
                  </div>
                  <div className="row" style={{marginTop:30,marginLeft:70}}>
                    <div className="form-group col-xs-6 ">
                    </div>
                  </div>
                </div>
                <div align="center" style={{marginBottom:10}}>
                  <button type="button" className="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)}>SUBMIT PAYROLL</button>
                  <Link to={{pathname: "/addPayroll"}}>
                    <button type="button" className="btn btn-default btn-fill" onClick={this.handleSubmit.bind(this)}>GO BACK</button>
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

const List = connect(mapStateToProps)(ReviewPayroll);

export default List;
