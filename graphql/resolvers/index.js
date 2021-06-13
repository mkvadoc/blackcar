const authResolver = require('./auth');
const carsResolver = require('./cars');
const bookingResolver = require('./booking');

const rootResolver = {
    ...authResolver,
    ...carsResolver,
    ...bookingResolver
};

module.exports = rootResolver;