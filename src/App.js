import React, { useState, useEffect } from 'react';
import './App.css';
import AssemblyLine from './AssemblyLine';

function App() {
  const [stages, setStages] = useState([['Brain Storming', ['one', 'two', 'three']], ['Developmen', []], ['Testing', []], ['Deployment', []]]);
  const [message, setMessage] = useState('')

  console.log(stages);

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
    const tempArray = [...stages]
    const item = e.target.innerHTML;
    const stageIndex = parseInt(e.target.value);
    const itemIndex = stages[stageIndex][1].indexOf(item);

    tempArray[stageIndex][1].splice(itemIndex, 1);
    // left button
    if(e.button === 0 && stageIndex !== 3) {
      // find item in stages and prepend to next stage
      const prependIndex = stageIndex  + 1;
      
      tempArray[prependIndex][1].unshift(item);
      setStages(tempArray);
    } 
    // right button
    else if (e.button === 2 && stageIndex !== 0 ){
      // find item in stages append to next stage
      const appendIndex = stageIndex - 1;

      tempArray[appendIndex][1].push(item);
      setStages(tempArray);
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
