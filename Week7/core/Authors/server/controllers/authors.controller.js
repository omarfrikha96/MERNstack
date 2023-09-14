const {authorsSchema} =require('../models/authors.model')

//Read All

module.exports.findAllAuthors = (req, res) => {
    authorsSchema.find()
        .then((allAuthor) => {
            res.json(allAuthor)
        })
        .catch(err => { res.status(400).json(err) })
}

//? CREATE
module.exports.createNewAuthor= (req, res) => {
    authorsSchema.create(req.body)
        .then(CreateAuthor => {
            console.log(CreateAuthor)
            res.status(200).json({ CreateAuthor })
        })
        .catch(err => { res.status(400).json(err) })
}

// Find One by Id

module.exports.findOneAuthor = (req, res) => {
    authorsSchema.findById(req.params.id)
        .then(author => res.json(author)
        ).catch(err => { res.status(400).json(err) })
}

// Update
module.exports.updateOneAuthor = (req, res) => {
    authorsSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => { res.json(updatedAuthor) })
        .catch(err => { res.status(400).json(err) })
}
// Delete

module.exports.deleteAuthor = (req, res) => {
    authorsSchema.findByIdAndDelete(req.params.id)
        .then(author => { res.json(author) })
        .catch(err => { res.status(400).json(err) })
}