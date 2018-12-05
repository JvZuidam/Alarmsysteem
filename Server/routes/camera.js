const express = require("express");
const bodyParser = require("body-parser");
const Camera = require("../src/camera");
const router = express.Router();
const responseMessages = require("../responseMessages");

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({extended: true}));

//Create camera
router.post("", (request, result) => {
    const username = request.body.username;
    const cameraName = request.body.cameraName;
    const location = request.body.Location;

    if (Object.keys(request.body).length === 0) {
        responseMessages.ErrorCode412(result);
    } else if (username != null || cameraname != null || location != null) {

        //Create a  new instance of User
        const newCamera = new Camera({user: username, camera: cameraName, location:location});
        //Save the instance of user
        newCamera.save()
        //Check if the user already exists
            .then(() => {
                //If no; Create new user
                responseMessages.SuccessCode200Camera(result, cameraName, location);
            })
            //If yes Return errorCode.
            .catch(err => {
                responseMessages.ErrorCode409DuplicateCamera(result);
            });

    } else {
        responseMessages.ErrorCode412(result);
    }
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