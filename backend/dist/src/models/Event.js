var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, PrimaryKey, Model, AutoIncrement, DataType, AllowNull } from 'sequelize-typescript';
let Events = class Events extends Model {
    static Events() {
        throw new Error('Method not implemented.');
    }
    event_id;
    name;
    description;
    date;
    start_time;
    end_time;
    banner;
};
__decorate([
    PrimaryKey,
    AutoIncrement,
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], Events.prototype, "event_id", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING(255)),
    __metadata("design:type", Object)
], Events.prototype, "name", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING(255)),
    __metadata("design:type", Object)
], Events.prototype, "description", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING(255)),
    __metadata("design:type", Object)
], Events.prototype, "date", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(255)),
    __metadata("design:type", String)
], Events.prototype, "start_time", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING(255)),
    __metadata("design:type", String)
], Events.prototype, "end_time", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING(255)),
    __metadata("design:type", Object)
], Events.prototype, "banner", void 0);
Events = __decorate([
    Table({ tableName: 'Event', timestamps: false })
], Events);
export default Events;
//# sourceMappingURL=Event.js.map