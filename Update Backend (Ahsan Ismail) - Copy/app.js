require("dotenv").config();
const express = require("express");
const connecttodb = require("./config/db");
const bodyParser = require("body-parser");
const router = require("./router/router");
const cors = require("cors");
var whitelist = ['http://localhost:3000']


var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions) 
}
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptionsDelegate))
app.use("/user/", router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connecttodb();
  console.log(`app is listining on port ${PORT}`);
});
