const express = require("express")
const app = express();
const path = require("path")

console.log(__dirname);

app.use(express.static(path.join(__dirname)))

const PORT =  process.env.PORT || 5500;

app.listen(PORT,()=>console.log(`server is running ${PORT}`))