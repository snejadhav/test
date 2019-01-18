import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";

const mapStateToProps = state => {
  return { data: state };
};
class Confirmation extends React.Component {
  constructor(props){
    super(props);
    console.log("In compensation",this.props.data);
    console.log("payroll id: ",this.props.match.params.id);

  }
  state={
      data:{},
      tableData:[],
      empReceived:[],
      baseClassName: "alert alert-success hide",
      successClassName: "alert alert-success",
      successToggle: false
  };
  async componentDidMount(){
      axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/employee/list/payroll',{
          payroll_id: this.props.match.params.id
      })
          .then(response => {
            console.log(response);
              this.setState({empReceived:response.data.empReceived});
              this.setState({data:response.data.data});
              this.state.empReceived.map((employee, i) => {
                  employee.id = i;
                  this.state.tableData.push(employee);
              });
          })
          .catch(error => {
              console.log(error);
          });
  }
  async handleSubmit(e){
      if(window.confirm("Run the Payroll")) {
          await axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/payroll/run',{
              user: this.props.data.id,
              payroll: this.props.match.params.id
          })
              .then(response => {
                  if(response){
                      console.log("successful");
                      this.setState({successToggle: true});
                      // this.props.history.push('/dashboard/'+this.props.data.id);
                      //let url='/dashboard'+this.props.data.id;
                      //return <Redirect to='/dashboard' />

                  }
              })
              .catch(error => {
                  console.log(error);
              });      } else {
          console.log("cancel");
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
                <h4 align="center" style={{marginTop:20}}>View Payroll</h4>
                <div style={{height:650,marginTop:30}}>
                    <div style={{marginTop:20}}>
                      <div className={this.state.successToggle ? this.state.successClassName : this.state.baseClassName}>
                        <strong><i className="material-icons">check_circle</i> SUCCESS! You have completed payroll for your employees.</strong>
                      </div><br/>
                      {/*<div style={{position:"absolute",left:30}}>*/}
                      {/*You're employees will be paid on<br/>*/}
                        {/*<strong>7th March</strong><br/></div>*/}
                        {/*<div style={{position:"absolute",right:50}}>    Total payroll amount<br/>*/}
                        {/*<strong>$2670</strong></div>*/}
                    </div>


                  <div style={{marginTop:40}}>
                    <table class="table table-bordered">

                      <thead className="thead-dark">
                      <tr>
                        <th>EMPLOYEES</th>
                        <th>HOURS</th>
                        <th>GROSS PAY</th>
                        <th>TAXES</th>
                        <th>BENEFITS</th>
                        <th>SUB TOTAL</th>


                      </tr>
                      </thead>
                      <tbody>
                      {this.state.empReceived.map((dynamicComponent, i) => {
                          console.log(dynamicComponent);
                          return(
                              <tr id={i}>
                                  <td><strong>{dynamicComponent.name}</strong><br/><br/>{dynamicComponent.designation}</td>
                                  {/*<td>{dynamicComponent.hours}</td>*/}
                                  <td></td>
                                  <td>{dynamicComponent.payAmt}</td>
                                  {/*<td>{dynamicComponent.taxes}</td>*/}
                                  {/*<td>{dynamicComponent.benefits}</td>*/}
                                  {/*<td>{(dynamicComponent.hours * dynamicComponent.pay_amt) - dynamicComponent.taxes + dynamicComponent.benefits}</td>*/}
                              </tr>
                          )
                      })}
                      </tbody>
                    </table>
                    <p style={{position:"absolute",right:30}}>Total Payroll       ${this.state.data.total_amt}</p>
                  </div>
                  <div className="row" style={{marginTop:30,marginLeft:70}}>
                    <div className="form-group col-xs-6 ">
                    </div>
                  </div>
                </div>
                <div align="center" style={{marginBottom:10}}>
                    <button type="button" className="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)} >Run Payroll</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const List = connect(mapStateToProps)(Confirmation);

export default List;
