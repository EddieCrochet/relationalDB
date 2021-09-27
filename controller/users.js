let getAllUsers = (req, res) => {
    console.log("GET -- users/getAllUsers");
    res.json("GET - getAllUsers");
}

module.exports = { getAllUsers };