const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

require('dotenv').config();
// console.log(process.env);
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true ,  useUnifiedTopology: true  }, (d,err) => {
    // console.log(err);
    console.log('Database Connected') 
})

app.listen(process.env.PORT, () => {
    console.log(`The server is running at http://localhost:${process.env.PORT}`)
})