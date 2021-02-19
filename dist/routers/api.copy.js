"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const db_1 = require("../config/db");
const moment = require("moment");
const sequelize = require("sequelize");
const config_1 = require("../config/config");
const router = new Router();
router
    .get("/", config_1.visJwt, async (ctx) => {
    try {
        const crecop = await db_1.CM.findOrCreate({
            where: {
                vid: ctx.state.user.id
            },
            defaults: {
                vid: ctx.state.user.id
            }
        });
        if (crecop[1])
            ctx.body = { code: 1, message: "成功复制！" };
        else
            ctx.body = { code: 0, message: "你已经复制了！" };
    }
    catch (err) {
        ctx.body = { code: 0, message: "憨批！" };
    }
})
    .get("/data", config_1.jwt, async (ctx) => {
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
    ctx.body = await db_1.CM.findAndCountAll({
        include: [{
                model: db_1.VM,
                where: {
                    [sequelize.Op.or]: [
                        {
                            url: {
                                [sequelize.Op.substring]: search
                            }
                        },
                        {
                            ip: {
                                [sequelize.Op.substring]: search
                            }
                        }
                    ],
                    url: {
                        [sequelize.Op.regexp]: `(${url})`
                    },
                }
            }],
        order: [
            ['vid', 'DESC']
        ],
        where: {
            created_at: {
                [sequelize.Op.between]: [start, end]
            }
        },
        offset: (currentPage - 1) * pageSize,
        limit: parseInt(pageSize),
    });
})
    .delete("/", config_1.jwt, async (ctx) => {
    const { vid } = ctx.request.body;
    await db_1.CM.destroy({
        where: {
            vid: {
                [sequelize.Op.in]: vid
            }
        }
    }).then(data => {
        console.log(data);
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
});
exports.default = router;
//# sourceMappingURL=api.copy.js.map