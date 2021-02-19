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
const md5 = require("md5");
const user_profile_model_1 = require("./user-profile.model");
let users = class users extends sequelize_typescript_1.Model {
    set password(value) {
        this.setDataValue('password', md5(value));
    }
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.ForeignKey(() => user_profile_model_1.user_profile),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], users.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => user_profile_model_1.user_profile),
    __metadata("design:type", user_profile_model_1.user_profile)
], users.prototype, "profile", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], users.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], users.prototype, "password", null);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], users.prototype, "disabled", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], users.prototype, "mobile", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], users.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], users.prototype, "created_ip_at", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], users.prototype, "updated_ip_at", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], users.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], users.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], users.prototype, "deleted_at", void 0);
users = __decorate([
    sequelize_typescript_1.Table
], users);
exports.users = users;
//# sourceMappingURL=user.model.js.map