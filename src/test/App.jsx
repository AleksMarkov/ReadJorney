import React from 'react';
import Chart from './Chart/Chart';

const data = [
  {
    date: '21.10.2023',
    pages: 42,
    percentage: '7.6',
    time: '29 minutes',
    speed: '45',
  },
  {
    date: '19.10.2023',
    pages: 87,
    percentage: '10.5',
    time: '40 minutes',
    speed: '50',
  },
  {
    date: '19.10.2023',
    pages: 87,
    percentage: '1.04',
    time: '4 minutes',
    speed: '37',
  },
];

function App() {
  return (
    <div>
      <Chart data={data} />
    </div>
  );
}

export default App;
