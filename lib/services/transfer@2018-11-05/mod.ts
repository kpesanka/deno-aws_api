// Autogenerated API client for: AWS Transfer Family

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class Transfer {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Transfer.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-11-05",
    "endpointPrefix": "transfer",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "AWS Transfer",
    "serviceFullName": "AWS Transfer Family",
    "serviceId": "Transfer",
    "signatureVersion": "v4",
    "signingName": "transfer",
    "targetPrefix": "TransferService",
    "uid": "transfer-2018-11-05"
  };

  async createServer(
    {abortSignal, ...params}: RequestConfig & CreateServerRequest = {},
  ): Promise<CreateServerResponse> {
    const body: jsonP.JSONObject = {
      Certificate: params["Certificate"],
      EndpointDetails: fromEndpointDetails(params["EndpointDetails"]),
      EndpointType: params["EndpointType"],
      HostKey: params["HostKey"],
      IdentityProviderDetails: fromIdentityProviderDetails(params["IdentityProviderDetails"]),
      IdentityProviderType: params["IdentityProviderType"],
      LoggingRole: params["LoggingRole"],
      Protocols: params["Protocols"],
      SecurityPolicyName: params["SecurityPolicyName"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateServer",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createUser(
    {abortSignal, ...params}: RequestConfig & CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const body: jsonP.JSONObject = {
      HomeDirectory: params["HomeDirectory"],
      HomeDirectoryType: params["HomeDirectoryType"],
      HomeDirectoryMappings: params["HomeDirectoryMappings"]?.map(x => fromHomeDirectoryMapEntry(x)),
      Policy: params["Policy"],
      Role: params["Role"],
      ServerId: params["ServerId"],
      SshPublicKeyBody: params["SshPublicKeyBody"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateUser",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "UserName": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteServer(
    {abortSignal, ...params}: RequestConfig & DeleteServerRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteServer",
    });
  }

  async deleteSshPublicKey(
    {abortSignal, ...params}: RequestConfig & DeleteSshPublicKeyRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      SshPublicKeyId: params["SshPublicKeyId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteSshPublicKey",
    });
  }

  async deleteUser(
    {abortSignal, ...params}: RequestConfig & DeleteUserRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteUser",
    });
  }

  async describeSecurityPolicy(
    {abortSignal, ...params}: RequestConfig & DescribeSecurityPolicyRequest,
  ): Promise<DescribeSecurityPolicyResponse> {
    const body: jsonP.JSONObject = {
      SecurityPolicyName: params["SecurityPolicyName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeSecurityPolicy",
    });
    return jsonP.readObj({
      required: {
        "SecurityPolicy": toDescribedSecurityPolicy,
      },
      optional: {},
    }, await resp.json());
  }

  async describeServer(
    {abortSignal, ...params}: RequestConfig & DescribeServerRequest,
  ): Promise<DescribeServerResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeServer",
    });
    return jsonP.readObj({
      required: {
        "Server": toDescribedServer,
      },
      optional: {},
    }, await resp.json());
  }

  async describeUser(
    {abortSignal, ...params}: RequestConfig & DescribeUserRequest,
  ): Promise<DescribeUserResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeUser",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "User": toDescribedUser,
      },
      optional: {},
    }, await resp.json());
  }

  async importSshPublicKey(
    {abortSignal, ...params}: RequestConfig & ImportSshPublicKeyRequest,
  ): Promise<ImportSshPublicKeyResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      SshPublicKeyBody: params["SshPublicKeyBody"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ImportSshPublicKey",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "SshPublicKeyId": "s",
        "UserName": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async listSecurityPolicies(
    {abortSignal, ...params}: RequestConfig & ListSecurityPoliciesRequest = {},
  ): Promise<ListSecurityPoliciesResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListSecurityPolicies",
    });
    return jsonP.readObj({
      required: {
        "SecurityPolicyNames": ["s"],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listServers(
    {abortSignal, ...params}: RequestConfig & ListServersRequest = {},
  ): Promise<ListServersResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListServers",
    });
    return jsonP.readObj({
      required: {
        "Servers": [toListedServer],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceRequest,
  ): Promise<ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Arn": "s",
        "NextToken": "s",
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async listUsers(
    {abortSignal, ...params}: RequestConfig & ListUsersRequest,
  ): Promise<ListUsersResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListUsers",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "Users": [toListedUser],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async startServer(
    {abortSignal, ...params}: RequestConfig & StartServerRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartServer",
    });
  }

  async stopServer(
    {abortSignal, ...params}: RequestConfig & StopServerRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopServer",
    });
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
  }

  async testIdentityProvider(
    {abortSignal, ...params}: RequestConfig & TestIdentityProviderRequest,
  ): Promise<TestIdentityProviderResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      ServerProtocol: params["ServerProtocol"],
      SourceIp: params["SourceIp"],
      UserName: params["UserName"],
      UserPassword: params["UserPassword"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TestIdentityProvider",
    });
    return jsonP.readObj({
      required: {
        "StatusCode": "n",
        "Url": "s",
      },
      optional: {
        "Response": "s",
        "Message": "s",
      },
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
  }

  async updateServer(
    {abortSignal, ...params}: RequestConfig & UpdateServerRequest,
  ): Promise<UpdateServerResponse> {
    const body: jsonP.JSONObject = {
      Certificate: params["Certificate"],
      EndpointDetails: fromEndpointDetails(params["EndpointDetails"]),
      EndpointType: params["EndpointType"],
      HostKey: params["HostKey"],
      IdentityProviderDetails: fromIdentityProviderDetails(params["IdentityProviderDetails"]),
      LoggingRole: params["LoggingRole"],
      Protocols: params["Protocols"],
      SecurityPolicyName: params["SecurityPolicyName"],
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateServer",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async updateUser(
    {abortSignal, ...params}: RequestConfig & UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    const body: jsonP.JSONObject = {
      HomeDirectory: params["HomeDirectory"],
      HomeDirectoryType: params["HomeDirectoryType"],
      HomeDirectoryMappings: params["HomeDirectoryMappings"]?.map(x => fromHomeDirectoryMapEntry(x)),
      Policy: params["Policy"],
      Role: params["Role"],
      ServerId: params["ServerId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateUser",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "UserName": "s",
      },
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateServerRequest {
  Certificate?: string | null;
  EndpointDetails?: EndpointDetails | null;
  EndpointType?: EndpointType | null;
  HostKey?: string | null;
  IdentityProviderDetails?: IdentityProviderDetails | null;
  IdentityProviderType?: IdentityProviderType | null;
  LoggingRole?: string | null;
  Protocols?: Protocol[] | null;
  SecurityPolicyName?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateUserRequest {
  HomeDirectory?: string | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | null;
  Policy?: string | null;
  Role: string;
  ServerId: string;
  SshPublicKeyBody?: string | null;
  Tags?: Tag[] | null;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface DeleteServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface DeleteSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface DeleteUserRequest {
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface DescribeSecurityPolicyRequest {
  SecurityPolicyName: string;
}

// refs: 1 - tags: named, input
export interface DescribeServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface DescribeUserRequest {
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface ImportSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyBody: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface ListSecurityPoliciesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListServersRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  Arn: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListUsersRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface StartServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface StopServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  Arn: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface TestIdentityProviderRequest {
  ServerId: string;
  ServerProtocol?: Protocol | null;
  SourceIp?: string | null;
  UserName: string;
  UserPassword?: string | null;
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateServerRequest {
  Certificate?: string | null;
  EndpointDetails?: EndpointDetails | null;
  EndpointType?: EndpointType | null;
  HostKey?: string | null;
  IdentityProviderDetails?: IdentityProviderDetails | null;
  LoggingRole?: string | null;
  Protocols?: Protocol[] | null;
  SecurityPolicyName?: string | null;
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface UpdateUserRequest {
  HomeDirectory?: string | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | null;
  Policy?: string | null;
  Role?: string | null;
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, output
export interface CreateServerResponse {
  ServerId: string;
}

// refs: 1 - tags: named, output
export interface CreateUserResponse {
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, output
export interface DescribeSecurityPolicyResponse {
  SecurityPolicy: DescribedSecurityPolicy;
}

// refs: 1 - tags: named, output
export interface DescribeServerResponse {
  Server: DescribedServer;
}

// refs: 1 - tags: named, output
export interface DescribeUserResponse {
  ServerId: string;
  User: DescribedUser;
}

// refs: 1 - tags: named, output
export interface ImportSshPublicKeyResponse {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}

// refs: 1 - tags: named, output
export interface ListSecurityPoliciesResponse {
  NextToken?: string | null;
  SecurityPolicyNames: string[];
}

// refs: 1 - tags: named, output
export interface ListServersResponse {
  NextToken?: string | null;
  Servers: ListedServer[];
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Arn?: string | null;
  NextToken?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface ListUsersResponse {
  NextToken?: string | null;
  ServerId: string;
  Users: ListedUser[];
}

// refs: 1 - tags: named, output
export interface TestIdentityProviderResponse {
  Response?: string | null;
  StatusCode: number;
  Message?: string | null;
  Url: string;
}

// refs: 1 - tags: named, output
export interface UpdateServerResponse {
  ServerId: string;
}

// refs: 1 - tags: named, output
export interface UpdateUserResponse {
  ServerId: string;
  UserName: string;
}

// refs: 3 - tags: input, named, interface, output
export interface EndpointDetails {
  AddressAllocationIds?: string[] | null;
  SubnetIds?: string[] | null;
  VpcEndpointId?: string | null;
  VpcId?: string | null;
  SecurityGroupIds?: string[] | null;
}
function fromEndpointDetails(input?: EndpointDetails | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    AddressAllocationIds: input["AddressAllocationIds"],
    SubnetIds: input["SubnetIds"],
    VpcEndpointId: input["VpcEndpointId"],
    VpcId: input["VpcId"],
    SecurityGroupIds: input["SecurityGroupIds"],
  }
}
function toEndpointDetails(root: jsonP.JSONValue): EndpointDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "AddressAllocationIds": ["s"],
      "SubnetIds": ["s"],
      "VpcEndpointId": "s",
      "VpcId": "s",
      "SecurityGroupIds": ["s"],
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type EndpointType =
| "PUBLIC"
| "VPC"
| "VPC_ENDPOINT"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface IdentityProviderDetails {
  Url?: string | null;
  InvocationRole?: string | null;
}
function fromIdentityProviderDetails(input?: IdentityProviderDetails | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Url: input["Url"],
    InvocationRole: input["InvocationRole"],
  }
}
function toIdentityProviderDetails(root: jsonP.JSONValue): IdentityProviderDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "Url": "s",
      "InvocationRole": "s",
    },
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type IdentityProviderType =
| "SERVICE_MANAGED"
| "API_GATEWAY"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type Protocol =
| "SFTP"
| "FTP"
| "FTPS"
| cmnP.UnexpectedEnumValue;

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

// refs: 4 - tags: input, named, enum, output
export type HomeDirectoryType =
| "PATH"
| "LOGICAL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface HomeDirectoryMapEntry {
  Entry: string;
  Target: string;
}
function fromHomeDirectoryMapEntry(input?: HomeDirectoryMapEntry | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Entry: input["Entry"],
    Target: input["Target"],
  }
}
function toHomeDirectoryMapEntry(root: jsonP.JSONValue): HomeDirectoryMapEntry {
  return jsonP.readObj({
    required: {
      "Entry": "s",
      "Target": "s",
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DescribedSecurityPolicy {
  Fips?: boolean | null;
  SecurityPolicyName: string;
  SshCiphers?: string[] | null;
  SshKexs?: string[] | null;
  SshMacs?: string[] | null;
  TlsCiphers?: string[] | null;
}
function toDescribedSecurityPolicy(root: jsonP.JSONValue): DescribedSecurityPolicy {
  return jsonP.readObj({
    required: {
      "SecurityPolicyName": "s",
    },
    optional: {
      "Fips": "b",
      "SshCiphers": ["s"],
      "SshKexs": ["s"],
      "SshMacs": ["s"],
      "TlsCiphers": ["s"],
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DescribedServer {
  Arn: string;
  Certificate?: string | null;
  EndpointDetails?: EndpointDetails | null;
  EndpointType?: EndpointType | null;
  HostKeyFingerprint?: string | null;
  IdentityProviderDetails?: IdentityProviderDetails | null;
  IdentityProviderType?: IdentityProviderType | null;
  LoggingRole?: string | null;
  Protocols?: Protocol[] | null;
  SecurityPolicyName?: string | null;
  ServerId?: string | null;
  State?: State | null;
  Tags?: Tag[] | null;
  UserCount?: number | null;
}
function toDescribedServer(root: jsonP.JSONValue): DescribedServer {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "Certificate": "s",
      "EndpointDetails": toEndpointDetails,
      "EndpointType": (x: jsonP.JSONValue) => cmnP.readEnum<EndpointType>(x),
      "HostKeyFingerprint": "s",
      "IdentityProviderDetails": toIdentityProviderDetails,
      "IdentityProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<IdentityProviderType>(x),
      "LoggingRole": "s",
      "Protocols": [(x: jsonP.JSONValue) => cmnP.readEnum<Protocol>(x)],
      "SecurityPolicyName": "s",
      "ServerId": "s",
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<State>(x),
      "Tags": [toTag],
      "UserCount": "n",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type State =
| "OFFLINE"
| "ONLINE"
| "STARTING"
| "STOPPING"
| "START_FAILED"
| "STOP_FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DescribedUser {
  Arn: string;
  HomeDirectory?: string | null;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  Policy?: string | null;
  Role?: string | null;
  SshPublicKeys?: SshPublicKey[] | null;
  Tags?: Tag[] | null;
  UserName?: string | null;
}
function toDescribedUser(root: jsonP.JSONValue): DescribedUser {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "HomeDirectory": "s",
      "HomeDirectoryMappings": [toHomeDirectoryMapEntry],
      "HomeDirectoryType": (x: jsonP.JSONValue) => cmnP.readEnum<HomeDirectoryType>(x),
      "Policy": "s",
      "Role": "s",
      "SshPublicKeys": [toSshPublicKey],
      "Tags": [toTag],
      "UserName": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface SshPublicKey {
  DateImported: Date | number;
  SshPublicKeyBody: string;
  SshPublicKeyId: string;
}
function toSshPublicKey(root: jsonP.JSONValue): SshPublicKey {
  return jsonP.readObj({
    required: {
      "DateImported": "d",
      "SshPublicKeyBody": "s",
      "SshPublicKeyId": "s",
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ListedServer {
  Arn: string;
  IdentityProviderType?: IdentityProviderType | null;
  EndpointType?: EndpointType | null;
  LoggingRole?: string | null;
  ServerId?: string | null;
  State?: State | null;
  UserCount?: number | null;
}
function toListedServer(root: jsonP.JSONValue): ListedServer {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "IdentityProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<IdentityProviderType>(x),
      "EndpointType": (x: jsonP.JSONValue) => cmnP.readEnum<EndpointType>(x),
      "LoggingRole": "s",
      "ServerId": "s",
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<State>(x),
      "UserCount": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ListedUser {
  Arn: string;
  HomeDirectory?: string | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  Role?: string | null;
  SshPublicKeyCount?: number | null;
  UserName?: string | null;
}
function toListedUser(root: jsonP.JSONValue): ListedUser {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "HomeDirectory": "s",
      "HomeDirectoryType": (x: jsonP.JSONValue) => cmnP.readEnum<HomeDirectoryType>(x),
      "Role": "s",
      "SshPublicKeyCount": "n",
      "UserName": "s",
    },
  }, root);
}
