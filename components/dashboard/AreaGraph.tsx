'use client'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



const AreaGraph = () => {
   const options:any = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
         y: {
            display: false,
            border: {
               display: true,
               width: 2,
               color: 'rgba(232, 237, 223, .25)',
            },
            ticks: {
               callback: (value:any) => '$' + value,
               color:'rgba(232, 237, 223, .55)',
               font: {
                  size: 12,
               }
            },
         },
         x: {
            display: false,
            border: {
               display: true,
               width: 2,
               color: 'rgba(232, 237, 223, .25)',
            },
            ticks: {
               color:'rgba(232, 237, 223, .55)',
               font: {
                  size: 12,
               }
            },
         }
      },
      plugins: {
         legend: {
            display: false
         },
         tooltip: {
            callbacks: {
               label: (ctx: any) => {
                  const spendList = ctx.chart.data.datasets[0].data
                  const total = spendList.reduce((a:number,b:number) => a + b, 0)
                  return '$' + total
               }
            }
         }
      },
   };
   
   const data:any = {
     labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
     datasets: [
       {
         fill: false,
         tension: .5,
         
         data: [90,370,560],
         pointRadius: (ctx:any) => {
            const pointLength = ctx.chart.data.datasets[0].data.length - 1
            const pointsArr = []

            for (let i = 0; i <= pointLength; ++i) {
               if (i === pointLength)
                  pointsArr.push(5)
               else
                  pointsArr.push(0)
            }
            return pointsArr
         },
         borderColor: '#F5CB5C',
         backgroundColor: '#F5CB5C',
       },
       {
         fill: true,
         tension: .3,
         data: [120,270,300,610,900,547,234],
         pointRadius: 0,
         borderColor: 'rgba(53, 162, 235, 0.25)',
         backgroundColor: 'rgba(53, 162, 235, 0.25)',
       },
     ],
   };

   return (
      <>
         <h2 className="absolute top-4 left-4 flex flex-col text-extra-light">
            Current Spending 
            <p>$1020</p>
         </h2>
         <Line options={options} data={data} />
      </>
   )
}

export default AreaGraph