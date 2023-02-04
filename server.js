const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const multer = require("multer")
const app = express();
const dotenv = require("dotenv")
const routes = require("./src/routes/data");

dotenv.config();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(multer().single("none"));

app.use("/api/start", routes);

const { TEST_PORT } = process.env;
const port = process.env.PORT || TEST_PORT;

app.listen(port, () => console.log(`api berjalan di http://localhost:` + port));