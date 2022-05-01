/*
? @document-start
======================
| MAIN PROGRAM LOGIC |
==================================================================================================================================

? @author:                 William J. Horn
? @document-name:          server.js
? @document-created:       04/25/2022
? @document-modified:      04/30/2022

==================================================================================================================================

? @document-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

Back-end logic for handling front-end application queries

==================================================================================================================================
*/

/* ---------------- */
/* Import Libraries */
/* ---------------- */
const express = require('express');
const fs = require('fs');
const path = require('path');

/* ----------------------- */
/* Internal Program States */
/* ----------------------- */
const PORT = 5001;
const app = express();

// application staging
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

/* -------------*/
/* GET Requests */
/* ------------ */

app.get('/api/notes', (request, response) => {

   //  console.log('GET request from: ', __dirname);
    response.sendFile(path.join(__dirname, 'db/db.json'), err => {
        if (err) throw err;
    });

});

app.get('/notes', (request, response) => {

    // console.log('GET request from: ', __dirname);
    response.sendFile(path.join(__dirname, 'public/notes.html'), err => {
        if (err) throw err;
    });

});

/* --------------*/
/* POST Requests */
/* ------------- */
app.post('/api/notes', (request, response) => {

    const newNoteData = request.body;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const updatedNoteData = JSON.parse(data);
        updatedNoteData.push(newNoteData);

        fs.writeFile('./db/db.json', JSON.stringify(updatedNoteData), err => {
            if (err) throw err;
        });
    });

    response.sendStatus(200);

});

app.listen(PORT);