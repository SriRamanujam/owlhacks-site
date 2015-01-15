var bookshelf = require('../db'),
    User = require('./User');

var shirt_size = bookshelf.Model.extend({
    tableName: 'Shirt_sizes',

    users: function() {
        return this.hasMany(User);
    }
});

module.exports = shirt_size;
