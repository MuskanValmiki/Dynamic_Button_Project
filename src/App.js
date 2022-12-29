import './App.css';
import React, { useState } from 'react';

function App() {
  const list1=["Muskan","Samridhi","Coder","Somi"]
  const list2=["Kurkura","Choclate","Cold drink","Tea"] 
  const list3=["Uattar Pradesh","Lucknow","Nagpur","Lucknow"]
  let [data,setData]=useState([])

  return (
    <center>
    <div className="App">
      <>
       <button onClick={()=>{
        setData(list1)
       }}>Button1</button>

       <button onClick={()=>{
        setData(list2)
       }}>Button2</button>

       <button onClick={()=>{
        setData(list3)
       }}>Button3</button>
       {
        data.map((item)=>{
          return(
          <h1>{item}</h1>
          )
          })
       }
      </>
    </div>
    </center>
  );
}

export default App;
 


