var express = require('express');
var router = express.Router();
var apiU=require('../controllers/api/api-user');
var apiC=require('../controllers/api/api-comic')

/* GET home page. */

//get users
router.get('/users', apiU.listUsers);

//post users
router.post('/users', apiU.addUsers);
//update 

router.put('/users/:iduser', apiU.updateUsers);
//delete
router.delete('/users/:iduser', apiU.deleteUsers);

router.get('/comics', apiC.listComics);
module.exports = router;