require('dotenv').config();
let express = require('express');
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

module.exports = app;
