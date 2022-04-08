const transactionSchema = require('../schema/schema');

const getAllTransactions = async (limit) => {
    return await transactionSchema.find({}).limit(limit);
}

const getTransactionById = async (id) => {
    return await transactionSchema.findById(id);
}

const createTransaction = async ({ hash, toAdd, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas,time }) => {
    return await BookModel.create({ hash, toAdd, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas,time });
}

module.exports = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
}