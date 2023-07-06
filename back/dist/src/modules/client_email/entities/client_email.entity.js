"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEmail = void 0;
const node_crypto_1 = require("node:crypto");
class ClientEmail {
    constructor() {
        this.id = (0, node_crypto_1.randomUUID)();
    }
}
exports.ClientEmail = ClientEmail;
//# sourceMappingURL=client_email.entity.js.map