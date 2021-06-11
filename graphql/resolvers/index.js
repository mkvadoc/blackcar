const bcrypt = require('bcryptjs');

const Car = require('../../models/car');
const User = require('../../models/user');
const Booking = require('../../models/booking');

const cars = async carIds => {
    try {
        const cars = await Car.find({ _id: { $in: carIds } });
        cars.map(car => {
            return {
                ...car._doc,
                _id: car.id,
                date: new Date(cae._doc.date).toISOString(),
                creator: user.bind(this, car.creator)
            };
        });
        return cars;
    } catch (err) {
        throw err;
    }
};

const singleCar = async carId => {
    try {
        const car = await Car.findById(carId);
        return {
            ...car._doc,
            _id: car.id,
            creator: user.bind(this, car.creator)
        };
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

module.exports = {
    cars: async () => {
        try {
            const cars = await Car.find();
            return cars.map(car => {
                return {
                    ...car._doc,
                    _id: car.id,
                    date: new Date(car._doc.date).toISOString(),
                    creator: user.bind(this, car._doc.creator)
                };
            });
        } catch (err) {
            throw err;
        }
    },
    bookings: async () => {
        try {
            const bookings = await Booking.find();
            return bookings.map(booking => {
                return {
                    ...booking._doc,
                    _id: booking.id,
                    user: user.bind(this, booking._doc.user),
                    car: singleCar.bind(this, booking._doc.car),
                    createdAt: new Date(booking._doc.createdAt).toISOString(),
                    updatedAt: new Date(booking._doc.updatedAt).toISOString()
                };
            });
        } catch (err) {
            throw err;
        }
    },
    createCar: async args => {
        const car = new Car({
            title: args.carInput.title,
            description: args.carInput.description,
            price: +args.carInput.price,
            date: new Date(args.carInput.date),
            creator: '60c369901660492a2cd55bd1'
        });
        let createdCar;
        try {
            const result = await car.save();
            createdCar = {
                ...result._doc,
                _id: result._doc._id.toString(),
                date: new Date(car._doc.date).toISOString(),
                creator: user.bind(this, result._doc.creator)
            };
            const creator = await User.findById('60c369901660492a2cd55bd1');

            if (!creator) {
                throw new Error('User not found.');
            }
            creator.createdCars.push(car);
            await creator.save();

            return createdCar;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    createUser: async args => {
        try {
            const existingUser = await User.findOne({ email: args.userInput.email });
            if (existingUser) {
                throw new Error('User exists already.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                email: args.userInput.email,
                password: hashedPassword
            });

            const result = await user.save();

            return { ...result._doc, password: null, _id: result.id };
        } catch (err) {
            throw err;
        }
    },
    bookCar: async args => {
        const fetchedCar = await Car.findOne({ _id: args.carId });
        const booking = new Booking({
            user: '5c0fbd06c816781c518e4f3e',
            car: fetchedCar
        });
        const result = await booking.save();
        return {
            ...result._doc,
            _id: result.id,
            user: user.bind(this, booking._doc.user),
            car: singleCar.bind(this, booking._doc.car),
            createdAt: new Date(result._doc.createdAt).toISOString(),
            updatedAt: new Date(result._doc.updatedAt).toISOString()
        };
    },
    cancelBooking: async args => {
        try {
            const booking = await Booking.findById(args.bookingId).populate('car');
            const car = {
                ...booking.car._doc,
                _id: booking.car.id,
                creator: user.bind(this, booking.car._doc.creator)
            };
            await Booking.deleteOne({ _id: args.bookingId });
            return car;
        } catch (err) {
            throw err;
        }
    }
};
