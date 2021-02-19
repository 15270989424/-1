"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const copy_model_1 = require("./copy.model");
let visitor = class visitor extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.ForeignKey(() => copy_model_1.copy),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], visitor.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isMobile", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isTablet", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isiPad", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isiPhone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isAndroid", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isBlackberry", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isOpera", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isIE", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isEdge", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isSafari", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isFirefox", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isWebkit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isChrome", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isWindows", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isLinux", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isLinux64", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isMac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], visitor.prototype, "isAndroidTablet", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "browser", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "os", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "platform", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "source", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "country", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "regionName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "city", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "zip", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "url", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "ip", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "search", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], visitor.prototype, "wechar", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], visitor.prototype, "visitor_number", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], visitor.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], visitor.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], visitor.prototype, "deleted_at", void 0);
visitor = __decorate([
    sequelize_typescript_1.Table
], visitor);
exports.visitor = visitor;
//# sourceMappingURL=visitor.model.js.map