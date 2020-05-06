let express = require('express');
let todoRequest = require('./request/todoRequest');

let app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Used to make public folder the root for routes
app.use(express.static('./public2'));

// fire request
todoRequest(app)


// Listen to port

app.listen(4401);
console.log('You are listening to port 4401');

 