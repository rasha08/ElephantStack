"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceIdValidator = void 0;
const express_validator_1 = require("express-validator");
exports.resourceIdValidator = (label) => express_validator_1.param('id').custom((value) => {
    if (!value || value.length < 24) {
        throw new Error(`Param ${label} id must be present and valid`);
    }
    return true;
});
//# sourceMappingURL=resourceIdValidator.js.map