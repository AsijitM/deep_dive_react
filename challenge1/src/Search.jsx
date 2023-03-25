import React from 'react';

export default function Search({ hex,setHex, isDarkText, setIsDarkText }) {
  const handleChange = (e) => {
    setHex(e.target.value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color"> Add Color Name:</label>
      <input
        type="text"
        autoFocus
        placeholder="Add color Name"
        required
        value={hex}
        onChange={(e) => handleChange(e)}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
}
