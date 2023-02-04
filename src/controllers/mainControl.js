const { kategori, product, stock } = require("../../DB_Temp/models");

const viewStockProduct = async (req, res) => {
    // stock.findAll({
    //     include: [{
    //         model: product,
    //         required: true,
    //         include: [{
    //             model: kategori,
    //             required: true,
    //             distinct: true
    //         },],
    //     },],
    // })

    product.findAll({
        attributes: { 
            exclude: ["kategoriId"] 
        }
    })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: "terdapat kesalahan",
                data: err
            })
        })
}

const addKategori = async (req, res) => {
    kategori.create({
        nama: req.body.nama,
        deskripsi: req.body.deskripsi
    })
        // .then(data => {
        //     res.status(200).json(data)
        // })
        .then((data) => {
            res.status(200).json({
                data: data,
            })
        })
        .catch(err => {
            res.status(400).json({
                message: "terdapat kesalahan",
                data: err
            })
        })
}

const addProduct = async (req, res) => {
    product.create({
        kategori_id: req.body.kategori_id,
        tahun_keluaran: req.body.tahun_keluaran,
        warna: req.body.warna,
        harga: req.body.harga
    })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({
                data: err
            })
        })
}

const addStockProduct = async (req, res) => {
    stock.create({
        product_id: req.body.product_id,
        stock: req.body.stock,
    })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({
                data: err
            })
        })
}

module.exports = { addKategori, addProduct, addStockProduct, viewStockProduct }