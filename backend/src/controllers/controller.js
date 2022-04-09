class Controller {
  getParams(req) {
    const src = req.query.src || "soundcloud";
    return { src, ...req.params };
  }
}

module.exports = Controller;
