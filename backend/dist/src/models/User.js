var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, PrimaryKey, Model, Unique, AutoIncrement, DataType, AllowNull } from 'sequelize-typescript';
let Users = class Users extends Model {
};
__decorate([
    PrimaryKey,
    AutoIncrement,
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(30)),
    __metadata("design:type", String)
], Users.prototype, "first_name", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(30)),
    __metadata("design:type", String)
], Users.prototype, "last_name", void 0);
__decorate([
    AllowNull(false),
    Unique,
    Column(DataType.STRING(30)),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(255)),
    __metadata("design:type", String)
], Users.prototype, "profile_icon", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(255)),
    __metadata("design:type", String)
], Users.prototype, "job_title", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(255)),
    __metadata("design:type", String)
], Users.prototype, "company", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(255)),
    __metadata("design:type", Date)
], Users.prototype, "dob", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(255)),
    __metadata("design:type", String)
], Users.prototype, "address", void 0);
Users = __decorate([
    Table({ tableName: 'User', timestamps: false })
], Users);
export default Users;
//# sourceMappingURL=User.js.map