var express = require('express');
var router = express.Router({ mergeParams: true });
const { User, Park } = require('../db/schema')


// INDEX, SHOW ALL
router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.render('parks/index', {
                userId: req.params.userId,
                parks: user.parks

            })
        })
        .catch(error => {
            console.log(error)

        })
})


// NEW, RENDER NEW FORM


// SHOW, SHOW ONE
router.get('/:id', function (req, res) {
    User.findById(req.params.userId)
        .then((user) => {
            const park = user.parks.id(req.params.id)
            res.render('parks/show', { park: park })
        })
})


// EDIT, RENDER EDIT FORM


// CREATE



// UPDATE


// DELETE


module.exports = router