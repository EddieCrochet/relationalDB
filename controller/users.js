// adding a db connnection for my controller to manipulate
let db = require('../sql/connection.js');

let getAllUsers = (req, res) => {
    console.log("GET -- users/getAllUsers");

    let sql = `select * from appUsers`;

    db.query(sql, (err, rows) => {
        if(err){
            console.log("Something's wrong...", err);
            res.sendStatus(500);
        } else {
            console.log("bingo... ", rows);
            //res.json(rows);
            res.sendStatus(204);
        }
    })

    res.json("GET - getAllUsers");
}

module.exports = { getAllUsers };