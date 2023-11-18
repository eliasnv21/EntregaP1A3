const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rafasql789",
    database: "crus_games"
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    const sqlInsert = "INSERT INTO game_db (name, category, nota, stream) VALUES ('GTA V', 'Jogando', '10356534', 'EpicGames')";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result)
        res.send("Hello Express");
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});