const mongoose = require('mongoose');
const envVar = 'test';

mongoose.Promise = global.Promise;

if (envVar === 'testCloud' ||envVar === 'production') {
    mongoose.connect('mongodb+srv://Administrator:admin1@alarmsysteem-sugph.mongodb.net/test?retryWrites=true',
        {useNewUrlParser: true})
        .then(() => {
            console.log("MongoDB Cloud connected")
        })
        .catch(err => console.log(err));
}
else if (envVar === 'test') {
    mongoose.connect('mongodb://localhost/alarmsystem',
        {useNewUrlParser: true})
        .then(() => {
            console.log("MongoDB Local connected")
        })
        .catch(err => console.log(err));
}

mongoose.connection
    .once('open', () => { 
        console.log('Connection opened');
    })
    .on('error', (error) => {
        console.warn('Warning', error);
    });

module.exports =  mongoose;