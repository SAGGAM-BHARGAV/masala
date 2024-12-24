/**import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Display </h1>
        <img
          src="https://i.imgur.com/HaAL9q7.jpeg"
          alt="Example from Imgur"
          style={{ width: "300px", height: "auto" }} // Optional styling
        />

<img src="https://www.pngegg.com/en/png-vwyxt"
          alt="Example from Imgur"
          style={{ width: "300px", height: "auto" }} // Optional styling
        />
        <img src="https://pngtree.com/freepng/masala-on-isloated-transparent-background_9127651.html"
          alt=""
          style={{ width: "300px", height: "auto" }} // Optional styling
        />
      </header>
    </div>
  );
}

export default App; **/

import React from 'react';
import Home from './pages/Home';
import ProductGrid from './pages/ProductGrid';

const App = () => {
  return (
    <div>
     
      <Home />
      
    </div>
  );
};

export default App;

