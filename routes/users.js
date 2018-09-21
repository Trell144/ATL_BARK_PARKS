var express = require('express');
var router = express.Router();
const {User} = require('../db/schema')

/* GET users listing. */

//INDEX, SHOW ALL
router.get('/', function(req, res) {
  User.find()
  .then((users)=> {
    res.render('users/index', { users: users })
  });
});


//NEW, RENDER NEW FORM



//SHOW, SHOW ONE
router.get('/:id', function(req, res) {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', {user: user})
    })
})


//EDIT, RENDER EDIT FORM



//CREATE



//UPDATE



//DELETE



module.exports = router;
