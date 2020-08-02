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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const connect_1 = __importDefault(require("./connect"));
const UserController = __importStar(require("./controllers/user-controller"));
const userValidatiors_1 = require("./validation/userValidatiors");
const handleValidationErrors_1 = require("../dist/server/src/middlewares/handleValidationErrors");
const resourceIdValidator_1 = require("./validation/resourceIdValidator");
dotenv_1.config();
const app = express_1.default();
const port = +(process.env.PORT || 5000);
console.log('Connecting to DB ' + process.env.DB);
connect_1.default(process.env.DB || 'elephantstock');
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.get("/users", UserController.listUsers);
app.get("/users/:id", UserController.showUser);
app.post("/users", [...userValidatiors_1.createUserValidations, handleValidationErrors_1.handleValidationErrors], UserController.addUser);
app.patch("/users/:id", [resourceIdValidator_1.resourceIdValidator('User'), ...userValidatiors_1.updateUserValidations, handleValidationErrors_1.handleValidationErrors], UserController.updateUser);
app.delete("/users/:id", [resourceIdValidator_1.resourceIdValidator('User'), handleValidationErrors_1.handleValidationErrors], UserController.deleteUser);
//# sourceMappingURL=App.js.map