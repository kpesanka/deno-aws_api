// Autogenerated API client for: AWS Marketplace Commerce Analytics

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class MarketplaceCommerceAnalytics {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(MarketplaceCommerceAnalytics.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2015-07-01",
    "endpointPrefix": "marketplacecommerceanalytics",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Marketplace Commerce Analytics",
    "serviceId": "Marketplace Commerce Analytics",
    "signatureVersion": "v4",
    "signingName": "marketplacecommerceanalytics",
    "targetPrefix": "MarketplaceCommerceAnalytics20150701",
    "uid": "marketplacecommerceanalytics-2015-07-01"
  };

  async generateDataSet(
    {abortSignal, ...params}: RequestConfig & s.GenerateDataSetRequest,
  ): Promise<s.GenerateDataSetResult> {
    const body: jsonP.JSONObject = {
      dataSetType: params["dataSetType"],
      dataSetPublicationDate: jsonP.serializeDate_unixTimestamp(params["dataSetPublicationDate"]),
      roleNameArn: params["roleNameArn"],
      destinationS3BucketName: params["destinationS3BucketName"],
      destinationS3Prefix: params["destinationS3Prefix"],
      snsTopicArn: params["snsTopicArn"],
      customerDefinedValues: params["customerDefinedValues"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GenerateDataSet",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "dataSetRequestId": "s",
      },
    }, await resp.json());
  }

  async startSupportDataExport(
    {abortSignal, ...params}: RequestConfig & s.StartSupportDataExportRequest,
  ): Promise<s.StartSupportDataExportResult> {
    const body: jsonP.JSONObject = {
      dataSetType: params["dataSetType"],
      fromDate: jsonP.serializeDate_unixTimestamp(params["fromDate"]),
      roleNameArn: params["roleNameArn"],
      destinationS3BucketName: params["destinationS3BucketName"],
      destinationS3Prefix: params["destinationS3Prefix"],
      snsTopicArn: params["snsTopicArn"],
      customerDefinedValues: params["customerDefinedValues"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartSupportDataExport",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "dataSetRequestId": "s",
      },
    }, await resp.json());
  }

}

