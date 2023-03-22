import React from 'react';

export default function Content() {
  const handlechange = () => {
    const names = ['Asijit', 'Sagnik'];
    const int = Math.floor(Math.random() * 2);
    return names[int];
  };

  const handleClick = () => {
    alert('You Clicked the Button');
  };
  const handleClick2 = (name) => {
    alert(`${name} was clicked`);
  };

  return (
    <div>
      {' '}
      <p>Hello {handlechange()} ! Go buy the groceries</p>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <br />
      <button onClick={() => handleClick2('Asijit')}>Click Me 2</button>
    </div>
  );
}
