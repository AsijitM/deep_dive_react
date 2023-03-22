import React from 'react';

export default function Content() {
  const handlechange = () => {
    const names = ['Asi', 'Sag'];
    const int = Math.floor(Math.random() * 2);
    return names[int];
  };

  return <div>Hello {handlechange()} ! Go buy the groceries </div>;
}
