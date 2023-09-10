const Product = require('../models/product.model')



//? CREATE
module.exports = {
    createNewProduct : (req, res) => {
    Product.create(req.body)
        .then(createProduct =>  res.json(createProduct))
        .catch(err => res.json(err) )
}
}

