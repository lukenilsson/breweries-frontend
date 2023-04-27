import { Search } from "./Search";
import { Results } from "./Results";

export function Content() {
  return (
    <div>
      <div id="search">
        <Search />
      </div>
      <div id="results">
        <h2>Results readout</h2>
        <Results />
        {/* Output should be 5 closest locations from the data set to the address query */}
      </div>
      <div id="map">
        <h2>A map if we have time for fancy</h2>
        {/* If we can export a map of the above output, let's embed here */}
      </div>
    </div>
  );
}
