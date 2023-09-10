const mongoose = require("mongoose")

const DbName = process.env.DB

mongoose.connect(`mongodb://127.0.0.1:27017/${DbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`Established connection to the database ${DbName}` )
})
.catch((err)=>{
    console.log(`sorry there is a problem to connect to the database`,err )
})