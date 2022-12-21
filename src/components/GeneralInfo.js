import React from 'react';
import '../styles/App.css';
import {Component} from 'react';

class GeneralInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      generalInfo:{
      name:'',
      email:'',
      phone:'',
      },
    }
 };

 handleChangeGeneralInfo=(e)=>{
    //declare
    let name=document.getElementById("nameInput").value;
    let email=document.getElementById("emailInput").value;
    let phone=document.getElementById("phoneInput").value;
    this.setState({
      generalInfo:{
        name:name,
        email:email,
        phone:phone,
      }
    })
 };

 render(){
     if (!this.props.preview || this.props.preview !=='Preview'){
      const returnForm=(
        <form>
          <div className="generalForm">
            <div><h2>General Information</h2></div>
            <div className="col-1">
              <label htmlFor="nameInput">Name:</label>
              <input 
                onChange={this.handleChangeGeneralInfo}
                value={this.state.generalInfo.name}
                type="text" 
                id="nameInput"/>
            </div>
            <div className="col-2">
                <label htmlFor="emailInput">Email:</label>
                <input 
                 onChange={this.handleChangeGeneralInfo}
                 value={this.state.generalInfo.email}
                type="text" 
                id="emailInput"/>
            </div>
            <div className="col-3">
                <label htmlFor="phoneInput">Phone:</label>
                <input 
                 onChange={this.handleChangeGeneralInfo}
                 value={this.state.generalInfo.phone}
                type="text" 
                id="phoneInput"/>
            </div>
          </div>
        </form>
      )
      return(
        <div>
        {returnForm}
        </div>
      )
     }; 
     if (this.props.preview==='Preview'){
        const returnForm=(
         <form>
           <div className="generalForm">
             <div><h2>General Information</h2></div>
             <div className="col-1">
               <label >Name:</label>
               <div> 
                {this.state.generalInfo.name}
               </div>
             </div>
             <div className="col-2">
               <label>Email:</label>
               <div>{this.state.generalInfo.email}</div>
             </div>
             <div className="col-3">
               <label >Phone:</label>
               <div>{this.state.generalInfo.phone}</div>
             </div>
           </div>
         </form>
        )
       return(
        <div>
        {returnForm}
        </div>
      )
    }
  };
};

export default GeneralInfo;
