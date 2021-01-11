import AliceQueen from './component/AliceQueen';
import Foreground1 from './component/Foreground1';
import Foreground2 from './component/Foreground2';
import Background1 from './component/Background1';
import Background2 from './component/Background2';
import Buttons from './component/Buttons';
import { useState } from 'react';
import './App.css';

function App() {
  let playState = useState([]);

  return (
    <div className="container">
      <Buttons playState={playState} />
      <div className="sky" />
      <div className="earth-bg">
        <div className="earth" />
      </div>
      <AliceQueen playState={playState} />
      <Foreground1 playState={playState} />
      <Foreground2 playState={playState} />
      <Background1 playState={playState} />
      <Background2 playState={playState} />
    </div>
  );
}

export default App;
