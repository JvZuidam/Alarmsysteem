const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Camera = require("../src/camera");
const User = require("../src/user");
const responseMessages = require("../responseMessages");

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({extended: true}));

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Create camera
router.post("", (request, result) => {
    const userName = request.body.username;
    const cameraName = request.body.cameraName;
    const location = request.body.location;

    if (Object.keys(request.body).length === 0) {
        responseMessages.ErrorCode412(result);
    } else if (userName != null || cameraName != null || location != null) {

        User.findOne({name: userName}, function (err, docs) {
            if (err || docs === null) {
                responseMessages.ErrorCode412(result);
            } else {
                const newCamera = new Camera({cameraName: cameraName, location: location, user: docs._id});
                //Save the instance of user
                newCamera.save()
                //Check if the user already exists
                    .then(() => {
                        //If no; Create new user
                        responseMessages.SuccessCode201Camera(result, cameraName, location);
                    })
                    //If yes Return errorCode.
                    .catch(err => {
                        responseMessages.ErrorCode409DuplicateCamera(result);
                    });
            }
        });

    } else {
        responseMessages.ErrorCode412(result);
    }
});

//Get all cameras
router.get("/:userName", (request, result) => {
    const userName = request.params.userName;

    User.findOne({name: userName}, function (err, docs) {
        if (err || docs === null) {
            responseMessages.ErrorCode412(result);
        } else {
            Camera.find({}, function (err, docs) {
                if (err || docs === null) {
                    responseMessages.ErrorCode412(result);
                } else {
                    responseMessages.SuccessCode200GetAll(result, docs);
                }
            })
        }
    });
});

//Read Camera Endpoint for 1 Camera
router.get("/:userName/:cameraName", (request, result) => {
    const userName = request.params.userName;
    const cameraName = request.params.cameraName;

    User.findOne({name: userName}, function (err, docs) {
        if (err || docs === null) {
            responseMessages.ErrorCode412(result);
        } else {
            Camera.find({cameraName: cameraName}, function (err, docs) {
                if (err || docs === null) {
                    responseMessages.ErrorCode404(result);
                } else {
                    responseMessages.SuccessCode200GetAll(result, docs);
                }
            });
        }
    });
});

//Update a camera
router.put("", (request, result) => {
    const userName = request.body.username;
    const cameraName = request.body.cameraName;
    const newCameraName = request.body.newCameraName;
    const newLocation = request.body.newLocation;

    if (Object.keys(request.body).length === 0) {
        responseMessages.ErrorCode412(result);
    } else if (userName != null || cameraName != null || newCameraName != null || newLocation != null) {

        User.findOne({name: userName}, function (err, docs) {
            if (err || docs === null) {
                responseMessages.ErrorCode412(result);
            } else {
                Camera.findOne({cameraName: cameraName}, function (err, docs) {
                    if (err || docs === null) {
                        responseMessages.ErrorCode422(result);
                    } else {
                        docs.cameraName = newCameraName;
                        docs.location = newLocation;
                        docs.save()
                            .then(() => {
                                responseMessages.SuccessCode200UpdateCamera(result, newCameraName, newLocation);
                            })
                            .catch(err => {
                                responseMessages.ErrorCode409DuplicateCamera(result);
                            });
                    }
                });
            }
        });
    } else {
        responseMessages.ErrorCode412(result);
    }
});

//TODO: Pass user to this request
//TODO: Check is user exists
//Delete a camera
router.delete("/:userName/:cameraName", (request, result) => {
    const userName = request.params.userName;
    const cameraName = request.params.cameraName;

    User.findOne({name: userName}, function (err, docs) {
        if (err || docs === null) {
            responseMessages.ErrorCode412(result);
        } else {
            Camera.findOne({cameraName: cameraName}, function (err, docs) {
                if (err || !docs) {
                    responseMessages.ErrorCode422(result);
                } else {
                    Camera.deleteOne({"cameraName": cameraName})
                        .then(() => {
                            responseMessages.SuccessCode204(result);
                        });
                }
            });
        }
    });
});

module.exports = router;