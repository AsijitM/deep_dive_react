import React from 'react';
import Row from './Row';

export default function Table({ items }) {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items.map((item) => (
            <Row item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
