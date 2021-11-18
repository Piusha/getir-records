const mongoose = require('mongoose');

const recordSchema =mongoose.Schema({

    key: {
        type: String,
    },
    value: {
        type: String,
    },
    createdAt: {
        type: Date
    },
    counts: []

});

const Record = mongoose.model('Record', recordSchema);


module.exports = Record;