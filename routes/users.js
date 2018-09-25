var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

/* GET users listing. */

//INDEX, SHOW ALL
router.get('/', function (req, res) {
  User.find()
    .then((users) => {
      res.render('users/index', { users: users })
    });
});

//NEW, RENDER NEW FORM
// router.method('path', function)


//SHOW, SHOW ONE
router.get('/:id', function (request, response) {
  User.findById(request.params.id)
    .then((userFromDb) => {
      response.render('users/show', { user: userFromDb })
    })
})


//EDIT, RENDER EDIT FORM



//CREATE



//UPDATE



//DELETE



module.exports = router;
