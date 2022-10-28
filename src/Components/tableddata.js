import data from '../mydata.json';

let tickerno = ' ';
let newprices=[];
let newtimestamp=["empty array"];

let value = [];
function JsonDataDisplay(){
    const DisplayData=data.map(
        (info)=>{
            return(
            tickerno = info.tickerno,
            newtimestamp = info.timestamp,               
            newprices = info.prices 
            )
        }
    )
 
    return (
        DisplayData
    )
 }



export default JsonDataDisplay;