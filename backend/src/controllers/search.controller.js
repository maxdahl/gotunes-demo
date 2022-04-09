const { searchService } = require("../services");

class SearchController {
  async artists(req, res) {
    const { q } = req.params;
    const { limit, offset } = req.query;

    try {
      const artists = await searchService.searchArtists(q, limit, offset);
      res.json(artists);
    } catch (err) {
      console.error(err);
    }
  }

  async albums(req, res) {
    const { q } = req.params;
    const { limit, offset } = req.query;

    try {
      const albums = await searchService.searchAlbums(q, limit, offset);
      res.json(albums);
    } catch (err) {
      console.error(err);
    }
  }

  async playlists(req, res) {
    const { q } = req.params;
    const { limit, offset } = req.query;

    try {
      const playlists = await searchService.searchPlaylists(q, limit, offset);
      res.json(playlists);
    } catch (err) {
      console.error(err);
    }
  }

  async tracks(req, res) {
    const { q } = req.params;
    const { limit, offset } = req.query;

    try {
      const tracks = await searchService.searchTracks(q, limit, offset);
      res.json(tracks);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new SearchController();
