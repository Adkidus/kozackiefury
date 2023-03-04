const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    author: {
        firstName: String,
        lastName: String,
        email: String,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    state: {
        type: String,
        enum: ['draft', 'public', 'archive'],
        default: 'draft',
    },
    category: String,
    subCategory: String,
    tags: [String],
}, {
    timestamps: true
});

module.exports = BlogPost = mongoose.model('BlogPost', BlogPostSchema);