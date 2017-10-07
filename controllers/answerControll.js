const Answer = require('../models/Answer')
const Question = require('../models/Question')

var replay = (req, res) => {
    Answer.create({
        content: req.body.content,
        voteUp: [],
        voteDown: []
        author: req.headers.auth._id,
    })
    .then(result => {
        console.log('result', result)
        Question.update({
            _id: req.params.q_id
        }, { $push: {
            answer: result._id
        }})
        .then(resultAnswer => {
            console.log('resultAnswer', resultAnswer)
            res.send('Replay Question')
        })
        .catch(err => {
            res.send(err)
        })
    })
    .catch(err => {
        res.send(err)
    })
}



module.exports = {replay}