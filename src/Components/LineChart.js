import { React} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)
function LineChartDisplay(props){
  var info = require('../mydata.json');
  console.log("child",info);
  const data={
    labels: info[0].timestamp,
    datasets:[]
  }

  console.log("array1", props.array1);
  if (props.array1.length===0 ){
    for (let i = 0; i < info.length; i++) {
      data.datasets.push({
        label: info[i].tickerno,
        data: info[i].prices,
        borderColor: 'blue',
        backgroundColor: 'yellow',
      })
    }
  } 
  else {
    for (let i = 0; i < props.array1.length; i++) {
      data.datasets.push({
        label: props.array2[i],
        data: info[props.array1[i]].prices,
        borderColor: 'blue',
        backgroundColor: 'yellow',
      })
    }
  }
  
  // data.datasets.push({
  //   label: info[props.text].tickerno,
  //   data: info[props.text].prices,
  //   borderColor: 'blue',
  //   backgroundColor: 'yellow',
  // })
  return(
    <div>
      <Line data={data}>Hello</Line>
    </div>
  )
}


export default LineChartDisplay;