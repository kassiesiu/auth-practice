const mongoose = require("mongoose")

const { MONGO_URI } = process.env("MONGO_URI")

exports.connect = () => {
    mongoose
        .connect(
            MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindandModify: true,
            })
        .then(() => {
            console.log(`[DEBUG] Connection to ${MONGO_URI} success`)
        })
        .catch((error) => {
            console.log(`[ERROR] Database connection failed to ${MONGO_URI}`)
            console.error(error)
            process.exit(1)
        })
}