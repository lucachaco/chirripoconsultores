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
   * `ConsultantController.create()`
   */
  create: function (req, res) {


    Consultant.create(req.body).exec(function (err, result) {
      if (err) {
        req.session.flash['warning'].push('Please check required fields');
        return res.redirect('/admin/consultants/new')
      } else {
        req.session.flash['success'].push('Created successfully');
        return res.redirect('/admin/consultants')
      }
    });
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
   * `ConsultantController.update()`
   */
  update: function (req, res) {
    Consultant.update({id: req.param('id')}, {
      number: req.param('number'),
      name: req.param('name'),
      description: req.param('description')
    }).exec(function (err, result) {
      if (err) {
        req.session.flash['warning'].push('Please check required fields');
        return res.redirect('/admin/consultants/' + req.param('id') + '/edit')
      } else {
        req.session.flash['success'].push('Updated successfully');
        return res.redirect('/admin/consultants')
      }
    });
  },


  /**
   * `ConsultantController.destroy()`
   */
  destroy: function (req, res) {
    Consultant.destroy({id: req.param('id')})
      .exec(function (err) {
        req.session.flash['info'].push('Deleted successfully');
        return res.redirect('/admin/consultants')
      });
  }


};

