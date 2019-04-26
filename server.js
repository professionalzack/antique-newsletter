const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// View Engine
app.set('view engine', 'ejs');

// Database
const db = require("./models");

// ============================= MIDDLE WARE ================================ //


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.static(__dirname + "/public"));


// ============================= ROUTES ================================ //

//GET Root Route
app.get('/', (req, res) => {
    res.render('dashboard');
});


//GET Index User Route
app.get('/api/users', (req, res) => {
    console.log('yo wheat')
    db.User.find().exec((err, user) => {
        console.log('chekcing for users')
        if (err) return res.status(500);
        res.json(user);
    })
});

//POST Create User Route
app.post('/api/users', (req, res) => {
    db.User.create(req.body, (err, newUser) => {
        if (err) return res.status(500);
        res.json(newUser)
    })
});

//DELETE Destroy User Route
app.delete('/api/users/:id', (req, res) => {
    db.User.findByIdAndRemove(req.params.id)
        .exec((err, deletedUser) => {
            if (err) return res.status(400);
            res.json(deletedUser);
        });
});








// ============================= START SERVER ================================ //


app.listen(PORT, () => console.log(`lounging in flip-flops on beach ${PORT} 🏖️`));