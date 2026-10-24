import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message EchoRequest
 */
export interface EchoRequest {
    /**
     * @generated from protobuf field: string message = 1
     */
    message: string;
}
/**
 * @generated from protobuf message EchoResponse
 */
export interface EchoResponse {
    /**
     * @generated from protobuf field: string message = 1
     */
    message: string;
}
/**
 * @generated from protobuf message EchoEvent
 */
export interface EchoEvent {
    /**
     * @generated from protobuf field: string message = 1
     */
    message: string;
}
declare class EchoRequest$Type extends MessageType<EchoRequest> {
    constructor();
    create(value?: PartialMessage<EchoRequest>): EchoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EchoRequest): EchoRequest;
    internalBinaryWrite(message: EchoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message EchoRequest
 */
export declare const EchoRequest: EchoRequest$Type;
declare class EchoResponse$Type extends MessageType<EchoResponse> {
    constructor();
    create(value?: PartialMessage<EchoResponse>): EchoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EchoResponse): EchoResponse;
    internalBinaryWrite(message: EchoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message EchoResponse
 */
export declare const EchoResponse: EchoResponse$Type;
declare class EchoEvent$Type extends MessageType<EchoEvent> {
    constructor();
    create(value?: PartialMessage<EchoEvent>): EchoEvent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EchoEvent): EchoEvent;
    internalBinaryWrite(message: EchoEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message EchoEvent
 */
export declare const EchoEvent: EchoEvent$Type;
export {};
