'use strict';
const moment = require('moment');
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('bookings', [
            {
                car_id: '1',
                start_at: moment(Date.now()).unix(),
                end_at: moment().add(4, 'day').unix(),
                pickup_id: 1,
                drop_id: 2,
                customer_id: 1,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                car_id: '2',
                start_at: moment(Date().now).unix(),
                end_at: moment().add(5, 'day').unix(),
                pickup_id: 3,
                drop_id: 4,
                customer_id: 2,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                car_id: '3',
                start_at: moment(Date.now()).unix(),
                end_at: moment().add(7, 'day').unix(),
                pickup_id: 5,
                drop_id: 6,
                customer_id: 3,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                car_id: '4',
                start_at: moment(Date.now()).unix(),
                end_at: moment().add(1, 'day').unix(),
                pickup_id: 7,
                drop_id: 8,
                customer_id: 4,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                car_id: '5',
                start_at: moment(Date.now()).unix(),
                end_at: moment().add(3, 'day').unix(),
                pickup_id: 9,
                drop_id: 10,
                customer_id: 5,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                car_id: '1',
                start_at: moment().add(7, 'day').unix(),
                end_at: moment().add(9, 'day').unix(),
                pickup_id: 3,
                drop_id: 4,
                customer_id: 2,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            }
            ,
            {
                car_id: '6',
                start_at: moment(Date.now()).unix(),
                end_at: moment().add(2, 'day').unix(),
                pickup_id: 11,
                drop_id: 12,
                customer_id: 6,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            }
            ,
            {
                car_id: '7',
                start_at: moment(Date.now()).unix(),
                end_at: moment().add(5, 'day').unix(),
                pickup_id: 13,
                drop_id: 14,
                customer_id: 7,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            }
            ,
            {
                car_id: '2',
                start_at: moment().add(8, 'day').unix(),
                end_at: moment().add(9, 'day').unix(),
                pickup_id: 1,
                drop_id: 2,
                customer_id: 1,
                status: 'confirmed',
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
