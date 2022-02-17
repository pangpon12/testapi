import logo from './logo.svg';
import './App.css';

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from "react";

import axios from 'axios';

function App() {
  const [pvA, setpvA] = useState("");
  const [pvB, setpvB] = useState("");
  const [pvC, setpvC] = useState("");
  const [pvD, setpvD] = useState("");
  const [pvG, setpvG] = useState("");



  const [data6, setdata] = useState(''); 

  const [age, setAge]=  useState('');
  const [salary, setSalary] =useState('');
  const [hobby, setHobby]= useState('');
                             
                              
                            


  useEffect (() => {
  axios.get('https://script.google.com/macros/s/AKfycby1V7NKaK0zlQyfu1ow84q4MdCJUU8EsYv2VK0BTJmJm9iDW6dKR03NmvxWltUCjWcuCg/exec?action=getUsers')
  .then (res=> console.log(res)) ;

  }, []);

var data12 = parseInt( pvA)/ parseInt( pvB) ;


  const data = [
    {
      name: '25 Hz',
    
      ค่าความชัน: pvA,
      amt: 2400,
    },
    {
      name: '50 Hz',
     
      ค่าความชัน: pvB,
      amt: 2210,
    },
    {
      name: '75 Hz',
   
      ค่าความชัน: pvC,
      amt: 2290,
    },
    {
      name: 'Page D',
   
      ค่าความชัน: pvD,
      amt: 2000,
    },
    {
      name: 'Page E',
    
      ค่าความชัน: pvG,
      amt: 2181,
    },
   
  ];
  



  return (



    <div>
{data12}

{data6}
      <label>Page A:
        <input 
         type="number" 
          value={pvA}
           onChange={(event) => {
                setpvA(event.target.value)
              }}
        />

      </label>
      <input type="submit" />

<br></br>

      <label>Page B:
        <input 
          type="number" 
          value={pvB}
           onChange={(event) => {
                setpvB(event.target.value)
              }}
        />

      </label>
      <input type="submit" />

      <br></br>
      <label>Page C:
        <input 
         type="number" 
          value={pvC}
           onChange={(event) => {
                setpvC(event.target.value)
              }}
        />

      </label>
      <input type="submit" />

      <br></br>
      <label>Page D:
        <input 
         type="number" 
          value={pvD}
           onChange={(event) => {
                setpvD(event.target.value)
              }}
        />

      </label>
      <input type="submit" />

      <br></br>
      <label>Page E:
        <input 
          type="number" 
          value={pvG}
           onChange={(event) => {
                setpvG(event.target.value)
              }}
        />

      </label>
      <input type="submit" />


      <br></br>

    <LineChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="ค่าความชัน"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
   
  </LineChart>

  </div>
    );

}

export default App;
