const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlarmSchema = new Schema({
    title: {
        type: String,
        unique: [true, 'Title must be unique'],
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
});

const CameraSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'CameraName must be unique'],
        required: [true, 'CameraName is required']
    },
    location: {
      type: String,
        required: [true, "Location is required"]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    alarm: [AlarmSchema],
});

const Camera = mongoose.model('thread', CameraSchema);

module.exports = Camera;