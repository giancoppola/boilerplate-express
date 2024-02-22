require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser')
let app = express();

function ToMessageStyle(str){
    let res;
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res = str.toUpperCase()
        return res;
    }
    return str;
}

// static public files
app.use("/public", express.static(__dirname + "/public"))

// Root
app.use("/", bodyParser.urlencoded({extended: false}));
app.use("/", (req, res, next) => {
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req, res) => {
    res.json({
        message: ToMessageStyle("Hello json")
    })
})

app.get("/now", (req, res, next) => {
    let time = new Date().toString();
    req.time = time;
    next()
    },
    (req, res) => {
        res.json({
            time: req.time
    })
})

app.get("/:word/echo", (req, res) => {
    res.json({
        echo: req.params.word
    })
})

app.use("/name", bodyParser.urlencoded({extended: false}))
app.route("/name")
    .get((req, res) => {
        console.log(req.query);
        let first = req.query.first != null ? req.query.first : "";
        let last = req.query.last != null ? req.query.last : "";
        res.json({
            name: `${first} ${last}`
        })
    })
    .post((req, res) => {
        console.log(req.body);
        let first = req.body.first != null ? req.body.first : "";
        let last = req.body.last != null ? req.body.last : "";
        res.json({
            name: `${first} ${last}`
        })
    })

module.exports = app;
