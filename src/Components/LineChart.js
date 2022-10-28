import { React} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)
function LineChartDisplay(){
  var info = require('../mydata.json');
  console.log(info);
  const data={
    labels: info[0].timestamp,
    datasets:[]
  }

  for (let i = 0; i < info.length; i++) {
    data.datasets.push({
      label: info[i].tickerno,
      data: info[i].prices,
      borderColor: 'blue',
      backgroundColor: 'yellow',
    })
  }
  return(
    <div>
      <Line data={data}>Hello</Line>
    </div>
  )
}


export default LineChartDisplay;