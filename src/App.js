import logo from './img.png';
import { Line } from 'react-chartjs-2';
import './App.css';
import LineChart from './Components/LineChart.js'
import React, {useState, useEffect, useRef} from 'react';


function App() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    console.log("UseEffect Entered");
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

  const rows=[];
  const lineArray1=[];
  const lineArray2=[];
  let temp='';
  
  var data  = require('./mydata.json')
  console.log(data)
  function handleCheckboxChange(event) {
    // lineArray1.push(event.target.value);
    temp = data[event.target.value];
    if (lineArray2.includes(temp.tickerno)){
      const index = lineArray2.indexOf(temp.tickerno);
      lineArray2.splice(index, 1);
      lineArray1.splice(index,1);
    } else {
      lineArray2.push(temp.tickerno);
      lineArray1.push(event.target.value);
    }
    console.log("LineArray1:", lineArray1)
    console.log("LineArray2:", lineArray2)
  }

  function DropdownItem(props){
    return(
      <div>
        <label><input type="checkbox" value={props.index} onChange={handleCheckboxChange}/>{props.text}</label>
      </div>
    );
  }
  function Getoptions(){
    for(let i = 0; i < data.length; i++){
      rows.push(<DropdownItem text={data[i].tickerno} index={i}/>);
    }
    return rows;
  }
  
  return (
    
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={logo}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <p><br/><span>Select Ticker</span></p>
          <ul>
            <Getoptions/>
          </ul>
          
        </div>
      </div>
      <div className = "chart" style={{ height:'900px', left:'30px',top:'300px'}}>
        <LineChart array1={lineArray1} array2={lineArray2}/>
        </div>
    </div>
  );
  
}

export default App;
