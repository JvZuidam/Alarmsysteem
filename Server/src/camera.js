const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlarmSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    camera: {
        type: mongoose.Schema.ObjectId,
        ref: 'camera',
        required: [true, 'Camera is required']
    },

    description: {
        type: String,
        required: [true, 'Description is required']
    },
    alarmType: {
        type: String,
        required: [true, 'The type of alarm is required']
    },
    alarmLevel: {
        type: String,
        required: [true, 'The level of the alarm is required']
    },
    resolved: {
        type: Number,
        required: [true, 'Resolved is required'],
        default: 0

    }
});

const CameraSchema = new Schema({
    cameraName: {
        type: String,
        unique: [true, 'CameraName must be unique'],
        required: [true, 'CameraName is required']
    },
    location: {
      type: String,
        required: [true, "Location is required"]
    },
    company: {
        type: String,
        required: [true, "Company is required"]
    },
    building: {
        type: String,
        required: [true, "Building is required"]
    },
    angle: {
        type: Number,
        required: [true, "Angle is required"]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    alarm: [AlarmSchema],
});

const Camera = mongoose.model('camera', CameraSchema);

module.exports = Camera;