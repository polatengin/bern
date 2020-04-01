module.exports = function () {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    courier_signup: {
      result: true
    },
    courier_login: {
      result: true
    },
    courier_main: _.times(12, function(i) {
      return {
        id: i,
        latitude: Number(faker.address.latitude()),
        longitude: Number(faker.address.longitude()),
        range: faker.random.number({min: 1, max: 3, precision: 0.01}),
        address: faker.address.streetAddress("###"),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumberFormat(),
        dueDate: faker.date.recent(-1)
      }
    }),
    courier_address_from_coordinates: {
      address: faker.address.streetAddress("###")
              },
              value: faker.random.number({ min:1000, max:9999 }),
              price: faker.finance.amount(100,900,2)
            };
          })
        }
      },
      additionalPackages: _.times(10, function(i) {
        return {
          id: faker.random.number({ min:1000, max:9999 }),
          name: faker.random.words(2),
          type: {
            id: faker.random.number({ min:1000, max:9999 }),
            name: faker.random.words(2),
            unit: faker.internet.password(8,1)
          },
          value: faker.random.number({ min:1000, max:9999 }),
          price: faker.finance.amount(100,900,2)
        };
      }),
      availableTariffs: [],
      shoppingCart: []
    },
    allPackages: _.times(14, function(i) {
      return {
        id: faker.random.number({ min:1000, max:9999 }),
        name: faker.random.words(2),
        type: {
          id: faker.random.number({ min:1000, max:9999 }),
          name: faker.name.firstName(),
          unit: faker.internet.password(8,1)
        },
        value: faker.random.number({ min:1000, max:9999 }),
        price: faker.finance.amount(100,900,2)
      };
    })
  };
};
