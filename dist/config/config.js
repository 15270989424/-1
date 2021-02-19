"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysql = {
    database: "viang_ncjl120_co",
    username: "viang_ncjl120_co",
    password: "4bPFdHDAfiRrtFiw",
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
    define: {
        timestamps: true,
        paranoid: true,
        charset: "utf8",
        freezeTableName: true,
    },
    pool: {
        max: 1000,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    timezone: "+08:00",
    logging:false
};
exports.tokenKey = {
    secret: "tokenkey20191226",
    Options: {
        expiresIn: 60 * 60 * 12,
    }
};
exports.visKey = {
    secret: "god is a girl",
    Options: {
        expiresIn:60*60*24*365,
    }
};
const Jwt = require("koa-jwt");
exports.jwt = Jwt({
    secret: exports.tokenKey.secret
});
exports.visJwt = Jwt({
    secret: exports.visKey.secret
});
const multer = require("@koa/multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './dist/static/profile/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname.slice(file.originalname.lastIndexOf(".")));
    }
});
exports.upload_profile = multer({
    storage
});
//# sourceMappingURL=config.js.map