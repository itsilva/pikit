const moment = require("moment");
const colors = require('colors');

const getStatus = (status) => {

    console.log('inside status function');
    console.log(status);

    if (status === 200) {
        return `[${status}]`.green;
    }

    if (status === 404) {
        return `[${status}]`.red;
    }

};

const logger = (req, res, next) => {
    console.log(
        `${req.method} ${getStatus(res.statusCode)} ${req.protocol}://${req.get("host")}${
            req.originalUrl
        } ${moment().format()}`
    );
    console.log(res);
    next();
};

module.exports = logger;
