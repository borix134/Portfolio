import './App.css';
import Panel from './components/Panel';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap" rel="stylesheet" />
        <h2>
          Nick Panagakis 
        </h2>
        <h3>
          Web Development<span className="block">█</span>
        </h3>
        <Panel></Panel>
    </div>
  );
}

export default App;
