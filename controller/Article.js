const Article = require('../models/Article')
const getHomePage = (req, res) => {
    Article.find()
        .then(result => {
            res.render('index', { result })
        })
}
const postNewArticle = (req, res) => {
    if (req.method === 'GET') {
        res.render('addArticle',{err:false});
    }
    if (req.method === 'POST') {
        const article = new Article(req.body)
        article.save()
            .then(result => {
                res.redirect('/')
            })
            .catch(err => {
               res.render('addArticle',{err:err.errors})
            })
    }
}
const showOneArticle = (req, res) => {
    Article.findById(req.params.id)
        .then((result) => {
            res.render('showArticle', { result })
        })
        .catch(err => console.log(err))
}
const updateOneArticle = (req, res) => {
    if (req.method === 'GET') {
        Article.findById(req.params.id)
            .then((result) => {
                res.render('editArticle', { result })
            })
            .catch(err => console.log(err))
    }
    if (req.method === 'POST') {
        Article.findByIdAndUpdate(req.params.id)
            .then(result => {
                result.title = req.body.title
                result.article = req.body.article
                result.save()
                    .then(() => {
                        res.redirect('/')
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}
const deleteOneArticle = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
}
module.exports = {
    getHomePage,
    postNewArticle,
    showOneArticle,
    updateOneArticle,
    deleteOneArticle
}