let bodyParser = require('body-parser');

let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'code'}];
let urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    app.get('/todo', function(req,res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req,res) {
        // Pushing used data to an array
        data.push(req.body);
        // Sending data back to frontend as json
        res.json(data);
    })

    app.delete('/todo/:item', (req,res) => {
        data = data.filter(function(todo) {
            // (/ /g "-") replaces spaces with - and target 
            return todo.item.replace(/ /g, "-") !== req.params.item;
        })
        res.json(data)
    })
};