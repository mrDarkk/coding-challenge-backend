const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const BOUNCE_API_ENDPOINT = 'TODO';

// GET all
app.get('/users', function (req, res) {
    return res.status(200).send('[GET] - Get all users');
});

// GET :uid
app.get('/users/:uid', function (req, res) {
    return res.status(200).send('[GET] - Get user by uid');
});

// POST
app.post('/users', function (req, res) {
    return res.status(200).send('[POST] - Create user');
});

// PUT :uid
app.put('/users/:uid', function (req, res) {
    return res.status(200).send('[PUT] - Update specific user');
});

// DELETE all 
app.delete('/users', function (req, res) {
    return res.status(200).send('[DELETE] - Delete all users');
});

// DELETE :uid 
app.delete('/users/:uid', function (req, res) {
    return res.status(200).send('[DELETE] - Delete user by uid');
});

app.listen(3000, function () {
    console.log('Bounce coding-challenge-backend running on port 3000');
})