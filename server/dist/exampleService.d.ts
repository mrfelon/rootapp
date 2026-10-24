import { Client } from "@rootsdk/server-app";
import { EchoRequest, EchoResponse } from "@myapp/gen-shared";
import { EchoServiceBase } from "@myapp/gen-server";
export declare class EchoService extends EchoServiceBase {
    echo(request: EchoRequest, client: Client): Promise<EchoResponse>;
}
export declare const echoService: EchoService;
