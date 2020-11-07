// Autogenerated API client for: AWSMarketplace Metering

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class MarketplaceMetering {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(MarketplaceMetering.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2016-01-14",
    "endpointPrefix": "metering.marketplace",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWSMarketplace Metering",
    "serviceId": "Marketplace Metering",
    "signatureVersion": "v4",
    "signingName": "aws-marketplace",
    "targetPrefix": "AWSMPMeteringService",
    "uid": "meteringmarketplace-2016-01-14"
  };

  async batchMeterUsage(
    {abortSignal, ...params}: RequestConfig & BatchMeterUsageRequest,
  ): Promise<BatchMeterUsageResult> {
    const body: jsonP.JSONObject = {
      UsageRecords: params["UsageRecords"]?.map(x => fromUsageRecord(x)),
      ProductCode: params["ProductCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchMeterUsage",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Results": [toUsageRecordResult],
        "UnprocessedRecords": [toUsageRecord],
      },
    }, await resp.json());
  }

  async meterUsage(
    {abortSignal, ...params}: RequestConfig & MeterUsageRequest,
  ): Promise<MeterUsageResult> {
    const body: jsonP.JSONObject = {
      ProductCode: params["ProductCode"],
      Timestamp: jsonP.serializeDate_unixTimestamp(params["Timestamp"]),
      UsageDimension: params["UsageDimension"],
      UsageQuantity: params["UsageQuantity"],
      DryRun: params["DryRun"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "MeterUsage",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "MeteringRecordId": "s",
      },
    }, await resp.json());
  }

  async registerUsage(
    {abortSignal, ...params}: RequestConfig & RegisterUsageRequest,
  ): Promise<RegisterUsageResult> {
    const body: jsonP.JSONObject = {
      ProductCode: params["ProductCode"],
      PublicKeyVersion: params["PublicKeyVersion"],
      Nonce: params["Nonce"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterUsage",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PublicKeyRotationTimestamp": "d",
        "Signature": "s",
      },
    }, await resp.json());
  }

  async resolveCustomer(
    {abortSignal, ...params}: RequestConfig & ResolveCustomerRequest,
  ): Promise<ResolveCustomerResult> {
    const body: jsonP.JSONObject = {
      RegistrationToken: params["RegistrationToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ResolveCustomer",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CustomerIdentifier": "s",
        "ProductCode": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface BatchMeterUsageRequest {
  UsageRecords: UsageRecord[];
  ProductCode: string;
}

// refs: 1 - tags: named, input
export interface MeterUsageRequest {
  ProductCode: string;
  Timestamp: Date | number;
  UsageDimension: string;
  UsageQuantity?: number | null;
  DryRun?: boolean | null;
}

// refs: 1 - tags: named, input
export interface RegisterUsageRequest {
  ProductCode: string;
  PublicKeyVersion: number;
  Nonce?: string | null;
}

// refs: 1 - tags: named, input
export interface ResolveCustomerRequest {
  RegistrationToken: string;
}

// refs: 1 - tags: named, output
export interface BatchMeterUsageResult {
  Results?: UsageRecordResult[] | null;
  UnprocessedRecords?: UsageRecord[] | null;
}

// refs: 1 - tags: named, output
export interface MeterUsageResult {
  MeteringRecordId?: string | null;
}

// refs: 1 - tags: named, output
export interface RegisterUsageResult {
  PublicKeyRotationTimestamp?: Date | number | null;
  Signature?: string | null;
}

// refs: 1 - tags: named, output
export interface ResolveCustomerResult {
  CustomerIdentifier?: string | null;
  ProductCode?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface UsageRecord {
  Timestamp: Date | number;
  CustomerIdentifier: string;
  Dimension: string;
  Quantity?: number | null;
}
function fromUsageRecord(input?: UsageRecord | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Timestamp: jsonP.serializeDate_unixTimestamp(input["Timestamp"]),
    CustomerIdentifier: input["CustomerIdentifier"],
    Dimension: input["Dimension"],
    Quantity: input["Quantity"],
  }
}
function toUsageRecord(root: jsonP.JSONValue): UsageRecord {
  return jsonP.readObj({
    required: {
      "Timestamp": "d",
      "CustomerIdentifier": "s",
      "Dimension": "s",
    },
    optional: {
      "Quantity": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface UsageRecordResult {
  UsageRecord?: UsageRecord | null;
  MeteringRecordId?: string | null;
  Status?: UsageRecordResultStatus | null;
}
function toUsageRecordResult(root: jsonP.JSONValue): UsageRecordResult {
  return jsonP.readObj({
    required: {},
    optional: {
      "UsageRecord": toUsageRecord,
      "MeteringRecordId": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<UsageRecordResultStatus>(x),
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type UsageRecordResultStatus =
| "Success"
| "CustomerNotSubscribed"
| "DuplicateRecord"
| cmnP.UnexpectedEnumValue;
