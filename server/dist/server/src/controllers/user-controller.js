"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.showUser = exports.listUsers = void 0;
const userService = __importStar(require("../services/user-service"));
const handleResponseError_1 = require("../utils/handleResponseError");
exports.listUsers = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userService.list());
    }
    catch (e) {
        handleResponseError_1.handleResponseError(res, e);
    }
});
exports.showUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userService.show(req.params.id));
    }
    catch (e) {
        handleResponseError_1.handleResponseError(res, e);
    }
});
exports.addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userService.create(req.body));
    }
    catch (e) {
        handleResponseError_1.handleResponseError(res, e);
    }
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userService.update(req.params.id, req.body));
    }
    catch (e) {
        handleResponseError_1.handleResponseError(res, e);
    }
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userService.remove(req.params.id));
    }
    catch (e) {
        handleResponseError_1.handleResponseError(res, e);
    }
});
//# sourceMappingURL=user-controller.js.map