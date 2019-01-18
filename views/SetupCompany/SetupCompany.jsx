import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../../index";



const mapStateToProps = state => {
  return { data: state };
};

class SetupCompany extends React.Component {
  constructor(props){
    super(props);
    console.log("In Setupcompany",this.props.data);
  }
  state = {
    companyName: "",
    companyPhone: "",
    line1: "",
    line2: "",
    city: "",
    state1: "",
    zip: "",
    name:"",
    position:"",
    email:"",
    phone:"",
    companyAddress: {
      line1: "",
      line2: "",
      city: "",
      state1: "",
      zip: "",
    },
    companySignatory: {
      name:"",
      position:"",
      email:"",
      phone:""
    }
  };
  handleSubmit() {
    const sign = this.state.companySignatory;
    sign.name = this.state.name;
    sign.email = this.state.email;
    sign.position = this.state.position;
    sign.phone = this.state.phone;
    this.setState({companySignatory:sign});
    const add = this.state.companyAddress;
    add.line1 = this.state.line1;
    add.line2 = this.state.line2;
    add.state1 = this.state.state1;
    add.city = this.state.city;
    add.zip = this.state.zip;
    this.setState({companyAddress:add});
    store.dispatch({type:'updateCompany',payload:this.state});
  }
  handleCompany(e){
    //return { type: "CHANGE_COMPANY", payload: name }
    this.setState({companyName: e.target.value});
    //console.log(this.state.companyName);
  }
  handleCompanyPhone(e){
    this.setState({companyPhone:e.target.value});
    //console.log(this.state.companyPhone);
  }

  handleCompanyAddress1(e){
    this.setState({line1:e.target.value});
    //console.log(this.state.line1);
  }
  handleCompanyAddress2(e){
    this.setState({line2:e.target.value});
    //console.log(this.state.line2);
  }
  handleAddressCity(e){
    this.setState({city:e.target.value});
    // console.log(this.state.city);
  }
  handleAddressState(e){
    this.setState({state1:e.target.value});
    //console.log(this.state.State1);
  }
  handleAddressZip(e){
    this.setState({zip:e.target.value});
    //console.log(this.state.zip);
  }
  handleName(e) {
    this.setState({name:e.target.value});
    //console.log(this.state.name);
  }
  handlePosition(e){
    this.setState({position:e.target.value});
    //console.log(this.state.position);
  }
  handleEmail(e){
    this.setState({email:e.target.value});
    // console.log(this.state.email);
  }
  handlePhone(e){
    this.setState({phone:e.target.value});
    //console.log(this.state.phone);
  }


  render() {
    return (
      <div className="container-fluid">

        <div className="row"
             style={{backgroundColor:'white',paddingLeft:10,marginTop:30,marginLeft:70,marginRight:70}}>
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4 align="center" style={{marginTop:20}}>Set up Company</h4>
                <form>
                  <div style={{height:650,marginTop:30}}>
                    <div className="row" align="center" style={{paddingBottom: 8,alignSelf:'center',marginLeft:70}}>
                      <label className="radio-inline" style={{marginLeft:40,marginRight:60}}>
                        <Link to="/setupCompany" style={{color: 'black'}} >
                          <input type="radio" className="circle" name="icing"
                                 style={{transform:'scale(1.8)'}} checked/>COMPANY
                          INFO</Link>
                      </label>

                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/taxinfo" style={{color: 'black'}} >
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />TAX INFO</Link></label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/paySchedule" style={{color: 'black'}} >
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />PAY SCHEDULE</Link>
                      </label>
                      <label className="radio-inline" style={{marginRight:60}}>
                        <Link to="/bankAccount" style={{color: 'black'}} >
                          <input type="radio" name="optradio" style={{transform:'scale(1.8)'}} />BANK
                          ACCOUNT</Link>
                      </label>
                    </div>
                    <div className="row" style={{marginTop:30,marginLeft:70}}>
                      <div className="form-group col-xs-6 ">
                        <i className="material-icons ">location_city</i>
                        <label className="control-label ">COMPANY NAME</label><br/>
                        <input type="text" style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                               name="companyName"  value={this.state.companyName} placeholder="AB Company" onChange={this.handleCompany.bind(this)}/>
                        <p> your company name</p><br/>

                      </div>

                      <div className="form-group  col-xs-6 ">
                        <i className="material-icons">local_phone</i>
                        <label className="control-label ">COMPANY PHONE*</label><br/>
                        <input type="number" value={this.state.companyPhone} style={{border:'1px solid',width: 300,padding: 10, fontSize: 15}}
                               name="companyPhone"     placeholder="+1 (112) 1234" onChange={this.handleCompanyPhone.bind(this)}/>
                        <p>company phone</p><br/>

                      </div>
                      <br/><br/>
                    </div>
                    <div className="row" style={{marginTop:30,marginLeft:70}}>

                      <div className="form-group col-xs-6">
                        <i className="material-icons">place</i>
                        <label className="control-label">COMPANY ADDRESS</label><br/>
                        <input type="text" value={this.state.line1} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="line1"   onChange={this.handleCompanyAddress1.bind(this)} placeholder="Address Line 1 "/><br/><br/>
                        <input type="text" value={this.state.line2} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="line2"   onChange={this.handleCompanyAddress2.bind(this)} placeholder="Address Line 2 "/><br/><br/>
                        <input type="text" value={this.state.city} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="city"  onChange={this.handleAddressCity.bind(this)} placeholder=" City"/><br/><br/>
                        <input type="text" value={this.state.State1} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="State1"   onChange={this.handleAddressState.bind(this)} placeholder="State "/><br/><br/>
                        <input type="text" value={this.state.zip} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="zip" onChange={this.handleAddressZip.bind(this)} placeholder=" Zip"/><br/>
                        <p>where your company is located.You can add <br/>
                          multiple addresses later.</p>
                      </div>
                      <div className="form-group col-xs-6">
                        <i className="material-icons">person</i>
                        <label className="control-label">COMPANY SIGNATORY</label><br/>
                        <input type="text" value={this.state.name} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="name" onChange={this.handleName.bind(this)} placeholder="John doe "/><br/>
                        <p>Person's name</p><br/>
                        <input type="text" value={this.state.position} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="position" onChange={this.handlePosition.bind(this)}   placeholder="President "/><br/>
                        <p>Position</p><br/>
                        <input type="text"  value={this.state.email} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="email" onChange={this.handleEmail.bind(this)}    placeholder=" John@doe.com"/><br/>
                        <p>Email</p><br/>
                        <input type="text" value={this.state.phone} style={{border:'1px solid black',width: 300,padding: 10, fontSize: 15}}
                               name="phone" onChange={this.handlePhone.bind(this)}    placeholder="+1 416-000-0000 "/><br/>
                        <p>Phone</p><br/>
                        <br/><br/>
                      </div>
                    </div>
                  </div>
                  <div align="center" style={{marginBottom:8}}>
                    <Link to={{pathname: "/taxinfo"}}>
                      <button type="button" className="btn btn-success btn-fill" onClick={this.handleSubmit.bind(this)}>PROCEED</button>
                    </Link>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>

      </div>





    );
  }
}

const List = connect(mapStateToProps)(SetupCompany);

export default List;
