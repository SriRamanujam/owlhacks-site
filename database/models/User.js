var bookshelf = require('../db'),
    Allergy = require('./Allergies'),
    Account = require('./Account');
    School = require('./School'),
    Shirt_Size = require('./Shirt_size'),
    Hack_Type = require('./Hack_type');

var User = bookshelf.Model.extend({
    tableName: 'Users',

    update: function(new_fields) {
        //TODO
    },

    verifyPassword: function(password) {
        //TODO
    },

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
