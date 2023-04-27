import { useState } from "react";
import axios from "axios";

export function Search() {
  const [address, setAddress] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event);
    axios.post("http://localhost:3000/breweries.json/?", params).then((response) => {
      console.log(response.data);
      setAddress(response.data);
      event.target.reset();
      window.location.href("#results");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" />
      {/* On submit; pass the inputs into the query for mapping */}
    </form>
  );
}
