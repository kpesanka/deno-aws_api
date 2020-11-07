// Autogenerated API client for: AWS Price List Service

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class Pricing {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Pricing.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-10-15",
    "endpointPrefix": "api.pricing",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "AWS Pricing",
    "serviceFullName": "AWS Price List Service",
    "serviceId": "Pricing",
    "signatureVersion": "v4",
    "signingName": "pricing",
    "targetPrefix": "AWSPriceListService",
    "uid": "pricing-2017-10-15"
  };

  async describeServices(
    {abortSignal, ...params}: RequestConfig & DescribeServicesRequest = {},
  ): Promise<DescribeServicesResponse> {
    const body: jsonP.JSONObject = {
      ServiceCode: params["ServiceCode"],
      FormatVersion: params["FormatVersion"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeServices",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Services": [toService],
        "FormatVersion": "s",
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getAttributeValues(
    {abortSignal, ...params}: RequestConfig & GetAttributeValuesRequest,
  ): Promise<GetAttributeValuesResponse> {
    const body: jsonP.JSONObject = {
      ServiceCode: params["ServiceCode"],
      AttributeName: params["AttributeName"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAttributeValues",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AttributeValues": [toAttributeValue],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getProducts(
    {abortSignal, ...params}: RequestConfig & GetProductsRequest = {},
  ): Promise<GetProductsResponse> {
    const body: jsonP.JSONObject = {
      ServiceCode: params["ServiceCode"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
      FormatVersion: params["FormatVersion"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetProducts",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FormatVersion": "s",
        "PriceList": [jsonP.readJsonValue],
        "NextToken": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface DescribeServicesRequest {
  ServiceCode?: string | null;
  FormatVersion?: string | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetAttributeValuesRequest {
  ServiceCode: string;
  AttributeName: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetProductsRequest {
  ServiceCode?: string | null;
  Filters?: Filter[] | null;
  FormatVersion?: string | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, output
export interface DescribeServicesResponse {
  Services?: Service[] | null;
  FormatVersion?: string | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetAttributeValuesResponse {
  AttributeValues?: AttributeValue[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetProductsResponse {
  FormatVersion?: string | null;
  PriceList?: jsonP.JSONValue[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface Filter {
  Type: FilterType;
  Field: string;
  Value: string;
}
function fromFilter(input?: Filter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    Field: input["Field"],
    Value: input["Value"],
  }
}

// refs: 1 - tags: input, named, enum
export type FilterType =
| "TERM_MATCH"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Service {
  ServiceCode?: string | null;
  AttributeNames?: string[] | null;
}
function toService(root: jsonP.JSONValue): Service {
  return jsonP.readObj({
    required: {},
    optional: {
      "ServiceCode": "s",
      "AttributeNames": ["s"],
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface AttributeValue {
  Value?: string | null;
}
function toAttributeValue(root: jsonP.JSONValue): AttributeValue {
  return jsonP.readObj({
    required: {},
    optional: {
      "Value": "s",
    },
  }, root);
}
