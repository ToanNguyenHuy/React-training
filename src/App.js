import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState(0);
  return (
    <div className="App">
       Learning react hook {value}
    </div>
  );
}

export default App;
