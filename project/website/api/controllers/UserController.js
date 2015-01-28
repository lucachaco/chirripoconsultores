/**
 * UserController
 *
 * @description :: Server-side logic for managing Consultants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `ConsultantController.login()`
   */
  login: function (req, res) {
    return res.view({
      layout: "basic_layout"
    });
  },

  /**
   * `ConsultantController.loginCheck()`
   */
  loginCheck: function (req, res) {
    req.session.authenticated = true;
    return res.redirect('/admin/')
  },

  /**
   * `ConsultantController.logout()`
   */
  logout: function (req, res) {
    req.session.authenticated = false;
    return res.redirect('/admin/login')
  }

};

