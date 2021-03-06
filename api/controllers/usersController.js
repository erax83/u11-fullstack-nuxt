const config = require("../config");
const User = require("../models/User");
const validator = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register
module.exports.register = [
  validator.body("user_name", "Fyll i ditt användarnamn.").isLength({ min: 1 }),
  validator.body("email", "Fyll i din e-post-address").isLength({ min: 1 }),
  validator.body("email").custom(value => {
    return User.findOne({ email: value }).then(user => {
      if (user !== null) {
        return Promise.reject("E-post-addressen du angivit är upptagen.");
      }
    });
  }),
  validator.body("password", "Fyll i ditt lösenord.").isLength({ min: 1 }),

  function(req, res) {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    var user = new User({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    });

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;

    user.save(function(err, user) {
      if (err) {
        return res.status(500).json({
          message: "Error saving record",
          error: err
        });
      }
      return res.json({
        message: "saved",
        _id: user._id
      });
    });
  }
];

// Login
module.exports.login = [
  validator.body("email", "Fyll i din e-post-address.").isLength({ min: 1 }),
  validator.body("password", "Fyll i ditt lösenord.").isLength({ min: 1 }),

  function(req, res) {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: "Error vid inloggning.",
          error: err
        });
      }

      if (user === null) {
        return res.status(500).json({
          message: "Din e-postadress går inte att finna."
        });
      }

      return bcrypt.compare(req.body.password, user.password, function(
        err,
        isMatched
      ) {
        if (isMatched === true) {
          return res.json({
            user: {
              _id: user._id,
              email: user.email,
              user_name: user.full_name
            },
            token: jwt.sign(
              { _id: user._id, email: user.email, user_name: user.user_name },
              config.authSecret
            ) // generate JWT token here
          });
          
        } else {
          return res.status(500).json({
            message: "Du har angivit en felaktig e-post-address eller lösenord."
          });
        }
      });
    });
  }
];

// Get User
module.exports.user = function(req, res) {
  var token = req.headers.authorization;
  if (token) {
    jwt.verify(token.replace(/^Bearer\s/, ""), config.authSecret, function(
      err,
      decoded
    ) {
      if (err) {
        return res.status(401).json({ message: "unauthorized" });
      } else {
        return res.json({ user: decoded });
      }
    });
  } else {
    return res.status(401).json({ message: "unauthorized" });
  }
}

// // Update
// module.exports.update = [
//   // validation rules
//   // validator.body("title", "Please enter Article Title").isLength({ min: 1 }),
//   // validator.body("title").custom((value, { req }) => {
//   //   return Article.findOne({ title: value, _id: { $ne: req.params.id } }).then(
//   //     article => {
//   //       if (article !== null) {
//   //         return Promise.reject("Title already in use");
//   //       }
//   //     }
//   //   );
//   // }),
//   validator
//     .body("userRecepies", "Please enter recepie")
//     .isLength({ min: 1 }),
//   validator.body("body", "Please enter User Content").isLength({ min: 1 }),

//   function(req, res) {
//     // throw validation errors
//     const errors = validator.validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.mapped() });
//     }

//     var id = req.params.id;
//     User.findOne({ _id: id }, function(err, user) {
//       if (err) {
//         return res.status(500).json({
//           message: "Error saving record",
//           error: err
//         });
//       }
//       if (!user) {
//         return res.status(404).json({
//           message: "No such record"
//         });
//       }

//       // initialize record
//       user.userRecepies = req.body.userRecepies
//         ? req.body.userRecepies
//         : body.userRecepies;

//       // save record
//       user.save(function(err, user) {
//         if (err) {
//           return res.status(500).json({
//             message: "Error getting record."
//           });
//         }
//         if (!user) {
//           return res.status(404).json({
//             message: "No such record"
//           });
//         }
//         return res.json(user);
//       });
//     });
//   }
// ];

