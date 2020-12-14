// const config = require('../config')
const Recepie = require("../models/Recepie");
const validator = require("express-validator");
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs')

// Register
module.exports.add = [
  validator.body("title", "Fyll i din titel.").isLength({ min: 1 }),
  // validator.body('title').custom(value => {
  //     return Recepie.findOne({title:value}).then(recepie => {
  //       if (recepie !== null) {
  //         return Promise.reject('Titeln du angivit är upptagen.');
  //       }
  //     })
  //   }),
  validator
    .body("ingrediences", "Fyll i dina ingredienser")
    .isLength({ min: 1 }),

  validator
    .body("instructions", "Fyll i dina instruktioner.")
    .isLength({ min: 1 }),

  validator
    .body("author", "Fyll i din författare.")
    .isLength({ min: 1 }),

  function(req, res) {
    console.log("inside controller");
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      console.log("inside controller error");
      return res.status(422).json({ errors: errors.mapped() });
    }

    var recepie = new Recepie({
      title: req.body.title,
      ingrediences: req.body.ingrediences,
      instructions: req.body.instructions,
      author: req.body.author
    });

    //   var salt = bcrypt.genSaltSync(10);
    //   var hash = bcrypt.hashSync(recepie.title, salt);
    //   recepie.title = hash

    recepie.save(function(err, recepie) {
      if (err) {
        return res.status(500).json({
          message: "Error saving record",
          error: err
        });
      }
      return res.json({
        message: "saved",
        _id: recepie._id
      });
    });
  }
];

// Get all
module.exports.list = function (req, res, next) {
  Recepie.find({}, function(err, recepies){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(recepies);
  });
}
