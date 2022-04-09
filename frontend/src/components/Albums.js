function Albums(props) {
  return (
    <section id="albums">
      <header>
        <h1>Albums</h1>
      </header>

      <div>
        <ul>
          {props.albums.map((album) => {
            return <li key={album.id}>{album.title}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Albums;
