"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.createAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentsService = void 0;
var data_source_1 = require("../config/data-source");
var appointments = [];
var id = 1;
var getAppointmentsService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var allAppointments;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.AppointmentModel.find()];
            case 1:
                allAppointments = _a.sent();
                return [2, allAppointments];
        }
    });
}); };
exports.getAppointmentsService = getAppointmentsService;
var getAppointmentByIdService = function (appointmentId) { return __awaiter(void 0, void 0, void 0, function () {
    var foundAppointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.AppointmentModel.findOne({
                    where: { id: appointmentId }
                })];
            case 1:
                foundAppointment = _a.sent();
                if (!foundAppointment) {
                    throw new Error("Appointment not found");
                }
                return [2, foundAppointment];
        }
    });
}); };
exports.getAppointmentByIdService = getAppointmentByIdService;
var createAppointmentService = function (appointment, userId) { return __awaiter(void 0, void 0, void 0, function () {
    var time, date, user, newAppointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                time = appointment.time, date = appointment.date;
                return [4, data_source_1.UserModel.findOne({ where: { id: userId } })];
            case 1:
                user = _a.sent();
                if (!!user) return [3, 2];
                throw new Error("User not found");
            case 2:
                newAppointment = data_source_1.AppointmentModel.create({
                    date: date,
                    time: time,
                    user: user
                });
                return [4, data_source_1.AppointmentModel.save(newAppointment)];
            case 3:
                _a.sent();
                return [2, newAppointment];
        }
    });
}); };
exports.createAppointmentService = createAppointmentService;
var cancelAppointmentService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var appointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, (0, exports.getAppointmentByIdService)(id)];
            case 1:
                appointment = _a.sent();
                if (!appointment) return [3, 3];
                appointment.status = "cancelled";
                return [4, data_source_1.AppointmentModel.save(appointment)];
            case 2:
                _a.sent();
                return [2, appointment];
            case 3: return [2];
        }
    });
}); };
exports.cancelAppointmentService = cancelAppointmentService;
