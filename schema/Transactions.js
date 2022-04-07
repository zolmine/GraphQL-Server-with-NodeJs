const mongoose = require("mongoose");

const pendingTransactios = new mongoose.Schema({
    hash: {
        type: String,
        },
    toAddress: {
        type: String,
    },
    gas:{
        type:String,
    },
    gasPrice:{
        type:String,
    },
    maxFeePerGas:{
        type:String,
    },
    maxPriorityFeePerGas:{
        type:String,
    },
    time:{
        type:String,
    },
},{timestamps:true});

const Categorie = mongoose.model("pendingTransactios", pendingTransactios);
module.exports = Categorie;