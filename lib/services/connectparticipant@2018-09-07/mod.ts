// Autogenerated API client for: Amazon Connect Participant Service

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as uuidv4 from "https://deno.land/std@0.71.0/uuid/v4.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class ConnectParticipant {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ConnectParticipant.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-09-07",
    "endpointPrefix": "participant.connect",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "Amazon Connect Participant",
    "serviceFullName": "Amazon Connect Participant Service",
    "serviceId": "ConnectParticipant",
    "signatureVersion": "v4",
    "signingName": "execute-api",
    "uid": "connectparticipant-2018-09-07"
  };

  async createParticipantConnection(
    {abortSignal, ...params}: RequestConfig & CreateParticipantConnectionRequest,
  ): Promise<CreateParticipantConnectionResponse> {
    const headers = new Headers;
    headers.append("X-Amz-Bearer", params["ParticipantToken"]);
    const body: jsonP.JSONObject = params ? {
      Type: params["Type"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "CreateParticipantConnection",
      requestUri: "/participant/connection",
    });
  return {
    ...jsonP.readObj({
        required: {},
        optional: {
          "Websocket": toWebsocket,
          "ConnectionCredentials": toConnectionCredentials,
        },
      }, await resp.json()),
  };
  }

  async disconnectParticipant(
    {abortSignal, ...params}: RequestConfig & DisconnectParticipantRequest,
  ): Promise<DisconnectParticipantResponse> {
    const headers = new Headers;
    headers.append("X-Amz-Bearer", params["ConnectionToken"]);
    const body: jsonP.JSONObject = params ? {
      ClientToken: params["ClientToken"] ?? generateIdemptToken(),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "DisconnectParticipant",
      requestUri: "/participant/disconnect",
    });
  return {
    ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
  };
  }

  async getTranscript(
    {abortSignal, ...params}: RequestConfig & GetTranscriptRequest,
  ): Promise<GetTranscriptResponse> {
    const headers = new Headers;
    headers.append("X-Amz-Bearer", params["ConnectionToken"]);
    const body: jsonP.JSONObject = params ? {
      ContactId: params["ContactId"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      ScanDirection: params["ScanDirection"],
      SortOrder: params["SortOrder"],
      StartPosition: fromStartPosition(params["StartPosition"]),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "GetTranscript",
      requestUri: "/participant/transcript",
    });
  return {
    ...jsonP.readObj({
        required: {},
        optional: {
          "InitialContactId": "s",
          "Transcript": [toItem],
          "NextToken": "s",
        },
      }, await resp.json()),
  };
  }

  async sendEvent(
    {abortSignal, ...params}: RequestConfig & SendEventRequest,
  ): Promise<SendEventResponse> {
    const headers = new Headers;
    headers.append("X-Amz-Bearer", params["ConnectionToken"]);
    const body: jsonP.JSONObject = params ? {
      ContentType: params["ContentType"],
      Content: params["Content"],
      ClientToken: params["ClientToken"] ?? generateIdemptToken(),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "SendEvent",
      requestUri: "/participant/event",
    });
  return {
    ...jsonP.readObj({
        required: {},
        optional: {
          "Id": "s",
          "AbsoluteTime": "s",
        },
      }, await resp.json()),
  };
  }

  async sendMessage(
    {abortSignal, ...params}: RequestConfig & SendMessageRequest,
  ): Promise<SendMessageResponse> {
    const headers = new Headers;
    headers.append("X-Amz-Bearer", params["ConnectionToken"]);
    const body: jsonP.JSONObject = params ? {
      ContentType: params["ContentType"],
      Content: params["Content"],
      ClientToken: params["ClientToken"] ?? generateIdemptToken(),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "SendMessage",
      requestUri: "/participant/message",
    });
  return {
    ...jsonP.readObj({
        required: {},
        optional: {
          "Id": "s",
          "AbsoluteTime": "s",
        },
      }, await resp.json()),
  };
  }

}

// refs: 1 - tags: named, input
export interface CreateParticipantConnectionRequest {
  Type: ConnectionType[];
  ParticipantToken: string;
}

// refs: 1 - tags: named, input
export interface DisconnectParticipantRequest {
  ClientToken?: string | null;
  ConnectionToken: string;
}

// refs: 1 - tags: named, input
export interface GetTranscriptRequest {
  ContactId?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
  ScanDirection?: ScanDirection | null;
  SortOrder?: SortKey | null;
  StartPosition?: StartPosition | null;
  ConnectionToken: string;
}

// refs: 1 - tags: named, input
export interface SendEventRequest {
  ContentType: string;
  Content?: string | null;
  ClientToken?: string | null;
  ConnectionToken: string;
}

// refs: 1 - tags: named, input
export interface SendMessageRequest {
  ContentType: string;
  Content: string;
  ClientToken?: string | null;
  ConnectionToken: string;
}

// refs: 1 - tags: named, output
export interface CreateParticipantConnectionResponse {
  Websocket?: Websocket | null;
  ConnectionCredentials?: ConnectionCredentials | null;
}

// refs: 1 - tags: named, output
export interface DisconnectParticipantResponse {
}

// refs: 1 - tags: named, output
export interface GetTranscriptResponse {
  InitialContactId?: string | null;
  Transcript?: Item[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface SendEventResponse {
  Id?: string | null;
  AbsoluteTime?: string | null;
}

// refs: 1 - tags: named, output
export interface SendMessageResponse {
  Id?: string | null;
  AbsoluteTime?: string | null;
}

// refs: 1 - tags: input, named, enum
export type ConnectionType =
| "WEBSOCKET"
| "CONNECTION_CREDENTIALS"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ScanDirection =
| "FORWARD"
| "BACKWARD"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type SortKey =
| "DESCENDING"
| "ASCENDING"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface StartPosition {
  Id?: string | null;
  AbsoluteTime?: string | null;
  MostRecent?: number | null;
}
function fromStartPosition(input?: StartPosition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Id: input["Id"],
    AbsoluteTime: input["AbsoluteTime"],
    MostRecent: input["MostRecent"],
  }
}

// refs: 1 - tags: output, named, interface
export interface Websocket {
  Url?: string | null;
  ConnectionExpiry?: string | null;
}
function toWebsocket(root: jsonP.JSONValue): Websocket {
  return jsonP.readObj({
    required: {},
    optional: {
      "Url": "s",
      "ConnectionExpiry": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ConnectionCredentials {
  ConnectionToken?: string | null;
  Expiry?: string | null;
}
function toConnectionCredentials(root: jsonP.JSONValue): ConnectionCredentials {
  return jsonP.readObj({
    required: {},
    optional: {
      "ConnectionToken": "s",
      "Expiry": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Item {
  AbsoluteTime?: string | null;
  Content?: string | null;
  ContentType?: string | null;
  Id?: string | null;
  Type?: ChatItemType | null;
  ParticipantId?: string | null;
  DisplayName?: string | null;
  ParticipantRole?: ParticipantRole | null;
}
function toItem(root: jsonP.JSONValue): Item {
  return jsonP.readObj({
    required: {},
    optional: {
      "AbsoluteTime": "s",
      "Content": "s",
      "ContentType": "s",
      "Id": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<ChatItemType>(x),
      "ParticipantId": "s",
      "DisplayName": "s",
      "ParticipantRole": (x: jsonP.JSONValue) => cmnP.readEnum<ParticipantRole>(x),
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type ChatItemType =
| "MESSAGE"
| "EVENT"
| "CONNECTION_ACK"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type ParticipantRole =
| "AGENT"
| "CUSTOMER"
| "SYSTEM"
| cmnP.UnexpectedEnumValue;