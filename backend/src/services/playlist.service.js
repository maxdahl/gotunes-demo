const getApi = require("../utils/apis");

class PlaylistService {
  async getPlaylist(playlistId, src) {
    const api = getApi(src);
    const playlist = api.getPlaylist(playlistId);
    return playlist;
  }

  async getPlaylistTracks(playlistId, src) {
    const api = getApi(src);
    const tracks = api.getPlaylistTracks(playlistId);
    return tracks;
  }
}

module.exports = new PlaylistService();
