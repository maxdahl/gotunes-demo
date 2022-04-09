const getApi = require("../utils/apis");

const SC = getApi("soundcloud");

class SearchService {
  async searchArtists(q, limit, offset) {
    const artists = await SC.searchArtists(q, { limit, offset });
    return artists;
  }

  async searchAlbums(q, limit, offset) {
    const albums = await SC.searchAlbums(q, { limit, offset });
    return albums;
  }

  async searchPlaylists(q, limit, offset) {
    const playlists = await SC.searchPlaylists(q, { limit, offset });
    return playlists;
  }

  async searchTracks(q, limit, offset) {
    const tracks = await SC.searchTracks(q, { limit, offset });
    return tracks;
  }
}

module.exports = new SearchService();
