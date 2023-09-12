const Product = require('../models/product.model')



//? CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(createProduct =>  res.json(createProduct))
        .catch(err => res.json(err) )
}


// Read All
module.exports.getAllProducts = (req , res)=>{
        Product.find()
        .then(product => res.json({product}))
        .catch(err=> console.log(err))
    }

// read just one
module.exports.getOneProduct = (req , res)=>{
            Product.findOne({_id : req.params.id})
            .then(person=> res.json(person))
            .catch(err=> console.log(err))
        }
    
 //update       
 module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
         .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
 }


 //delete
 module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}