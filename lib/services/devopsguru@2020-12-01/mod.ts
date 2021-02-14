// Autogenerated API client for: Amazon DevOps Guru

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class DevOpsGuru {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(DevOpsGuru.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2020-12-01",
    "endpointPrefix": "devops-guru",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "Amazon DevOps Guru",
    "serviceId": "DevOps Guru",
    "signatureVersion": "v4",
    "signingName": "devops-guru",
    "uid": "devops-guru-2020-12-01"
  };

  async addNotificationChannel(
    {abortSignal, ...params}: RequestConfig & s.AddNotificationChannelRequest,
  ): Promise<s.AddNotificationChannelResponse> {
    const body: jsonP.JSONObject = {
      Config: fromNotificationChannelConfig(params["Config"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AddNotificationChannel",
      method: "PUT",
      requestUri: "/channels",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "Id": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async describeAccountHealth(
    {abortSignal, ...params}: RequestConfig & s.DescribeAccountHealthRequest = {},
  ): Promise<s.DescribeAccountHealthResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeAccountHealth",
      method: "GET",
      requestUri: "/accounts/health",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "OpenReactiveInsights": "n",
        "OpenProactiveInsights": "n",
        "MetricsAnalyzed": "n",
        "ResourceHours": "n",
      },
      optional: {},
    }, await resp.json());
  }

  async describeAccountOverview(
    {abortSignal, ...params}: RequestConfig & s.DescribeAccountOverviewRequest,
  ): Promise<s.DescribeAccountOverviewResponse> {
    const body: jsonP.JSONObject = {
      FromTime: jsonP.serializeDate_unixTimestamp(params["FromTime"]),
      ToTime: jsonP.serializeDate_unixTimestamp(params["ToTime"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAccountOverview",
      requestUri: "/accounts/overview",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "ReactiveInsights": "n",
        "ProactiveInsights": "n",
        "MeanTimeToRecoverInMilliseconds": "n",
      },
      optional: {},
    }, await resp.json());
  }

  async describeAnomaly(
    {abortSignal, ...params}: RequestConfig & s.DescribeAnomalyRequest,
  ): Promise<s.DescribeAnomalyResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeAnomaly",
      method: "GET",
      requestUri: cmnP.encodePath`/anomalies/${params["Id"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProactiveAnomaly": toProactiveAnomaly,
        "ReactiveAnomaly": toReactiveAnomaly,
      },
    }, await resp.json());
  }

  async describeInsight(
    {abortSignal, ...params}: RequestConfig & s.DescribeInsightRequest,
  ): Promise<s.DescribeInsightResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeInsight",
      method: "GET",
      requestUri: cmnP.encodePath`/insights/${params["Id"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProactiveInsight": toProactiveInsight,
        "ReactiveInsight": toReactiveInsight,
      },
    }, await resp.json());
  }

  async describeResourceCollectionHealth(
    {abortSignal, ...params}: RequestConfig & s.DescribeResourceCollectionHealthRequest,
  ): Promise<s.DescribeResourceCollectionHealthResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DescribeResourceCollectionHealth",
      method: "GET",
      requestUri: cmnP.encodePath`/accounts/health/resource-collection/${params["ResourceCollectionType"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "CloudFormation": [toCloudFormationHealth],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeServiceIntegration(
    {abortSignal, ...params}: RequestConfig & s.DescribeServiceIntegrationRequest = {},
  ): Promise<s.DescribeServiceIntegrationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeServiceIntegration",
      method: "GET",
      requestUri: "/service-integrations",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ServiceIntegration": toServiceIntegrationConfig,
      },
    }, await resp.json());
  }

  async getResourceCollection(
    {abortSignal, ...params}: RequestConfig & s.GetResourceCollectionRequest,
  ): Promise<s.GetResourceCollectionResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetResourceCollection",
      method: "GET",
      requestUri: cmnP.encodePath`/resource-collections/${params["ResourceCollectionType"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResourceCollection": toResourceCollectionFilter,
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listAnomaliesForInsight(
    {abortSignal, ...params}: RequestConfig & s.ListAnomaliesForInsightRequest,
  ): Promise<s.ListAnomaliesForInsightResponse> {
    const body: jsonP.JSONObject = {
      StartTimeRange: fromStartTimeRange(params["StartTimeRange"]),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAnomaliesForInsight",
      requestUri: cmnP.encodePath`/anomalies/insight/${params["InsightId"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProactiveAnomalies": [toProactiveAnomalySummary],
        "ReactiveAnomalies": [toReactiveAnomalySummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listEvents(
    {abortSignal, ...params}: RequestConfig & s.ListEventsRequest,
  ): Promise<s.ListEventsResponse> {
    const body: jsonP.JSONObject = {
      Filters: fromListEventsFilters(params["Filters"]),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListEvents",
      requestUri: "/events",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "Events": [toEvent],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listInsights(
    {abortSignal, ...params}: RequestConfig & s.ListInsightsRequest,
  ): Promise<s.ListInsightsResponse> {
    const body: jsonP.JSONObject = {
      StatusFilter: fromListInsightsStatusFilter(params["StatusFilter"]),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListInsights",
      requestUri: "/insights",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProactiveInsights": [toProactiveInsightSummary],
        "ReactiveInsights": [toReactiveInsightSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listNotificationChannels(
    {abortSignal, ...params}: RequestConfig & s.ListNotificationChannelsRequest = {},
  ): Promise<s.ListNotificationChannelsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListNotificationChannels",
      requestUri: "/channels",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Channels": [toNotificationChannel],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRecommendations(
    {abortSignal, ...params}: RequestConfig & s.ListRecommendationsRequest,
  ): Promise<s.ListRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      InsightId: params["InsightId"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListRecommendations",
      requestUri: "/recommendations",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Recommendations": [toRecommendation],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async putFeedback(
    {abortSignal, ...params}: RequestConfig & s.PutFeedbackRequest = {},
  ): Promise<s.PutFeedbackResponse> {
    const body: jsonP.JSONObject = {
      InsightFeedback: fromInsightFeedback(params["InsightFeedback"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutFeedback",
      method: "PUT",
      requestUri: "/feedback",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async removeNotificationChannel(
    {abortSignal, ...params}: RequestConfig & s.RemoveNotificationChannelRequest,
  ): Promise<s.RemoveNotificationChannelResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "RemoveNotificationChannel",
      method: "DELETE",
      requestUri: cmnP.encodePath`/channels/${params["Id"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async searchInsights(
    {abortSignal, ...params}: RequestConfig & s.SearchInsightsRequest,
  ): Promise<s.SearchInsightsResponse> {
    const body: jsonP.JSONObject = {
      StartTimeRange: fromStartTimeRange(params["StartTimeRange"]),
      Filters: fromSearchInsightsFilters(params["Filters"]),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Type: params["Type"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SearchInsights",
      requestUri: "/insights/search",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProactiveInsights": [toProactiveInsightSummary],
        "ReactiveInsights": [toReactiveInsightSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async updateResourceCollection(
    {abortSignal, ...params}: RequestConfig & s.UpdateResourceCollectionRequest,
  ): Promise<s.UpdateResourceCollectionResponse> {
    const body: jsonP.JSONObject = {
      Action: params["Action"],
      ResourceCollection: fromUpdateResourceCollectionFilter(params["ResourceCollection"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateResourceCollection",
      method: "PUT",
      requestUri: "/resource-collections",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateServiceIntegration(
    {abortSignal, ...params}: RequestConfig & s.UpdateServiceIntegrationRequest,
  ): Promise<s.UpdateServiceIntegrationResponse> {
    const body: jsonP.JSONObject = {
      ServiceIntegration: fromUpdateServiceIntegrationConfig(params["ServiceIntegration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateServiceIntegration",
      method: "PUT",
      requestUri: "/service-integrations",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromNotificationChannelConfig(input?: s.NotificationChannelConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Sns: fromSnsChannelConfig(input["Sns"]),
  }
}
function toNotificationChannelConfig(root: jsonP.JSONValue): s.NotificationChannelConfig {
  return jsonP.readObj({
    required: {
      "Sns": toSnsChannelConfig,
    },
    optional: {},
  }, root);
}

function fromSnsChannelConfig(input?: s.SnsChannelConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    TopicArn: input["TopicArn"],
  }
}
function toSnsChannelConfig(root: jsonP.JSONValue): s.SnsChannelConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "TopicArn": "s",
    },
  }, root);
}

function fromStartTimeRange(input?: s.StartTimeRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FromTime: jsonP.serializeDate_unixTimestamp(input["FromTime"]),
    ToTime: jsonP.serializeDate_unixTimestamp(input["ToTime"]),
  }
}

function fromListEventsFilters(input?: s.ListEventsFilters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    InsightId: input["InsightId"],
    EventTimeRange: fromEventTimeRange(input["EventTimeRange"]),
    EventClass: input["EventClass"],
    EventSource: input["EventSource"],
    DataSource: input["DataSource"],
    ResourceCollection: fromResourceCollection(input["ResourceCollection"]),
  }
}

function fromEventTimeRange(input?: s.EventTimeRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FromTime: jsonP.serializeDate_unixTimestamp(input["FromTime"]),
    ToTime: jsonP.serializeDate_unixTimestamp(input["ToTime"]),
  }
}

function fromResourceCollection(input?: s.ResourceCollection | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CloudFormation: fromCloudFormationCollection(input["CloudFormation"]),
  }
}
function toResourceCollection(root: jsonP.JSONValue): s.ResourceCollection {
  return jsonP.readObj({
    required: {},
    optional: {
      "CloudFormation": toCloudFormationCollection,
    },
  }, root);
}

function fromCloudFormationCollection(input?: s.CloudFormationCollection | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    StackNames: input["StackNames"],
  }
}
function toCloudFormationCollection(root: jsonP.JSONValue): s.CloudFormationCollection {
  return jsonP.readObj({
    required: {},
    optional: {
      "StackNames": ["s"],
    },
  }, root);
}

function fromListInsightsStatusFilter(input?: s.ListInsightsStatusFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Ongoing: fromListInsightsOngoingStatusFilter(input["Ongoing"]),
    Closed: fromListInsightsClosedStatusFilter(input["Closed"]),
    Any: fromListInsightsAnyStatusFilter(input["Any"]),
  }
}

function fromListInsightsOngoingStatusFilter(input?: s.ListInsightsOngoingStatusFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
  }
}

function fromListInsightsClosedStatusFilter(input?: s.ListInsightsClosedStatusFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    EndTimeRange: fromEndTimeRange(input["EndTimeRange"]),
  }
}

function fromEndTimeRange(input?: s.EndTimeRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FromTime: jsonP.serializeDate_unixTimestamp(input["FromTime"]),
    ToTime: jsonP.serializeDate_unixTimestamp(input["ToTime"]),
  }
}

function fromListInsightsAnyStatusFilter(input?: s.ListInsightsAnyStatusFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    StartTimeRange: fromStartTimeRange(input["StartTimeRange"]),
  }
}

function fromInsightFeedback(input?: s.InsightFeedback | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Id: input["Id"],
    Feedback: input["Feedback"],
  }
}

function fromSearchInsightsFilters(input?: s.SearchInsightsFilters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Severities: input["Severities"],
    Statuses: input["Statuses"],
    ResourceCollection: fromResourceCollection(input["ResourceCollection"]),
  }
}

