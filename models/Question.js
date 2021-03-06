const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const answerSchema = require('./Answer')

var questionSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: String,
    answer: [{
        type: ObjectId,
        ref: 'Answer'
    }],
    voteUp: [{
        type: ObjectId,
        ref: 'User'
    }],
    voteDown: [{
        type: ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})


var Question = mongoose.model('Question', questionSchema)

module.exports = Question
