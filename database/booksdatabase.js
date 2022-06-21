const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books',
{userNewParser: true, useCreateIndex: true}
);
