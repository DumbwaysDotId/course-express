'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'lucinta@luna.com',
        password: 'xxx',
        name: 'Lucinta Luna'
      },
      {
        email: 'syah@rini.com',
        password: 'xxx',
        name: 'Syahrini'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
