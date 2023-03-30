import React from 'react'

export default function({ item, handleCheck, handleDelete }) {
 return (
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
  )
}
