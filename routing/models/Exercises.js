const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    text: {
        type: String, 
        required: true
    }, 

    complete: {
        type: Boolean, 
        default: false
    }, 

    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise