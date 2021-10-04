// adding a db connnection for my controller to manipulate
let db = require('../sql/connection.js');

let getAllUsers = (req, res) => {
    console.log("GET -- users/getAllUsers");

    let sql = `select * from users`;

    db.query(sql, (err, rows) => {
        if(err){
            console.log("Something's wrong...", err);
            res.sendStatus(500);
        } else {
            console.log("bingo... ", rows);
            res.json(rows);

            // not too sure why the below does not work
            //res.sendStatus(204).json("GET - getAllUsers");
        }
    })
};

let getUserById = (req, res) => {
    console.log('GET -- users/getUserById');

    let id = req.params.id;

    let sql = 'select id, first_name, last_name from users where id = $1';

    let values = [id];

    db.query(sql, values, (err, rows) => {
        if(err){
            console.log("Something's wrong...", err);
            res.sendStatus(500);
        } else {
            console.log("boingo... ", rows);
            res.json(rows);
        }
    })
};

let createUser = (req, res) => {
    console.log('POST -- users/createuser');

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    
    let sql = 'insert into users(first_name, last_name) values($1, $2)';

    let values = [firstName, lastName];

    db.query(sql, values, (err, rows) => {
        if(err){
            console.log("Something's wrong...", err);
            res.sendStatus(500);
        } else {
            console.log("boingo... ", rows);
            res.sendStatus(201);
        }
    })

};

let updateUserById = (req, res) => {
    console.log('PUT -- users/updateUserById');

    let id = req.params.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    let sql = 'update users set first_name = $1, last_name = $2 where id = $3';

    let values = [firstName, lastName, id];

    db.query(sql, values, (err, rows) => {
        if(err) {
            console.log("Something's wrong...", err);
            res.sendStatus(500);
        } else { 
            console.log("boingo... ", rows);
            res.sendStatus(201);
        }
    })
};

let deleteUserById = (req, res) => {
    console.log("DELETE -- users/delete");

    let sql = ' delete from users where id = $1';

    let values = [req.params.id]

    db.query(sql, values, (err, rows) => {
        if(err) {
            console.log("Something's wrong...", err);
            res.sendStatus(500);
        } else {
            console.log("boingo... ", rows);
            res.sendStatus(200);
        }
    })
}

module.exports = { getAllUsers, getUserById, createUser, updateUserById, deleteUserById };