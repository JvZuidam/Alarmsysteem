const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require("./dbCon");

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

module.exports = app;