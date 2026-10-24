"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_app_1 = require("@rootsdk/server-app");
const exampleService_1 = require("./exampleService"); // TODO: remove this line when you no longer need the example code
async function onStarting(state) {
    server_app_1.rootServer.lifecycle.addService(exampleService_1.echoService); // TODO: remove this line when you no longer need the example code
}
(async () => {
    await server_app_1.rootServer.lifecycle.start(onStarting);
})();
