module.exports = function flash (req, res, next) {

  req.session.flash = {};
  req.session.flash['success'] = 'Created successfully';

  next();
};
