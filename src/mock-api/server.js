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
    courier_search_address: _.times(20, function(i) {
      return {
        id: i,
        latitude: Number(faker.address.latitude()),
        longitude: Number(faker.address.longitude()),
        address: faker.address.streetAddress("###")
      }
    })
  };
};
