const transactionSchema = require('../schema/Transactions');

const getAllTransactions = async (limit) => {
    return await transactionSchema.find({}).limit(limit);
}

const getTransactionById = async (id) => {
    return await transactionSchema.findById(id);
}

const createTransaction = async ({ title, description, author }) => {
    return await BookModel.create({ title, description, author });
}

module.exports = {
    getAllTransactions,
    getTransactionById,

}