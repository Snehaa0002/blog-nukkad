const mongoose = require('mongoose');

const url = "mongodb+srv://harshitagautam773:2003sneha@cluster0.9oxcakt.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function
mongoose.connect(url)
.then((result) => { 
    console.log('connect to db');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
