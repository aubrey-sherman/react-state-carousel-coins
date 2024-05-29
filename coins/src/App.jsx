import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

// App >> CoinGame >> Coin
// Logic of game: use Math.round(Math.random())
// 0 = Tails, 1 = Heads
// Coin:

function App() {


  return (
    <div className="App">
      <CoinGame />
    </div>
  );
};

export default App;