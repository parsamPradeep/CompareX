const Search = () => {
  return (
    <div className="serachBarContainer">
      <input
        autoComplete="off"
        className="input"
        type="text"
        placeholder="Search.."
      />
      <button className="searchBtn" type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
