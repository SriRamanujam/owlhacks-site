var bookshelf = require('../db'),
    User = require('./User');

var School = bookshelf.Model.extend({
    tableName: 'Schools',

    users: function() {
        return this.hasMany(User);
    }
});

module.exports = School;
