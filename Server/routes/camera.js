const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Camera = require("../src/camera");
const User = require("../src/user");
const responseMessages = require("../responseMessages");

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({extended: true}));

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
                console.log(docs);
                const newCamera = new Camera({cameraName: cameraName, location: location, user: docs._id});
                //Save the instance of user
                console.log(newCamera);
                newCamera.save()
                //Check if the user already exists
                    .then(() => {
                        //If no; Create new user
                        responseMessages.SuccessCode201Camera(result, cameraName, location);
                    })
                    //If yes Return errorCode.
                    .catch(err => {
                        console.log(err);
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
                console.log(docs);
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
    const userName = request.body.userName;
    const cameraName = request.body.cameraName;
    const newCameraName = request.body.newCameraName;
    const location = request.body.location;
    const newLocation = request.body.newLocation;

    if (Object.keys(request.body).length === 0) {
        responseMessages.ErrorCode412(result);
    } else if (userName != null || cameraName != null || newCameraName != null || location != null || newLocation != null) {

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
                                console.warn(err);
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
router.delete("", (request, result) => {
    const userName = request.body.userName;
    const cameraName = request.body.cameraName;

    if (Object.keys(request.body).length === 0) {
        responseMessages.ErrorCode412(result);
    } else if (cameraName != null || userName != null) {

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
    } else {
        responseMessages.ErrorCode412(result);
    }
});

module.exports = router;