let express = require('express');

let app = express();

app.use(express.static('public'))

// variable to be used to access json files
let data = require('/public/')


app.listen(4400, () => {
    console.log(`Listening on port ${port}`)
})


const port = process.env.PORT || 4400

// New route
app.get ('/', (req,res) =>{
    
})