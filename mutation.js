
const { pending } = require('../db')

const mutation = {
    addTransaction: async ({ title, author, description }, context) => {
        try {
            const transaction = await pending.createBook({ title, author, description })
            // const book = { id: `${books.length+1}`, title, author, description }
            // books.push(book)
            return {
                data: transaction,
                ok: true,
                error: ''
            };
        } catch (error) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    },

   
    deleteTransaction: async ({ id }, context) => {
        // const book = books.find(book => book.id === id)
        // books = books.filter(book => book.id !== id)
        try {
            const transaction = await pending.deleteBook(id)
            if (!transaction) {
                return {
                    data: null,
                    ok: false,
                    error: 'Transaction not found'
                };
            }
            return {
                data: transaction,
                ok: true,
                error: ''
            };
        }
        catch (error) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    }
};

module.exports = mutation