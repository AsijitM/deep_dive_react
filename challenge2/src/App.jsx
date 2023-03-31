import { useEffect, useState } from 'react';

// import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [reqType, setReqType] = useState('');
  const [items, setItems] = useState([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items} />
    </div>
  );
}

export default App;
