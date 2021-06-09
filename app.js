const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema, createSourceEventStream } = require('graphql');
const { maxHeaderSize } = require('http');

const app = express();

const cars = [];

app.use(bodyParser.json());

app.use(
    '/graphql',
    graphqlHttp.graphqlHTTP({
        schema: buildSchema(`
        type Car {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
        }
        
        input CarInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        type RootQuery {
            cars: [Car!]!
        }

        type RootMutation{
            createCar(carInput: CarInput): Car
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }
    `),
        rootValue: {
            cars: (args) => {
                return cars;
            },
            createCar: (args) => {
                const car = {
                    _id: Math.random().toString(),
                    title: args.carInput.title,
                    description: args.carInput.description,
                    price: +args.carInput.price,
                    date: args.carInput.date
                };
                cars.push(cars);
                return car
            }
        },
        graphiql: true
    })
);

app.listen(3000);