import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';



const mapStateToProps = state => {
  return { data: state };
};

class PaySchedule extends React.Component {
  constructor(props) {
    super(props);
   // console.log("paySchedule:",props.location.data);
      this.toggle = this.toggle.bind(this);
    console.log("In Payschedule:",this.props.data);
  }
  state={
    payPeriod:"",
    firstPayDate:"",
    dayOfMonth:"",
      dropdownOpen: false
  };
handlePayPriod(e){
  this.setState({payPeriod:e.target.value});
 // console.log(this.state.payPeriod);
}
handleFirstPayDate(e){
  this.setState({firstPayDate:e.target.value});
  // console.log(this.state.firstPayDate);
}
handleDayofMonth(e){
  this.setState({dayOfMonth:e.target.value});
   //console.log(this.state.dayOfMonth);
}
handleSubmit(){
  console.log("payschedule-final",this.state);
  store.dispatch({type:'updatePaySchedule',payload:this.state});

}
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor: 'white', paddingLeft: 10, marginTop: 30, marginLeft: 70, marginRight: 70}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4 align="center" style={{marginTop: 20}}>Set up Company</h4>
                <div style={{height: 650, marginTop: 30}}>
                  <div className="row" align="center" style={{paddingBottom: 8, alignSelf: 'center',marginLeft:70}}>
                    <form>
                      <label className="radio-inline" style={{marginLeft: 40, marginRight: 60}}>
                        <Link to="/setupCompany" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />COMPANY
                          INFO</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight: 60}}>
                        <Link to="/taxinfo" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />TAX INFO</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight: 60}}>
                        <Link to="/paySchedule" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} checked/>PAY SCHEDULE</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight: 60}}>
                        <Link to="/bankAccount" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />BANK
                          ACCOUNT</Link>
                      </label>
                    </form>
                  </div>
                  <div class="row" style={{marginTop:30,marginLeft:70}}>
                    <div class="form-group col-xs-6 ">
                        <i className="material-icons">today</i><label className="control-label ">FIRST PAY
                        DATE</label><br/>
                        <div style={{height:40,width:500}}>
                            <select  style={{height:40,width:300}}>
                                <option value="Orange">Weekly</option>
                                <option value="Radish">Monthly</option>
                                <option value="Cherry">Bi-monthly</option>
                            </select>
                            <p> </p>
                        </div>
                        <br/>

                    </div>
                    <br/>

                    <div class="form-group  col-xs-6  ">

                      <i class="material-icons">today</i><label class="control-label ">FIRST PAY DATE</label><br/>
                      <div class="dropdown">
                        <input type="date" value={this.state.firstPayDate} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                        name="firstPayDate" onChange={this.handleFirstPayDate.bind(this)}/>

                      </div>

                    </div>
                    <br/><br/>


                    <br/>


                  </div>

                </div>
                <div align="center" style={{marginBottom:10}}>
                  <Link to={{pathname: "/bankAccount"}}>
                  <button type="button" class="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)}>PROCEED</button>
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
const List = connect(mapStateToProps)(PaySchedule);

export default List;