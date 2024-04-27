const mongoose = require('mongoose');
require('dotenv').config();

const conectarBD = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectados con nuestra base de datos"))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;