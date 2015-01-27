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
  adminIndex: function (req, res) {

    return res.view({
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
  adminNew: function (req, res) {

    return res.view()

  },

  /**
   * `ConsultantController.adminEdit()`
   */
  adminEdit: function (req, res) {

    return res.view()

  }

};

