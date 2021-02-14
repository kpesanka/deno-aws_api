// Autogenerated API client for: Amazon Inspector

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class Inspector {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Inspector.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2016-02-16",
    "endpointPrefix": "inspector",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Inspector",
    "serviceId": "Inspector",
    "signatureVersion": "v4",
    "targetPrefix": "InspectorService",
    "uid": "inspector-2016-02-16"
  };

  async addAttributesToFindings(
    {abortSignal, ...params}: RequestConfig & s.AddAttributesToFindingsRequest,
  ): Promise<s.AddAttributesToFindingsResponse> {
    const body: jsonP.JSONObject = {
      findingArns: params["findingArns"],
      attributes: params["attributes"]?.map(x => fromAttribute(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AddAttributesToFindings",
    });
    return jsonP.readObj({
      required: {
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async createAssessmentTarget(
    {abortSignal, ...params}: RequestConfig & s.CreateAssessmentTargetRequest,
  ): Promise<s.CreateAssessmentTargetResponse> {
    const body: jsonP.JSONObject = {
      assessmentTargetName: params["assessmentTargetName"],
      resourceGroupArn: params["resourceGroupArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateAssessmentTarget",
    });
    return jsonP.readObj({
      required: {
        "assessmentTargetArn": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createAssessmentTemplate(
    {abortSignal, ...params}: RequestConfig & s.CreateAssessmentTemplateRequest,
  ): Promise<s.CreateAssessmentTemplateResponse> {
    const body: jsonP.JSONObject = {
      assessmentTargetArn: params["assessmentTargetArn"],
      assessmentTemplateName: params["assessmentTemplateName"],
      durationInSeconds: params["durationInSeconds"],
      rulesPackageArns: params["rulesPackageArns"],
      userAttributesForFindings: params["userAttributesForFindings"]?.map(x => fromAttribute(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateAssessmentTemplate",
    });
    return jsonP.readObj({
      required: {
        "assessmentTemplateArn": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createExclusionsPreview(
    {abortSignal, ...params}: RequestConfig & s.CreateExclusionsPreviewRequest,
  ): Promise<s.CreateExclusionsPreviewResponse> {
    const body: jsonP.JSONObject = {
      assessmentTemplateArn: params["assessmentTemplateArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateExclusionsPreview",
    });
    return jsonP.readObj({
      required: {
        "previewToken": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createResourceGroup(
    {abortSignal, ...params}: RequestConfig & s.CreateResourceGroupRequest,
  ): Promise<s.CreateResourceGroupResponse> {
    const body: jsonP.JSONObject = {
      resourceGroupTags: params["resourceGroupTags"]?.map(x => fromResourceGroupTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateResourceGroup",
    });
    return jsonP.readObj({
      required: {
        "resourceGroupArn": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteAssessmentRun(
    {abortSignal, ...params}: RequestConfig & s.DeleteAssessmentRunRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      assessmentRunArn: params["assessmentRunArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteAssessmentRun",
    });
  }

  async deleteAssessmentTarget(
    {abortSignal, ...params}: RequestConfig & s.DeleteAssessmentTargetRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      assessmentTargetArn: params["assessmentTargetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteAssessmentTarget",
    });
  }

  async deleteAssessmentTemplate(
    {abortSignal, ...params}: RequestConfig & s.DeleteAssessmentTemplateRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      assessmentTemplateArn: params["assessmentTemplateArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteAssessmentTemplate",
    });
  }

  async describeAssessmentRuns(
    {abortSignal, ...params}: RequestConfig & s.DescribeAssessmentRunsRequest,
  ): Promise<s.DescribeAssessmentRunsResponse> {
    const body: jsonP.JSONObject = {
      assessmentRunArns: params["assessmentRunArns"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAssessmentRuns",
    });
    return jsonP.readObj({
      required: {
        "assessmentRuns": [toAssessmentRun],
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async describeAssessmentTargets(
    {abortSignal, ...params}: RequestConfig & s.DescribeAssessmentTargetsRequest,
  ): Promise<s.DescribeAssessmentTargetsResponse> {
    const body: jsonP.JSONObject = {
      assessmentTargetArns: params["assessmentTargetArns"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAssessmentTargets",
    });
    return jsonP.readObj({
      required: {
        "assessmentTargets": [toAssessmentTarget],
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async describeAssessmentTemplates(
    {abortSignal, ...params}: RequestConfig & s.DescribeAssessmentTemplatesRequest,
  ): Promise<s.DescribeAssessmentTemplatesResponse> {
    const body: jsonP.JSONObject = {
      assessmentTemplateArns: params["assessmentTemplateArns"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAssessmentTemplates",
    });
    return jsonP.readObj({
      required: {
        "assessmentTemplates": [toAssessmentTemplate],
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async describeCrossAccountAccessRole(
    {abortSignal, ...params}: RequestConfig = {},
  ): Promise<s.DescribeCrossAccountAccessRoleResponse> {
    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeCrossAccountAccessRole",
    });
    return jsonP.readObj({
      required: {
        "roleArn": "s",
        "valid": "b",
        "registeredAt": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async describeExclusions(
    {abortSignal, ...params}: RequestConfig & s.DescribeExclusionsRequest,
  ): Promise<s.DescribeExclusionsResponse> {
    const body: jsonP.JSONObject = {
      exclusionArns: params["exclusionArns"],
      locale: params["locale"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeExclusions",
    });
    return jsonP.readObj({
      required: {
        "exclusions": x => jsonP.readMap(String, toExclusion, x),
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async describeFindings(
    {abortSignal, ...params}: RequestConfig & s.DescribeFindingsRequest,
  ): Promise<s.DescribeFindingsResponse> {
    const body: jsonP.JSONObject = {
      findingArns: params["findingArns"],
      locale: params["locale"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeFindings",
    });
    return jsonP.readObj({
      required: {
        "findings": [toFinding],
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async describeResourceGroups(
    {abortSignal, ...params}: RequestConfig & s.DescribeResourceGroupsRequest,
  ): Promise<s.DescribeResourceGroupsResponse> {
    const body: jsonP.JSONObject = {
      resourceGroupArns: params["resourceGroupArns"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeResourceGroups",
    });
    return jsonP.readObj({
      required: {
        "resourceGroups": [toResourceGroup],
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async describeRulesPackages(
    {abortSignal, ...params}: RequestConfig & s.DescribeRulesPackagesRequest,
  ): Promise<s.DescribeRulesPackagesResponse> {
    const body: jsonP.JSONObject = {
      rulesPackageArns: params["rulesPackageArns"],
      locale: params["locale"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRulesPackages",
    });
    return jsonP.readObj({
      required: {
        "rulesPackages": [toRulesPackage],
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async getAssessmentReport(
    {abortSignal, ...params}: RequestConfig & s.GetAssessmentReportRequest,
  ): Promise<s.GetAssessmentReportResponse> {
    const body: jsonP.JSONObject = {
      assessmentRunArn: params["assessmentRunArn"],
      reportFileFormat: params["reportFileFormat"],
      reportType: params["reportType"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAssessmentReport",
    });
    return jsonP.readObj({
      required: {
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ReportStatus>(x),
      },
      optional: {
        "url": "s",
      },
    }, await resp.json());
  }

  async getExclusionsPreview(
    {abortSignal, ...params}: RequestConfig & s.GetExclusionsPreviewRequest,
  ): Promise<s.GetExclusionsPreviewResponse> {
    const body: jsonP.JSONObject = {
      assessmentTemplateArn: params["assessmentTemplateArn"],
      previewToken: params["previewToken"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      locale: params["locale"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetExclusionsPreview",
    });
    return jsonP.readObj({
      required: {
        "previewStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.PreviewStatus>(x),
      },
      optional: {
        "exclusionPreviews": [toExclusionPreview],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async getTelemetryMetadata(
    {abortSignal, ...params}: RequestConfig & s.GetTelemetryMetadataRequest,
  ): Promise<s.GetTelemetryMetadataResponse> {
    const body: jsonP.JSONObject = {
      assessmentRunArn: params["assessmentRunArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetTelemetryMetadata",
    });
    return jsonP.readObj({
      required: {
        "telemetryMetadata": [toTelemetryMetadata],
      },
      optional: {},
    }, await resp.json());
  }

  async listAssessmentRunAgents(
    {abortSignal, ...params}: RequestConfig & s.ListAssessmentRunAgentsRequest,
  ): Promise<s.ListAssessmentRunAgentsResponse> {
    const body: jsonP.JSONObject = {
      assessmentRunArn: params["assessmentRunArn"],
      filter: fromAgentFilter(params["filter"]),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAssessmentRunAgents",
    });
    return jsonP.readObj({
      required: {
        "assessmentRunAgents": [toAssessmentRunAgent],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listAssessmentRuns(
    {abortSignal, ...params}: RequestConfig & s.ListAssessmentRunsRequest = {},
  ): Promise<s.ListAssessmentRunsResponse> {
    const body: jsonP.JSONObject = {
      assessmentTemplateArns: params["assessmentTemplateArns"],
      filter: fromAssessmentRunFilter(params["filter"]),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAssessmentRuns",
    });
    return jsonP.readObj({
      required: {
        "assessmentRunArns": ["s"],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listAssessmentTargets(
    {abortSignal, ...params}: RequestConfig & s.ListAssessmentTargetsRequest = {},
  ): Promise<s.ListAssessmentTargetsResponse> {
    const body: jsonP.JSONObject = {
      filter: fromAssessmentTargetFilter(params["filter"]),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAssessmentTargets",
    });
    return jsonP.readObj({
      required: {
        "assessmentTargetArns": ["s"],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listAssessmentTemplates(
    {abortSignal, ...params}: RequestConfig & s.ListAssessmentTemplatesRequest = {},
  ): Promise<s.ListAssessmentTemplatesResponse> {
    const body: jsonP.JSONObject = {
      assessmentTargetArns: params["assessmentTargetArns"],
      filter: fromAssessmentTemplateFilter(params["filter"]),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAssessmentTemplates",
    });
    return jsonP.readObj({
      required: {
        "assessmentTemplateArns": ["s"],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listEventSubscriptions(
    {abortSignal, ...params}: RequestConfig & s.ListEventSubscriptionsRequest = {},
  ): Promise<s.ListEventSubscriptionsResponse> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListEventSubscriptions",
    });
    return jsonP.readObj({
      required: {
        "subscriptions": [toSubscription],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listExclusions(
    {abortSignal, ...params}: RequestConfig & s.ListExclusionsRequest,
  ): Promise<s.ListExclusionsResponse> {
    const body: jsonP.JSONObject = {
      assessmentRunArn: params["assessmentRunArn"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListExclusions",
    });
    return jsonP.readObj({
      required: {
        "exclusionArns": ["s"],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listFindings(
    {abortSignal, ...params}: RequestConfig & s.ListFindingsRequest = {},
  ): Promise<s.ListFindingsResponse> {
    const body: jsonP.JSONObject = {
      assessmentRunArns: params["assessmentRunArns"],
      filter: fromFindingFilter(params["filter"]),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListFindings",
    });
    return jsonP.readObj({
      required: {
        "findingArns": ["s"],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listRulesPackages(
    {abortSignal, ...params}: RequestConfig & s.ListRulesPackagesRequest = {},
  ): Promise<s.ListRulesPackagesResponse> {
    const body: jsonP.JSONObject = {
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListRulesPackages",
    });
    return jsonP.readObj({
      required: {
        "rulesPackageArns": ["s"],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {
        "tags": [toTag],
      },
      optional: {},
    }, await resp.json());
  }

  async previewAgents(
    {abortSignal, ...params}: RequestConfig & s.PreviewAgentsRequest,
  ): Promise<s.PreviewAgentsResponse> {
    const body: jsonP.JSONObject = {
      previewAgentsArn: params["previewAgentsArn"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PreviewAgents",
    });
    return jsonP.readObj({
      required: {
        "agentPreviews": [toAgentPreview],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async registerCrossAccountAccessRole(
    {abortSignal, ...params}: RequestConfig & s.RegisterCrossAccountAccessRoleRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      roleArn: params["roleArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterCrossAccountAccessRole",
    });
  }

  async removeAttributesFromFindings(
    {abortSignal, ...params}: RequestConfig & s.RemoveAttributesFromFindingsRequest,
  ): Promise<s.RemoveAttributesFromFindingsResponse> {
    const body: jsonP.JSONObject = {
      findingArns: params["findingArns"],
      attributeKeys: params["attributeKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RemoveAttributesFromFindings",
    });
    return jsonP.readObj({
      required: {
        "failedItems": x => jsonP.readMap(String, toFailedItemDetails, x),
      },
      optional: {},
    }, await resp.json());
  }

  async setTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.SetTagsForResourceRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      tags: params["tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SetTagsForResource",
    });
  }

  async startAssessmentRun(
    {abortSignal, ...params}: RequestConfig & s.StartAssessmentRunRequest,
  ): Promise<s.StartAssessmentRunResponse> {
    const body: jsonP.JSONObject = {
      assessmentTemplateArn: params["assessmentTemplateArn"],
      assessmentRunName: params["assessmentRunName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartAssessmentRun",
    });
    return jsonP.readObj({
      required: {
        "assessmentRunArn": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async stopAssessmentRun(
    {abortSignal, ...params}: RequestConfig & s.StopAssessmentRunRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      assessmentRunArn: params["assessmentRunArn"],
      stopAction: params["stopAction"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopAssessmentRun",
    });
  }

  async subscribeToEvent(
    {abortSignal, ...params}: RequestConfig & s.SubscribeToEventRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      event: params["event"],
      topicArn: params["topicArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SubscribeToEvent",
    });
  }

  async unsubscribeFromEvent(
    {abortSignal, ...params}: RequestConfig & s.UnsubscribeFromEventRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      event: params["event"],
      topicArn: params["topicArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UnsubscribeFromEvent",
    });
  }

  async updateAssessmentTarget(
    {abortSignal, ...params}: RequestConfig & s.UpdateAssessmentTargetRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      assessmentTargetArn: params["assessmentTargetArn"],
      assessmentTargetName: params["assessmentTargetName"],
      resourceGroupArn: params["resourceGroupArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateAssessmentTarget",
    });
  }

}

function fromAttribute(input?: s.Attribute | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    key: input["key"],
    value: input["value"],
  }
}
function toAttribute(root: jsonP.JSONValue): s.Attribute {
  return jsonP.readObj({
    required: {
      "key": "s",
    },
    optional: {
      "value": "s",
    },
  }, root);
}

function fromResourceGroupTag(input?: s.ResourceGroupTag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    key: input["key"],
    value: input["value"],
  }
}
function toResourceGroupTag(root: jsonP.JSONValue): s.ResourceGroupTag {
  return jsonP.readObj({
    required: {
      "key": "s",
    },
    optional: {
      "value": "s",
    },
  }, root);
}

function fromAgentFilter(input?: s.AgentFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    agentHealths: input["agentHealths"],
    agentHealthCodes: input["agentHealthCodes"],
  }
}

function fromAssessmentRunFilter(input?: s.AssessmentRunFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    namePattern: input["namePattern"],
    states: input["states"],
    durationRange: fromDurationRange(input["durationRange"]),
    rulesPackageArns: input["rulesPackageArns"],
    startTimeRange: fromTimestampRange(input["startTimeRange"]),
    completionTimeRange: fromTimestampRange(input["completionTimeRange"]),
    stateChangeTimeRange: fromTimestampRange(input["stateChangeTimeRange"]),
  }
}

function fromDurationRange(input?: s.DurationRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    minSeconds: input["minSeconds"],
    maxSeconds: input["maxSeconds"],
  }
}

function fromTimestampRange(input?: s.TimestampRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    beginDate: jsonP.serializeDate_unixTimestamp(input["beginDate"]),
    endDate: jsonP.serializeDate_unixTimestamp(input["endDate"]),
  }
}

function fromAssessmentTargetFilter(input?: s.AssessmentTargetFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    assessmentTargetNamePattern: input["assessmentTargetNamePattern"],
  }
}

function fromAssessmentTemplateFilter(input?: s.AssessmentTemplateFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    namePattern: input["namePattern"],
    durationRange: fromDurationRange(input["durationRange"]),
    rulesPackageArns: input["rulesPackageArns"],
  }
}

function fromFindingFilter(input?: s.FindingFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    agentIds: input["agentIds"],
    autoScalingGroups: input["autoScalingGroups"],
    ruleNames: input["ruleNames"],
    severities: input["severities"],
    rulesPackageArns: input["rulesPackageArns"],
    attributes: input["attributes"]?.map(x => fromAttribute(x)),
    userAttributes: input["userAttributes"]?.map(x => fromAttribute(x)),
    creationTimeRange: fromTimestampRange(input["creationTimeRange"]),
  }
}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    key: input["key"],
    value: input["value"],
  }
}
function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "key": "s",
    },
    optional: {
      "value": "s",
    },
  }, root);
}

function toFailedItemDetails(root: jsonP.JSONValue): s.FailedItemDetails {
  return jsonP.readObj({
    required: {
      "failureCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.FailedItemErrorCode>(x),
      "retryable": "b",
    },
    optional: {},
  }, root);
}

function toAssessmentRun(root: jsonP.JSONValue): s.AssessmentRun {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "name": "s",
      "assessmentTemplateArn": "s",
      "state": (x: jsonP.JSONValue) => cmnP.readEnum<s.AssessmentRunState>(x),
      "durationInSeconds": "n",
      "rulesPackageArns": ["s"],
      "userAttributesForFindings": [toAttribute],
      "createdAt": "d",
      "stateChangedAt": "d",
      "dataCollected": "b",
      "stateChanges": [toAssessmentRunStateChange],
      "notifications": [toAssessmentRunNotification],
      "findingCounts": x => jsonP.readMap(x => cmnP.readEnumReq<s.Severity>(x), Number, x),
    },
    optional: {
      "startedAt": "d",
      "completedAt": "d",
    },
  }, root);
}

function toAssessmentRunStateChange(root: jsonP.JSONValue): s.AssessmentRunStateChange {
  return jsonP.readObj({
    required: {
      "stateChangedAt": "d",
      "state": (x: jsonP.JSONValue) => cmnP.readEnum<s.AssessmentRunState>(x),
    },
    optional: {},
  }, root);
}

function toAssessmentRunNotification(root: jsonP.JSONValue): s.AssessmentRunNotification {
  return jsonP.readObj({
    required: {
      "date": "d",
      "event": (x: jsonP.JSONValue) => cmnP.readEnum<s.InspectorEvent>(x),
      "error": "b",
    },
    optional: {
      "message": "s",
      "snsTopicArn": "s",
      "snsPublishStatusCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.AssessmentRunNotificationSnsStatusCode>(x),
    },
  }, root);
}

function toAssessmentTarget(root: jsonP.JSONValue): s.AssessmentTarget {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "name": "s",
      "createdAt": "d",
      "updatedAt": "d",
    },
    optional: {
      "resourceGroupArn": "s",
    },
  }, root);
}

function toAssessmentTemplate(root: jsonP.JSONValue): s.AssessmentTemplate {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "name": "s",
      "assessmentTargetArn": "s",
      "durationInSeconds": "n",
      "rulesPackageArns": ["s"],
      "userAttributesForFindings": [toAttribute],
      "assessmentRunCount": "n",
      "createdAt": "d",
    },
    optional: {
      "lastAssessmentRunArn": "s",
    },
  }, root);
}

function toExclusion(root: jsonP.JSONValue): s.Exclusion {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "title": "s",
      "description": "s",
      "recommendation": "s",
      "scopes": [toScope],
    },
    optional: {
      "attributes": [toAttribute],
    },
  }, root);
}

function toScope(root: jsonP.JSONValue): s.Scope {
  return jsonP.readObj({
    required: {},
    optional: {
      "key": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScopeType>(x),
      "value": "s",
    },
  }, root);
}

function toFinding(root: jsonP.JSONValue): s.Finding {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "attributes": [toAttribute],
      "userAttributes": [toAttribute],
      "createdAt": "d",
      "updatedAt": "d",
    },
    optional: {
      "schemaVersion": "n",
      "service": "s",
      "serviceAttributes": toInspectorServiceAttributes,
      "assetType": (x: jsonP.JSONValue) => cmnP.readEnum<s.AssetType>(x),
      "assetAttributes": toAssetAttributes,
      "id": "s",
      "title": "s",
      "description": "s",
      "recommendation": "s",
      "severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.Severity>(x),
      "numericSeverity": "n",
      "confidence": "n",
      "indicatorOfCompromise": "b",
    },
  }, root);
}

function toInspectorServiceAttributes(root: jsonP.JSONValue): s.InspectorServiceAttributes {
  return jsonP.readObj({
    required: {
      "schemaVersion": "n",
    },
    optional: {
      "assessmentRunArn": "s",
      "rulesPackageArn": "s",
    },
  }, root);
}

function toAssetAttributes(root: jsonP.JSONValue): s.AssetAttributes {
  return jsonP.readObj({
    required: {
      "schemaVersion": "n",
    },
    optional: {
      "agentId": "s",
      "autoScalingGroup": "s",
      "amiId": "s",
      "hostname": "s",
      "ipv4Addresses": ["s"],
      "tags": [toTag],
      "networkInterfaces": [toNetworkInterface],
    },
  }, root);
}

function toNetworkInterface(root: jsonP.JSONValue): s.NetworkInterface {
  return jsonP.readObj({
    required: {},
    optional: {
      "networkInterfaceId": "s",
      "subnetId": "s",
      "vpcId": "s",
      "privateDnsName": "s",
      "privateIpAddress": "s",
      "privateIpAddresses": [toPrivateIp],
      "publicDnsName": "s",
      "publicIp": "s",
      "ipv6Addresses": ["s"],
      "securityGroups": [toSecurityGroup],
    },
  }, root);
}

function toPrivateIp(root: jsonP.JSONValue): s.PrivateIp {
  return jsonP.readObj({
    required: {},
    optional: {
      "privateDnsName": "s",
      "privateIpAddress": "s",
    },
  }, root);
}

function toSecurityGroup(root: jsonP.JSONValue): s.SecurityGroup {
  return jsonP.readObj({
    required: {},
    optional: {
      "groupName": "s",
      "groupId": "s",
    },
  }, root);
}

function toResourceGroup(root: jsonP.JSONValue): s.ResourceGroup {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "tags": [toResourceGroupTag],
      "createdAt": "d",
    },
    optional: {},
  }, root);
}

function toRulesPackage(root: jsonP.JSONValue): s.RulesPackage {
  return jsonP.readObj({
    required: {
      "arn": "s",
      "name": "s",
      "version": "s",
      "provider": "s",
    },
    optional: {
      "description": "s",
    },
  }, root);
}

function toExclusionPreview(root: jsonP.JSONValue): s.ExclusionPreview {
  return jsonP.readObj({
    required: {
      "title": "s",
      "description": "s",
      "recommendation": "s",
      "scopes": [toScope],
    },
    optional: {
      "attributes": [toAttribute],
    },
  }, root);
}

function toTelemetryMetadata(root: jsonP.JSONValue): s.TelemetryMetadata {
  return jsonP.readObj({
    required: {
      "messageType": "s",
      "count": "n",
    },
    optional: {
      "dataSize": "n",
    },
  }, root);
}

function toAssessmentRunAgent(root: jsonP.JSONValue): s.AssessmentRunAgent {
  return jsonP.readObj({
    required: {
      "agentId": "s",
      "assessmentRunArn": "s",
      "agentHealth": (x: jsonP.JSONValue) => cmnP.readEnum<s.AgentHealth>(x),
      "agentHealthCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.AgentHealthCode>(x),
      "telemetryMetadata": [toTelemetryMetadata],
    },
    optional: {
      "agentHealthDetails": "s",
      "autoScalingGroup": "s",
    },
  }, root);
}

function toSubscription(root: jsonP.JSONValue): s.Subscription {
  return jsonP.readObj({
    required: {
      "resourceArn": "s",
      "topicArn": "s",
      "eventSubscriptions": [toEventSubscription],
    },
    optional: {},
  }, root);
}

function toEventSubscription(root: jsonP.JSONValue): s.EventSubscription {
  return jsonP.readObj({
    required: {
      "event": (x: jsonP.JSONValue) => cmnP.readEnum<s.InspectorEvent>(x),
      "subscribedAt": "d",
    },
    optional: {},
  }, root);
}

function toAgentPreview(root: jsonP.JSONValue): s.AgentPreview {
  return jsonP.readObj({
    required: {
      "agentId": "s",
    },
    optional: {
      "hostname": "s",
      "autoScalingGroup": "s",
      "agentHealth": (x: jsonP.JSONValue) => cmnP.readEnum<s.AgentHealth>(x),
      "agentVersion": "s",
      "operatingSystem": "s",
      "kernelVersion": "s",
      "ipv4Address": "s",
    },
  }, root);
}
