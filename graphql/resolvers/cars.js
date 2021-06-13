const Car = require('../../models/car');
const User = require('../../models/user');

const { transformCar } = require('./merge');

module.exports = {
    cars: async () => {
        try {
            const cars = await Car.find();
            return cars.map(car => {
                return transformCar(car);
            });
        } catch (err) {
            throw err;
        }
    },
    createCar: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
        const car = new Car({
            title: args.carInput.title,
            description: args.carInput.description,
            price: +args.carInput.price,
            date: new Date(args.carInput.date),
            creator: req.userId
        });
        let createdCar;
        try {
            const result = await car.save();
            createdCar = transformCar(result);
            const creator = await User.findById(req.userId);

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
    }
};