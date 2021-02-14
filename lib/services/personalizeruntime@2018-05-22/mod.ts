// Autogenerated API client for: Amazon Personalize Runtime

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class PersonalizeRuntime {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(PersonalizeRuntime.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-05-22",
    "endpointPrefix": "personalize-runtime",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "Amazon Personalize Runtime",
    "serviceId": "Personalize Runtime",
    "signatureVersion": "v4",
    "signingName": "personalize",
    "uid": "personalize-runtime-2018-05-22"
  };

  async getPersonalizedRanking(
    {abortSignal, ...params}: RequestConfig & s.GetPersonalizedRankingRequest,
  ): Promise<s.GetPersonalizedRankingResponse> {
    const body: jsonP.JSONObject = {
      campaignArn: params["campaignArn"],
      inputList: params["inputList"],
      userId: params["userId"],
      context: params["context"],
      filterArn: params["filterArn"],
      filterValues: params["filterValues"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetPersonalizedRanking",
      requestUri: "/personalize-ranking",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "personalizedRanking": [toPredictedItem],
        "recommendationId": "s",
      },
    }, await resp.json());
  }

  async getRecommendations(
    {abortSignal, ...params}: RequestConfig & s.GetRecommendationsRequest,
  ): Promise<s.GetRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      campaignArn: params["campaignArn"],
      itemId: params["itemId"],
      userId: params["userId"],
      numResults: params["numResults"],
      context: params["context"],
      filterArn: params["filterArn"],
      filterValues: params["filterValues"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetRecommendations",
      requestUri: "/recommendations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "itemList": [toPredictedItem],
        "recommendationId": "s",
      },
    }, await resp.json());
  }

}

function toPredictedItem(root: jsonP.JSONValue): s.PredictedItem {
  return jsonP.readObj({
    required: {},
    optional: {
      "itemId": "s",
      "score": "n",
    },
  }, root);
}
