import React, { useState } from 'react';

export default function () {
  const [items, setItems] = useState([
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
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <div>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                name="item"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <lable
                style={item.checked ? { textDecoration: 'line-through' } : null}
              >
                {item.item}
              </lable>
              <button onClick={() => handleDelete(item.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your List is Empty</p>
      )}
    </div>
  );
}
