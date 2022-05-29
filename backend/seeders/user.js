'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [
            {
                id: 1,
                first_name: 'Obaid',
                last_name: 'Kazi',
                contact_number: '7208337122',
                email: 'obaidkazi@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'owner',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                first_name: 'Jhon',
                last_name: 'abraham',
                contact_number: '789123212',
                email: 'jhonabraham@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'owner',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                first_name: 'Ricky',
                last_name: 'Ponting',
                contact_number: '789123222',
                email: 'ponting@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'owner',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                first_name: 'Adam',
                last_name: 'Gilchirst',
                contact_number: '789124212',
                email: 'adam@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'owner',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                first_name: 'Brain',
                last_name: 'Lara',
                contact_number: '789023212',
                email: 'brainlara@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'owner',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                first_name: 'Alaster',
                last_name: 'Cook',
                contact_number: '709123212',
                email: 'alaster@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'owner',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                first_name: 'James',
                last_name: 'Anderason',
                contact_number: '789423212',
                email: 'anderason@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'owner',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 100,
                first_name: 'admin',
                last_name: 'socar',
                contact_number: '798432212',
                email: 'admin@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date(),
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
