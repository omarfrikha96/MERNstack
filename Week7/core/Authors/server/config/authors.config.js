const mongoose = require('mongoose')

const DbName = process.env.DB

mongoose.connect(`mongodb://127.0.0.1:27017/${DbName}`)
    .then(() => { console.log(`Establish connection to the database ${DbName} ✅✅✅`) })
    .catch((err) => { console.log('Somthing went wrong', err) })
