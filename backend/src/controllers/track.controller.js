const Controller = require("./controller");
const { trackService } = require("../services");

class Track extends Controller {
  async getTrack(req, res) {
    try {
      const { trackId, src } = this.getParams(req);
      const track = await trackService.getTrack(trackId, src);
      res.json(track);
    } catch (err) {
      console.error(err);
    }
  }

  async getStream(req, res) {
    try {
      const { trackId, src } = this.getParams(req);
      const streamUrl = await trackService.getTrackStreamUrl(trackId, src);

      res.json(streamUrl);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new Track();
