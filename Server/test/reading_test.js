const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const User = require("../src/user");
const Camera = require("../src/camera");

//
describe('Reading Endpoints', () => {
    it('Get all Users', (done) => {
        request(app)
            .post('/user')
            .send({
                "username" : "Jim",
                "email" : "jimvanzuidam@gmail.com",
                "password" : "Admin123"
            })
            .end((err, res) => {
                request(app)
                    .post('/user')
                    .send({
                        "username" : "Henk",
                        "email" : "henkgrol@gmail.com",
                        "password" : "Admin123"
                    })
                    .end((err, res) => {
                        request(app)
                            .get('/user')
                            .end((err, res) => {
                                User.find()
                                    .then((user) => {
                                        assert(user[0].name === "Jim");
                                        assert(user[0].email === "jimvanzuidam@gmail.com");
                                        assert(user[0].password === "Admin123");

                                        assert(user[1].name === "Henk");
                                        assert(user[1].email === "henkgrol@gmail.com");
                                        assert(user[1].password === "Admin123");
                                        done();
                                    })
                            })
                    })
            })
    });
//
    it('Get 1 User', (done) => {
        request(app)
            .post('/user')
            .send({
                "username" : "Jim",
                "email" : "jimvanzuidam@gmail.com",
                "password" : "Admin123"
            })
            .end((err, res) => {
                request(app)
                    .get('/user/Jim')
                    .end((err, res) => {
                        User.find()
                            .then((user) => {
                                assert(user[0].name === "Jim");
                                assert(user[0].email === "jimvanzuidam@gmail.com");
                                assert(user[0].password === "Admin123");
                                done();
                            })
                    })
            })
    });
//
    it('Get all Cameras', (done) => {
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
                            .post('/camera')
                            .send({
                                "username" : "Jim",
                                "cameraName" : "Camera2",
                                "location": "Gorinchem"
                            })
                            .end((err, res) => {
                                request(app)
                                    .get('/camera')
                                    .end((err, res) => {
                                        Camera.find()
                                            .then((user) => {
                                                assert(user[0].cameraName === "Camera1");
                                                assert(user[0].location === "Sleeuwijk");
                                                assert(user[1].cameraName === "Camera2");
                                                assert(user[1].location === "Gorinchem");
                                                done();
                                            })
                                    })
                            })
                    })

            })
    });
//
    it('Get 1 Camera', (done) => {
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
                            .get('/camera/Jim/Camera1')
                            .end((err, res) => {
                                Camera.find()
                                    .then((user) => {
                                        assert(user[0].cameraName === "Camera1");
                                        assert(user[0].location === "Sleeuwijk");
                                        done();
                                    })
                            })
                    })
            })
    });
});
