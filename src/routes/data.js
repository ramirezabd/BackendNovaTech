const { Router } = require("express");
// const { addKategori } = require("../controllers/mainControl")
const controller = require("../controllers/mainControl")

const routes = Router()

routes.post("/postkategori", controller.addKategori)
routes.post("/postproduct", controller.addProduct)
routes.post("/addstock", controller.addStockProduct)
routes.get("/getStock", controller.viewStockProduct)

module.exports = routes;