import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";


const mapStateToProps = state => {
  return { data: state };
};

class Payroll extends React.Component {
  constructor(props) {
    super(props);
    this.user="";
    this.new=[];
    console.log("In Payroll:",this.props.data);

  }
  //data=[];
  state={
    data:[],
    arr:[]
  };

  async componentDidMount(){
    console.log("In payrolls:",this.props);
    await axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/payroll/list',{
        user: this.props.data.id
      })
      .then(response => {
        console.log(response);
        this.setState({data:response.data});
      },this.forceUpdate())
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
                      <h4> Payrolls </h4>
                    </div>
                  </div>
                  <div className="card-content" style={{minHeight: 120, marginLeft: 0}}>
                    <div style={{position: "absolute",top: 0, right: 30}}>
                      <Link to={{pathname: "/addPayroll"}}>
                        <button type="button" className="btn btn-success btn-fill"><strong>+Add</strong></button>
                      </Link>
                    </div>
                    {this.state.data ?
                      <div><p className="text-left"> </p>

                        <table className="table" style={{paddingTop: 20}}>
                          <thead className="thead-light">
                          <tr>
                            <th>ID</th>
                            <th>Total Amount</th>
                            <th>Last Pay Date</th>
                            <th></th>
                          </tr>
                          </thead>
                          <tbody style={{textAlign: "left"}}>
                          {this.state.data.map((dynamicComponent, i) => {
                            console.log(dynamicComponent);
                            return(
                              <tr>
                                <td>{dynamicComponent.id}</td>
                                <td>{dynamicComponent.total_amt}</td>
                                {/*<td>{dynamicComponent.last_pay_date}</td>*/}
                                <td></td>
                                  <td><Link to={{ pathname: "/confirmation/" + dynamicComponent.id }}>view Payroll</Link></td>
                              </tr>
                            )
                          })}
                          </tbody>
                        </table>
                      </div>
                      :
                      <div className="row" style={{paddingBottom: 8}}>
                        <div className="text-center" align="center">
                          <p style={{align:"center"}}> No  payrolls found. You can add payrolls.</p>
                        </div>
                      </div>
                    }
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
const List = connect(mapStateToProps)(Payroll);

export default List;
