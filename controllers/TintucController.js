const firebase = require('../db');
const Tintuc = require('../models/tintuc');
const firestore = firebase.firestore();

const themtintuc = async (req, res, next) => {
    try {
        const {title,mota,image} = req.query;
        const date = Date.now()
        await firestore.collection('tintuc').doc().set({
            title,mota,image,date
        });
        res.send('them thanh cong');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const listtintuc = async (req, res, next) => {
    const tintuc = await firestore.collection('tintuc');
    const data = await tintuc.get();
    const tintucArray = [];

    data.forEach(doc => {
        const tintuc = new Tintuc(
            doc.id,
            doc.data().title,
            doc.data().image,
            doc.data().mota,
            doc.data().date
        );
        tintucArray.push(tintuc);
    });

    res.render('listtintuc',{tintucArray});
}
const viewthemtintuc =async (req, res, next) => {
    try {
        res.render('themtintuc');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const danhsachtintuc = async (req, res, next) => {

        const tintuc = await firestore.collection('tintuc');
        const data = await tintuc.get();
        const tintucArray = [];

        data.forEach(doc => {
            const tintuc = new Tintuc(
                doc.id,
                doc.data().title,
                doc.data().image,
                doc.data().mota,
                doc.data().date
            );
            tintucArray.push(tintuc);
        });

        res.render('tintuc', {tintucArray});
}
const suatintuc = async (req, res, next) => {
    try {
        const id = req.params.id;
        const tintuc = await firestore.collection('tintuc').doc(id);
        const data = await tintuc.get();
        const tintucArray = data.data();
        res.render('suatintuc', {tintucArray,id});
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const detailtintuc = async (req, res, next) => {
    try {
        const id = req.params.id;
        const tintuc = await firestore.collection('tintuc').doc(id);
        const data = await tintuc.get();
        const tintucArray = data.data();
            res.render('detailtintuc', {tintucArray});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const capnhaptintuc = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.query;
        const tintuc = await firestore.collection('tintuc').doc(id);
        await tintuc.update(data);
        res.send('cap nhap thanh cong');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const xoatintuc = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('tintuc').doc(id).delete();
        res.send('xoa thanh cong');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    themtintuc,
    danhsachtintuc,
    detailtintuc,
    capnhaptintuc,
    xoatintuc,
    viewthemtintuc,
    listtintuc,
    suatintuc
}