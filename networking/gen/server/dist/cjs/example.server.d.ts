import { EchoEvent, EchoRequest, EchoResponse } from "@myapp/gen-shared";
import { BroadcastClientMerged, Client, DeviceContext, RootServerService } from "@rootsdk/server-app";
export declare abstract class EchoServiceBase implements RootServerService {
    abstract echo(request: EchoRequest, client: Client): Promise<EchoResponse>;
    broadcastCreated(message: EchoEvent, clients: BroadcastClientMerged, except?: DeviceContext): void;
    private __register;
    get ServerServiceName(): string;
}
