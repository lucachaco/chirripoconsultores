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

    return res.view('consultant/table', {
      myOne: 'World?',
      myvar: 'hello???',
      title: 'Yeap'
    })


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

    return res.view('consultant/edit')

  }

};

