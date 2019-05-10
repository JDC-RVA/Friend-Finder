var path = require('path');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

// Allows data to be sent to server as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());