module.exports = function() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 10;
  const BASE = 0;
  const IMG_SRC = './img/coins_';

  const faker = require('faker');
  const _ = require('lodash');

  return {
    posts: _.times(50, function (n) {
      let number = _.random(MIN_NUMBER, MAX_NUMBER);
      if (number < MAX_NUMBER) {
        number = ''.concat(BASE, number);
      }

      return {
        id: n + MAX_NUMBER,
        img: `${IMG_SRC}${number}`,
        alt: faker.lorem.sentence(),
        title: faker.lorem.word(),
        lead: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        author: faker.name.firstName('mixed'),
        datetime: '2019-07-24',
        date: 'July 24, 2019'
      }
    })
  }
};
