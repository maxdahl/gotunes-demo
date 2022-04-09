const Controller = require("./controller");
const { albumService } = require("../services");

class AlbumController extends Controller {
  async getAlbum(req, res) {
    const { src, albumId } = this.getParams(req);

    try {
      const album = await albumService.getAlbum(albumId, src);
      res.json(album);
    } catch (err) {
      console.log(err);
    }
  }

  async getTracks(req, res) {
    const { src, albumId } = this.getParams(req);

    try {
      const tracks = await albumService.getTracks(albumId, src);
      res.json(tracks);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new AlbumController();
