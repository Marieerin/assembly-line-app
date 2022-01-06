import React, {useState} from 'react';
import './App.css';
import AssemblyLine from './AssemblyLine';

function App() {
  const [stages, setStages] = useState(['sanityCheck'])
  return (
    <div className="App">
      <AssemblyLine stages={stages} /> 
    </div>
  );
}

export default App;
