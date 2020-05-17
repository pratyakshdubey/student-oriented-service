const express = require('express');
const router = express.Router();

// controllers
const homeController = require('../controller/home.controller');

router.get('/', homeController.getHome);

router.get('/get-student/:id', homeController.getStudent);

router.post('/add-student', homeController.addStudents)

module.exports = router;