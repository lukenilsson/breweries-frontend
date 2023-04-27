export function Search() {
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div>
      <div>
        <h1>Search</h1>
        <p>Enter your start address</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* This might not be formatted the way that's needed? May need to concatnate? */}
        <div>
          Address: <input type="text" />
        </div>
        <div>
          City: <input type="text" />
        </div>
        <div>
          State: <input type="text" />
        </div>
        <div>
          ZIP: <input type="number" />
        </div>
        {/* On submit; pass the inputs into the query for mapping */}
        <input type="submit" />
      </form>
    </div>
  );
}
