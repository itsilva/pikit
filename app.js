const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const router = require("./api/endpoints/stores");

const app = express();

app.use(logger);
app.use('/api/stores', require('./api/endpoints/stores'));

dotenv.config();
app.listen(process.env.PORT, () => {
    console.log(`Your server is running on PORT: ${process.env.PORT}`);
});
