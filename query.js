// const booksData = require('./data')
const { pendingUtils} = require('./db/')

const query = {
    transactions: async ({limit}, context) => {
        // return limit ? booksData.slice(0, limit) : booksData;
        return await pendingUtils.getAllTransactions(limit)
    },

    transactions: async ({id}, context) => {
        // return booksData.find(book => book.id === id);
        return await pendingUtils.getTransactionById(id)
    }
};

module.exports = query