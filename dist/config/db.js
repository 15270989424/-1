"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config");
const user_model_1 = require("../models/user.model");
const user_profile_model_1 = require("../models/user-profile.model");
const visitor_model_1 = require("../models/visitor.model");
const copy_model_1 = require("../models/copy.model");
const user_url_model_1 = require("../models/user-url.model");
exports.db = new sequelize_typescript_1.Sequelize(config_1.mysql);
exports.db.addModels([user_model_1.users, user_profile_model_1.user_profile, visitor_model_1.visitor, copy_model_1.copy, user_url_model_1.user_url]);
exports.UPM = exports.db.models.user_profile;
exports.UM = exports.db.models.users;
exports.VM = exports.db.models.visitor;
const DBCM = exports.db.models.copy;
DBCM.removeAttribute("id");
exports.CM = DBCM;
exports.UUM = exports.db.models.user_url;
//# sourceMappingURL=db.js.map