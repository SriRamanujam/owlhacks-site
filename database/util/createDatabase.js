var bookshelf = require('../db');
var async = require('async');

var createSchoolsTable = function() {
    bookshelf.knex.schema.createTable('Schools', function(t) {
        t.increments('id');
        t.text('school').notNullable().unique();
    }).then(function() {
        console.log("created schools table");
    });
};

var createStatusesTable = function() {
    bookshelf.knex.schema.createTable('Statuses', function(t) {
        t.increments('id');
        t.text('status').notNullable().unique();
    }).then(function() {
        console.log("created statuses table");
    });
};

var createHackTypesTable = function() {
    bookshelf.knex.schema.createTable('Hack_Types', function(t) {
        t.increments('id');
        t.text('type').unique();
    }).then(function() {
        console.log("created hack types table");
    });
};

var createAllergiesTable = function() {
    bookshelf.knex.schema.createTable('Allergies', function(t) {
        t.increments('id');
        t.text('allergy').notNullable().unique();
    }).then(function() {
        console.log("created allergies table");
    });
};

var createUsersTable = function() {
    bookshelf.knex.schema.createTable('Users', function(t) {
        t.increments('id');
        t.text('first_name').notNullable();
        t.text('last_name').notNullable();
        t.integer('school_id').unsigned().references('id').inTable('Schools');
        t.integer('shirt_size_id').unsigned().references('id').inTable('Shirt_Sizes');
        t.boolean('first_hackathon').notNullable();
        t.text('why_owlhacks');
        t.integer('hack_type_id').unsigned().references('id').inTable('Hack_Types');
        t.binary('resume');
        t.text('github');
        t.text('twitter');
        t.text('password').notNullable();
        t.text('email').notNullable().unique();
    }).then(function() {
        console.log("created users table");
    });
};

var createAccountsTable = function() {
    bookshelf.knex.schema.createTable('Accounts', function(t) {
        t.increments('id');
        t.integer('user_id').unsigned().references('id').inTable('Users');
        t.integer('status_id').unsigned().references('id').inTable('Statuses');
    }).then(function() {
        console.log("created accounts table");
    });
};

var createUserAllergiesTable = function() {
    bookshelf.knex.schema.createTable('User_Allergies', function(t) {
        t.increments('id');
        t.integer('user_id').unsigned().references('id').inTable('Users');
        t.integer('allergy_id').unsigned().references('id').inTable('Allergies');
    }).then(function() {
        console.log("created userallergies table");
    });
};

/**
 * The tables have to be created in the proper order, so that the db doesn't get
 * annoyed that tables are being referenced that don't exist yet.
 */
var createTables = function() {
    createSchoolsTable();
    createStatusesTable();
    createHackTypesTable();
    createAllergiesTable();
    createUsersTable();
    createAccountsTable();
    createUserAllergiesTable();
};
async.series([
    function(cb) {
        createTables();
        cb();
    },
    function(cb) {
        bookshelf.knex.destroy(cb);
    }
]);
/*
module.exports = createTables;
*/
