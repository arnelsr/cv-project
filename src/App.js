
import './styles/App.css';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

import React, {Component} from 'react';
//dtona: try array

class App extends Component {
  constructor(){
    super();
    this.state={
      preview:'n',
      buttonValue:'Preview',
      experience:{
        text:'',
        id: uniqid()
      },
      experienceList:[],
    };
  }
  
  changePreviewButton =(e)=>{
    e.preventDefault();
    
   let preview=document.getElementById("previewButton").textContent;
   let buttonValue='Preview';
   if (this.state.buttonValue === 'Preview') {
      buttonValue='Update CV'
   }
     this.setState({
       preview:preview,
       buttonValue:buttonValue,
    });
  };

  render(){
    return     <div className="App">
    <header className="App-header">
      <h1>CV Generator App</h1>
    </header>
    <div className="App-content">
      <div className="col-2 button"> 
              <button type="submit" onClick={this.changePreviewButton} id="previewButton">
               {this.state.buttonValue}
              </button>
      </div>
      <GeneralInfo preview={this.state.preview}/>
      <Education preview={this.state.preview}/>
      <Experience preview={this.state.preview}/>
    </div>
    <footer className="App-footer">
      @arnelsr
    </footer>
  </div>
  }
}
export default App;
