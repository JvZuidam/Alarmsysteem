const express = require("express");
const bodyParser = require("body-parser");
const User = require("../src/user");
const router = express.Router();
const responseMessages = require("../responseMessages");

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({extended: true}));

//Create user
router.post("", (request, result) => {
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.password;

    if (Object.keys(request.body).length === 0) {
        responseMessages.ErrorCode412(result);
    } else if (username != null || email != null || password != null) {

        //Create a  new instance of User
        const newUser = new User({name: username, email: email, password: password});
        //Save the instance of user
        newUser.save()
        //Check if the user already exists
            .then(() => {
                //If no; Create new user
                responseMessages.SuccessCode201User(result, username, password);
            })
            //If yes Return errorCode.
            .catch(err => {
                responseMessages.ErrorCode409DuplicateUser(result);
            });

    } else {
        responseMessages.ErrorCode412(result);
    }
});

//Get all users
router.get("", (request, result) => {
    User.find({}, function (err, docs) {
        if (err || docs === null) {
            responseMessages.ErrorCode412(result);
        } else {
            responseMessages.SuccessCode200GetAll(result, docs);
        }
    })
});

//Get a user
router.get("/:username", (request, result) => {
    const username = request.params.username;

    User.findOne({ name: username }, function (err, docs) {
        if (err || docs === null) {
            responseMessages.ErrorCode422(result);
        } else {
            responseMessages.SuccessCode200GetAll(result, docs);
        }
    })
});

//Update a users
router.put("", (request, result) => {
        const username = request.body.username;
        const password = request.body.password;
        const newPassword = request.body.newPassword;

        if (Object.keys(request.body).length === 0) {
            responseMessages.ErrorCode412(result);
        } else if (username != null || password != null || newPassword != null) {
            if (password == newPassword) {
                responseMessages.ErrorCode412SameValues(result);
            } else {
                User.findOne({name: username}, function (err, docs) {
                    if (!docs) {
                        responseMessages.ErrorCode422(result);
                    } else if (docs.password !== password) {
                        responseMessages.ErrorCode401(result);
                    } else {
                        User.updateOne({ "name" : username }, { $set: { password : newPassword } }).then(() => {
                            responseMessages.SuccessCode200User(result, username, newPassword);
                        });
                    }
                });
            }
        } else {
            responseMessages.ErrorCode412(result);
        }
    }
);

//Delete a users
router.delete("", (request, result) => {
    const username = request.body.username;
    const password = request.body.password;

    if (Object.keys(request.body).length === 0) {
        responseMessages.ErrorCode412(result);
    } else if (username != null || password != null) {
        User.findOne({name: username}, function (err, docs) {
            if (!docs) {
                responseMessages.ErrorCode422(result);
            } else if (docs.password !== password) {
                responseMessages.ErrorCode401(result);
            } else {
                User.deleteOne({ "name" : username }).then(() => {
                    responseMessages.SuccessCode204(result);
                });
            }
        });
    } else {
        responseMessages.ErrorCode412(result);
    }
});

module.exports = router;