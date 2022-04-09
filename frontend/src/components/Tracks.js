function Tracks(props) {
  return (
    <section id="tracks">
      <header>
        <h1>Tracks</h1>
      </header>

      <div>
        <ul>
          {props.tracks.map((track) => {
            return <li key={track.id}>{track.title}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Tracks;
