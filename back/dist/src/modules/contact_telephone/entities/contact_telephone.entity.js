"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactTelephone = void 0;
const node_crypto_1 = require("node:crypto");
class ContactTelephone {
    constructor() {
        this.id = (0, node_crypto_1.randomUUID)();
    }
}
exports.ContactTelephone = ContactTelephone;
//# sourceMappingURL=contact_telephone.entity.js.map