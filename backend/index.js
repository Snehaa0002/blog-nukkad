//import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const blogRouter = require('./routers/blogRouter');
const competitionRouter = require('./routers/competitionRouter');
const utilRouter = require('./routers/utils');
const cors = require('cors');


//initialize express
const app = express();
const port = 5000;


// middleware
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/competition', competitionRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

// endpoint
app.get('/', (req, res) => {
    res.send('Response from express')
});

// add
app.get('/add', (req, res) => {
    res.send('Response from add');
});

//delete
app.get('/del', (req, res) => {
    res.send('Response from del');
});

// update
app.get('/update', (req, res) => {
    res.send('Response from update');
});


// start server
app.listen(port, () => { console.log('server started'); });