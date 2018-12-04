const express = require("express");
const bodyParser = require("body-parser");
const Camera = require("../src/camera");
const User = require("../src/user");
const router = express.Router();
const responseMessages = require("../responseMessages");

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({extended: true}));

//Create alarm
router.post("", (request, result) => {
    const cameraId = request.body.cameraId;
    const alarmName = request.body.alarmName;
    const description = request.body.description;
    const alarmtype = request.body.alarmType;
    const alarmLevel = request.body.alarmLevel;
});

//Get all alarms
router.get("", (request, result) => {
    const cameraId = request.body.cameraId;
});

//Get an alarm
router.get("/:cameraId:/alarmId", (request, result) => {
    const cameraId = request.body.cameraId;
    const alarmId = request.params.alarmId;
});

//Update an alarm
router.put("", (request, result) => {
    const cameraId = request.body.cameraId;
    const alarmName = request.body.alarmName;
    const description = request.body.description;
    const alarmtype = request.body.alarmType;
    const alarmLevel = request.body.alarmLevel;
    const newDescription = request.body.newDescription;
    const newAlarmtype = request.body.newAlarmtype;
    const newAlarmLevel = request.body.newAlarmLevel;
});

//Delete an alarm
router.delete("", (request, result) => {
    const cameraId = request.body.cameraId;
    const alarmId = request.body.alarmId;

});

module.exports = router;