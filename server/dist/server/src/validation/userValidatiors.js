"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidations = exports.updateUserValidations = void 0;
const express_validator_1 = require("express-validator");
const Role_1 = require("../../../shared/enums/Role");
const roleValidator = (value) => {
    if (!(value in Role_1.Role)) {
        throw new Error(`Role must be one of: ${Object.keys(Role_1.Role).join(', ')}`);
    }
    return true;
};
const nameValidator = (label) => (value) => {
    if (!value) {
        throw new Error(`${label} is required!`);
    }
    if (value.trim().length < 2) {
        throw new Error(`${label} must be at least 2 characters long!`);
    }
    return true;
};
exports.updateUserValidations = [
    express_validator_1.body('firstName').custom(nameValidator('First Name')),
    express_validator_1.body('lastName').custom(nameValidator('Last Name')),
    express_validator_1.body('role').custom(roleValidator),
];
exports.createUserValidations = [...exports.updateUserValidations, express_validator_1.body('email').isEmail()];
//# sourceMappingURL=userValidatiors.js.map