function fromUpdateResourceCollectionFilter(input?: s.UpdateResourceCollectionFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CloudFormation: fromUpdateCloudFormationCollectionFilter(input["CloudFormation"]),
  }
}

function fromUpdateCloudFormationCollectionFilter(input?: s.UpdateCloudFormationCollectionFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    StackNames: input["StackNames"],
  }
}

function fromUpdateServiceIntegrationConfig(input?: s.UpdateServiceIntegrationConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    OpsCenter: fromOpsCenterIntegrationConfig(input["OpsCenter"]),
  }
}

function fromOpsCenterIntegrationConfig(input?: s.OpsCenterIntegrationConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    OptInStatus: input["OptInStatus"],
  }
}

function toProactiveAnomaly(root: jsonP.JSONValue): s.ProactiveAnomaly {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalySeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalyStatus>(x),
      "UpdateTime": "d",
      "AnomalyTimeRange": toAnomalyTimeRange,
      "PredictionTimeRange": toPredictionTimeRange,
      "SourceDetails": toAnomalySourceDetails,
      "AssociatedInsightId": "s",
      "ResourceCollection": toResourceCollection,
      "Limit": "n",
    },
  }, root);
}

function toAnomalyTimeRange(root: jsonP.JSONValue): s.AnomalyTimeRange {
  return jsonP.readObj({
    required: {
      "StartTime": "d",
    },
    optional: {
      "EndTime": "d",
    },
  }, root);
}

