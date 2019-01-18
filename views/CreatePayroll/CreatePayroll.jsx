import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {store} from "../../index";

const mapStateToProps = state => {
  return { data: state };
};
class CreatePayroll extends React.Component {
  constructor(props) {
    super(props);
    console.log("In Payroll",this.props.data);

  }
  state={
      data:{},
      tableData:[],
      empReceived:[]
  };
  async componentDidMount(){
      axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/employee/payroll/eligible/list',{
          user: this.props.data.id
      })
      .then(response => {
          this.setState({empReceived:response.data});
          this.state.empReceived.map((employee, i) => {
            employee.id = i;
            this.state.tableData.push(employee);
          });
      })
      .catch(error => {
          console.log(error);
      });
  }

  handleHours(id, e){
    this.state.tableData[id].hours = parseInt(e.target.value);
    //e.target.value
  }

  handleTaxes(id, e){
    this.state.tableData[id].taxes = parseInt(e.target.value);
  }

  handleBenefits(id, e){
      this.state.tableData[id].benefits = parseInt(e.target.value);
  }

  handleSubmit(e){
    // this.setState({data:{id:this.props.data.id}});
      this.state.data.id = this.props.data.id;
    console.log(this.state);
    store.dispatch({type:'updatePayroll',payload:this.state});
  }
  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor:'white',paddingLeft:10,marginTop:30,marginLeft:70,marginRight:70}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4 align="center" style={{marginTop:20}}>Run Payroll</h4>
                <div style={{height:650,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8}}>
                    <form>
                      <label className="radio-inline" style={{marginLeft:40,marginRight:60}}>
                        <Link to="/addPayroll" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}} checked/>HOURS & EARNINGS</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/reviewPayroll" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}}/>REVIEW AND SUBMIT</Link>
                      </label>

                    </form>
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
                      {this.state.empReceived.map((dynamicComponent, i) => {
                          console.log(dynamicComponent);
                          return(
                              <tr id={i}>
                                  <td><strong>{dynamicComponent.name}</strong><br/><br/>{dynamicComponent.designation}</td>
                                  <td><input type="number" maxLength="4" style={{width: 80,height:40}} onChange={(e) => this.handleHours(i, e)} /></td>
                                  <td>{dynamicComponent.payAmt}</td>
                                  <td><input type="number" maxLength="4" style={{width: 80,height:40}} onChange={(e) => this.handleTaxes(i, e)}/></td>
                                  <td><input type="number" maxLength="4" style={{width: 80,height:40}} onChange={(e) => this.handleBenefits(i, e)}/></td>
                                  <td> - </td>
                              </tr>
                          )
                      })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row" style={{marginTop:30,marginLeft:70}}>
                    <div className="form-group col-xs-6 ">
                    </div>
                  </div>
                </div>
                <div align="center" style={{marginBottom:10}}>
                  <Link to={{pathname: "/reviewPayroll"}}>
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

const List = connect(mapStateToProps)(CreatePayroll);

export default List;
