const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const User = require('../src/user');
const Camera = require('../src/camera');

describe('Updating Endpoints', () => {
    it('Update User', (done) => {
        request(app)
            .post('/user')
            .send({
                "username" : "Jim",
                "email" : "jimvanzuidam@gmail.com",
                "password" : "Admin123"
            })
            .end((err, res) => {
                request(app)
                    .put('/user')
                    .send({
                        "username" : "Jim",
                        "password" : "Admin123",
                        "newPassword" : "NewAdmin123"
                    })
                    .end((err, res) => {
                        User.findOne({ "username" : "Jim" })
                            .then((user) => {
                                assert(user.name === "Jim");
                                assert(user.password === "NewAdmin123");
                                done();
                            });
                    })
            })
    });
    it('Update Camera', (done) => {
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
                            .put('/camera')
                            .send({
                                "username" : "Jim",
                                "cameraName" : "Camera2",
                                "newCameraName" : "Camera3",
                                "location": "Sleeuwijk",
                                "newLocation" : "Gorinchem"
                            })
                            .end((err, res) => {
                                Camera.findOne({ "cameraName" : "Camera2" })
                                    .then((user) => {
                                        assert(user.cameraName === "Camera3");
                                        assert(user.location === "Gorinchem");
                                        done();
                                    });
                            })
                    })
            })
    });
});
