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
exports.Appointment = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var TipoTurno;
(function (TipoTurno) {
    TipoTurno["yoga"] = "yoga";
    TipoTurno["streching"] = "streching";
    TipoTurno["pilates"] = "pilates";
    TipoTurno["crossfit"] = "crossfit";
    TipoTurno["hit"] = "hit";
    TipoTurno["zumba"] = "zumba";
    TipoTurno["spinning"] = "spinning";
    TipoTurno["kickboxing"] = "kickboxing";
    TipoTurno["taebo"] = "taebo";
    TipoTurno["taekwondo"] = "taekwondo";
    TipoTurno["taichi"] = "taichi";
    TipoTurno["calistenia"] = "calistenia";
})(TipoTurno || (TipoTurno = {}));
var Appointment = (function () {
    function Appointment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Appointment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Appointment.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Appointment.prototype, "time", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: TipoTurno }),
        __metadata("design:type", String)
    ], Appointment.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: "active" }),
        __metadata("design:type", String)
    ], Appointment.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.appointments; }),
        __metadata("design:type", User_1.User)
    ], Appointment.prototype, "user", void 0);
    Appointment = __decorate([
        (0, typeorm_1.Entity)({ name: "appointments" })
    ], Appointment);
    return Appointment;
}());
exports.Appointment = Appointment;
exports.default = TipoTurno;
