module.exports = function (req, res, next) {
  if (req.method === 'POST') {
    req.method = 'GET';
    req.query = {};
  }
  next()
}
