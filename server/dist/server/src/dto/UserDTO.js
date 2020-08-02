"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(user) {
        this.firstName = '';
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.role = user.role;
        this.id = user._id;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=UserDTO.js.map