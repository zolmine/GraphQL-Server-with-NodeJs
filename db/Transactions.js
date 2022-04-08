const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
    hash: {
        type: String,
        },
    toAdd: {
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


module.exports = new model('pendingTransaction', transactionSchema);

