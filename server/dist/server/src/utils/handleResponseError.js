"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponseError = void 0;
exports.handleResponseError = (res, e) => {
    res.status(400);
    res.send({ message: e.message });
};
//# sourceMappingURL=handleResponseError.js.map