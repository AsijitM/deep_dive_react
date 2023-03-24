import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('groceries'))
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSave = (newItems) => {
    setItems(newItems);
    localStorage.setItem('groceries', JSON.stringify(newItems));
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    setAndSave(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');

    console.log('submitted');
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    setAndSave(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    setAndSave(listItems);
  };

  return (
    <div>
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer count={items.length} />
    </div>
  );
}

export default App;
