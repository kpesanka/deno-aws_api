// Autogenerated API client for: Amazon Forecast Query Service

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class ForecastQueryService {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ForecastQueryService.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-06-26",
    "endpointPrefix": "forecastquery",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Forecast Query Service",
    "serviceId": "forecastquery",
    "signatureVersion": "v4",
    "signingName": "forecast",
    "targetPrefix": "AmazonForecastRuntime",
    "uid": "forecastquery-2018-06-26"
  };

  async queryForecast(
    {abortSignal, ...params}: RequestConfig & s.QueryForecastRequest,
  ): Promise<s.QueryForecastResponse> {
    const body: jsonP.JSONObject = {
      ForecastArn: params["ForecastArn"],
      StartDate: params["StartDate"],
      EndDate: params["EndDate"],
      Filters: params["Filters"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "QueryForecast",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Forecast": toForecast,
      },
    }, await resp.json());
  }

}

function toForecast(root: jsonP.JSONValue): s.Forecast {
  return jsonP.readObj({
    required: {},
    optional: {
      "Predictions": x => jsonP.readMap(String, l => Array.isArray(l) ? l.map(toDataPoint) : [], x),
    },
  }, root);
}

function toDataPoint(root: jsonP.JSONValue): s.DataPoint {
  return jsonP.readObj({
    required: {},
    optional: {
      "Timestamp": "s",
      "Value": "n",
    },
  }, root);
}
