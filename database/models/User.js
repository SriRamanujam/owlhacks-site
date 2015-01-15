var bookshelf = require('../db'),
    Allergy = require('./Allergies'),
    Account = require('./Account'),
    School = require('./School'),
    Shirt_Size = require('./Shirt_size'),
    Hack_Type = require('./Hack_type');

var Promise = require('bluebird'),
    bcrypt = Promise.promisifyAll(require('bcrypt'));

var User = bookshelf.Model.extend({
    tableName: 'Users',

    update: function(new_fields) {
        //TODO
        
    },

    verifyPassword: Promise.method(function(password) {
        //TODO
        if (!password) throw new Error("Invalid password");
        return bcrypt.compareAsync(this.get('password'), password); // does this work?
    }),

    retrieve: function(fields, constraints) {
        //TODO
    },

    allergies: function() {
        return this.belongsToMany(Allergy);
    },

    school: function() {
        return this.belongsTo(School);
    },

    shirt_size: function() {
        return this.belongsTo(Shirt_Size);
    },

    hack_type: function() {
        return this.belongsTo(Hack_Type);
    },

    account: function() {
        return this.belongsTo(Account);
    }
});

module.exports = User;
