"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientTelephone = void 0;
const node_crypto_1 = require("node:crypto");
class ClientTelephone {
    constructor() {
        this.id = (0, node_crypto_1.randomUUID)();
    }
}
exports.ClientTelephone = ClientTelephone;
//# sourceMappingURL=client_telephone.entity.js.map