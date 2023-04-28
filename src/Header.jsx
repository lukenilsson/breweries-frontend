export function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Yall thirsty?</h1>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for suds"
      ></input>
      <button>Search</button>
    </div>
  );
}
