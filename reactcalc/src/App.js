import React, { useState } from 'react';
import './App.css';
import DisplayGhost from './DisplayGhost';

// Import fetchSingleGhost and fetchSVG functions here
// ...
async function fetchSingleGhost(ghostID) {
  const response = await fetch(`https://protected-everglades-83276.herokuapp.com/api/ghosts/${ghostID}`);
  const data = await response.json();
  return data;
}

async function fetchSVG(ghostID) {
  const url = `ghostsvgs/cg${ghostID}.svg`;
  const obj = document.createElement('object');
  obj.data = url;
  obj.type = "image/svg+xml";
  obj.classList.add('ghost-svg');
  return obj;
}


function App() {
  const [ghostData, setGhostData] = useState(null);
  const [ghostSVG, setGhostSVG] = useState(null);

  const onSearchButtonClick = async () => {
    const ghostNumber = document.getElementById('search-input').value;

    if (ghostNumber >= 1 && ghostNumber <= 10000) {
      const ghost = await fetchSingleGhost(ghostNumber);
      const svgText = await fetchSVG(ghost['id']);
      setGhostData(ghost);
      setGhostSVG(svgText);
    } else {
      alert('Please enter a valid ghost number (1-10000).');
    }
  };

  const loadRandomGhost = async () => {
    const randomGhostNumber = Math.floor(Math.random() * 10000) + 1;
    const ghost = await fetchSingleGhost(randomGhostNumber);
    const svgText = await fetchSVG(ghost['id']);
    setGhostData(ghost);
    setGhostSVG(svgText);
  };

  return (
    <div className="App">
      <input id="search-input" type="number" placeholder="Enter ghost number" />
      <button onClick={onSearchButtonClick}>Search</button>
      <button onClick={loadRandomGhost}>Load Random Ghost</button>
      <DisplayGhost ghost={ghostData} svg={ghostSVG} />
    </div>
  );
}

export default App;
