import React from 'react';
import '../styles/App.css';
import {Component} from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props){
    super(props);
    this.state={
        experience:{
            company:'',
            position:'',
            tasks:'',
            startDate:'',
            id: uniqid()
        },
        experienceList:[],
    }
  };
  handleChangeExperience=(e)=>{
    //declare
    let company=document.getElementById("companyInput").value;
    let position=document.getElementById("positionInput").value;
    let tasks=document.getElementById("tasksInput").value;
    let startDate=document.getElementById("startDate").value;
    this.setState({
      experience:{
        company:company,
        position:position,
        tasks:tasks,
        startDate:startDate,
        id: this.state.experience.id,
      }
    })
  };
  addExperience=(e)=>{
    //declare
    e.preventDefault();
 
    this.setState({
      experienceList:this.state.experienceList.concat(this.state.experience),
      experience:{
        company:'',
        position:'',
        tasks:'',
        startDate:'',
        id: uniqid()
      }
    })
  };
  deleteExperience=(e)=>{
    //declare
    e.preventDefault();
    const experienceId=document.getElementById("deleteExperienceButton").dataset.id
    console.log(experienceId);
    //remove from array
    const experienceList=this.state.experienceList;
    const newExperienceList=experienceList.filter(item=>item.id !== experienceId);
    console.log(experienceList)
    console.log(newExperienceList)

    this.setState({
      experienceList:newExperienceList,
      experience:{
        company:'',
        position:'',
        tasks:'',
        startDate:'',
        id: uniqid()
      }
    })
  };
  render(){

     if (!this.props.preview || this.props.preview !=='Preview'){
      const experienceList=this.state.experienceList;
      
      const firstForm=(
       <form>
        <div className="generalForm5">
          
          <div className="col-15">
            <label htmlFor="companyInput">Company Name:</label>
            <input
              onChange={this.handleChangeExperience}
              value={this.state.experience.company} 
              type="text" 
              id="companyInput"/>
          </div>
          <div className="col-25">
              <label htmlFor="positionInput">Position:</label>
              <input
              onChange={this.handleChangeExperience}
              value={this.state.experience.position}  
              type="text" 
              id="positionInput"/>
          </div>
          <div className="col-35">
              <label htmlFor="tasksInput">Tasks:</label>
              <input
              onChange={this.handleChangeExperience}
              value={this.state.experience.tasks}  
              type="text" 
              id="tasksInput"/>
          </div>
          <div className="col-45">
              <label htmlFor="startDate">Start Date:</label>
              <input
              onChange={this.handleChangeExperience}
              value={this.state.experience.startDate}  
              type="date" 
              id="startDate"/>
          </div>
          <div className="col-55">
            <button type="submit" onClick={this.addExperience} id="addExperienceButton" >
               Add
              </button>
            </div>
        </div>
      </form>)
      const nextForms= experienceList.map((experience)=>
        <form>
          <div className="generalForm5" key={experience.id}>
            
            <div className="col-15">
              <label>Company Name:</label>
              <div> 
                 {experience.company}
              </div>
            </div>
            <div className="col-25">
                <label>Position:</label>
                <div> 
                  {experience.position}
                </div>
            </div>
            <div className="col-35">
                <label>Tasks:</label>
                <div> 
                  {experience.tasks}
                </div>
            </div>
            <div className="col-45">
                <label>Start Date:</label>
                <div> 
                  {experience.startDate}
                </div>
            </div>
            <div className="col-55">
            <button type="submit" onClick={this.deleteExperience} id="deleteExperienceButton" data-id={experience.id}>
               Delete
              </button>
            </div>
          </div>
        </form>
      )                        
    return(
      <div className="generalForm2">
            <h2>Work Experience</h2>
            
            {nextForms}
            {firstForm}
            
       </div>
         
      )
    
     }
    if (this.props.preview==='Preview'){
        const experienceList=this.state.experienceList;
        const nextForms = experienceList.map((experience)=>
          
        <form>
        <div className="generalForm5">
          
          <div className="col-15">
            <label >Company Name:</label>
            <div> 
             {experience.company}
            </div>
          </div>
          <div className="col-25">
            <label>Position:</label>
            <div>{experience.position}</div>
          </div>
          <div className="col-35">
            <label>Title:</label>
            <div>{experience.title}</div>
          </div>
          <div className="col-45">
            <label >Start Date:</label>
            <div>{experience.startDate}</div>
          </div>
        </div>
      </form>
        )    
        return(

            <div className="generalForm2">
                <h2>Work Experience</h2>
               
                {nextForms}
                
                
           </div>
        )
        
        
    }
  };


};

export default Experience;