var bookshelf = require('../db');

var Status = bookshelf.Model.extend({
    tableName: 'Statuses'
});

module.exports = Status;
