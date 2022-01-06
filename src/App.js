import React, {useState} from 'react';
import './App.css';
import AssemblyLine from './AssemblyLine';

function App() {
  const [stages, setStages] = useState([['Brain Storming', ['hi', 'hi', 'hi']], ['Developmen', []], ['Testing', []], ['Deployment', []]]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  const handleKeyPress = (e) => {
    // check what button then call handleSubmit
  };


  return (
    <div className="App" >
      <form action="">
        <input className="assembly-add-item" type="text" name="assembly-add-item"  />
        <button type="submit" onClick={(e) => handleSubmit(e)} onKeyPress={(e) => handleKeyPress(e)}>Add Item</button>
      </form>
      <AssemblyLine stages={stages} /> 
    </div>
  );
}

export default App;
