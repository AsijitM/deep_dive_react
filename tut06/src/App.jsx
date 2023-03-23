import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [item, setItem] = useState([
    {
      id: 1,
      checked: false,
      item: 'Item 1',
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ]);
  const handleCheck = (id) => {
    const listItems = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
  };

  const handleDelete = (id) => {
    const listItems = item.filter((item) => item.id !== id);
    setItem(listItems);
  };

  return (
    <div>
      <Header title="Grocery List" />
      <Content
        items={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer count={item.length} />
    </div>
  );
}

export default App;
