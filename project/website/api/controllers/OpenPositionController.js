/**
 * ConsultantController
 *
 * @description :: Server-side logic for managing Consultants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  /**
   * `ConsultantController.table()`
   */
  table: function (req, res) {


    OpenPosition.find().exec(function (err, openPositions) {
      if (err) {
        res.send(400);
      } else {
        return res.view('openPosition/table', {
          openPositions: openPositions
        })
      }
    });
  }

};

