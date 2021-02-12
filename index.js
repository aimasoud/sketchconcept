const path = require('path');


const express = require('express');

const app = new express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/projects.html'));
});

app.get('/oysterbay', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/oysterbay.html'));
});

app.get('/tic', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/tic.html'));
});

app.get('/ourstaff', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/ourstaff.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});



app.listen(3000, () => {
    console.log('App listening on port 3000')
});
