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


    Consultant.find().sort('number asc').exec(function (err, consultants) {
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
   * `ConsultantController.create()`
   */
  create: function (req, res) {
    Consultant.create(req.body).exec(function (err, result) {
      if (err) {
        return res.redirect('/admin/consultants/new')
      } else {
        return res.redirect('/admin/consultants')
      }
    });
  },


  /**
   * `ConsultantController.new()`
   */
  new: function (req, res) {
    var defaultConsultant = {
      number: 0,
      name: '',
      description: ''

    }
    return res.view('consultant/new', {
      consultant: defaultConsultant
    })
  },

  /**
   * `ConsultantController.edit()`
   */
  edit: function (req, res) {

    Consultant.findOne({id: req.param('id')}, function (err, consultant) {
      return res.view('consultant/edit', {
        consultant: consultant
      })
    });


  },

  /**
   * `ConsultantController.edit()`
   */
  destroy: function (req, res) {
    Consultant.destroy({id: req.param('id')})
      .exec(function (err) {
        return res.redirect('/admin/consultants')
      });
  }


};

