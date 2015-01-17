var bookshelf = require('../db');
var hackType = require('../models/Hack_type');

var insertHackTypeData = function(cb) {
    var hack_types = ['hardware', 'software', 'other'];
    var i;
    for (i = 0; i < hack_types.length; i++) {
        hackType.forge({type: hack_types[i]}).save();
    }
    console.log("inserted hack type data");
    cb();
};

module.exports = insertHackTypeData;
