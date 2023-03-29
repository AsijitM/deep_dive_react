import React from 'react';

export default function Footer({ count }) {
  const today = new Date();
  return (
    <footer>
      <p>
        {' '}
        {count} List {count === 1 ? 'item' : 'items'}{' '}
      </p>
      <p>Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
}