function toPredictionTimeRange(root: jsonP.JSONValue): s.PredictionTimeRange {
  return jsonP.readObj({
    required: {
      "StartTime": "d",
    },
    optional: {
      "EndTime": "d",
    },
  }, root);
}

function toAnomalySourceDetails(root: jsonP.JSONValue): s.AnomalySourceDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "CloudWatchMetrics": [toCloudWatchMetricsDetail],
    },
  }, root);
}

function toCloudWatchMetricsDetail(root: jsonP.JSONValue): s.CloudWatchMetricsDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "MetricName": "s",
      "Namespace": "s",
      "Dimensions": [toCloudWatchMetricsDimension],
      "Stat": (x: jsonP.JSONValue) => cmnP.readEnum<s.CloudWatchMetricsStat>(x),
      "Unit": "s",
      "Period": "n",
    },
  }, root);
}

function toCloudWatchMetricsDimension(root: jsonP.JSONValue): s.CloudWatchMetricsDimension {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Value": "s",
    },
  }, root);
}

function toReactiveAnomaly(root: jsonP.JSONValue): s.ReactiveAnomaly {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalySeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalyStatus>(x),
      "AnomalyTimeRange": toAnomalyTimeRange,
      "SourceDetails": toAnomalySourceDetails,
      "AssociatedInsightId": "s",
      "ResourceCollection": toResourceCollection,
    },
  }, root);
}

