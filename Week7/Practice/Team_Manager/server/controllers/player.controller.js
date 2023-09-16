const {playerSchema} =require('../models/player.model')

//Read All

module.exports.findAllPlayers = (req, res) => {
    playerSchema.find()
        .then((allPlayers) => {
            res.json(allPlayers)
        })
        .catch(err => { res.status(400).json(err) })
}

//? CREATE
module.exports.createNewPlayer= (req, res) => {
    playerSchema.create(req.body)
        .then(CreatePlayer => {
            console.log(CreatePlayer)
            res.status(200).json({ CreatePlayer })
        })
        .catch(err => { res.status(400).json(err) })
}

// Find One by Id

module.exports.findOnePlayer = (req, res) => {
    playerSchema.findById(req.params.id)
        .then(player => res.json(player)
        ).catch(err => { res.status(400).json(err) })
}

// Update
module.exports.updateOnePlayer = (req, res) => {
    playerSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => { res.json(updatedPlayer) })
        .catch(err => { res.status(400).json(err) })
}
// Delete

module.exports.deletePlayer = (req, res) => {
    playerSchema.findByIdAndDelete(req.params.id)
        .then(player => { res.json(player) })
        .catch(err => { res.status(400).json(err) })
}