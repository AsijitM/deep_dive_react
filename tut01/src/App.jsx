import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Asi', 'Sag'];
    const int = Math.floor(Math.random() * 2);
    name = names[int];
    return name;
  };
  return <div className="App">Hello {handleNameChange()}</div>;
}
// while calling a function in a div you need to give () after the function name i.e function()


export default App;
