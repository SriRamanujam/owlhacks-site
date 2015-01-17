var bookshelf = require('../db');
var async = require('async');

var createSchoolsTable = function(cb) {
    bookshelf.knex.schema.createTable('Schools', function(t) {
        t.increments('id');
        t.text('school').notNullable().unique();
    }).then(function() {
        console.log("created schools table");
        cb();
    });
};

var createStatusesTable = function(cb) {
    bookshelf.knex.schema.createTable('Statuses', function(t) {
        t.increments('id');
        t.text('status').notNullable().unique();
    }).then(function() {
        console.log("created statuses table");
        cb();
    });
};

var createHackTypesTable = function(cb) {
    bookshelf.knex.schema.createTable('Hack_Types', function(t) {
        t.increments('id');
        t.text('type').unique();
    }).then(function() {
        console.log("created hack types table");
        cb();
    });
};

var createAllergiesTable = function(cb) {
    bookshelf.knex.schema.createTable('Allergies', function(t) {
        t.increments('id');
        t.text('allergy').notNullable().unique();
    }).then(function() {
        console.log("created allergies table");
        cb();
    });
};

var createUsersTable = function(cb) {
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
        cb();
    });
};

var createAccountsTable = function(cb) {
    bookshelf.knex.schema.createTable('Accounts', function(t) {
        t.increments('id');
        t.integer('user_id').unsigned().references('id').inTable('Users');
        t.integer('status_id').unsigned().references('id').inTable('Statuses');
    }).then(function() {
        console.log("created accounts table");
        cb();
    });
};

var createUserAllergiesTable = function(cb) {
    bookshelf.knex.schema.createTable('User_Allergies', function(t) {
        t.increments('id');
        t.integer('user_id').unsigned().references('id').inTable('Users');
        t.integer('allergy_id').unsigned().references('id').inTable('Allergies');
    }).then(function() {
        console.log("created userallergies table");
        cb();
    });
};

var createShirtSizesTable = function(cb) {
    bookshelf.knex.schema.createTable('Shirt_Sizes', function(t) {
        t.increments('id');
        t.string('size', 3);
    }).then(function() {
        console.log('created shirt size table');
        cb();
    });
};

/**
 * The tables have to be created in the proper order, so that the db doesn't get
 * annoyed that tables are being referenced that don't exist yet. At the end, we
 * also have to manually destroy the knex threadpool so that node can exit cleanly.
 */
var doTheThing = function() {
    async.series([
        function(cb) {
            createSchoolsTable(cb);
        },
        function(cb) {
            createStatusesTable(cb);
        },
        function(cb) {
            createShirtSizesTable(cb);
        },
        function(cb) {
            createHackTypesTable(cb);
        },
        function(cb) {
            createAllergiesTable(cb);
        },
        function(cb) {
            createUsersTable(cb);
        },
        function(cb) {
            createAccountsTable(cb);
        },
        function(cb) {
            createUserAllergiesTable(cb);
        },
        function(cb) {
            bookshelf.knex.destroy(cb);
        }
    ]);
};

var actuallyDoTheThing = function(cb) {
    doTheThing();
    cb();
};

module.exports = actuallyDoTheThing;
