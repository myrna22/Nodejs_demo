const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://username:password@cluster0.xtxsu.mongodb.net/?retryWrites=true&w=majority')
    .then((result) => {
        console.log('DB is connected')
    })
    .catch( err => {
        console.log(err)
    })