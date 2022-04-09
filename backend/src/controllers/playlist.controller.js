const Controller = require("./controller");
const { playlistService } = require("../services");

class PlaylistController extends Controller {
  async getPlaylist(req, res) {
    const { playlistId, src } = this.getParams(req);
    try {
      const playlist = await playlistService.getPlaylist(playlistId, src);
      res.json(playlist);
    } catch (err) {
      console.error(err);
    }
  }

  async getPlaylistTracks(req, res) {
    const { playlistId, src } = this.getParams(req);
    try {
      const tracks = await playlistService.getPlaylistTracks(playlistId, src);
      res.json(tracks);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new PlaylistController();
