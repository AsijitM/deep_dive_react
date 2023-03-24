import React, { useState } from 'react';
import ItemList from './ItemList';
export default function ({ items, handleCheck, handleDelete }) {
  return (
    <div>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your List is Empty</p>
      )}
    </div>
  );
}
