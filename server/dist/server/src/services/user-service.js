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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.show = exports.list = void 0;
const User_1 = __importDefault(require("../models/User"));
const UserDTO_1 = require("../dto/UserDTO");
const UpdateUserDTO_1 = require("../dto/UpdateUserDTO");
const Role_1 = require("../../../shared/enums/Role");
exports.list = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => {
        User_1.default.find((err, users) => {
            if (err) {
                rej(err);
            }
            else {
                res(users.map((u) => new UserDTO_1.UserDTO(u)));
            }
        });
    });
});
exports.show = (userId) => {
    return new Promise((res, rej) => {
        User_1.default.findById(userId, (err, user) => {
            if (err) {
                rej(err);
            }
            else if (!user) {
                rej(new Error('User Not Found!'));
            }
            else {
                res(new UserDTO_1.UserDTO(user));
            }
        });
    });
};
exports.create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        if (user.role === Role_1.Role.ArtManager) {
            const artManager = yield User_1.default.findOne({ role: Role_1.Role.ArtManager });
            if (!!artManager) {
                return rej(new Error(`User with role ${Role_1.Role.ArtManager} already exists!`));
            }
        }
        User_1.default.create(user, (err, u) => {
            if (err) {
                if (err.message.includes('E11000')) {
                    rej(new Error(`User with email address ${user.email} already exists!`));
                }
                rej(err);
            }
            else if (!u) {
                rej(new Error('Something went wrong while creating user'));
            }
            else {
                return res(new UserDTO_1.UserDTO(u));
            }
        });
    }));
});
exports.update = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        if (user.role === Role_1.Role.ArtManager) {
            const artManager = yield User_1.default.findOne({ role: Role_1.Role.ArtManager });
            if (artManager && artManager._id.toString() !== id) {
                return rej(new Error(`User with role ${Role_1.Role.ArtManager} already exists!`));
            }
        }
        User_1.default.findByIdAndUpdate(id, new UpdateUserDTO_1.UpdateUserDTO(user), { new: true }, (err, u) => {
            if (err) {
                rej(err);
            }
            else if (!u) {
                rej(new Error('Something went wrong while updating user'));
            }
            else {
                return res(new UserDTO_1.UserDTO(u));
            }
        });
    }));
});
exports.remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => {
        User_1.default.findByIdAndDelete(id, (err, u) => {
            if (err) {
                rej(err);
            }
            else {
                return res(u);
            }
        });
    });
});
//# sourceMappingURL=user-service.js.map