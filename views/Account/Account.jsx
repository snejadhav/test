import React from "react";
import axios from 'axios';
import connect from "react-redux/es/connect/connect";



const mapStateToProps = state => {
    return { data: state };
};
class User extends React.Component {
    constructor(props){
        super(props);
        this.IsEmpty=false;
    }
    static handleSubmit() {
        console.log("clicked");
    }
    state={
        personalDetails:{},
        companyDetails:{}

    };

    async componentDidMount(){
        await axios.post('http://'+ this.props.data.backendHost + ':' + this.props.data.backendPort + '/user/employer/account',{
            user: this.props.data.id
        })
            .then(response => {
                console.log("data:",response.data);
                this.setState({
                    personalDetails:response.data.personalDetails,
                    companyDetails:response.data.companyDetails
                });
            },this.forceUpdate())
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="content" style={{marginTop: 30, marginLeft: 25, marginRight: 25}}>

                <br/>
                <div className="row">
                    <div className="col-md-11 ml-xl-10" style={{marginLeft: "10px" }}>
                        <div className="card card-circle-chart" style={{marginLeft: "54px", width : "1020px", minHeight : "300px"}} >  {/*for information inside white box*/}
                            <div className="card-header" style={{marginLeft: "64px"}} >
                                <div className="card-content"  style={{minHeight: 120, marginLeft: 0}}>
                                    {this.state.personalDetails === null ?
                                        <div className="row" style={{paddingBottom: 8}}>
                                            <div className="text-center" align="center">
                                                <p> set up company to show your overview here</p>
                                            </div>
                                            <div className="text-left">
                                            </div>
                                        </div>:
                                        <div>
                                            <div className="row" style={{display:"inline",  justifyContent: "space-between"
                                            }}>
                                                <p className="text-left" style={{"font-size":"30px", marginLeft:"20px"}}>Your Details</p>
                                            </div>
                                            <div className="column">
                                                <div style={{float:"left",width:"10%"}}>
                                                    <i className="text-secondary fa fa-user-circle" style={{"font-size":"150px", "margin-left": "-20px"}}/>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div style={{float:"left",width:"257px",paddingLeft: 10}}>
                                                    <p style={{"font-size":"30px", marginLeft:"30px"}}>{this.state.personalDetails.Name}</p>
                                                    <div className="dropdown" style={{marginLeft:"50px"}}>
                                                        <button className="btn btn-default" type="button" data-toggle="dropdown" style={{background: "#000000", color: "white"}}>Employee Profile
                                                            </button>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column" style={{width:"90%"}} >
                                                <div className="row" style={{width:"50%", paddingLeft: "10px"}}>
                                                    <div style={{float:"right",width:"50%",paddingLeft: 10}}>
                                                        <h5 className="text-secondary text-left" style={{"font-size":"16px"}}>BIRTHDAY</h5>
                                                        <p className="text-left" style={{"font-size":"16px"}}>{this.state.personalDetails.birthdate}</p>
                                                    </div>
                                                    {this.state.personalDetails !== null ?
                                                        <div style={{float:"right",width:"50%",paddingLeft: 0}}>
                                                            <h5 className="text-secondary text-left" style={{"font-size":"16px"}}>EMAIL</h5>
                                                            <p className="text-left" style={{"font-size":"16px"}}>{this.state.personalDetails.email}</p>
                                                        </div>:<div> </div>}
                                                </div>
                                            </div>
                                            <button className="btn btn-success btn-fill" style={{width: "238px", height: "56px",marginLeft:"580px"}}>Edit</button>


                                        </div>
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col-md-11 ml-xl-10" >
                        <div className="card card-circle-chart" style={{width: "1020px", height: "450px", marginLeft: "64px"}}>  {/*for information inside white box*/}
                            <div className="card-header">
                                <div className="card-content" style={{minHeight: 120, width:"500px", marginLeft: 0}}>
                                    {this.state.companyDetails === null ?
                                        <div className="row" style={{paddingBottom: 8}}>
                                            <div className="text-center" align="center">
                                                <p> Your Job details are here</p>
                                            </div>
                                            <div className="text-left">
                                            </div>
                                        </div> :
                                        <div>

                                            <div className="row" style={{float: "left", paddingLeft: "10px", width:"850px",minHeight:"500px"}}>
                                                <div style={{float: "left", width : "850px"}}>
                                                    <div className="row" style={{display:"inline",  justifyContent: "space-between"
                                                    }}>
                                                        <p className="text-left" style={{"font-size":"30px", marginLeft:"80px"}}>Company Details</p>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80px"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary" style={{"font-size":"16px", marginLeft:"54px"}}>COMPANY NAME</p>
                                                            <p className="text-left" style={{"font-size":"16px", marginLeft:"54px"}}> {this.state.companyDetails.Name} </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80px"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"54px"}}>Phone</p>
                                                            <p className="text-left" style={{"font-size":"16px", marginLeft:"54px"}}>{this.state.companyDetails.phone}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80x"}}>
                                                        <div style={{float: "left", paddingLeft: 10}}>
                                                            <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"54px"}}>No of Employees</p>
                                                            <p className="text-left" style={{"font-size":"16px", marginLeft:"54px"}}>{this.state.companyDetails.empNo}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4" style={{height: "80px", marginLeft: "5px"}}>
                                                        <div className="row" style={{height: "80px"}}>
                                                            <div style={{float: "left", paddingLeft: 10}}>
                                                                <div style={{float: "left", paddingLeft: 10}}>
                                                                    <p className="text-secondary text-left" style={{"font-size":"16px", marginLeft:"54px"}}>WORK ADDRESS</p>
                                                                    <p className="text-left" style={{"font-size":"16px", marginLeft:"54px"}}>{this.state.companyDetails.address}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-success btn-fill" style={{width: "238px", height: "56px",marginLeft:"680px"}}>Edit</button>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const List = connect(mapStateToProps)(User);

export default List;
