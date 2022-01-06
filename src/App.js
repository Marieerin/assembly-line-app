import React, { useState, useEffect } from 'react';
import './App.css';
import AssemblyLine from './AssemblyLine';

function App() {
  const [stages, setStages] = useState([['Brain Storming', ['one', 'two', 'three']], ['Developmen', []], ['Testing', []], ['Deployment', []]]);
  const [message, setMessage] = useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArray = [...stages[0]]

    newArray[1].push(message);
    setStages([newArray, stages[1], stages[2], stages[3]]);
    setMessage('');  
  };

  const handleKeyPress = (e) => {
    // check what button then call handleSubmit
  };

  const itemClick = (e) => {
    const item = e.target.innerHTML;
    const stageIndex = e.target.value;
    console.log(stages[stageIndex][1].filter(word => word === item), stageIndex);
    // left button
    if(e.button === 0 ) {
      // find item in stages and prepend to next stage
    } 
    // right button
    else if (e.button === 2 ){
      // find item in stages append to next stage
    }
  }


  return (
    <div className="App" >
      <form action="">
        <input className="assembly-add-item" type="text" name="assembly-add-item" onChange={(e) => setMessage(e.target.value)} value={message}  />
        <button type="submit" onClick={(e) => handleSubmit(e)} onKeyPress={(e) => handleKeyPress(e)}>Add Item</button>
      </form>
      <AssemblyLine stages={stages} itemClick={itemClick} /> 
    </div>
  );
}

export default App;
