const Car = require('../../models/car');
const Booking = require('../../models/booking');
const { transformBooking, transformCar } = require('./merge');

module.exports = {
    bookings: async () => {
        try {
            const bookings = await Booking.find();
            return bookings.map(booking => {
                return transformBooking(booking);
            });
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
        return transformBooking(result);
    },
    cancelBooking: async args => {
        try {
            const booking = await Booking.findById(args.bookingId).populate('car');
            const car = transformCar(booking.car);
            await Booking.deleteOne({ _id: args.bookingId });
            return car;
        } catch (err) {
            throw err;
        }
    }
};
