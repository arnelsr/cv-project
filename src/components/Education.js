import React from 'react';
import '../styles/App.css';
import {Component} from 'react';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props){
    super(props);
    this.state={
        education:{
            school:'',
            course:'',
            schoolDate:'',
            id: uniqid()
        },
        educationList:[],
    }
  };
  handleChangeEducation=(e)=>{
    //declare
    let school=document.getElementById("schoolInput").value;
    let course=document.getElementById("courseInput").value;
    let schoolDate=document.getElementById("dateInput").value;
    console.log(schoolDate)
    this.setState({
      education:{
        school:school,
        course:course,
        schoolDate:schoolDate,
        id: this.state.education.id,
      }
    })
  };
  addEducation=(e)=>{
    //declare
    e.preventDefault();
 
    this.setState({
      educationList:this.state.educationList.concat(this.state.education),
      education:{
        school:'',
        course:'',
        schoolDate:'',
        id: uniqid()
      }
    })
  };
  deleteEducation=(e)=>{
    //declare
    e.preventDefault();
    const educationId=document.getElementById("deleteButton").dataset.id
    console.log(educationId);
    //remove from array
    const educationList=this.state.educationList;
    const newEducationList=educationList.filter(item=>item.id !== educationId);
    console.log(educationList)
    console.log(newEducationList)

    this.setState({
      educationList:newEducationList,
      education:{
        school:'',
        course:'',
        schoolDate:'',
        id: uniqid()
      }
    })
  };
  render(){

     if (!this.props.preview || this.props.preview !=='Preview'){
      const educationList=this.state.educationList;
      
      const firstForm=(
       <form>
        <div className="generalFormx">
          
          <div className="col-1x">
            <label htmlFor="schoolInput">School Name:</label>
            <input
              onChange={this.handleChangeEducation}
              value={this.state.education.school} 
              type="text" 
              id="schoolInput"/>
          </div>
          <div className="col-2x">
              <label htmlFor="courseInput">Course:</label>
              <input
              onChange={this.handleChangeEducation}
              value={this.state.education.course}  
              type="text" 
              id="courseInput"/>
          </div>
          <div className="col-3x">
              <label htmlFor="dateInput">Date:</label>
              <input
              onChange={this.handleChangeEducation}
              value={this.state.education.schoolDate}  
              type="date" 
              id="dateInput"/>
          </div>
          <div className="col-4x">
            <button type="submit" onClick={this.addEducation} id="addButton" >
               Add
              </button>
            </div>
        </div>
      </form>)
      const nextForms= educationList.map((education)=>
        <form>
          <div className="generalFormx" key={education.id}>
            
            <div className="col-1x">
              <label>School Name:</label>
              <div> 
                 {education.school}
              </div>
            </div>
            <div className="col-2x">
                <label>Course:</label>
                <div> 
                  {education.course}
                </div>
            </div>
            <div className="col-3x">
                <label>Date:</label>
                <div> 
                  {education.schoolDate}
                </div>
            </div>
            <div className="col-4x">
            <button type="submit" onClick={this.deleteEducation} id="deleteButton" data-id={education.id}>
               Delete
              </button>
            </div>
          </div>
        </form>
      )                        
    return(
      <div className="generalForm2">
            <h2>Educational Background</h2>
            
            {nextForms}
            {firstForm}
            
       </div>
         
      )
    
     }
    if (this.props.preview==='Preview'){
        const educationList=this.state.educationList;
        const nextForms = educationList.map((education)=>
          
        <form>
        <div className="generalFormx">
          
          <div className="col-1x">
            <label >School Name:</label>
            <div> 
             {education.school}
            </div>
          </div>
          <div className="col-2x">
            <label>Course:</label>
            <div>{education.course}</div>
          </div>
          <div className="col-3x">
            <label >Date:</label>
            <div>{education.schoolDate}</div>
          </div>
        </div>
      </form>
        )    
        return(

            <div className="generalForm2">
                <h2>Educational Background</h2>
               
                {nextForms}
                
                
           </div>
        )
        
        
    }
  };


};

export default Education;