const getApi = require("../utils/apis");

class ArtistsService {
  async getArtist(id, src) {
    const api = getApi(src);
    const artist = await api.getArtist(id);
    return artist;
  }

  async getAlbums(id, src) {
    const api = getApi(src);
    const albums = await api.getArtistAlbums(id);
    return albums;
  }

  async getPlaylists(id, src) {
    const api = getApi(src);
    const playlists = await api.getArtistPlaylists(id);
    return playlists;
  }

  async getTracks(id, src) {
    const api = getApi(src);
    const tracks = await api.getArtistTracks(id);
    return tracks;
  }
}

module.exports = new ArtistsService();
