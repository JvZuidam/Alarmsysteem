const express = require("express");
const bodyParser = require("body-parser");
const Camera = require("../src/camera");
const router = express.Router();
const responseMessages = require("../responseMessages");

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({extended: true}));

//Create camera
router.post("", (request, result) => {
    const userId = request.body.userId;
    const cameraName = request.body.cameraName;
    const location = request.body.Location;
});

//Get all cameras
router.get("", (request, result) => {
    const userId = request.body.userId;
});

//Update a camera
router.put("", (request, result) => {
    const userId = request.body.userId;
    const cameraName = request.body.cameraName;
});

//Delete a camera
router.delete("", (request, result) => {
    const userId = request.body.userId;
    const cameraName = request.body.cameraName;
});

module.exports = router;