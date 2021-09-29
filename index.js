// starting point of our server
let express = require('express');
let app = express();

require("dotenv").config();

// enable app to be able to parse json bodies in post/put
app.use(express.json());

// assign port connection to designated OR 4000 if not
let port = process.env.PORT || 4000;

// tell app to use users route - and where
const usersRoute = require('./routers/users');
app.use('/users', usersRoute);

//root route
app.get('/', (req, res) => {
    res.send('Welcome to my server!')
});

app.listen(port, () => {
    console.log("Listening on port ", port);
})