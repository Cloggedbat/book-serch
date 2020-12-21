const mongoose = require("mongoose");
const db = require("../models");

// mongo connection
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);
