const Car = require('../../models/car');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const cars = async carIds => {
    try {
        const cars = await Car.find({ _id: { $in: carIds } });
        return cars.map(car => {
            return transformCar(car);
        });
    } catch (err) {
        throw err;
    }
};

const singleCar = async carId => {
    try {
        const car = await Car.findById(carId);
        return transformCar(car);
    } catch (err) {
        throw err;
    }
};

const user = async userId => {
    try {
        const user = await User.findById(userId);
        return {
            ...user._doc,
            _id: user.id,
            createdCars: cars.bind(this, user._doc.createdCars)
        };
    } catch (err) {
        throw err;
    }
};

const transformCar = car => {
    return {
        ...car._doc,
        _id: car.id,
        date: dateToString(car._doc.date),
        creator: user.bind(this, car.creator)
    };
};

const transformBooking = booking => {
    return {
        ...booking._doc,
        _id: booking.id,
        user: user.bind(this, booking._doc.user),
        car: singleCar.bind(this, booking._doc.car),
        createdAt: dateToString(booking._doc.createdAt),
        updatedAt: dateToString(booking._doc.updatedAt)
    };
};

exports.transformCar = transformCar;
exports.transformBooking = transformBooking;

// exports.user = user;
// exports.cars = cars;
// exports.singleCar = singleCar;
