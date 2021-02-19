"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const KoaCors = require("koa2-cors");
const KoaRouter = require("koa-router");
const KoaBodyParser = require("koa-bodyparser");
const { userAgent } = require('koa-useragent');
const port = process.env.PORT || 5000;
let app = new Koa();
let router = new KoaRouter();
app.use(KoaCors());
app.use(KoaBodyParser());
app.use(userAgent);
const api_user_1 = require("./routers/api.user");
router.use("/api/user", api_user_1.default.routes());
const api_visitor_1 = require("./routers/api.visitor");
router.use("/api/visitor", api_visitor_1.default.routes());
const api_copy_1 = require("./routers/api.copy");
router.use("/api/copy", api_copy_1.default.routes());
const api_user_url_1 = require("./routers/api.user-url");
router.use("/api/userurl", api_user_url_1.default.routes());
app.use(router.routes());
app.listen(port, () => {
    console.log(`listen port is ${port}`);
});
//# sourceMappingURL=app.js.map