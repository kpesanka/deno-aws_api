// Autogenerated API client for: Amazon DynamoDB Accelerator (DAX)

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class DAX {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(DAX.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-04-19",
    "endpointPrefix": "dax",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "Amazon DAX",
    "serviceFullName": "Amazon DynamoDB Accelerator (DAX)",
    "serviceId": "DAX",
    "signatureVersion": "v4",
    "targetPrefix": "AmazonDAXV3",
    "uid": "dax-2017-04-19"
  };

  async createCluster(
    {abortSignal, ...params}: RequestConfig & CreateClusterRequest,
  ): Promise<CreateClusterResponse> {
    const body: jsonP.JSONObject = {
      ClusterName: params["ClusterName"],
      NodeType: params["NodeType"],
      Description: params["Description"],
      ReplicationFactor: params["ReplicationFactor"],
      AvailabilityZones: params["AvailabilityZones"],
      SubnetGroupName: params["SubnetGroupName"],
      SecurityGroupIds: params["SecurityGroupIds"],
      PreferredMaintenanceWindow: params["PreferredMaintenanceWindow"],
      NotificationTopicArn: params["NotificationTopicArn"],
      IamRoleArn: params["IamRoleArn"],
      ParameterGroupName: params["ParameterGroupName"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      SSESpecification: fromSSESpecification(params["SSESpecification"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateCluster",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Cluster": toCluster,
      },
    }, await resp.json());
  }

  async createParameterGroup(
    {abortSignal, ...params}: RequestConfig & CreateParameterGroupRequest,
  ): Promise<CreateParameterGroupResponse> {
    const body: jsonP.JSONObject = {
      ParameterGroupName: params["ParameterGroupName"],
      Description: params["Description"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateParameterGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ParameterGroup": toParameterGroup,
      },
    }, await resp.json());
  }

  async createSubnetGroup(
    {abortSignal, ...params}: RequestConfig & CreateSubnetGroupRequest,
  ): Promise<CreateSubnetGroupResponse> {
    const body: jsonP.JSONObject = {
      SubnetGroupName: params["SubnetGroupName"],
      Description: params["Description"],
      SubnetIds: params["SubnetIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateSubnetGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "SubnetGroup": toSubnetGroup,
      },
    }, await resp.json());
  }

  async decreaseReplicationFactor(
    {abortSignal, ...params}: RequestConfig & DecreaseReplicationFactorRequest,
  ): Promise<DecreaseReplicationFactorResponse> {
    const body: jsonP.JSONObject = {
      ClusterName: params["ClusterName"],
      NewReplicationFactor: params["NewReplicationFactor"],
      AvailabilityZones: params["AvailabilityZones"],
      NodeIdsToRemove: params["NodeIdsToRemove"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DecreaseReplicationFactor",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Cluster": toCluster,
      },
    }, await resp.json());
  }

  async deleteCluster(
    {abortSignal, ...params}: RequestConfig & DeleteClusterRequest,
  ): Promise<DeleteClusterResponse> {
    const body: jsonP.JSONObject = {
      ClusterName: params["ClusterName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteCluster",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Cluster": toCluster,
      },
    }, await resp.json());
  }

  async deleteParameterGroup(
    {abortSignal, ...params}: RequestConfig & DeleteParameterGroupRequest,
  ): Promise<DeleteParameterGroupResponse> {
    const body: jsonP.JSONObject = {
      ParameterGroupName: params["ParameterGroupName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteParameterGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DeletionMessage": "s",
      },
    }, await resp.json());
  }

  async deleteSubnetGroup(
    {abortSignal, ...params}: RequestConfig & DeleteSubnetGroupRequest,
  ): Promise<DeleteSubnetGroupResponse> {
    const body: jsonP.JSONObject = {
      SubnetGroupName: params["SubnetGroupName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteSubnetGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DeletionMessage": "s",
      },
    }, await resp.json());
  }

  async describeClusters(
    {abortSignal, ...params}: RequestConfig & DescribeClustersRequest = {},
  ): Promise<DescribeClustersResponse> {
    const body: jsonP.JSONObject = {
      ClusterNames: params["ClusterNames"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeClusters",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Clusters": [toCluster],
      },
    }, await resp.json());
  }

  async describeDefaultParameters(
    {abortSignal, ...params}: RequestConfig & DescribeDefaultParametersRequest = {},
  ): Promise<DescribeDefaultParametersResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDefaultParameters",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Parameters": [toParameter],
      },
    }, await resp.json());
  }

  async describeEvents(
    {abortSignal, ...params}: RequestConfig & DescribeEventsRequest = {},
  ): Promise<DescribeEventsResponse> {
    const body: jsonP.JSONObject = {
      SourceName: params["SourceName"],
      SourceType: params["SourceType"],
      StartTime: jsonP.serializeDate_unixTimestamp(params["StartTime"]),
      EndTime: jsonP.serializeDate_unixTimestamp(params["EndTime"]),
      Duration: params["Duration"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEvents",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Events": [toEvent],
      },
    }, await resp.json());
  }

  async describeParameterGroups(
    {abortSignal, ...params}: RequestConfig & DescribeParameterGroupsRequest = {},
  ): Promise<DescribeParameterGroupsResponse> {
    const body: jsonP.JSONObject = {
      ParameterGroupNames: params["ParameterGroupNames"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeParameterGroups",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "ParameterGroups": [toParameterGroup],
      },
    }, await resp.json());
  }

  async describeParameters(
    {abortSignal, ...params}: RequestConfig & DescribeParametersRequest,
  ): Promise<DescribeParametersResponse> {
    const body: jsonP.JSONObject = {
      ParameterGroupName: params["ParameterGroupName"],
      Source: params["Source"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeParameters",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Parameters": [toParameter],
      },
    }, await resp.json());
  }

  async describeSubnetGroups(
    {abortSignal, ...params}: RequestConfig & DescribeSubnetGroupsRequest = {},
  ): Promise<DescribeSubnetGroupsResponse> {
    const body: jsonP.JSONObject = {
      SubnetGroupNames: params["SubnetGroupNames"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeSubnetGroups",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "SubnetGroups": [toSubnetGroup],
      },
    }, await resp.json());
  }

  async increaseReplicationFactor(
    {abortSignal, ...params}: RequestConfig & IncreaseReplicationFactorRequest,
  ): Promise<IncreaseReplicationFactorResponse> {
    const body: jsonP.JSONObject = {
      ClusterName: params["ClusterName"],
      NewReplicationFactor: params["NewReplicationFactor"],
      AvailabilityZones: params["AvailabilityZones"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "IncreaseReplicationFactor",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Cluster": toCluster,
      },
    }, await resp.json());
  }

  async listTags(
    {abortSignal, ...params}: RequestConfig & ListTagsRequest,
  ): Promise<ListTagsResponse> {
    const body: jsonP.JSONObject = {
      ResourceName: params["ResourceName"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTags",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async rebootNode(
    {abortSignal, ...params}: RequestConfig & RebootNodeRequest,
  ): Promise<RebootNodeResponse> {
    const body: jsonP.JSONObject = {
      ClusterName: params["ClusterName"],
      NodeId: params["NodeId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RebootNode",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Cluster": toCluster,
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<TagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceName: params["ResourceName"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<UntagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceName: params["ResourceName"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async updateCluster(
    {abortSignal, ...params}: RequestConfig & UpdateClusterRequest,
  ): Promise<UpdateClusterResponse> {
    const body: jsonP.JSONObject = {
      ClusterName: params["ClusterName"],
      Description: params["Description"],
      PreferredMaintenanceWindow: params["PreferredMaintenanceWindow"],
      NotificationTopicArn: params["NotificationTopicArn"],
      NotificationTopicStatus: params["NotificationTopicStatus"],
      ParameterGroupName: params["ParameterGroupName"],
      SecurityGroupIds: params["SecurityGroupIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateCluster",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Cluster": toCluster,
      },
    }, await resp.json());
  }

  async updateParameterGroup(
    {abortSignal, ...params}: RequestConfig & UpdateParameterGroupRequest,
  ): Promise<UpdateParameterGroupResponse> {
    const body: jsonP.JSONObject = {
      ParameterGroupName: params["ParameterGroupName"],
      ParameterNameValues: params["ParameterNameValues"]?.map(x => fromParameterNameValue(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateParameterGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ParameterGroup": toParameterGroup,
      },
    }, await resp.json());
  }

  async updateSubnetGroup(
    {abortSignal, ...params}: RequestConfig & UpdateSubnetGroupRequest,
  ): Promise<UpdateSubnetGroupResponse> {
    const body: jsonP.JSONObject = {
      SubnetGroupName: params["SubnetGroupName"],
      Description: params["Description"],
      SubnetIds: params["SubnetIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateSubnetGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "SubnetGroup": toSubnetGroup,
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateClusterRequest {
  ClusterName: string;
  NodeType: string;
  Description?: string | null;
  ReplicationFactor: number;
  AvailabilityZones?: string[] | null;
  SubnetGroupName?: string | null;
  SecurityGroupIds?: string[] | null;
  PreferredMaintenanceWindow?: string | null;
  NotificationTopicArn?: string | null;
  IamRoleArn: string;
  ParameterGroupName?: string | null;
  Tags?: Tag[] | null;
  SSESpecification?: SSESpecification | null;
}

// refs: 1 - tags: named, input
export interface CreateParameterGroupRequest {
  ParameterGroupName: string;
  Description?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string | null;
  SubnetIds: string[];
}

// refs: 1 - tags: named, input
export interface DecreaseReplicationFactorRequest {
  ClusterName: string;
  NewReplicationFactor: number;
  AvailabilityZones?: string[] | null;
  NodeIdsToRemove?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteClusterRequest {
  ClusterName: string;
}

// refs: 1 - tags: named, input
export interface DeleteParameterGroupRequest {
  ParameterGroupName: string;
}

// refs: 1 - tags: named, input
export interface DeleteSubnetGroupRequest {
  SubnetGroupName: string;
}

// refs: 1 - tags: named, input
export interface DescribeClustersRequest {
  ClusterNames?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDefaultParametersRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventsRequest {
  SourceName?: string | null;
  SourceType?: SourceType | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  Duration?: number | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeParameterGroupsRequest {
  ParameterGroupNames?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeParametersRequest {
  ParameterGroupName: string;
  Source?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeSubnetGroupsRequest {
  SubnetGroupNames?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface IncreaseReplicationFactorRequest {
  ClusterName: string;
  NewReplicationFactor: number;
  AvailabilityZones?: string[] | null;
}

// refs: 1 - tags: named, input
export interface ListTagsRequest {
  ResourceName: string;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface RebootNodeRequest {
  ClusterName: string;
  NodeId: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceName: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceName: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateClusterRequest {
  ClusterName: string;
  Description?: string | null;
  PreferredMaintenanceWindow?: string | null;
  NotificationTopicArn?: string | null;
  NotificationTopicStatus?: string | null;
  ParameterGroupName?: string | null;
  SecurityGroupIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface UpdateParameterGroupRequest {
  ParameterGroupName: string;
  ParameterNameValues: ParameterNameValue[];
}

// refs: 1 - tags: named, input
export interface UpdateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string | null;
  SubnetIds?: string[] | null;
}

// refs: 1 - tags: named, output
export interface CreateClusterResponse {
  Cluster?: Cluster | null;
}

// refs: 1 - tags: named, output
export interface CreateParameterGroupResponse {
  ParameterGroup?: ParameterGroup | null;
}

// refs: 1 - tags: named, output
export interface CreateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup | null;
}

// refs: 1 - tags: named, output
export interface DecreaseReplicationFactorResponse {
  Cluster?: Cluster | null;
}

// refs: 1 - tags: named, output
export interface DeleteClusterResponse {
  Cluster?: Cluster | null;
}

// refs: 1 - tags: named, output
export interface DeleteParameterGroupResponse {
  DeletionMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteSubnetGroupResponse {
  DeletionMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeClustersResponse {
  NextToken?: string | null;
  Clusters?: Cluster[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeDefaultParametersResponse {
  NextToken?: string | null;
  Parameters?: Parameter[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventsResponse {
  NextToken?: string | null;
  Events?: Event[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeParameterGroupsResponse {
  NextToken?: string | null;
  ParameterGroups?: ParameterGroup[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeParametersResponse {
  NextToken?: string | null;
  Parameters?: Parameter[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeSubnetGroupsResponse {
  NextToken?: string | null;
  SubnetGroups?: SubnetGroup[] | null;
}

// refs: 1 - tags: named, output
export interface IncreaseReplicationFactorResponse {
  Cluster?: Cluster | null;
}

// refs: 1 - tags: named, output
export interface ListTagsResponse {
  Tags?: Tag[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface RebootNodeResponse {
  Cluster?: Cluster | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface UpdateClusterResponse {
  Cluster?: Cluster | null;
}

// refs: 1 - tags: named, output
export interface UpdateParameterGroupResponse {
  ParameterGroup?: ParameterGroup | null;
}

// refs: 1 - tags: named, output
export interface UpdateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup | null;
}

// refs: 5 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
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
    required: {},
    optional: {
      "Key": "s",
      "Value": "s",
    },
  }, root);
}

// refs: 1 - tags: input, named, interface
export interface SSESpecification {
  Enabled: boolean;
}
function fromSSESpecification(input?: SSESpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Enabled: input["Enabled"],
  }
}

// refs: 2 - tags: input, named, enum, output
export type SourceType =
| "CLUSTER"
| "PARAMETER_GROUP"
| "SUBNET_GROUP"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface ParameterNameValue {
  ParameterName?: string | null;
  ParameterValue?: string | null;
}
function fromParameterNameValue(input?: ParameterNameValue | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ParameterName: input["ParameterName"],
    ParameterValue: input["ParameterValue"],
  }
}

// refs: 7 - tags: output, named, interface
export interface Cluster {
  ClusterName?: string | null;
  Description?: string | null;
  ClusterArn?: string | null;
  TotalNodes?: number | null;
  ActiveNodes?: number | null;
  NodeType?: string | null;
  Status?: string | null;
  ClusterDiscoveryEndpoint?: Endpoint | null;
  NodeIdsToRemove?: string[] | null;
  Nodes?: Node[] | null;
  PreferredMaintenanceWindow?: string | null;
  NotificationConfiguration?: NotificationConfiguration | null;
  SubnetGroup?: string | null;
  SecurityGroups?: SecurityGroupMembership[] | null;
  IamRoleArn?: string | null;
  ParameterGroup?: ParameterGroupStatus | null;
  SSEDescription?: SSEDescription | null;
}
function toCluster(root: jsonP.JSONValue): Cluster {
  return jsonP.readObj({
    required: {},
    optional: {
      "ClusterName": "s",
      "Description": "s",
      "ClusterArn": "s",
      "TotalNodes": "n",
      "ActiveNodes": "n",
      "NodeType": "s",
      "Status": "s",
      "ClusterDiscoveryEndpoint": toEndpoint,
      "NodeIdsToRemove": ["s"],
      "Nodes": [toNode],
      "PreferredMaintenanceWindow": "s",
      "NotificationConfiguration": toNotificationConfiguration,
      "SubnetGroup": "s",
      "SecurityGroups": [toSecurityGroupMembership],
      "IamRoleArn": "s",
      "ParameterGroup": toParameterGroupStatus,
      "SSEDescription": toSSEDescription,
    },
  }, root);
}

// refs: 14 - tags: output, named, interface
export interface Endpoint {
  Address?: string | null;
  Port?: number | null;
}
function toEndpoint(root: jsonP.JSONValue): Endpoint {
  return jsonP.readObj({
    required: {},
    optional: {
      "Address": "s",
      "Port": "n",
    },
  }, root);
}

// refs: 7 - tags: output, named, interface
export interface Node {
  NodeId?: string | null;
  Endpoint?: Endpoint | null;
  NodeCreateTime?: Date | number | null;
  AvailabilityZone?: string | null;
  NodeStatus?: string | null;
  ParameterGroupStatus?: string | null;
}
function toNode(root: jsonP.JSONValue): Node {
  return jsonP.readObj({
    required: {},
    optional: {
      "NodeId": "s",
      "Endpoint": toEndpoint,
      "NodeCreateTime": "d",
      "AvailabilityZone": "s",
      "NodeStatus": "s",
      "ParameterGroupStatus": "s",
    },
  }, root);
}

// refs: 7 - tags: output, named, interface
export interface NotificationConfiguration {
  TopicArn?: string | null;
  TopicStatus?: string | null;
}
function toNotificationConfiguration(root: jsonP.JSONValue): NotificationConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "TopicArn": "s",
      "TopicStatus": "s",
    },
  }, root);
}

// refs: 7 - tags: output, named, interface
export interface SecurityGroupMembership {
  SecurityGroupIdentifier?: string | null;
  Status?: string | null;
}
function toSecurityGroupMembership(root: jsonP.JSONValue): SecurityGroupMembership {
  return jsonP.readObj({
    required: {},
    optional: {
      "SecurityGroupIdentifier": "s",
      "Status": "s",
    },
  }, root);
}

// refs: 7 - tags: output, named, interface
export interface ParameterGroupStatus {
  ParameterGroupName?: string | null;
  ParameterApplyStatus?: string | null;
  NodeIdsToReboot?: string[] | null;
}
function toParameterGroupStatus(root: jsonP.JSONValue): ParameterGroupStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "ParameterGroupName": "s",
      "ParameterApplyStatus": "s",
      "NodeIdsToReboot": ["s"],
    },
  }, root);
}

// refs: 7 - tags: output, named, interface
export interface SSEDescription {
  Status?: SSEStatus | null;
}
function toSSEDescription(root: jsonP.JSONValue): SSEDescription {
  return jsonP.readObj({
    required: {},
    optional: {
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<SSEStatus>(x),
    },
  }, root);
}

// refs: 7 - tags: output, named, enum
export type SSEStatus =
| "ENABLING"
| "ENABLED"
| "DISABLING"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface ParameterGroup {
  ParameterGroupName?: string | null;
  Description?: string | null;
}
function toParameterGroup(root: jsonP.JSONValue): ParameterGroup {
  return jsonP.readObj({
    required: {},
    optional: {
      "ParameterGroupName": "s",
      "Description": "s",
    },
  }, root);
}

// refs: 3 - tags: output, named, interface
export interface SubnetGroup {
  SubnetGroupName?: string | null;
  Description?: string | null;
  VpcId?: string | null;
  Subnets?: Subnet[] | null;
}
function toSubnetGroup(root: jsonP.JSONValue): SubnetGroup {
  return jsonP.readObj({
    required: {},
    optional: {
      "SubnetGroupName": "s",
      "Description": "s",
      "VpcId": "s",
      "Subnets": [toSubnet],
    },
  }, root);
}

// refs: 3 - tags: output, named, interface
export interface Subnet {
  SubnetIdentifier?: string | null;
  SubnetAvailabilityZone?: string | null;
}
function toSubnet(root: jsonP.JSONValue): Subnet {
  return jsonP.readObj({
    required: {},
    optional: {
      "SubnetIdentifier": "s",
      "SubnetAvailabilityZone": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface Parameter {
  ParameterName?: string | null;
  ParameterType?: ParameterType | null;
  ParameterValue?: string | null;
  NodeTypeSpecificValues?: NodeTypeSpecificValue[] | null;
  Description?: string | null;
  Source?: string | null;
  DataType?: string | null;
  AllowedValues?: string | null;
  IsModifiable?: IsModifiable | null;
  ChangeType?: ChangeType | null;
}
function toParameter(root: jsonP.JSONValue): Parameter {
  return jsonP.readObj({
    required: {},
    optional: {
      "ParameterName": "s",
      "ParameterType": (x: jsonP.JSONValue) => cmnP.readEnum<ParameterType>(x),
      "ParameterValue": "s",
      "NodeTypeSpecificValues": [toNodeTypeSpecificValue],
      "Description": "s",
      "Source": "s",
      "DataType": "s",
      "AllowedValues": "s",
      "IsModifiable": (x: jsonP.JSONValue) => cmnP.readEnum<IsModifiable>(x),
      "ChangeType": (x: jsonP.JSONValue) => cmnP.readEnum<ChangeType>(x),
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type ParameterType =
| "DEFAULT"
| "NODE_TYPE_SPECIFIC"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface NodeTypeSpecificValue {
  NodeType?: string | null;
  Value?: string | null;
}
function toNodeTypeSpecificValue(root: jsonP.JSONValue): NodeTypeSpecificValue {
  return jsonP.readObj({
    required: {},
    optional: {
      "NodeType": "s",
      "Value": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type IsModifiable =
| "TRUE"
| "FALSE"
| "CONDITIONAL"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type ChangeType =
| "IMMEDIATE"
| "REQUIRES_REBOOT"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Event {
  SourceName?: string | null;
  SourceType?: SourceType | null;
  Message?: string | null;
  Date?: Date | number | null;
}
function toEvent(root: jsonP.JSONValue): Event {
  return jsonP.readObj({
    required: {},
    optional: {
      "SourceName": "s",
      "SourceType": (x: jsonP.JSONValue) => cmnP.readEnum<SourceType>(x),
      "Message": "s",
      "Date": "d",
    },
  }, root);
}
