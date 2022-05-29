'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('customers', [
            {
                id: 1,
                first_name: 'Obaid',
                last_name: 'Kazi',
                contact_number: '7208337371',
                email: 'obaidkazi@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                first_name: 'Jhon',
                last_name: 'cena',
                contact_number: '789123212',
                email: 'jhoncena@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                first_name: 'Mike',
                last_name: 'potter',
                contact_number: '789123222',
                email: 'mikepoter@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                first_name: 'Oliver',
                last_name: 'Mason',
                contact_number: '789124212',
                email: 'olivermason@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                first_name: 'Jacob',
                last_name: 'cena',
                contact_number: '789023212',
                email: 'jacobcena@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                first_name: 'Micheal',
                last_name: 'Stark',
                contact_number: '709123212',
                email: 'micheal@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                first_name: 'Shane',
                last_name: 'Watson',
                contact_number: '789423212',
                email: 'shanewatson@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 8,
                first_name: 'Jake',
                last_name: 'Kales',
                contact_number: '789123272',
                email: 'jakekales@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 9,
                first_name: 'Dale',
                last_name: 'Steyn',
                contact_number: '789123210',
                email: 'dalesteyn@gmail.com',
                password: '$2b$10$qSYKIsosFTaLnfCJ79n/b.lr2pdAVrZgDDtymd2Gf9Sgr.7EmFtXe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

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
