const getApi = require("../utils/apis");

class TrackService {
  async getTrack(trackId, src) {
    const api = getApi(src);
    const track = await api.getTrack(trackId);
    return track;
  }

  async getTrackStreamUrl(trackId, src) {
    const api = getApi(src);
    const url = await api.getTrackStreamUrl(trackId);
    return url;
  }
}

module.exports = new TrackService();
