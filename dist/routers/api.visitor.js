-"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const db_1 = require("../config/db");
const moment = require("moment");
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
const jsonwebtoken_1 = require("jsonwebtoken");
const router = new Router();
router
    .get("/put", async (ctx) => {
    const { url = "", wechar = "", search = "", ip = "", regionName, city } = ctx.query;
    const data = Object.assign(ctx.userAgent._agent, {
        url,
        ip,
        wechar,
        search,
        regionName,
        city
    });
    const id = await (await db_1.VM.create(data)).get("id");
    const token = jsonwebtoken_1.sign({ id, visitor_number: 1 }, config_1.visKey.secret, config_1.visKey.Options);
    ctx.body = {
        code: 1,
        token
    };
})
    .get("/addput", config_1.visJwt, async (ctx) => {
    db_1.VM.update({ visitor_number: ctx.state.user.visitor_number++, wechar: ctx.query.wechar }, { where: { id: ctx.state.user.id } });
    const token = jsonwebtoken_1.sign({ id: ctx.state.user.id, visitor_number: ctx.state.user.visitor_number++ }, config_1.visKey.secret, config_1.visKey.Options);
    ctx.body = {
        code: 1,
        token
    };
})
    .get("/num", config_1.jwt, async (ctx) => {
    const { pageSize = 10, currentPage = 1, search = "", time } = ctx.query;
    const start = time ? JSON.parse(time).start : 0;
    const end = time ? JSON.parse(time).end : moment();
    const reg = await db_1.UUM.findAll({
        where: {
            uid: ctx.state.user.id,
            status: 1,
        }
    }).map((v) => {
        return v = v.url;
    });
    const url = reg.toString().replace(/,/g, '|');
    ctx.body = await db_1.VM.findAndCountAll({
        order: [
            ['id', 'DESC']
        ],
        where: {
            [sequelize_1.Op.or]: {
                url: {
                    [sequelize_1.Op.substring]: search
                },
                ip: {
                    [sequelize_1.Op.substring]: search
                }
            },
            url: {
                [sequelize_1.Op.regexp]: `(${url})`,
            },
            created_at: {
                [sequelize_1.Op.between]: [start, end]
            }
        },
        offset: (currentPage - 1) * pageSize,
        limit: parseInt(pageSize),
    });
})
    .get("/addr", config_1.jwt, async (ctx) => {
    const data = await db_1.VM.findAll({
        attributes: ['regionName', [sequelize_1.Sequelize.fn('COUNT', sequelize_1.Sequelize.col('regionName')), 'count']], group: 'regionName', raw: true
    });
    const count = await db_1.VM.count();
    ctx.body = {
        code: 1,
        count,
        data
    };
});
exports.default = router;
//# sourceMappingURL=api.visitor.js.map