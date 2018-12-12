const mongoose = require('mongoose');

const envVar = 'production';

mongoose.Promise = global.Promise;

before((done) => {
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
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        mongoose.connection.collections.cameras.drop(() => {
            done();
        });
    });
});
