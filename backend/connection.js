const mongoose = require('mongoose');

const url = "mongodb+srv://sneha862:1234@cluster0.fun0guk.mongodb.net/blog-nukkad?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function
mongoose.connect(url)
.then((result) => { 
    console.log('connect to db');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
