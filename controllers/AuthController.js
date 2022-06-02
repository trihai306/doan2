const firebase = require('../db');
const firestore = firebase.firestore();
const Dangnhap = async (req, res, next) => {
    try{
        const data = req.query;

        const auth = firebase.auth()
        const user = await auth.signInWithEmailAndPassword(data.email, data.password);
        if (user) {

            res.send(user);
        }
    }
    catch (e) {
        res.send('Đăng nhap that bai');
    }
}
const viewdangnhap = (req, res, next) => {
    res.render('login');
}
const viewdangki = (req, res, next) => {
    res.render('register');
}
const Dangky = async (req, res, next) => {
  try {
      const data = req.query
      const auth = firebase.auth()
      const user = await auth.createUserWithEmailAndPassword(data.name, data.password)
      if (user) {
          res.send('Đăng ki thành công');
      }
  }
  catch (err){
      res.send('Đăng ki thất bại');
  }
}
module.exports = {
    Dangnhap,
    Dangky,
    viewdangnhap,
    viewdangki
}