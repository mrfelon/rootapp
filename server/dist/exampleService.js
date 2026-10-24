"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.echoService = exports.EchoService = void 0;
const gen_server_1 = require("@myapp/gen-server");
class EchoService extends gen_server_1.EchoServiceBase {
    async echo(request, client) {
        const reply = "Echo server: " + request.message;
        const event = { message: reply };
        this.broadcastCreated(event, "all", client);
        const response = { message: reply };
        return response;
    }
}
exports.EchoService = EchoService;
exports.echoService = new EchoService();
