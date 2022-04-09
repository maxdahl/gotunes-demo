const { artistService } = require("../services");

class ArtistController {
  async getArtist(req, res) {
    const { artistId } = req.params;

    try {
      const artist = await artistService.getArtist(artistId, "soundcloud");
      return res.json(artist);
    } catch (err) {
      console.log(err);
    }
  }

  async getAlbums(req, res) {
    const { artistId } = req.params;

    try {
      const albums = await artistService.getAlbums(artistId, "soundcloud");
      return res.json(albums);
    } catch (err) {
      console.log(err);
    }
  }

  async getPlaylists(req, res) {
    const { artistId } = req.params;

    try {
      const playlists = await artistService.getPlaylists(
        artistId,
        "soundcloud"
      );
      return res.json(playlists);
    } catch (err) {
      console.log(err);
    }
  }

  async getTracks(req, res) {
    const { artistId } = req.params;

    try {
      const tracks = await artistService.getTracks(artistId, "soundcloud");
      return res.json(tracks);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new ArtistController();
