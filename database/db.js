var dbConfig;

if (process.env.OWLHACKS_DEV) {
    dbConfig = {
        client: 'sqlite3',
        connection: {
            filename: '../dev-db_DO_NOT_PUSH.sqlite3'
        }
    };
} else {
    dbConfig = {
        client: 'pg',
        connection: process.env.PG_CONNECTION_URL
    };
}

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
