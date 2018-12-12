const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const User = require("../src/user");
const Camera = require("../src/camera");

describe('Delete Endpoints', () => {
    it('Delete User', (done) => {
        request(app)
            .post('/user')
            .send({
                "username" : "Jim",
                "email" : "jimvanzuidam@gmail.com",
                "password" : "Admin123"
            })
            .end((err, res) => {
                request(app)
                    .del('/user')
                    .send({
                        "username" : "Jim",
                        "password" : "Admin123"
                    })
                    .end((err, res) => {
                        User.findOne({"name": "Jim"})
                            .then((user) => {
                                assert(user === null);
                                done();
                            });
                    })
            });
    });

    it('Delete Camera', (done) => {
        request(app)
            .post('/user')
            .send({
                "username" : "Jim",
                "email" : "jimvanzuidam@gmail.com",
                "password" : "Admin123"
            })
            .end((err, res) => {
                request(app)
                    .post('/camera')
                    .send({
                        "username" : "Jim",
                        "cameraName" : "Camera1",
                        "location": "Sleeuwijk"
                    })
                    .end((err, res) => {
                        request(app)
                            .del('/camera')
                            .send({
                                "cameraName" : "Camera1"
                            })
                            .end((err, res) => {
                                Camera.findOne({ "cameraName" : "Camera1" })
                                    .then((camera) => {
                                        assert(camera === null);
                                        done();
                                    });
                            })
                    });
            });
    });
});

