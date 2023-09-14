const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors(), express.json(), express.urlencoded({ extended: true }))


require("dotenv").config()
require("./config/authors.config")
require("./routes/authors.route")(app)


const port = process.env.PORT


app.listen(port, () => {
    console.log(`>>>>>>>>>>> Server is running in port : 🎈🎈🎈${port}🎈🎈🎈`)
})