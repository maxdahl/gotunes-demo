import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export async function getArtists(q) {
  const res = await axios({
    url: `${apiUrl}/search/artists/${q}`,
  });
  console.log(res);
  return res.data || [];
}

export async function getAlbums(q) {
  const res = await axios({
    url: `${apiUrl}/search/albums/${q}`,
  });

  return res.data || [];
}

export async function getPlaylists(q) {
  const res = await axios({
    url: `${apiUrl}/search/playlists/${q}`,
  });

  return res.data || [];
}

export async function getTracks(q) {
  const res = await axios({
    url: `${apiUrl}/search/tracks/${q}`,
  });

  return res.data || [];
}

export async function getArtist(artistId) {
  const res = await axios({
    url: `${apiUrl}/artists/${artistId}`,
  });

  return res.data;
}

export async function getArtistAlbums(artistId) {
  const res = await axios({
    url: `${apiUrl}/artists/${artistId}/albums`,
  });

  return res.data;
}

export async function getArtistPlaylists(artistId) {
  const res = await axios({
    url: `${apiUrl}/artists/${artistId}/playlists`,
  });

  return res.data;
}

export async function getArtistTracks(artistId) {
  const res = await axios({
    url: `${apiUrl}/artists/${artistId}/tracks`,
  });

  return res.data;
}
