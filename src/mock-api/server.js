module.exports = function () {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    search: {
      id: faker.random.number({ min:1000, max:9999 }),
      profilePictureUrl: faker.internet.avatar(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      msisdn: faker.random.number({ min:5320000000, max: 5329999999 }),
      currentContract: {
        id: faker.random.number({ min:1000, max:9999 }),
        tariffId: faker.random.number({ min:1000, max:9999 }),
        contractStartDate: faker.date.past(5),
        contractEndDate: faker.date.future(2),
        currentTariff: {
          id: faker.random.number({ min:1000, max:9999 }),
          name: faker.random.words(2),
          contractPeriodInMonths: faker.random.number({ min:1000, max:9999 }),
          price: faker.finance.amount(100,900,2),
          includedPackages: _.times(5, function(i) {
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
