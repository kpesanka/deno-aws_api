// Autogenerated API client for: AWS IoT Fleet Hub

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as uuidv4 from "https://deno.land/std@0.86.0/uuid/v4.ts";
import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class IoTFleetHub {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(IoTFleetHub.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2020-11-03",
    "endpointPrefix": "api.fleethub.iot",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "AWS IoT Fleet Hub",
    "serviceId": "IoTFleetHub",
    "signatureVersion": "v4",
    "signingName": "iotfleethub",
    "uid": "iotfleethub-2020-11-03"
  };

  async createApplication(
    {abortSignal, ...params}: RequestConfig & s.CreateApplicationRequest,
  ): Promise<s.CreateApplicationResponse> {
    const body: jsonP.JSONObject = {
      applicationName: params["applicationName"],
      applicationDescription: params["applicationDescription"],
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      roleArn: params["roleArn"],
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateApplication",
      requestUri: "/applications",
      responseCode: 201,
    });
    return jsonP.readObj({
      required: {
        "applicationId": "s",
        "applicationArn": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteApplication(
    {abortSignal, ...params}: RequestConfig & s.DeleteApplicationRequest,
  ): Promise<s.DeleteApplicationResponse> {
    const query = new URLSearchParams;
    if (params["clientToken"] != null) query.set("clientToken", params["clientToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DeleteApplication",
      method: "DELETE",
      requestUri: cmnP.encodePath`/applications/${params["applicationId"]}`,
      responseCode: 204,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeApplication(
    {abortSignal, ...params}: RequestConfig & s.DescribeApplicationRequest,
  ): Promise<s.DescribeApplicationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeApplication",
      method: "GET",
      requestUri: cmnP.encodePath`/applications/${params["applicationId"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "applicationId": "s",
        "applicationArn": "s",
        "applicationName": "s",
        "applicationUrl": "s",
        "applicationState": (x: jsonP.JSONValue) => cmnP.readEnum<s.ApplicationState>(x),
        "applicationCreationDate": "n",
        "applicationLastUpdateDate": "n",
        "roleArn": "s",
      },
      optional: {
        "applicationDescription": "s",
        "ssoClientId": "s",
        "errorMessage": "s",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listApplications(
    {abortSignal, ...params}: RequestConfig & s.ListApplicationsRequest = {},
  ): Promise<s.ListApplicationsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListApplications",
      method: "GET",
      requestUri: "/applications",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "applicationSummaries": [toApplicationSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["tagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateApplication(
    {abortSignal, ...params}: RequestConfig & s.UpdateApplicationRequest,
  ): Promise<s.UpdateApplicationResponse> {
    const body: jsonP.JSONObject = {
      applicationName: params["applicationName"],
      applicationDescription: params["applicationDescription"],
      clientToken: params["clientToken"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateApplication",
      method: "PATCH",
      requestUri: cmnP.encodePath`/applications/${params["applicationId"]}`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function toApplicationSummary(root: jsonP.JSONValue): s.ApplicationSummary {
  return jsonP.readObj({
    required: {
      "applicationId": "s",
      "applicationName": "s",
      "applicationUrl": "s",
    },
    optional: {
      "applicationDescription": "s",
      "applicationCreationDate": "n",
      "applicationLastUpdateDate": "n",
      "applicationState": (x: jsonP.JSONValue) => cmnP.readEnum<s.ApplicationState>(x),
    },
  }, root);
}
