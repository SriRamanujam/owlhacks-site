var bookshelf = require('../db'),
    User = require('./User');

var Hack_type = bookshelf.Model.extend({
    tableName: 'Hack_Types',

    users: function() {
        return this.hasMany(User);
    }
});

module.exports = Hack_type;
