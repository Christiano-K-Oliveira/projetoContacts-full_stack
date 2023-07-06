"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEmail = void 0;
const node_crypto_1 = require("node:crypto");
class ContactEmail {
    constructor() {
        this.id = (0, node_crypto_1.randomUUID)();
    }
}
exports.ContactEmail = ContactEmail;
//# sourceMappingURL=contact_email.entity.js.map