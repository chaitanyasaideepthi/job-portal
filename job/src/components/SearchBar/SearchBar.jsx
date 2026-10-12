import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search job title, company, or location..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="Search jobs"
      />

      <button type="submit">Search Jobs</button>
    </form>
  );
}

export default SearchBar;