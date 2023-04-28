export function BreweriesIndex(props) {
  return (
    <div>
      <h1>All Breweries</h1>
      {props.breweries.map((brewery) => (
        <div key={brewery.brewery_name}>
          <div className="brew-container">
            <div className="brew-title">
              <h2>{brewery.brewery_name}</h2>
            </div>

            <div className="brew-info">
              <p>{brewery.brewery_type}</p>
              <p>{brewery.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
