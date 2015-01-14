var bookshelf = require('../db'),
    User = require('./User');

var Allergy = bookshelf.Model.extend({
    tableName: 'Allergies',

    users: function() {
        return this.belongsToMany(User);
    }
});

module.exports = Allergy;
