// pages/index.tsx
import React from 'react';
import Graph from '@/components/Coach/BarGraph';
import LineGraph from '@/components/Coach/LineGraph';
const Home: React.FC = () => {
  const data = {
    labels: ['Jan','','Mar','','May','','Jul','','Sep','','Nov','',],
    datasets: [
        {
            label: 'Users Attendance',
            data: [350,400,240,380,490,360,270,350,300,400,500,450],
          },
      ],
    };

    const data1 = {
        labels: ['Mon','Tue','Wed','Thru','Fri','Sat','Sun'],
        datasets: [
          {
            label: 'Line Dataset 1',
            data: [2,5,7,6],
          },
          {
            label: 'Line Dataset 2',
            data: [4,8,5],
          },
        ],
      };
    

    const colors = ['lightgreen', 'lightblue'];

  return (
    <>
    <div style={{width:'90%', border:'1px solid #A1A1A1', borderRadius:'10px',padding:'15px'}}>
      
      <Graph data={data} colors={colors}/>
    </div>
    <div style={{width:'90%', border:'1px solid #A1A1A1', borderRadius:'10px',padding:'15px'}}>
      
<LineGraph data1={data1} colors={colors} />
  </div>
  </>

  );
};

export default Home;
