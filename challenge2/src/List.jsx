import React from 'react';
import ListItem from './ListItem';

export default function List({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <ListItem item={item}  key={item.id} />
        ))}
      </ul>
    </>
  );
}

