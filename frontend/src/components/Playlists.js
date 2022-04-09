function Playlists(props) {
  return (
    <section id="playlists">
      <header>
        <h1>Playlists</h1>
      </header>

      <div>
        <ul>
          {props.playlists.map((playlist) => {
            return <li key={playlist.id}>{playlist.title}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Playlists;
