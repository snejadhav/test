import React from "react";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";


const mapStateToProps = state => {
  return { data: state };
};
class Taxinfo extends React.Component {
  constructor(props) {
    super(props);
    console.log("In Taxinfo state:",this.props.data);

  }
  state = {
    federalEin:"",
    eddAccountNumber:"",
    companyType:"",
    suiRate:"",
    depositSchedule:"",
    ettRate:"",
  };


  handleFederalEin(e){
    this.setState({federalEin:e.target.value});

  }
  handleEddAccNum(e){
    this.setState({eddAccountNumber:e.target.value});

  }
  handleCompanytype(e){
    this.setState({companyType:e.target.value});
  }
  handleSuiRate(e){
    this.setState({suiRate:e.target.value});
  }
  handleDepositSchedule(e){
    this.setState({depositSchedule:e.target.value});
  }
  handleEttRate(e){
    this.setState({ettRate:e.target.value});
  }
  handleSubmit(){
    store.dispatch({type:'updateTaxInfo',payload:this.state});
  }


  render() {
    return (
    <div className="container-fluid">
      <div>
      </div>

        <div className="row"
             style={{backgroundColor:'white',paddingLeft:10,marginTop:30,marginLeft:70,marginRight:70}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4 align="center" style={{marginTop:20}}>Set up Company</h4>
                <div style={{height:650,marginTop:30}}>
                  <div className="row" align="center" style={{paddingBottom: 8,alignSelf:'center',marginLeft:70}}>
                    <form>
                      <label className="radio-inline" style={{marginLeft:40,marginRight:60}}>
                        <Link to="/setupCompany" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />COMPANY
                          INFO</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/taxinfo" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} checked />TAX INFO</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/paySchedule" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio"style={{transform:'scale(1.8)'}}  />PAY SCHEDULE</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/bankAccount" style={{color: 'black'}} activeStyle={{color: 'red'}}>
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />BANK
                        ACCOUNT</Link>
                      </label>
                    </form>
                  </div>
                  <div className="row" style={{marginTop:30,marginLeft:70}}>
                    <div className="form-group col-xs-6 " style={{marginBottom:70}}>
                      <h6><strong>FEDERAL TAX SETUP</strong></h6><br/>
                      <i className="material-icons">location_city</i> <label className="control-label ">FEDERAL
                      EIN NUMBER*</label><br/>
                      <input type="text"  value={this.state.federalEin} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                          name="federalEin" onChange={this.handleFederalEin.bind(this)}   placeholder="xx xxx-1234"/>

                    </div>

                    <div className="form-group  col-xs-6  " style={{marginBottom:70}}>
                      <h6><strong>CALIFORNIA TAX SETUP</strong></h6><br/>

                      <i className="material-icons">location_city</i><label className="control-label ">EDD ACCOUNT
                      NUMBER*</label><br/>
                      <input type="number"  value={this.state.eddAccountNumber} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                          name="eddAccountNumber" onChange={this.handleEddAccNum.bind(this)}   placeholder="xx xxx-1234"/>

                    </div>
                    <br/><br/>

                    <div className="form-group col-xs-6 " style={{marginBottom:70}}>
                        <i className="material-icons">today</i><label className="control-label ">
                        COMPANY TYPE</label><br/>
                        <div style={{height:40,width:500}}>
                            <select  style={{height:40,width:300}}>
                                <option value="Orange">s-corp</option>
                                <option value="Radish">c-corp</option>
                                <option value="Cherry">LLC</option>
                            </select>
                            <p> </p>
                        </div>
                        <br/>

                    </div>

                    <div className="form-group  col-xs-6  " style={{marginBottom:70}}>

                      <i className="material-icons">equalizer</i><label className="control-label ">EMPLOYER SUI RATE</label><br/>
                      <input type="number"  value={this.state.suiRate} style={{border:'1px solid',width: 300,padding: 10, fontsize: 15}}
                         name="suiRate" onChange={this.handleSuiRate.bind(this)}    placeholder="Ex. 3.400%"/>

                    </div>
                    <br/><br/>



                    <div className="form-group  col-xs-6  " style={{marginBottom:70}}>
                      <i className="material-icons">equalizer</i><label className="control-label ">EMPLOYER ETT
                      RATE*</label><br/>
                      <input type="number" value={this.state.ettRate} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                           name="ettRate" onChange={this.handleEttRate.bind(this)}  placeholder="Ex. 0.1%"/>

                    </div>
                    <br/><br/>


                  </div>

                </div>
                <div align="center" style={{marginBottom:10}}>
                  <Link to={{pathname: "/paySchedule"}}>
                  <button type="button" className="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)}>PROCEED</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    )
  }
}
const List = connect(mapStateToProps)(Taxinfo);

export default List;
