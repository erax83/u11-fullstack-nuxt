// Express Server

const express = require('express')
const db = require('./db')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = {
    path: '/backend',
    handler: app
  }