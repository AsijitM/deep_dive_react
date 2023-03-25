import React from 'react';

export default function Search({ hex, setHex }) {
  const handleChange = (e) => {
    setHex(e.target.value);
  };
  return (
    <form className="search">
      <label htmlFor="color"> Add Color Name:</label>
      <input
        type="text"
        autoFocus
        placeholder="Add color Name"
        required
        value={hex}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}
