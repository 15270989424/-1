"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const md5 = require("md5");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config/config");
const db_1 = require("../config/db");
const router = new Router();
router
    .post("/", async (ctx) => {
    const user = ctx.request.body;
    await db_1.UM.findAll({
        where: {
            username: user.username,
            password: md5(user.password),
        },
        attributes: {
            exclude: ["password"]
        },
        include: [{
                model: db_1.UPM,
                attributes: {
                    exclude: ["pid"]
                }
            }]
    }).then(data => {
        if (data.length) {
            const token = jsonwebtoken_1.sign(JSON.parse(JSON.stringify(data[0])), config_1.tokenKey.secret, config_1.tokenKey.Options);
            ctx.body = {
                code: 1,
                message: "登录成功！",
                token: "Bearer " + token,
            };
        }
        else {
            ctx.body = {
                code: 0,
                message: "账号密码错误！"
            };
        }
    });
})
    .get("/", config_1.jwt, async (ctx) => {
    await db_1.UM.findAndCountAll({
        include: [db_1.UPM],
        attributes: {
            exclude: ["password"]
        },
    }).then(data => {
        ctx.body = {
            code: 1,
            message: "获取用户列表成功！",
            data
        };
    });
})
    .delete("/", config_1.jwt, async (ctx) => {
    const DelId = ctx.request.body;
    await db_1.UM.destroy({
        where: {
            id: DelId,
        }
    }).then(data => {
        ctx.body = {
            code: 1,
            message: "删除成功！"
        };
    }).catch(err => {
        ctx.body = {
            code: 0,
            message: "删除失败！"
        };
        throw err;
    });
})
    .put("/", config_1.jwt, async (ctx) => {
    const { username, password, disabled, email, mobile, real_name, gender, portrait = "" } = ctx.request.body.data;
    await db_1.UM.create({
        username,
        password,
        disabled,
        mobile,
        email,
        profile: {
            real_name,
            gender,
            portrait
        }
    }, {
        include: [db_1.UPM]
    }).then(async (v) => {
        ctx.body = {
            code: 1,
            message: "添加成功！",
            v
        };
    }).catch(err => {
        ctx.body = {
            code: 0,
            message: "错误！",
            err
        };
    });
});
exports.default = router;
//# sourceMappingURL=api.user.js.map