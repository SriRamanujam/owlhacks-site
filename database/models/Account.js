var bookshelf = require('../db'),
    User = require('./User');

var Account = bookshelf.Model.extend({
    tableName: 'Accounts',

    update: function(new_status) {
        //TODO
    },

    user: function() {
        return this.hasOne(User);
    }
});

module.exports = Account;
