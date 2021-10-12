const express = require('express')
const app = express()
const axios = require('axios');
var cors = require('cors')
const moment = require("moment");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// These will be provided to you
const BOUNCE_API_ENDPOINT = 'https://coding-challenge-api.bounceinsights.com/users';
const BOUNCE_BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhbnRJZCI6ImFOTkxOaW1Xb3VOT01nek5kRHAyIiwiaWF0IjoxNjMzNTE4NDEwfQ.9olxfT3cnbSCIG30VoV07kg75qbAD0eBVaFW61JIGC4';

// GET
app.get('/users', function (req, res) {
    axios({
        url: BOUNCE_API_ENDPOINT,
        method: "get",
        headers: {
            'Authorization': `Bearer ${BOUNCE_BEARER_TOKEN}`
        }
    })
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
});

// POST
app.post('/users', function (req, res) {
    //return res.status(200).send('[POST] - Create user');
    axios({
        url: BOUNCE_API_ENDPOINT,
        method: "post",
        data: {
            "name": req.body.name,
            "email": req.body.email,
            "dateOfBirth": req.body.dateOfBirth,
            "gender": req.body.gender,
            "surveys": req.body.surveys
        },
        headers: {
            'Authorization': `Bearer ${BOUNCE_BEARER_TOKEN}`
        }
    })
    .then(response => {
        res.status(200).json({ message: "Yee! User Created" });
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
});

// PUT :uid
app.put('/users/:uid', function (req, res) {
    var id = req.params.uid;
    axios({
        url: BOUNCE_API_ENDPOINT+"/"+id,
        method: "put",
        data: {
            "registeredAt": new Date().toISOString(),
            "name": req.body.name,
            "email": req.body.email,
            "dateOfBirth": req.body.dateOfBirth,
            "gender": req.body.gender,
            "surveys": req.body.surveys
        },
        headers: {
            'Authorization': `Bearer ${BOUNCE_BEARER_TOKEN}`
        }
    })
    .then(response => {
        res.status(200).json({ message: "Yee! User Created" });
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
    //return res.status(200).send('[PUT] - Update specific user');
});

// DELETE :uid 
app.delete('/users/:uid', function (req, res) {
    var id = req.params.uid;
    axios({
        url: BOUNCE_API_ENDPOINT+"/"+id,
        method: "delete",
        headers: {
            'Authorization': `Bearer ${BOUNCE_BEARER_TOKEN}`
        }
    })
    .then(response => {
        res.status(200).json({ message: "Yee! User Deleted !!!!" });
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
    //return res.status(200).send('[DELETE] - Delete user by uid');
});

app.listen(5000, function () {
    console.log('Bounce coding-challenge-backend running on port 5000');
})