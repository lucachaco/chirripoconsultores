/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `ProjectController.table()`
   */
  table: function (req, res) {
    Project.find().exec(function (err, projects) {
      if (err) {
        res.send(400);
      } else {
        return res.view('project/table', {
          projects: projects
        })
      }
    });
  }

};

