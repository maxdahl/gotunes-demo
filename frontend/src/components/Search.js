import { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        id="searchbar"
        placeholder="Search for artists, albums, playlists or tracks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => props.onSearch(searchTerm)} id="searchbtn">
        Search
      </button>
    </div>
  );
}

export default Search;
