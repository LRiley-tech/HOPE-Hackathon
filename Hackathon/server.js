let express = require('express');

let app = express();

let todoRequest = require('./public/script/todoRequest');


// Set up template engine
app.set('view engine', 'ejs');

app.use(express.static('./public'));

// fire request
todoRequest(app)
 

let apiKey = process.env.APIKEY

// App will be using express.static)() in order for us to stage my client files folder
app.use(express.static('public'))


app.listen(4400, () => {
    console.log(`Listening on port ${port}`)
})


const port = process.env.PORT || 4400

// New route
app.get ('/', (req,res) =>{

})

// Connecting server to html and css files
const routes = {
    '/': (req,res) => static({
        filename: path.resolve(__dirname, 'public/index.html'),
        contentType: 'text/html'
    },res),
    '/public/styles/styles.css': (req,res) => ({
        filename: path.resolve(__dirname, '/public/styles/styles.css')
    }, res),
    '/public/script/script.js': (req,res) => ({
        filename: path.resolve(__dirname, 'public.script/script.js')
    }, res),
    '/node-js-todo/views/todo.ejs': (req,res) => ({
        filename: path.resolve(__dirname, '/node-js-todo/public2/assets/todo-list.js')
    }, res),
    // '/node-js-todo/public2/assets/todo-list.js': (req,res) => ({
    //     filename: path.resolve(__dirname, '/node-js-todo/public2/assets/todo-list.js')
    // }, res),
}