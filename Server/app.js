const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
// const db = require("./dbCon");
const envVar = 'production';

app.use("/user", require("./routes/user"));
app.use("/camera", require("./routes/camera"));
app.use("/alarm", require("./routes/alarm"));

app.get("*", (request, result) => {
    result.status(404);
    result.json("Unknown route");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.listen(port, () => {
    console.log('Running on port ' + port);
});


if (envVar === 'testCloud' ||envVar === 'production') {
    mongoose.connect('mongodb+srv://Administrator:admin1@alarmsysteem-sugph.mongodb.net/test?retryWrites=true',
        {useNewUrlParser: true})
        .then(() => {
            console.log("MongoDB Cloud connected")
        })
        .catch(err => console.log(err));
}
else if (envVar === 'test') {
    mongoose.connect('mongodb://localhost/alarmsystem',
        {useNewUrlParser: true})
        .then(() => {
            console.log("MongoDB Local connected")
        })
        .catch(err => console.log(err));
}

mongoose.connection
    .once('open', () => {
        console.log('Connection opened');
    })
    .on('error', (error) => {
        console.warn('Warning', error);
    });

module.exports = app;