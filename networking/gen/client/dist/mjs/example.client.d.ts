import { EchoEvent, EchoRequest, EchoResponse } from "@myapp/gen-shared";
import { RootClientService, TypedEventEmitter } from "@rootsdk/client-app";
export declare enum EchoServiceClientEvent {
    Created = "broadcastCreated"
}
export type EchoServiceClientEvents = {
    'broadcastCreated': (event: EchoEvent) => void;
};
declare const EchoServiceClient_base: new () => TypedEventEmitter<EchoServiceClientEvents>;
export declare class EchoServiceClient extends EchoServiceClient_base implements RootClientService {
    constructor();
    get ClientServiceName(): string;
    echo(request: EchoRequest): Promise<EchoResponse>;
    private __register;
}
export declare const echoServiceClient: EchoServiceClient;
export {};
