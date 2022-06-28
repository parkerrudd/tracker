const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/trackr", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

    .then(() => console.log('Connected to database'))
    .catch(console.error)

const Exercise = require('./models/Exercises')

app.get('/exercises', async (req, res) => {
    const exercises = await Exercise.find()

    res.json(exercises)
})

app.post('/exercise/new', (req, res) => {
    const exercise = new Exercise({
        text: req.body.text
    })

    exercise.save()

    res.json(exercise)
})

app.delete('/exercise/delete/:id', async (req, res) => {
    const result = await Exercise.findByIdAndDelete(req.params.id)

    res.json(result)
})

app.listen(3003, () => console.log('Server started on port 3003'))


