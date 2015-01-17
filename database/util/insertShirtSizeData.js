var bookshelf = require('../db');
var shirtSize = require('../models/Shirt_size');

var insertShirtSizeData = function(cb) {
    var shirt_sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
    var i;
    for (i = 0; i < shirt_sizes.length; i++) {
        shirtSize.forge({size: shirt_sizes[i]}).save();
    }
    console.log("inserted shirt size data");
    cb();
};

module.exports = insertShirtSizeData;
