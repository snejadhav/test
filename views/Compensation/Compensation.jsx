import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";

const mapStateToProps = state => {
  return { data: state };
};
class Compensation extends React.Component {
  constructor(props) {
    super(props);
    console.log("In compensation",this.props.data);
  }
  state={
    title:"",
    amount:"",
    emp_type:"",
    freq:30
  };
  handleTitle(e){
    this.setState({title:e.target.value});
    console.log(this.state.title);
  }
  handleAmount(e){
    this.setState({amount:e.target.value});
    console.log(this.state.amount);
  }
  async handleSubmit(){
    store.dispatch({type:'updateCompensation',payload:this.state});
    let isCreated = await axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/employees/create', {
      data:{
        id: this.props.data.id,
        employee: this.props.data.employeeDetails,
        compensation: this.state
      }
    })
      .then(function (response) {
        if(response) {
            console.log("success", response);
            return true;
        }
      })
      .catch(function (response) {
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
                <h4 align="center" style={{marginTop:20}}>Add People</h4>
                <div style={{height:650,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8}}>
                    <form>
                      <label className="radio-inline" style={{marginLeft:40,marginRight:60}}>
                        <Link to="/employees" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}} checked/>EMPLOYEE DETAILS</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/paySchedule" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.5)'}}/>COMPENSATION</Link>
                      </label>

                    </form>
                  </div>
                  <div class="row" style={{marginTop:30}}>
                  </div>


                  <div class="row"  style={{marginTop:30,marginLeft:70}}>
                    <div class="form-group col-xs-6 ">
                      <i class="material-icons">person</i><label class="control-label " >TITLE</label><br/>
                      <input type="text" value={this.state.title} style={{border:'1px solid',width: 300,padding: 10,fontSize: 15}}
                             name="title" onChange={this.handleTitle.bind(this)} placeholder="Sr. Engineer"/>
                      <p> <br/>Lorem ipsum dolor sit amet,consectetur<br/> adipiscing elit, sed to eiusmod</p><br/>

                    </div><br/>

                    <div class="form-group  col-xs-6  ">

                      <i class="material-icons">person</i><label class="control-label " >AMOUNT</label><br/>
                      <div class="dropdown">
                        <input type="number" value={this.state.amount} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                              name="amount" onChange={this.handleAmount.bind(this)} placeholder=" "/>

                      </div>
                      <p> <br/>Lorem ipsum dolor sit amet,consectetur<br/> adipiscing elit, sed to eiusmod</p><br/>

                    </div><br/><br/>

                    <div class="form-group col-xs-6 ">
                      <i class="material-icons">today</i><label class="control-label " >EMPLOYEE TYPE</label><br/>

                      <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">john@abc.com
                          <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                        </ul>
                      </div>
                      <p> <br/>Lorem ipsum dolor sit amet,consectetur<br/> adipiscing elit, sed to eiusmod</p><br/>

                    </div><br/>

                    <div class="form-group col-xs-6 ">
                      <span class="glyphicon glyphicon-earphone"> </span><label class="control-label " >PER</label><br/>
                      <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Month
                          <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                        </ul>
                      </div>
                      <p> <br/>Lorem ipsum dolor sit amet,consectetur<br/> adipiscing elit, sed to eiusmod</p><br/>

                    </div><br/>


                  </div>

                </div>
                <div  align="center" style={{marginBottom:10}}>
                  <button type="button" class="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)}>SAVE AND PROCEED</button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>




    )
  }
}
const List = connect(mapStateToProps)(Compensation);

export default List;
