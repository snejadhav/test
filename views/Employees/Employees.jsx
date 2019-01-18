import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
const axios = require('axios');


const mapStateToProps = state => {
  return { data: state };
};

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.IsEmpty = false;
    this.user="";
    this.new=[];
    console.log("In Employees:",this.props.data);

  }
  state={
    data:[],
    arr:[]
  };

  componentDidMount(){
    console.log("In employees:",this.props);
    axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/employees/list',{
        user: this.props.data.id
      })
      .then(response => {
        this.setState({data:response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="content" style={{marginTop: 30, marginLeft: 70, marginRight: 70}}>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-circle-chart">
                  <div className="card-header">
                    <div className="card-title">
                      <h4> Employees </h4>
                    </div>
                  </div>
                  <div className="card-content" style={{minHeight: 120, marginLeft: 0}}>
                    <div style={{position: "absolute",top: 0, right: 30}}>
                      <Link to={{pathname: "/addEmployee"}}>
                        <button type="button" className="btn btn-success btn-fill"><strong>+Add</strong></button>
                      </Link>
                    </div>
                    {this.IsEmpty ?

                      <div className="row" style={{paddingBottom: 8}}>
                        <div className="text-center" align="center">
                          <p style={{align:"center"}}> No employees found. You can add Employees</p>
                        </div>
                        <div className="text-right">
                          <button type="button" className="btn btn-success btn-fill">Add</button>

                        </div>
                      </div> :
                      <div><p className="text-left"> </p>
                          <table className="table" style={{paddingTop: 20}}>
                              <thead className="thead-light">
                              <tr>
                                  <th>Name</th>
                                  <th>Designation</th>
                                  <th>Amount</th>
                              </tr>
                              </thead>
                              <tbody style={{textAlign: "left"}}>
                              {this.state.data.map((dynamicComponent, i) => {
                                  console.log(dynamicComponent);
                                  return(
                                      <tr>
                                          <td>{dynamicComponent.name}</td>
                                          <td>{dynamicComponent.designation}</td>
                                          <td>{dynamicComponent.payAmt}</td>
                                      </tr>
                                  )
                              })}
                              </tbody>
                          </table>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const List = connect(mapStateToProps)(Employees);

export default List;
