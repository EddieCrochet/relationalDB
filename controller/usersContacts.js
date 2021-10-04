// adding a db connnection for my controller to manipulate
let db = require('../sql/connection.js');

let getAllContacts = (req, res) => {
    console.log("GET -- usersContacts/getAllContacts");

    let sql = `select * from usersContacts`;

    db.query(sql, (err, rows) => {
        if(err){
            console.log("Something's wrong...", err);
            res.sendStatus(500);
        } else {
            console.log("bingo... ", rows);
            res.json(rows);
        }
    })
};


module.exports = { getAllContacts };