const express = require('express')
const Routes = express.Router()
const {AutoFillGlycans, AutoFillLactins} = require('../controller/Autofill')
const {GlycoModel} = require('../controller/GlycoModel')

Routes.post('/autofillLectins', AutoFillLactins)
Routes.post('/autofillGlycans', AutoFillGlycans)
Routes.post('/glycomodel', GlycoModel)

module.exports = Routes