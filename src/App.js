import logo from './img.png';
import { Line } from 'react-chartjs-2';
import './App.css';
import LineChart from './Components/LineChart.js'
import React, {useState, useEffect, useRef} from 'react';


function App() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  var data  = require('./mydata.json')
  console.log(data)
  
  
  return (
    
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={logo}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3><br/><span>Select Ticker</span></h3>
          <ul>
            <getOptions/>
          </ul>
        </div>
      </div>
      <div className = "chart" style={{ height:'900px', left:'30px',top:'300px'}}>
        <LineChart/>
        </div>
    </div>
  );
  function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <a> {props.text} </a>
      </li>  
    );
  }
  function getOptions(){
    for(let i = 0; i < data.length; i++){
      return(<DropdownItem text={data[i].tickerno}/>)  
    } 
  }
}

export default App;
