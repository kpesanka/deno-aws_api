// Autogenerated API client for: AWS Cloud Map

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as uuidv4 from "https://deno.land/std@0.71.0/uuid/v4.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class ServiceDiscovery {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ServiceDiscovery.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-03-14",
    "endpointPrefix": "servicediscovery",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "ServiceDiscovery",
    "serviceFullName": "AWS Cloud Map",
    "serviceId": "ServiceDiscovery",
    "signatureVersion": "v4",
    "targetPrefix": "Route53AutoNaming_v20170314",
    "uid": "servicediscovery-2017-03-14"
  };

  async createHttpNamespace(
    {abortSignal, ...params}: RequestConfig & CreateHttpNamespaceRequest,
  ): Promise<CreateHttpNamespaceResponse> {
    const body: jsonP.JSONObject = params ? {
      Name: params["Name"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHttpNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async createPrivateDnsNamespace(
    {abortSignal, ...params}: RequestConfig & CreatePrivateDnsNamespaceRequest,
  ): Promise<CreatePrivateDnsNamespaceResponse> {
    const body: jsonP.JSONObject = params ? {
      Name: params["Name"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      Vpc: params["Vpc"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePrivateDnsNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async createPublicDnsNamespace(
    {abortSignal, ...params}: RequestConfig & CreatePublicDnsNamespaceRequest,
  ): Promise<CreatePublicDnsNamespaceResponse> {
    const body: jsonP.JSONObject = params ? {
      Name: params["Name"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePublicDnsNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async createService(
    {abortSignal, ...params}: RequestConfig & CreateServiceRequest,
  ): Promise<CreateServiceResponse> {
    const body: jsonP.JSONObject = params ? {
      Name: params["Name"],
      NamespaceId: params["NamespaceId"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      DnsConfig: fromDnsConfig(params["DnsConfig"]),
      HealthCheckConfig: fromHealthCheckConfig(params["HealthCheckConfig"]),
      HealthCheckCustomConfig: fromHealthCheckCustomConfig(params["HealthCheckCustomConfig"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateService",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Service": toService,
      },
    }, await resp.json());
  }

  async deleteNamespace(
    {abortSignal, ...params}: RequestConfig & DeleteNamespaceRequest,
  ): Promise<DeleteNamespaceResponse> {
    const body: jsonP.JSONObject = params ? {
      Id: params["Id"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async deleteService(
    {abortSignal, ...params}: RequestConfig & DeleteServiceRequest,
  ): Promise<DeleteServiceResponse> {
    const body: jsonP.JSONObject = params ? {
      Id: params["Id"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteService",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deregisterInstance(
    {abortSignal, ...params}: RequestConfig & DeregisterInstanceRequest,
  ): Promise<DeregisterInstanceResponse> {
    const body: jsonP.JSONObject = params ? {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeregisterInstance",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async discoverInstances(
    {abortSignal, ...params}: RequestConfig & DiscoverInstancesRequest,
  ): Promise<DiscoverInstancesResponse> {
    const body: jsonP.JSONObject = params ? {
      NamespaceName: params["NamespaceName"],
      ServiceName: params["ServiceName"],
      MaxResults: params["MaxResults"],
      QueryParameters: params["QueryParameters"],
      OptionalParameters: params["OptionalParameters"],
      HealthStatus: params["HealthStatus"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DiscoverInstances",
      hostPrefix: `data-`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Instances": [toHttpInstanceSummary],
      },
    }, await resp.json());
  }

  async getInstance(
    {abortSignal, ...params}: RequestConfig & GetInstanceRequest,
  ): Promise<GetInstanceResponse> {
    const body: jsonP.JSONObject = params ? {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetInstance",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Instance": toInstance,
      },
    }, await resp.json());
  }

  async getInstancesHealthStatus(
    {abortSignal, ...params}: RequestConfig & GetInstancesHealthStatusRequest,
  ): Promise<GetInstancesHealthStatusResponse> {
    const body: jsonP.JSONObject = params ? {
      ServiceId: params["ServiceId"],
      Instances: params["Instances"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetInstancesHealthStatus",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": x => jsonP.readMap(String, y => cmnP.readEnum<HealthStatus>(y), x),
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getNamespace(
    {abortSignal, ...params}: RequestConfig & GetNamespaceRequest,
  ): Promise<GetNamespaceResponse> {
    const body: jsonP.JSONObject = params ? {
      Id: params["Id"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Namespace": toNamespace,
      },
    }, await resp.json());
  }

  async getOperation(
    {abortSignal, ...params}: RequestConfig & GetOperationRequest,
  ): Promise<GetOperationResponse> {
    const body: jsonP.JSONObject = params ? {
      OperationId: params["OperationId"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetOperation",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Operation": toOperation,
      },
    }, await resp.json());
  }

  async getService(
    {abortSignal, ...params}: RequestConfig & GetServiceRequest,
  ): Promise<GetServiceResponse> {
    const body: jsonP.JSONObject = params ? {
      Id: params["Id"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetService",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Service": toService,
      },
    }, await resp.json());
  }

  async listInstances(
    {abortSignal, ...params}: RequestConfig & ListInstancesRequest,
  ): Promise<ListInstancesResponse> {
    const body: jsonP.JSONObject = params ? {
      ServiceId: params["ServiceId"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListInstances",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Instances": [toInstanceSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listNamespaces(
    {abortSignal, ...params}: RequestConfig & ListNamespacesRequest = {},
  ): Promise<ListNamespacesResponse> {
    const body: jsonP.JSONObject = params ? {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromNamespaceFilter(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListNamespaces",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Namespaces": [toNamespaceSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listOperations(
    {abortSignal, ...params}: RequestConfig & ListOperationsRequest = {},
  ): Promise<ListOperationsResponse> {
    const body: jsonP.JSONObject = params ? {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromOperationFilter(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListOperations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Operations": [toOperationSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listServices(
    {abortSignal, ...params}: RequestConfig & ListServicesRequest = {},
  ): Promise<ListServicesResponse> {
    const body: jsonP.JSONObject = params ? {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromServiceFilter(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListServices",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Services": [toServiceSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceRequest,
  ): Promise<ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = params ? {
      ResourceARN: params["ResourceARN"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async registerInstance(
    {abortSignal, ...params}: RequestConfig & RegisterInstanceRequest,
  ): Promise<RegisterInstanceResponse> {
    const body: jsonP.JSONObject = params ? {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Attributes: params["Attributes"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterInstance",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<TagResourceResponse> {
    const body: jsonP.JSONObject = params ? {
      ResourceARN: params["ResourceARN"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<UntagResourceResponse> {
    const body: jsonP.JSONObject = params ? {
      ResourceARN: params["ResourceARN"],
      TagKeys: params["TagKeys"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateInstanceCustomHealthStatus(
    {abortSignal, ...params}: RequestConfig & UpdateInstanceCustomHealthStatusRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = params ? {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
      Status: params["Status"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateInstanceCustomHealthStatus",
    });
  }

  async updateService(
    {abortSignal, ...params}: RequestConfig & UpdateServiceRequest,
  ): Promise<UpdateServiceResponse> {
    const body: jsonP.JSONObject = params ? {
      Id: params["Id"],
      Service: fromServiceChange(params["Service"]),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateService",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateHttpNamespaceRequest {
  Name: string;
  CreatorRequestId?: string | null;
  Description?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreatePrivateDnsNamespaceRequest {
  Name: string;
  CreatorRequestId?: string | null;
  Description?: string | null;
  Vpc: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreatePublicDnsNamespaceRequest {
  Name: string;
  CreatorRequestId?: string | null;
  Description?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateServiceRequest {
  Name: string;
  NamespaceId?: string | null;
  CreatorRequestId?: string | null;
  Description?: string | null;
  DnsConfig?: DnsConfig | null;
  HealthCheckConfig?: HealthCheckConfig | null;
  HealthCheckCustomConfig?: HealthCheckCustomConfig | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteNamespaceRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeleteServiceRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeregisterInstanceRequest {
  ServiceId: string;
  InstanceId: string;
}

// refs: 1 - tags: named, input
export interface DiscoverInstancesRequest {
  NamespaceName: string;
  ServiceName: string;
  MaxResults?: number | null;
  QueryParameters?: { [key: string]: string | null | undefined } | null;
  OptionalParameters?: { [key: string]: string | null | undefined } | null;
  HealthStatus?: HealthStatusFilter | null;
}

// refs: 1 - tags: named, input
export interface GetInstanceRequest {
  ServiceId: string;
  InstanceId: string;
}

// refs: 1 - tags: named, input
export interface GetInstancesHealthStatusRequest {
  ServiceId: string;
  Instances?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetNamespaceRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetOperationRequest {
  OperationId: string;
}

// refs: 1 - tags: named, input
export interface GetServiceRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface ListInstancesRequest {
  ServiceId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListNamespacesRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
  Filters?: NamespaceFilter[] | null;
}

// refs: 1 - tags: named, input
export interface ListOperationsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
  Filters?: OperationFilter[] | null;
}

// refs: 1 - tags: named, input
export interface ListServicesRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
  Filters?: ServiceFilter[] | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}

// refs: 1 - tags: named, input
export interface RegisterInstanceRequest {
  ServiceId: string;
  InstanceId: string;
  CreatorRequestId?: string | null;
  Attributes: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateInstanceCustomHealthStatusRequest {
  ServiceId: string;
  InstanceId: string;
  Status: CustomHealthStatus;
}

// refs: 1 - tags: named, input
export interface UpdateServiceRequest {
  Id: string;
  Service: ServiceChange;
}

// refs: 1 - tags: named, output
export interface CreateHttpNamespaceResponse {
  OperationId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreatePrivateDnsNamespaceResponse {
  OperationId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreatePublicDnsNamespaceResponse {
  OperationId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateServiceResponse {
  Service?: Service | null;
}

// refs: 1 - tags: named, output
export interface DeleteNamespaceResponse {
  OperationId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteServiceResponse {
}

// refs: 1 - tags: named, output
export interface DeregisterInstanceResponse {
  OperationId?: string | null;
}

// refs: 1 - tags: named, output
export interface DiscoverInstancesResponse {
  Instances?: HttpInstanceSummary[] | null;
}

// refs: 1 - tags: named, output
export interface GetInstanceResponse {
  Instance?: Instance | null;
}

// refs: 1 - tags: named, output
export interface GetInstancesHealthStatusResponse {
  Status?: { [key: string]: HealthStatus | null | undefined } | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetNamespaceResponse {
  Namespace?: Namespace | null;
}

// refs: 1 - tags: named, output
export interface GetOperationResponse {
  Operation?: Operation | null;
}

// refs: 1 - tags: named, output
export interface GetServiceResponse {
  Service?: Service | null;
}

// refs: 1 - tags: named, output
export interface ListInstancesResponse {
  Instances?: InstanceSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListNamespacesResponse {
  Namespaces?: NamespaceSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListOperationsResponse {
  Operations?: OperationSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListServicesResponse {
  Services?: ServiceSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface RegisterInstanceResponse {
  OperationId?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateServiceResponse {
  OperationId?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}
function fromTag(input?: Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

// refs: 4 - tags: input, named, interface, output
export interface DnsConfig {
  NamespaceId?: string | null;
  RoutingPolicy?: RoutingPolicy | null;
  DnsRecords: DnsRecord[];
}
function fromDnsConfig(input?: DnsConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    NamespaceId: input["NamespaceId"],
    RoutingPolicy: input["RoutingPolicy"],
    DnsRecords: input["DnsRecords"]?.map(x => fromDnsRecord(x)),
  }
}
function toDnsConfig(root: jsonP.JSONValue): DnsConfig {
  return jsonP.readObj({
    required: {
      "DnsRecords": [toDnsRecord],
    },
    optional: {
      "NamespaceId": "s",
      "RoutingPolicy": (x: jsonP.JSONValue) => cmnP.readEnum<RoutingPolicy>(x),
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type RoutingPolicy =
| "MULTIVALUE"
| "WEIGHTED"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, interface, output
export interface DnsRecord {
  Type: RecordType;
  TTL: number;
}
function fromDnsRecord(input?: DnsRecord | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    TTL: input["TTL"],
  }
}
function toDnsRecord(root: jsonP.JSONValue): DnsRecord {
  return jsonP.readObj({
    required: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<RecordType>(x),
      "TTL": "n",
    },
    optional: {},
  }, root);
}

// refs: 5 - tags: input, named, enum, output
export type RecordType =
| "SRV"
| "A"
| "AAAA"
| "CNAME"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, interface, output
export interface HealthCheckConfig {
  Type: HealthCheckType;
  ResourcePath?: string | null;
  FailureThreshold?: number | null;
}
function fromHealthCheckConfig(input?: HealthCheckConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    ResourcePath: input["ResourcePath"],
    FailureThreshold: input["FailureThreshold"],
  }
}
function toHealthCheckConfig(root: jsonP.JSONValue): HealthCheckConfig {
  return jsonP.readObj({
    required: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<HealthCheckType>(x),
    },
    optional: {
      "ResourcePath": "s",
      "FailureThreshold": "n",
    },
  }, root);
}

// refs: 5 - tags: input, named, enum, output
export type HealthCheckType =
| "HTTP"
| "HTTPS"
| "TCP"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface HealthCheckCustomConfig {
  FailureThreshold?: number | null;
}
function fromHealthCheckCustomConfig(input?: HealthCheckCustomConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FailureThreshold: input["FailureThreshold"],
  }
}
function toHealthCheckCustomConfig(root: jsonP.JSONValue): HealthCheckCustomConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "FailureThreshold": "n",
    },
  }, root);
}

// refs: 1 - tags: input, named, enum
export type HealthStatusFilter =
| "HEALTHY"
| "UNHEALTHY"
| "ALL"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface NamespaceFilter {
  Name: NamespaceFilterName;
  Values: string[];
  Condition?: FilterCondition | null;
}
function fromNamespaceFilter(input?: NamespaceFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
    Condition: input["Condition"],
  }
}

// refs: 1 - tags: input, named, enum
export type NamespaceFilterName =
| "TYPE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum
export type FilterCondition =
| "EQ"
| "IN"
| "BETWEEN"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface OperationFilter {
  Name: OperationFilterName;
  Values: string[];
  Condition?: FilterCondition | null;
}
function fromOperationFilter(input?: OperationFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
    Condition: input["Condition"],
  }
}

// refs: 1 - tags: input, named, enum
export type OperationFilterName =
| "NAMESPACE_ID"
| "SERVICE_ID"
| "STATUS"
| "TYPE"
| "UPDATE_DATE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface ServiceFilter {
  Name: ServiceFilterName;
  Values: string[];
  Condition?: FilterCondition | null;
}
function fromServiceFilter(input?: ServiceFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
    Condition: input["Condition"],
  }
}

// refs: 1 - tags: input, named, enum
export type ServiceFilterName =
| "NAMESPACE_ID"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type CustomHealthStatus =
| "HEALTHY"
| "UNHEALTHY"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface ServiceChange {
  Description?: string | null;
  DnsConfig?: DnsConfigChange | null;
  HealthCheckConfig?: HealthCheckConfig | null;
}
function fromServiceChange(input?: ServiceChange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Description: input["Description"],
    DnsConfig: fromDnsConfigChange(input["DnsConfig"]),
    HealthCheckConfig: fromHealthCheckConfig(input["HealthCheckConfig"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface DnsConfigChange {
  DnsRecords: DnsRecord[];
}
function fromDnsConfigChange(input?: DnsConfigChange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DnsRecords: input["DnsRecords"]?.map(x => fromDnsRecord(x)),
  }
}

// refs: 2 - tags: output, named, interface
export interface Service {
  Id?: string | null;
  Arn?: string | null;
  Name?: string | null;
  NamespaceId?: string | null;
  Description?: string | null;
  InstanceCount?: number | null;
  DnsConfig?: DnsConfig | null;
  HealthCheckConfig?: HealthCheckConfig | null;
  HealthCheckCustomConfig?: HealthCheckCustomConfig | null;
  CreateDate?: Date | number | null;
  CreatorRequestId?: string | null;
}
function toService(root: jsonP.JSONValue): Service {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "NamespaceId": "s",
      "Description": "s",
      "InstanceCount": "n",
      "DnsConfig": toDnsConfig,
      "HealthCheckConfig": toHealthCheckConfig,
      "HealthCheckCustomConfig": toHealthCheckCustomConfig,
      "CreateDate": "d",
      "CreatorRequestId": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface HttpInstanceSummary {
  InstanceId?: string | null;
  NamespaceName?: string | null;
  ServiceName?: string | null;
  HealthStatus?: HealthStatus | null;
  Attributes?: { [key: string]: string | null | undefined } | null;
}
function toHttpInstanceSummary(root: jsonP.JSONValue): HttpInstanceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "InstanceId": "s",
      "NamespaceName": "s",
      "ServiceName": "s",
      "HealthStatus": (x: jsonP.JSONValue) => cmnP.readEnum<HealthStatus>(x),
      "Attributes": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type HealthStatus =
| "HEALTHY"
| "UNHEALTHY"
| "UNKNOWN"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Instance {
  Id: string;
  CreatorRequestId?: string | null;
  Attributes?: { [key: string]: string | null | undefined } | null;
}
function toInstance(root: jsonP.JSONValue): Instance {
  return jsonP.readObj({
    required: {
      "Id": "s",
    },
    optional: {
      "CreatorRequestId": "s",
      "Attributes": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Namespace {
  Id?: string | null;
  Arn?: string | null;
  Name?: string | null;
  Type?: NamespaceType | null;
  Description?: string | null;
  ServiceCount?: number | null;
  Properties?: NamespaceProperties | null;
  CreateDate?: Date | number | null;
  CreatorRequestId?: string | null;
}
function toNamespace(root: jsonP.JSONValue): Namespace {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<NamespaceType>(x),
      "Description": "s",
      "ServiceCount": "n",
      "Properties": toNamespaceProperties,
      "CreateDate": "d",
      "CreatorRequestId": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type NamespaceType =
| "DNS_PUBLIC"
| "DNS_PRIVATE"
| "HTTP"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface NamespaceProperties {
  DnsProperties?: DnsProperties | null;
  HttpProperties?: HttpProperties | null;
}
function toNamespaceProperties(root: jsonP.JSONValue): NamespaceProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "DnsProperties": toDnsProperties,
      "HttpProperties": toHttpProperties,
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface DnsProperties {
  HostedZoneId?: string | null;
}
function toDnsProperties(root: jsonP.JSONValue): DnsProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "HostedZoneId": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface HttpProperties {
  HttpName?: string | null;
}
function toHttpProperties(root: jsonP.JSONValue): HttpProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "HttpName": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Operation {
  Id?: string | null;
  Type?: OperationType | null;
  Status?: OperationStatus | null;
  ErrorMessage?: string | null;
  ErrorCode?: string | null;
  CreateDate?: Date | number | null;
  UpdateDate?: Date | number | null;
  Targets?: { [key in OperationTargetType]: string | null | undefined } | null;
}
function toOperation(root: jsonP.JSONValue): Operation {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<OperationType>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<OperationStatus>(x),
      "ErrorMessage": "s",
      "ErrorCode": "s",
      "CreateDate": "d",
      "UpdateDate": "d",
      "Targets": x => jsonP.readMap(x => cmnP.readEnumReq<OperationTargetType>(x), String, x),
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type OperationType =
| "CREATE_NAMESPACE"
| "DELETE_NAMESPACE"
| "UPDATE_SERVICE"
| "REGISTER_INSTANCE"
| "DEREGISTER_INSTANCE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type OperationStatus =
| "SUBMITTED"
| "PENDING"
| "SUCCESS"
| "FAIL"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type OperationTargetType =
| "NAMESPACE"
| "SERVICE"
| "INSTANCE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface InstanceSummary {
  Id?: string | null;
  Attributes?: { [key: string]: string | null | undefined } | null;
}
function toInstanceSummary(root: jsonP.JSONValue): InstanceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Attributes": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface NamespaceSummary {
  Id?: string | null;
  Arn?: string | null;
  Name?: string | null;
  Type?: NamespaceType | null;
  Description?: string | null;
  ServiceCount?: number | null;
  Properties?: NamespaceProperties | null;
  CreateDate?: Date | number | null;
}
function toNamespaceSummary(root: jsonP.JSONValue): NamespaceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<NamespaceType>(x),
      "Description": "s",
      "ServiceCount": "n",
      "Properties": toNamespaceProperties,
      "CreateDate": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface OperationSummary {
  Id?: string | null;
  Status?: OperationStatus | null;
}
function toOperationSummary(root: jsonP.JSONValue): OperationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<OperationStatus>(x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ServiceSummary {
  Id?: string | null;
  Arn?: string | null;
  Name?: string | null;
  Description?: string | null;
  InstanceCount?: number | null;
  DnsConfig?: DnsConfig | null;
  HealthCheckConfig?: HealthCheckConfig | null;
  HealthCheckCustomConfig?: HealthCheckCustomConfig | null;
  CreateDate?: Date | number | null;
}
function toServiceSummary(root: jsonP.JSONValue): ServiceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "Description": "s",
      "InstanceCount": "n",
      "DnsConfig": toDnsConfig,
      "HealthCheckConfig": toHealthCheckConfig,
      "HealthCheckCustomConfig": toHealthCheckCustomConfig,
      "CreateDate": "d",
    },
  }, root);
}
