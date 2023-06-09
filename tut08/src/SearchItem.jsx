import React from 'react';

export default function SearchItem({search, setSearch}) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
