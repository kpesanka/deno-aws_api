// Autogenerated API client for: Access Analyzer

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

export default class AccessAnalyzer {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(AccessAnalyzer.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2019-11-01",
    "endpointPrefix": "access-analyzer",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "Access Analyzer",
    "serviceId": "AccessAnalyzer",
    "signatureVersion": "v4",
    "signingName": "access-analyzer",
    "uid": "accessanalyzer-2019-11-01"
  };

  async applyArchiveRule(
    {abortSignal, ...params}: RequestConfig & s.ApplyArchiveRuleRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      analyzerArn: params["analyzerArn"],
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      ruleName: params["ruleName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ApplyArchiveRule",
      method: "PUT",
      requestUri: "/archive-rule",
      responseCode: 200,
    });
  }

  async createAnalyzer(
    {abortSignal, ...params}: RequestConfig & s.CreateAnalyzerRequest,
  ): Promise<s.CreateAnalyzerResponse> {
    const body: jsonP.JSONObject = {
      analyzerName: params["analyzerName"],
      archiveRules: params["archiveRules"]?.map(x => fromInlineArchiveRule(x)),
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      tags: params["tags"],
      type: params["type"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateAnalyzer",
      method: "PUT",
      requestUri: "/analyzer",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "arn": "s",
      },
    }, await resp.json());
  }

  async createArchiveRule(
    {abortSignal, ...params}: RequestConfig & s.CreateArchiveRuleRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      filter: jsonP.serializeMap(params["filter"], x => fromCriterion(x)),
      ruleName: params["ruleName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateArchiveRule",
      method: "PUT",
      requestUri: cmnP.encodePath`/analyzer/${params["analyzerName"]}/archive-rule`,
      responseCode: 200,
    });
  }

  async deleteAnalyzer(
    {abortSignal, ...params}: RequestConfig & s.DeleteAnalyzerRequest,
  ): Promise<void> {
    const query = new URLSearchParams;
    if (params["clientToken"] != null) query.set("clientToken", params["clientToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DeleteAnalyzer",
      method: "DELETE",
      requestUri: cmnP.encodePath`/analyzer/${params["analyzerName"]}`,
      responseCode: 200,
    });
  }

  async deleteArchiveRule(
    {abortSignal, ...params}: RequestConfig & s.DeleteArchiveRuleRequest,
  ): Promise<void> {
    const query = new URLSearchParams;
    if (params["clientToken"] != null) query.set("clientToken", params["clientToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DeleteArchiveRule",
      method: "DELETE",
      requestUri: cmnP.encodePath`/analyzer/${params["analyzerName"]}/archive-rule/${params["ruleName"]}`,
      responseCode: 200,
    });
  }

  async getAnalyzedResource(
    {abortSignal, ...params}: RequestConfig & s.GetAnalyzedResourceRequest,
  ): Promise<s.GetAnalyzedResourceResponse> {
    const query = new URLSearchParams;
    query.set("analyzerArn", params["analyzerArn"]?.toString() ?? "");
    query.set("resourceArn", params["resourceArn"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetAnalyzedResource",
      method: "GET",
      requestUri: "/analyzed-resource",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "resource": toAnalyzedResource,
      },
    }, await resp.json());
  }

  async getAnalyzer(
    {abortSignal, ...params}: RequestConfig & s.GetAnalyzerRequest,
  ): Promise<s.GetAnalyzerResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetAnalyzer",
      method: "GET",
      requestUri: cmnP.encodePath`/analyzer/${params["analyzerName"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "analyzer": toAnalyzerSummary,
      },
      optional: {},
    }, await resp.json());
  }

  async getArchiveRule(
    {abortSignal, ...params}: RequestConfig & s.GetArchiveRuleRequest,
  ): Promise<s.GetArchiveRuleResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetArchiveRule",
      method: "GET",
      requestUri: cmnP.encodePath`/analyzer/${params["analyzerName"]}/archive-rule/${params["ruleName"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "archiveRule": toArchiveRuleSummary,
      },
      optional: {},
    }, await resp.json());
  }

  async getFinding(
    {abortSignal, ...params}: RequestConfig & s.GetFindingRequest,
  ): Promise<s.GetFindingResponse> {
    const query = new URLSearchParams;
    query.set("analyzerArn", params["analyzerArn"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetFinding",
      method: "GET",
      requestUri: cmnP.encodePath`/finding/${params["id"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "finding": toFinding,
      },
    }, await resp.json());
  }

  async listAnalyzedResources(
    {abortSignal, ...params}: RequestConfig & s.ListAnalyzedResourcesRequest,
  ): Promise<s.ListAnalyzedResourcesResponse> {
    const body: jsonP.JSONObject = {
      analyzerArn: params["analyzerArn"],
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
      resourceType: params["resourceType"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAnalyzedResources",
      requestUri: "/analyzed-resource",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "analyzedResources": [toAnalyzedResourceSummary],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listAnalyzers(
    {abortSignal, ...params}: RequestConfig & s.ListAnalyzersRequest = {},
  ): Promise<s.ListAnalyzersResponse> {
    const query = new URLSearchParams;
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["type"] != null) query.set("type", params["type"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListAnalyzers",
      method: "GET",
      requestUri: "/analyzer",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "analyzers": [toAnalyzerSummary],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listArchiveRules(
    {abortSignal, ...params}: RequestConfig & s.ListArchiveRulesRequest,
  ): Promise<s.ListArchiveRulesResponse> {
    const query = new URLSearchParams;
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListArchiveRules",
      method: "GET",
      requestUri: cmnP.encodePath`/analyzer/${params["analyzerName"]}/archive-rule`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "archiveRules": [toArchiveRuleSummary],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listFindings(
    {abortSignal, ...params}: RequestConfig & s.ListFindingsRequest,
  ): Promise<s.ListFindingsResponse> {
    const body: jsonP.JSONObject = {
      analyzerArn: params["analyzerArn"],
      filter: jsonP.serializeMap(params["filter"], x => fromCriterion(x)),
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
      sort: fromSortCriteria(params["sort"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListFindings",
      requestUri: "/finding",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "findings": [toFindingSummary],
      },
      optional: {
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
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async startResourceScan(
    {abortSignal, ...params}: RequestConfig & s.StartResourceScanRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      analyzerArn: params["analyzerArn"],
      resourceArn: params["resourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartResourceScan",
      requestUri: "/resource/scan",
      responseCode: 200,
    });
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
      responseCode: 200,
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
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateArchiveRule(
    {abortSignal, ...params}: RequestConfig & s.UpdateArchiveRuleRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      filter: jsonP.serializeMap(params["filter"], x => fromCriterion(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateArchiveRule",
      method: "PUT",
      requestUri: cmnP.encodePath`/analyzer/${params["analyzerName"]}/archive-rule/${params["ruleName"]}`,
      responseCode: 200,
    });
  }

  async updateFindings(
    {abortSignal, ...params}: RequestConfig & s.UpdateFindingsRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      analyzerArn: params["analyzerArn"],
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      ids: params["ids"],
      resourceArn: params["resourceArn"],
      status: params["status"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateFindings",
      method: "PUT",
      requestUri: "/finding",
      responseCode: 200,
    });
  }

}

function fromInlineArchiveRule(input?: s.InlineArchiveRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    filter: jsonP.serializeMap(input["filter"], x => fromCriterion(x)),
    ruleName: input["ruleName"],
  }
}

function fromCriterion(input?: s.Criterion | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    contains: input["contains"],
    eq: input["eq"],
    exists: input["exists"],
    neq: input["neq"],
  }
}
function toCriterion(root: jsonP.JSONValue): s.Criterion {
  return jsonP.readObj({
    required: {},
    optional: {
      "contains": ["s"],
      "eq": ["s"],
      "exists": "b",
      "neq": ["s"],
    },
  }, root);
}

function fromSortCriteria(input?: s.SortCriteria | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    attributeName: input["attributeName"],
    orderBy: input["orderBy"],
  }
}

function toAnalyzedResource(root: jsonP.JSONValue): s.AnalyzedResource {
  return jsonP.readObj({
    required: {
      "analyzedAt": "d",
      "createdAt": "d",
      "isPublic": "b",
      "resourceArn": "s",
      "resourceOwnerAccount": "s",
      "resourceType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceType>(x),
      "updatedAt": "d",
    },
    optional: {
      "actions": ["s"],
      "error": "s",
      "sharedVia": ["s"],
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.FindingStatus>(x),
    },
  }, root);
}

function toAnalyzerSummary(root: jsonP.JSONValue): s.AnalyzerSummary {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "createdAt": "d",
      "name": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnalyzerStatus>(x),
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.Type>(x),
    },
    optional: {
      "lastResourceAnalyzed": "s",
      "lastResourceAnalyzedAt": "d",
      "statusReason": toStatusReason,
      "tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toStatusReason(root: jsonP.JSONValue): s.StatusReason {
  return jsonP.readObj({
    required: {
      "code": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReasonCode>(x),
    },
    optional: {},
  }, root);
}

function toArchiveRuleSummary(root: jsonP.JSONValue): s.ArchiveRuleSummary {
  return jsonP.readObj({
    required: {
      "createdAt": "d",
      "filter": x => jsonP.readMap(String, toCriterion, x),
      "ruleName": "s",
      "updatedAt": "d",
    },
    optional: {},
  }, root);
}

function toFinding(root: jsonP.JSONValue): s.Finding {
  return jsonP.readObj({
    required: {
      "analyzedAt": "d",
      "condition": x => jsonP.readMap(String, String, x),
      "createdAt": "d",
      "id": "s",
      "resourceOwnerAccount": "s",
      "resourceType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceType>(x),
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.FindingStatus>(x),
      "updatedAt": "d",
    },
    optional: {
      "action": ["s"],
      "error": "s",
      "isPublic": "b",
      "principal": x => jsonP.readMap(String, String, x),
      "resource": "s",
      "sources": [toFindingSource],
    },
  }, root);
}

function toFindingSource(root: jsonP.JSONValue): s.FindingSource {
  return jsonP.readObj({
    required: {
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.FindingSourceType>(x),
    },
    optional: {
      "detail": toFindingSourceDetail,
    },
  }, root);
}

function toFindingSourceDetail(root: jsonP.JSONValue): s.FindingSourceDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "accessPointArn": "s",
    },
  }, root);
}

function toAnalyzedResourceSummary(root: jsonP.JSONValue): s.AnalyzedResourceSummary {
  return jsonP.readObj({
    required: {
      "resourceArn": "s",
      "resourceOwnerAccount": "s",
      "resourceType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceType>(x),
    },
    optional: {},
  }, root);
}

function toFindingSummary(root: jsonP.JSONValue): s.FindingSummary {
  return jsonP.readObj({
    required: {
      "analyzedAt": "d",
      "condition": x => jsonP.readMap(String, String, x),
      "createdAt": "d",
      "id": "s",
      "resourceOwnerAccount": "s",
      "resourceType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceType>(x),
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.FindingStatus>(x),
      "updatedAt": "d",
    },
    optional: {
      "action": ["s"],
      "error": "s",
      "isPublic": "b",
      "principal": x => jsonP.readMap(String, String, x),
      "resource": "s",
      "sources": [toFindingSource],
    },
  }, root);
}
