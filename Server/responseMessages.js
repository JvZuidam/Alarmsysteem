const moment = require("moment");

function ErrorCode401(result) {
    result.status(401).json({
        code: 401,
        message: "Unauthorized to execute this action",
        datetime: moment().format()
    });
}

function ErrorCode409DuplicateUser(result) {
    result.status(409).json({
        code: 409,
        message: "Conflict, User already exists",
        datetime: moment().format()})
}

function ErrorCode409DuplicateThread(result) {
    result.status(409).json({
        code: 409,
        message: "Conflict, Thread already exists",
        datetime: moment().format()})
}

function ErrorCode412(result) {
    result.status(412).json({
        code: 412,
        message: "Een of meer properties in de request body ontbreken of zijn foutief",
        datetime: moment().format("Y-mm-D:hh:mm:ss")
    });
}

function ErrorCode412SameValues(result) {
    result.status(412).json({
        code: 412,
        message: "Current and new values are not allowed to the be same",
        datetime: moment().format()
    });
}

function ErrorCode422(result) {
    result.status(422).json({
        code: 422,
        message: "Unprocessable entity",
        datetime: moment().format()
    });
}

function SuccessCode200User(result, username, newPassword) {
    result.status(200).json({
        code: 200,
        message: {username: username, password: newPassword,},
        datetime: moment().format()
    });
}

function SuccessCode200GetAll(result, docs) {
    result.status(200).json({
        code: 200,
        results: docs,
        datetime: moment().format()
    });
}

function SuccessCode200UpdateThread(result, title, content) {
    result.status(200).json({
        code: 200,
        message: {title: title, content: content,},
        datetime: moment().format()
    });
}

function SuccessCode200UpdateVote(result, title, username, voteType) {
    result.status(200).json({
        code: 200,
        message: {title: title, user: username, voteType: voteType},
        datetime: moment().format()
    });
}

function SuccessCode200UpdateCommentVote(result, commentId, username, voteType) {
    result.status(200).json({
        code: 200,
        message: {id: commentId, user: username, voteType: voteType},
        datetime: moment().format()
    });
}

function SuccessCode201User(result, username, password) {
    result.status(201).json({
        code: 201,
        message: {username: username, password: password,},
        datetime: moment().format()
    });
}

function SuccessCode201Thread(result, title, content, creatorUser) {
    result.status(201).json({
        code: 201,
        message: {title: title, content: content, creator: creatorUser,},
        datetime: moment().format()
    });
}

function SuccessCode201Comment(result, content, creatorUser) {
    result.status(201).json({
        code: 201,
        message: {content: content, creator: creatorUser,},
        datetime: moment().format()});
}

function SuccessCode201Vote(result, title, username, voteType) {
    result.status(201).json({
        code: 201,
        message: {title: title, name: username, voteType: voteType ,},
        datetime: moment().format()
    });
}

function SuccessCode201CommentVote(result, commentId, username, voteType) {
    result.status(201).json({
        code: 201,
        message: {id: commentId, name: username, voteType: voteType ,},
        datetime: moment().format()
    });
}



function SuccessCode201Users(result, firstUser, secondUser) {
    result.status(201).json({
        code: 201,
        message: {firstUser: firstUser, secondUser: secondUser,},
        datetime: moment().format()
    });
}

function SuccessCode204(result) {
    result.status(204).end();
}

module.exports = {
    ErrorCode401,
    ErrorCode409DuplicateThread,
    ErrorCode409DuplicateUser,
    ErrorCode412,
    ErrorCode412SameValues,
    ErrorCode422,
    SuccessCode200User,
    SuccessCode200GetAll,
    SuccessCode200UpdateThread,
    SuccessCode200UpdateVote,
    SuccessCode200UpdateCommentVote,
    SuccessCode201User,
    SuccessCode201Thread,
    SuccessCode201Comment,
    SuccessCode201CommentVote,
    SuccessCode201Vote,
    SuccessCode201Users,
    SuccessCode204
};