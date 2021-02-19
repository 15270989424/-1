"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const config_1 = require("../config/config");
const db_1 = require("../config/db");
const axios_1 = require("axios");
const router = new Router();
router
    .put("/", config_1.jwt, async (ctx) => {
    const data = ctx.request.body.data.map((v) => {
        v.uid = ctx.state.user.id;
        return v;
    });
    await db_1.UUM.bulkCreate(Object.assign(data, { deleted_at: null }), { updateOnDuplicate: ["url"] }).then(async (v) => {
        ctx.body = {
            code: 1,
            message: "添加成功！",
            v
        };
    }).catch(err => {
        ctx.body = {
            code: 0,
            message: "错误！"
        };
    });
})
    .get("/", config_1.jwt, async (ctx) => {
    await db_1.UUM.findAll({
        where: {
            uid: ctx.state.user.id
        },
        order: [
            ['updated_at', 'DESC']
        ],
    }).then(data => {
        ctx.body = {
            code: 1,
            message: "查询成功",
            data,
        };
    });
})
    .delete("/", config_1.jwt, async (ctx) => {
    const url = ctx.request.body;
    if (url.uid == ctx.state.user.id) {
        await db_1.UUM.destroy({
            where: {
                uid: url.uid,
                url: url.url,
            }
        }).then(v => {
            if (v)
                ctx.body = { code: 1, message: "删除成功！" };
            else
                ctx.body = { code: 2, message: "删除失败！" };
        }).catch(err => {
            console.log(err);
        });
    }
    else {
        ctx.body = { code: 0, message: "憨批！" };
    }
})
    .post("/", config_1.jwt, async (ctx) => {
    await db_1.UUM.findAll({
        where: {
            uid: ctx.state.user.id
        }
    }).then(async (v) => {
        let urlList = [];
        for (let i = 0; i < v.length; i++) {
            let item = v[i].get("url");
            await axios_1.default.get(item.toString()).then(d => {
                urlList.push(item.toString());
            }).catch(err => { });
        }
        ctx.body = {
            ok: 1,
            urlList
        };
    });
});
exports.default = router;
//# sourceMappingURL=api.user-url.js.map