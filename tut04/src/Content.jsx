import React from 'react';
import { useState } from 'react';

export default function Content() {
  const [name, setName] = useState('Asijit');

  // const handlechange = () => {
  //   const names = ['Asijit', 'Sagnik'];
  //   const int = Math.floor(Math.random() * 2);
  //   return names[int];
  // };

  const handleClick = () => {
    alert('You Clicked the Button');
  };
  const handleClick2 = (name) => {
    alert(`${name} was clicked`);
  };
  const handleNameChange = () => {
    const names = ['Asijit', 'Sagnik'];
    const int = Math.floor(Math.random() * 2);
    setName(names[int]);
  };

  return (
    <div>
      {' '}
      <p>Hello {name} ! Go buy the groceries</p>
      <button onClick={handleNameChange}>Change name</button>
      <br />
      <br />
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <button onClick={() => handleClick2('Asijit')}>Click Me 2</button>
    </div>
  );
}
