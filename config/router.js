const express = require('express');
const router = express.Router();
const controller = require('../controller/Article')
router.get('/',controller.getHomePage);
router.all('/add/article',controller.postNewArticle);
router.get('/article/:id',controller.showOneArticle);
router.all('/edit/article/:id',controller.updateOneArticle);
router.get('/delete/article/:id',controller.deleteOneArticle);


module.exports=router;