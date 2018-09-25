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
router.get('/new', (req, res) => {
res.render('users/new')

})


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
router.post('/', (req, res) => {
  const newUser = new User(req.body)
  newUser.save()
  .then(()=> {
    res.redirect('/users')
  })

})


//UPDATE



//DELETE
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/users')
    })
})



module.exports = router;
