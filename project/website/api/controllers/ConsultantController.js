/**
 * ConsultantController
 *
 * @description :: Server-side logic for managing Consultants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  /**
   * `ConsultantController.adminIndex()`
   */
  table: function (req, res) {


    Consultant.find().exec(function (err, consultants) {
      if (err) {
        res.send(400);
      } else {
        return res.view('consultant/table', {
          consultants: consultants,
          myvar: 'hello???',
          title: 'Yeap'
        })
      }
    });


    /*    return res.json({
     todo: 'index() is not implemented yet!'
     });*/
  },


  /**
   * `ConsultantController.adminNew()`
   */
  new: function (req, res) {

    return res.view('consultant/new')

  },

  /**
   * `ConsultantController.adminEdit()`
   */
  edit: function (req, res) {

    Consultant.findOne({id: '54c716e03b2474c056c41915'}, function (err, consultant) {
      return res.view('consultant/edit', {
        consultant: consultant
      })
    });


  }

};

