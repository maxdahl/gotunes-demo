import { useState } from "react";

import "./App.css";

import {
  getArtists,
  getAlbums,
  getPlaylists,
  getTracks,
  getArtist,
} from "./utils/api";
import Search from "./components/Search";
import Artists from "./components/Artists";
import ArtistOverlay from "./components/ArtistOverlay";
import Albums from "./components/Albums";
import Playlists from "./components/Playlists";
import Tracks from "./components/Tracks";

function App() {
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);

  const onSearch = async (searchTerm) => {
    setArtists(await getArtists(searchTerm));
    setAlbums(await getAlbums(searchTerm));
    setPlaylists(await getPlaylists(searchTerm));
    setTracks(await getTracks(searchTerm));
  };

  const onArtistClick = async (artistId) => {
    setArtist(await getArtist(artistId));
  };

  return (
    <div className="App">
      <section id="search">
        <Search onSearch={onSearch} />
      </section>

      <section id="content">
        <Artists artists={artists} onClick={onArtistClick} />
        <Albums albums={albums} />
        <Playlists playlists={playlists} />
        <Tracks tracks={tracks} />
      </section>

      {artist === null ? null : (
        <ArtistOverlay artist={artist} onCloseClick={() => setArtist(null)} />
      )}
    </div>
  );
}

export default App;
