const express = require('express');
const router = express.Router();
const {Dangnhap,Dangky,viewdangnhap,viewdangki} = require('../controllers/AuthController')

router.get('/', viewdangnhap);
router.get('/register', viewdangki);
router.post('/loginpost', Dangnhap);
router.post('/registerpost', Dangky);
module.exports = {
    routes: router
}