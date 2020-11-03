// Autogenerated API client for: Amazon Honeycode

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class Honeycode {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Honeycode.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2020-03-01",
    "endpointPrefix": "honeycode",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "Honeycode",
    "serviceFullName": "Amazon Honeycode",
    "serviceId": "Honeycode",
    "signatureVersion": "v4",
    "signingName": "honeycode",
    "uid": "honeycode-2020-03-01"
  };

  async getScreenData(
    {abortSignal, ...params}: RequestConfig & GetScreenDataRequest,
  ): Promise<GetScreenDataResult> {
    const body: jsonP.JSONObject = params ? {
      workbookId: params["workbookId"],
      appId: params["appId"],
      screenId: params["screenId"],
      variables: jsonP.serializeMap(params["variables"], x => fromVariableValue(x)),
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetScreenData",
      requestUri: "/screendata",
    });
  return {
    ...jsonP.readObj({
        required: {
          "results": x => jsonP.readMap(String, toResultSet, x),
          "workbookCursor": "n",
        },
        optional: {
          "nextToken": "s",
        },
      }, await resp.json()),
  };
  }

  async invokeScreenAutomation(
    {abortSignal, ...params}: RequestConfig & InvokeScreenAutomationRequest,
  ): Promise<InvokeScreenAutomationResult> {
    const body: jsonP.JSONObject = params ? {
      variables: jsonP.serializeMap(params["variables"], x => fromVariableValue(x)),
      rowId: params["rowId"],
      clientRequestToken: params["clientRequestToken"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InvokeScreenAutomation",
      requestUri: cmnP.encodePath`/workbooks/${params["workbookId"]}/apps/${params["appId"]}/screens/${params["screenId"]}/automations/${params["screenAutomationId"]}`,
    });
  return {
    ...jsonP.readObj({
        required: {
          "workbookCursor": "n",
        },
        optional: {},
      }, await resp.json()),
  };
  }

}

// refs: 1 - tags: named, input
export interface GetScreenDataRequest {
  workbookId: string;
  appId: string;
  screenId: string;
  variables?: { [key: string]: VariableValue | null | undefined } | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface InvokeScreenAutomationRequest {
  workbookId: string;
  appId: string;
  screenId: string;
  screenAutomationId: string;
  variables?: { [key: string]: VariableValue | null | undefined } | null;
  rowId?: string | null;
  clientRequestToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetScreenDataResult {
  results: { [key: string]: ResultSet | null | undefined };
  workbookCursor: number;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface InvokeScreenAutomationResult {
  workbookCursor: number;
}

// refs: 2 - tags: input, named, interface
export interface VariableValue {
  rawValue: string;
}
function fromVariableValue(input?: VariableValue | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    rawValue: input["rawValue"],
  }
}

// refs: 1 - tags: output, named, interface
export interface ResultSet {
  headers: ColumnMetadata[];
  rows: ResultRow[];
}
function toResultSet(root: jsonP.JSONValue): ResultSet {
  return jsonP.readObj({
    required: {
      "headers": [toColumnMetadata],
      "rows": [toResultRow],
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ColumnMetadata {
  name: string;
  format: Format;
}
function toColumnMetadata(root: jsonP.JSONValue): ColumnMetadata {
  return jsonP.readObj({
    required: {
      "name": "s",
      "format": (x: jsonP.JSONValue) => cmnP.readEnum<Format>(x),
    },
    optional: {},
  }, root);
}

// refs: 2 - tags: output, named, enum
export type Format =
| "AUTO"
| "NUMBER"
| "CURRENCY"
| "DATE"
| "TIME"
| "DATE_TIME"
| "PERCENTAGE"
| "TEXT"
| "ACCOUNTING"
| "CONTACT"
| "ROWLINK"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ResultRow {
  rowId?: string | null;
  dataItems: DataItem[];
}
function toResultRow(root: jsonP.JSONValue): ResultRow {
  return jsonP.readObj({
    required: {
      "dataItems": [toDataItem],
    },
    optional: {
      "rowId": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DataItem {
  overrideFormat?: Format | null;
  rawValue?: string | null;
  formattedValue?: string | null;
}
function toDataItem(root: jsonP.JSONValue): DataItem {
  return jsonP.readObj({
    required: {},
    optional: {
      "overrideFormat": (x: jsonP.JSONValue) => cmnP.readEnum<Format>(x),
      "rawValue": "s",
      "formattedValue": "s",
    },
  }, root);
}