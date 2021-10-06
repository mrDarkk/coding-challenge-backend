const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// These will be provided to you
const BOUNCE_API_ENDPOINT = 'TODO';
const BOUNCE_BEARER_TOKEN = 'TODO';

// GET
app.get('/users', function (req, res) {
    return res.status(200).send('[GET] - Get all users');
});

// POST
app.post('/users', function (req, res) {
    return res.status(200).send('[POST] - Create user');
});

// PUT :uid
app.put('/users/:uid', function (req, res) {
    return res.status(200).send('[PUT] - Update specific user');
});

// DELETE :uid 
app.delete('/users/:uid', function (req, res) {
    return res.status(200).send('[DELETE] - Delete user by uid');
});

app.listen(3000, function () {
    console.log('Bounce coding-challenge-backend running on port 3000');
})