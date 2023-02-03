const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const routes = require("./src/routes/data");
app.use("/api/start",routes);

const { TEST_PORT } = process.env;
const port = process.env.PORT || TEST_PORT;

app.listen(port, () => console.log(`api berjalan di http://localhost:` + port));