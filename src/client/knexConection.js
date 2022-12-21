import knex from 'knex';

const knexConection = knex({
    client: 'sqlite3',
    connection: {
        filename: './DB/ecommerce.sqlite',
    },
});

export default knexConection;
