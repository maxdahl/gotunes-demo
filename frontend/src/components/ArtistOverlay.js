import React from "react";
import {
  getArtistAlbums,
  getArtistPlaylists,
  getArtistTracks,
} from "../utils/api";

class ArtistOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      playlists: [],
      tracks: [],
    };
  }

  async componentDidMount() {
    this.setState({
      albums: await getArtistAlbums(this.props.artist.id),
      playlists: await getArtistPlaylists(this.props.artist.id),
      tracks: await getArtistTracks(this.props.artist.id),
    });
  }

  render() {
    return (
      <div id="artist_data">
        <span id="close" onClick={this.props.onCloseClick}>
          close
        </span>
        <header>
          <img src={this.props.artist.avatar} alt="artist avatar" />
          <h2>{this.props.artist.name}</h2>
        </header>
        <p>{this.props.artist.description}</p>

        <div>
          <section>
            <h3>Albums</h3>
            <ul>
              {this.state.albums.map((album) => {
                return <li key={album.id}>{album.title}</li>;
              })}
            </ul>
          </section>

          <section>
            <h3>Playlists</h3>
            <ul>
              {this.state.playlists.map((playlist) => {
                return <li key={playlist.id}>{playlist.title}</li>;
              })}
            </ul>
          </section>

          <section>
            <h3>Tracks</h3>
            <ul>
              {this.state.tracks.map((track) => {
                return <li key={track.id}>{track.title}</li>;
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default ArtistOverlay;
