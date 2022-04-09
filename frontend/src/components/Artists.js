function Artists(props) {
  return (
    <section id="artists">
      <header>
        <h1>Artists</h1>
      </header>

      <div>
        <ul>
          {props.artists.map((artist) => {
            return (
              <li key={artist.id} onClick={() => props.onClick(artist.id)}>
                {artist.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Artists;