function toProactiveInsight(root: jsonP.JSONValue): s.ProactiveInsight {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Name": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightSeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightStatus>(x),
      "InsightTimeRange": toInsightTimeRange,
      "PredictionTimeRange": toPredictionTimeRange,
      "ResourceCollection": toResourceCollection,
      "SsmOpsItemId": "s",
    },
  }, root);
}

function toInsightTimeRange(root: jsonP.JSONValue): s.InsightTimeRange {
  return jsonP.readObj({
    required: {
      "StartTime": "d",
    },
    optional: {
      "EndTime": "d",
    },
  }, root);
}

function toReactiveInsight(root: jsonP.JSONValue): s.ReactiveInsight {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Name": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightSeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightStatus>(x),
      "InsightTimeRange": toInsightTimeRange,
      "ResourceCollection": toResourceCollection,
      "SsmOpsItemId": "s",
    },
  }, root);
}

function toCloudFormationHealth(root: jsonP.JSONValue): s.CloudFormationHealth {
  return jsonP.readObj({
    required: {},
    optional: {
      "StackName": "s",
      "Insight": toInsightHealth,
    },
  }, root);
}

function toInsightHealth(root: jsonP.JSONValue): s.InsightHealth {
  return jsonP.readObj({
    required: {},
    optional: {
      "OpenProactiveInsights": "n",
      "OpenReactiveInsights": "n",
      "MeanTimeToRecoverInMilliseconds": "n",
    },
  }, root);
}

function toServiceIntegrationConfig(root: jsonP.JSONValue): s.ServiceIntegrationConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "OpsCenter": toOpsCenterIntegration,
    },
  }, root);
}

function toOpsCenterIntegration(root: jsonP.JSONValue): s.OpsCenterIntegration {
  return jsonP.readObj({
    required: {},
    optional: {
      "OptInStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.OptInStatus>(x),
    },
  }, root);
}

function toResourceCollectionFilter(root: jsonP.JSONValue): s.ResourceCollectionFilter {
  return jsonP.readObj({
    required: {},
    optional: {
      "CloudFormation": toCloudFormationCollectionFilter,
    },
  }, root);
}

function toCloudFormationCollectionFilter(root: jsonP.JSONValue): s.CloudFormationCollectionFilter {
  return jsonP.readObj({
    required: {},
    optional: {
      "StackNames": ["s"],
    },
  }, root);
}

