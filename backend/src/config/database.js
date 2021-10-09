const mongoose = require("mongoose")

const { MONGO_URI } = process.env("MONGO_URI")

exports.connect = () => {
    mongoose.connect(
        MONGO_URI, {
            useNewUrlParser
        }
    )
}