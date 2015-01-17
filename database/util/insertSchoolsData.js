var bookshelf = require('../db');
var University = require('../models/School');

var insertSchoolData = function(cb) {
    var universities = require('./universities');
    var i;
    for (i = 0; i < universities.length; i++) {
        University.forge({school: universities[i]}).save();
    }
    console.log("inserted schools data");
    cb();
};

module.exports = insertSchoolData;