function toProactiveAnomalySummary(root: jsonP.JSONValue): s.ProactiveAnomalySummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalySeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalyStatus>(x),
      "UpdateTime": "d",
      "AnomalyTimeRange": toAnomalyTimeRange,
      "PredictionTimeRange": toPredictionTimeRange,
      "SourceDetails": toAnomalySourceDetails,
      "AssociatedInsightId": "s",
      "ResourceCollection": toResourceCollection,
      "Limit": "n",
    },
  }, root);
}

function toReactiveAnomalySummary(root: jsonP.JSONValue): s.ReactiveAnomalySummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalySeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.AnomalyStatus>(x),
      "AnomalyTimeRange": toAnomalyTimeRange,
      "SourceDetails": toAnomalySourceDetails,
      "AssociatedInsightId": "s",
      "ResourceCollection": toResourceCollection,
    },
  }, root);
}

function toEvent(root: jsonP.JSONValue): s.Event {
  return jsonP.readObj({
    required: {},
    optional: {
      "ResourceCollection": toResourceCollection,
      "Id": "s",
      "Time": "d",
      "EventSource": "s",
      "Name": "s",
      "DataSource": (x: jsonP.JSONValue) => cmnP.readEnum<s.EventDataSource>(x),
      "EventClass": (x: jsonP.JSONValue) => cmnP.readEnum<s.EventClass>(x),
      "Resources": [toEventResource],
    },
  }, root);
}

function toEventResource(root: jsonP.JSONValue): s.EventResource {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": "s",
      "Name": "s",
      "Arn": "s",
    },
  }, root);
}

function toProactiveInsightSummary(root: jsonP.JSONValue): s.ProactiveInsightSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Name": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightSeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightStatus>(x),
      "InsightTimeRange": toInsightTimeRange,
      "PredictionTimeRange": toPredictionTimeRange,
      "ResourceCollection": toResourceCollection,
    },
  }, root);
}

function toReactiveInsightSummary(root: jsonP.JSONValue): s.ReactiveInsightSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Name": "s",
      "Severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightSeverity>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.InsightStatus>(x),
      "InsightTimeRange": toInsightTimeRange,
      "ResourceCollection": toResourceCollection,
    },
  }, root);
}

function toNotificationChannel(root: jsonP.JSONValue): s.NotificationChannel {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Config": toNotificationChannelConfig,
    },
  }, root);
}

function toRecommendation(root: jsonP.JSONValue): s.Recommendation {
  return jsonP.readObj({
    required: {},
    optional: {
      "Description": "s",
      "Link": "s",
      "Name": "s",
      "Reason": "s",
      "RelatedEvents": [toRecommendationRelatedEvent],
      "RelatedAnomalies": [toRecommendationRelatedAnomaly],
    },
  }, root);
}

function toRecommendationRelatedEvent(root: jsonP.JSONValue): s.RecommendationRelatedEvent {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Resources": [toRecommendationRelatedEventResource],
    },
  }, root);
}

function toRecommendationRelatedEventResource(root: jsonP.JSONValue): s.RecommendationRelatedEventResource {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Type": "s",
    },
  }, root);
}

function toRecommendationRelatedAnomaly(root: jsonP.JSONValue): s.RecommendationRelatedAnomaly {
  return jsonP.readObj({
    required: {},
    optional: {
      "Resources": [toRecommendationRelatedAnomalyResource],
      "SourceDetails": [toRecommendationRelatedAnomalySourceDetail],
    },
  }, root);
}

function toRecommendationRelatedAnomalyResource(root: jsonP.JSONValue): s.RecommendationRelatedAnomalyResource {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Type": "s",
    },
  }, root);
}

function toRecommendationRelatedAnomalySourceDetail(root: jsonP.JSONValue): s.RecommendationRelatedAnomalySourceDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "CloudWatchMetrics": [toRecommendationRelatedCloudWatchMetricsSourceDetail],
    },
  }, root);
}

function toRecommendationRelatedCloudWatchMetricsSourceDetail(root: jsonP.JSONValue): s.RecommendationRelatedCloudWatchMetricsSourceDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "MetricName": "s",
      "Namespace": "s",
    },
  }, root);
}
