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
                    .del('/user/Jim/Admin123').expect(204).end(done);
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
                        "cameraName" :"Camera1",
                        "location": "Sleeuwijk"
                    })
                    .end((err, res) => {
                        request(app)
                            .del('/camera/Jim/Camera1').expect(204).end(done);
                    });
            });
    });
});