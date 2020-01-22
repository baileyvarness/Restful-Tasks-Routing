const mongoose = require('mongoose');
const fs = require("fs")
const path = require("path")

mongoose.connect('mongodb://localhost/restfulTaskDB', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const modelsPath = path.join(__dirname, "../models")

fs.readdirSync(modelsPath).forEach(file => {
  if (file.includes(".js")) {
    require(path.join(modelsPath, file))
  }
})