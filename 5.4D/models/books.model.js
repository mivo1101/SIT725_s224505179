const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true,
        index: true
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1000, 'Year must be after 1000'],
        max: [new Date().getFullYear() + 1, 'Year cannot be in the future']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        trim: true
    },
    summary: {
        type: String,
        required: [true, 'Summary is required'],
        minLength: [10, 'Summary must be at least 10 character long'],
        trim: true
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: [true, 'Price is required'],
        validate: {
            validator: function(v) {
                return Number(v.toString()) >= 0;
            },
            message: 'Price cannot be negative'
        },
        get: v => v?.toString()
    },
    currency: {
        type: String,
        required: true,
        default: 'AUD'
    }
}, {
    toJSON: { getters: true, virtuals: false, transform(_doc, ret){ delete ret.__v; return ret; } },
    toObject: { getters: true, virtuals: false }
});

module.exports = mongoose.model('Book', bookSchema);