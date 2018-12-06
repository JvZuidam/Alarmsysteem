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