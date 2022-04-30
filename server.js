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
const PORT = process.env.PORT || 5000;
const app = express();

// set internal application states
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

/* ---------------------- */
/* General Util Functions */
/* ---------------------- */

/* ------------------------ */
/* Dedicated Util Functions */
/* ------------------------ */

/* ------------------------ */
/* Event Callback Functions */
/* ------------------------ */


/* -------------------------- */
/* Connect Js Event Listeners */
/* -------------------------- */