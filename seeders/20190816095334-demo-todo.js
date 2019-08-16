'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todos', [
      {
        title: "Makan",
        is_done: true,
        created_by: 1
      },
      {
        title: "Senam",
        is_done: true,
        created_by: 1
      },
      {
        title: "Jungkir",
        is_done: true,
        created_by: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todos', null, {});
  }
};
