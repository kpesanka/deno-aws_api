// Autogenerated API client for: Amazon WorkLink

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class WorkLink {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(WorkLink.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-09-25",
    "endpointPrefix": "worklink",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "WorkLink",
    "serviceFullName": "Amazon WorkLink",
    "serviceId": "WorkLink",
    "signatureVersion": "v4",
    "signingName": "worklink",
    "uid": "worklink-2018-09-25"
  };

  async associateDomain(
    {abortSignal, ...params}: RequestConfig & AssociateDomainRequest,
  ): Promise<AssociateDomainResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DomainName: params["DomainName"],
      DisplayName: params["DisplayName"],
      AcmCertificateArn: params["AcmCertificateArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateDomain",
      requestUri: "/associateDomain",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async associateWebsiteAuthorizationProvider(
    {abortSignal, ...params}: RequestConfig & AssociateWebsiteAuthorizationProviderRequest,
  ): Promise<AssociateWebsiteAuthorizationProviderResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      AuthorizationProviderType: params["AuthorizationProviderType"],
      DomainName: params["DomainName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateWebsiteAuthorizationProvider",
      requestUri: "/associateWebsiteAuthorizationProvider",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AuthorizationProviderId": "s",
      },
    }, await resp.json());
  }

  async associateWebsiteCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & AssociateWebsiteCertificateAuthorityRequest,
  ): Promise<AssociateWebsiteCertificateAuthorityResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      Certificate: params["Certificate"],
      DisplayName: params["DisplayName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateWebsiteCertificateAuthority",
      requestUri: "/associateWebsiteCertificateAuthority",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "WebsiteCaId": "s",
      },
    }, await resp.json());
  }

  async createFleet(
    {abortSignal, ...params}: RequestConfig & CreateFleetRequest,
  ): Promise<CreateFleetResponse> {
    const body: jsonP.JSONObject = {
      FleetName: params["FleetName"],
      DisplayName: params["DisplayName"],
      OptimizeForEndUserLocation: params["OptimizeForEndUserLocation"],
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateFleet",
      requestUri: "/createFleet",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FleetArn": "s",
      },
    }, await resp.json());
  }

  async deleteFleet(
    {abortSignal, ...params}: RequestConfig & DeleteFleetRequest,
  ): Promise<DeleteFleetResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteFleet",
      requestUri: "/deleteFleet",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeAuditStreamConfiguration(
    {abortSignal, ...params}: RequestConfig & DescribeAuditStreamConfigurationRequest,
  ): Promise<DescribeAuditStreamConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAuditStreamConfiguration",
      requestUri: "/describeAuditStreamConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AuditStreamArn": "s",
      },
    }, await resp.json());
  }

  async describeCompanyNetworkConfiguration(
    {abortSignal, ...params}: RequestConfig & DescribeCompanyNetworkConfigurationRequest,
  ): Promise<DescribeCompanyNetworkConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeCompanyNetworkConfiguration",
      requestUri: "/describeCompanyNetworkConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "VpcId": "s",
        "SubnetIds": ["s"],
        "SecurityGroupIds": ["s"],
      },
    }, await resp.json());
  }

  async describeDevice(
    {abortSignal, ...params}: RequestConfig & DescribeDeviceRequest,
  ): Promise<DescribeDeviceResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DeviceId: params["DeviceId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDevice",
      requestUri: "/describeDevice",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<DeviceStatus>(x),
        "Model": "s",
        "Manufacturer": "s",
        "OperatingSystem": "s",
        "OperatingSystemVersion": "s",
        "PatchLevel": "s",
        "FirstAccessedTime": "d",
        "LastAccessedTime": "d",
        "Username": "s",
      },
    }, await resp.json());
  }

  async describeDevicePolicyConfiguration(
    {abortSignal, ...params}: RequestConfig & DescribeDevicePolicyConfigurationRequest,
  ): Promise<DescribeDevicePolicyConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDevicePolicyConfiguration",
      requestUri: "/describeDevicePolicyConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DeviceCaCertificate": "s",
      },
    }, await resp.json());
  }

  async describeDomain(
    {abortSignal, ...params}: RequestConfig & DescribeDomainRequest,
  ): Promise<DescribeDomainResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DomainName: params["DomainName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDomain",
      requestUri: "/describeDomain",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DomainName": "s",
        "DisplayName": "s",
        "CreatedTime": "d",
        "DomainStatus": (x: jsonP.JSONValue) => cmnP.readEnum<DomainStatus>(x),
        "AcmCertificateArn": "s",
      },
    }, await resp.json());
  }

  async describeFleetMetadata(
    {abortSignal, ...params}: RequestConfig & DescribeFleetMetadataRequest,
  ): Promise<DescribeFleetMetadataResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeFleetMetadata",
      requestUri: "/describeFleetMetadata",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CreatedTime": "d",
        "LastUpdatedTime": "d",
        "FleetName": "s",
        "DisplayName": "s",
        "OptimizeForEndUserLocation": "b",
        "CompanyCode": "s",
        "FleetStatus": (x: jsonP.JSONValue) => cmnP.readEnum<FleetStatus>(x),
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async describeIdentityProviderConfiguration(
    {abortSignal, ...params}: RequestConfig & DescribeIdentityProviderConfigurationRequest,
  ): Promise<DescribeIdentityProviderConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeIdentityProviderConfiguration",
      requestUri: "/describeIdentityProviderConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "IdentityProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<IdentityProviderType>(x),
        "ServiceProviderSamlMetadata": "s",
        "IdentityProviderSamlMetadata": "s",
      },
    }, await resp.json());
  }

  async describeWebsiteCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & DescribeWebsiteCertificateAuthorityRequest,
  ): Promise<DescribeWebsiteCertificateAuthorityResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      WebsiteCaId: params["WebsiteCaId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeWebsiteCertificateAuthority",
      requestUri: "/describeWebsiteCertificateAuthority",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Certificate": "s",
        "CreatedTime": "d",
        "DisplayName": "s",
      },
    }, await resp.json());
  }

  async disassociateDomain(
    {abortSignal, ...params}: RequestConfig & DisassociateDomainRequest,
  ): Promise<DisassociateDomainResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DomainName: params["DomainName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateDomain",
      requestUri: "/disassociateDomain",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async disassociateWebsiteAuthorizationProvider(
    {abortSignal, ...params}: RequestConfig & DisassociateWebsiteAuthorizationProviderRequest,
  ): Promise<DisassociateWebsiteAuthorizationProviderResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      AuthorizationProviderId: params["AuthorizationProviderId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateWebsiteAuthorizationProvider",
      requestUri: "/disassociateWebsiteAuthorizationProvider",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async disassociateWebsiteCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & DisassociateWebsiteCertificateAuthorityRequest,
  ): Promise<DisassociateWebsiteCertificateAuthorityResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      WebsiteCaId: params["WebsiteCaId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateWebsiteCertificateAuthority",
      requestUri: "/disassociateWebsiteCertificateAuthority",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async listDevices(
    {abortSignal, ...params}: RequestConfig & ListDevicesRequest,
  ): Promise<ListDevicesResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDevices",
      requestUri: "/listDevices",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Devices": [toDeviceSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listDomains(
    {abortSignal, ...params}: RequestConfig & ListDomainsRequest,
  ): Promise<ListDomainsResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDomains",
      requestUri: "/listDomains",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Domains": [toDomainSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listFleets(
    {abortSignal, ...params}: RequestConfig & ListFleetsRequest = {},
  ): Promise<ListFleetsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListFleets",
      requestUri: "/listFleets",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FleetSummaryList": [toFleetSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceRequest,
  ): Promise<ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["ResourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listWebsiteAuthorizationProviders(
    {abortSignal, ...params}: RequestConfig & ListWebsiteAuthorizationProvidersRequest,
  ): Promise<ListWebsiteAuthorizationProvidersResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListWebsiteAuthorizationProviders",
      requestUri: "/listWebsiteAuthorizationProviders",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "WebsiteAuthorizationProviders": [toWebsiteAuthorizationProviderSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listWebsiteCertificateAuthorities(
    {abortSignal, ...params}: RequestConfig & ListWebsiteCertificateAuthoritiesRequest,
  ): Promise<ListWebsiteCertificateAuthoritiesResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListWebsiteCertificateAuthorities",
      requestUri: "/listWebsiteCertificateAuthorities",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "WebsiteCertificateAuthorities": [toWebsiteCaSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async restoreDomainAccess(
    {abortSignal, ...params}: RequestConfig & RestoreDomainAccessRequest,
  ): Promise<RestoreDomainAccessResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DomainName: params["DomainName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RestoreDomainAccess",
      requestUri: "/restoreDomainAccess",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async revokeDomainAccess(
    {abortSignal, ...params}: RequestConfig & RevokeDomainAccessRequest,
  ): Promise<RevokeDomainAccessResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DomainName: params["DomainName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RevokeDomainAccess",
      requestUri: "/revokeDomainAccess",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async signOutUser(
    {abortSignal, ...params}: RequestConfig & SignOutUserRequest,
  ): Promise<SignOutUserResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      Username: params["Username"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SignOutUser",
      requestUri: "/signOutUser",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<TagResourceResponse> {
    const body: jsonP.JSONObject = {
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/tags/${params["ResourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["TagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tags/${params["ResourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateAuditStreamConfiguration(
    {abortSignal, ...params}: RequestConfig & UpdateAuditStreamConfigurationRequest,
  ): Promise<UpdateAuditStreamConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      AuditStreamArn: params["AuditStreamArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateAuditStreamConfiguration",
      requestUri: "/updateAuditStreamConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateCompanyNetworkConfiguration(
    {abortSignal, ...params}: RequestConfig & UpdateCompanyNetworkConfigurationRequest,
  ): Promise<UpdateCompanyNetworkConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      VpcId: params["VpcId"],
      SubnetIds: params["SubnetIds"],
      SecurityGroupIds: params["SecurityGroupIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateCompanyNetworkConfiguration",
      requestUri: "/updateCompanyNetworkConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateDevicePolicyConfiguration(
    {abortSignal, ...params}: RequestConfig & UpdateDevicePolicyConfigurationRequest,
  ): Promise<UpdateDevicePolicyConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DeviceCaCertificate: params["DeviceCaCertificate"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateDevicePolicyConfiguration",
      requestUri: "/updateDevicePolicyConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateDomainMetadata(
    {abortSignal, ...params}: RequestConfig & UpdateDomainMetadataRequest,
  ): Promise<UpdateDomainMetadataResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DomainName: params["DomainName"],
      DisplayName: params["DisplayName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateDomainMetadata",
      requestUri: "/updateDomainMetadata",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateFleetMetadata(
    {abortSignal, ...params}: RequestConfig & UpdateFleetMetadataRequest,
  ): Promise<UpdateFleetMetadataResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      DisplayName: params["DisplayName"],
      OptimizeForEndUserLocation: params["OptimizeForEndUserLocation"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateFleetMetadata",
      requestUri: "/UpdateFleetMetadata",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateIdentityProviderConfiguration(
    {abortSignal, ...params}: RequestConfig & UpdateIdentityProviderConfigurationRequest,
  ): Promise<UpdateIdentityProviderConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FleetArn: params["FleetArn"],
      IdentityProviderType: params["IdentityProviderType"],
      IdentityProviderSamlMetadata: params["IdentityProviderSamlMetadata"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateIdentityProviderConfiguration",
      requestUri: "/updateIdentityProviderConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AssociateDomainRequest {
  FleetArn: string;
  DomainName: string;
  DisplayName?: string | null;
  AcmCertificateArn: string;
}

// refs: 1 - tags: named, input
export interface AssociateWebsiteAuthorizationProviderRequest {
  FleetArn: string;
  AuthorizationProviderType: AuthorizationProviderType;
  DomainName?: string | null;
}

// refs: 1 - tags: named, input
export interface AssociateWebsiteCertificateAuthorityRequest {
  FleetArn: string;
  Certificate: string;
  DisplayName?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateFleetRequest {
  FleetName: string;
  DisplayName?: string | null;
  OptimizeForEndUserLocation?: boolean | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteFleetRequest {
  FleetArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeAuditStreamConfigurationRequest {
  FleetArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeCompanyNetworkConfigurationRequest {
  FleetArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeDeviceRequest {
  FleetArn: string;
  DeviceId: string;
}

// refs: 1 - tags: named, input
export interface DescribeDevicePolicyConfigurationRequest {
  FleetArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeDomainRequest {
  FleetArn: string;
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface DescribeFleetMetadataRequest {
  FleetArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeIdentityProviderConfigurationRequest {
  FleetArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeWebsiteCertificateAuthorityRequest {
  FleetArn: string;
  WebsiteCaId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateDomainRequest {
  FleetArn: string;
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface DisassociateWebsiteAuthorizationProviderRequest {
  FleetArn: string;
  AuthorizationProviderId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateWebsiteCertificateAuthorityRequest {
  FleetArn: string;
  WebsiteCaId: string;
}

// refs: 1 - tags: named, input
export interface ListDevicesRequest {
  FleetArn: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListDomainsRequest {
  FleetArn: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListFleetsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface ListWebsiteAuthorizationProvidersRequest {
  FleetArn: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListWebsiteCertificateAuthoritiesRequest {
  FleetArn: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface RestoreDomainAccessRequest {
  FleetArn: string;
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface RevokeDomainAccessRequest {
  FleetArn: string;
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface SignOutUserRequest {
  FleetArn: string;
  Username: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateAuditStreamConfigurationRequest {
  FleetArn: string;
  AuditStreamArn?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateCompanyNetworkConfigurationRequest {
  FleetArn: string;
  VpcId: string;
  SubnetIds: string[];
  SecurityGroupIds: string[];
}

// refs: 1 - tags: named, input
export interface UpdateDevicePolicyConfigurationRequest {
  FleetArn: string;
  DeviceCaCertificate?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateDomainMetadataRequest {
  FleetArn: string;
  DomainName: string;
  DisplayName?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateFleetMetadataRequest {
  FleetArn: string;
  DisplayName?: string | null;
  OptimizeForEndUserLocation?: boolean | null;
}

// refs: 1 - tags: named, input
export interface UpdateIdentityProviderConfigurationRequest {
  FleetArn: string;
  IdentityProviderType: IdentityProviderType;
  IdentityProviderSamlMetadata?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateDomainResponse {
}

// refs: 1 - tags: named, output
export interface AssociateWebsiteAuthorizationProviderResponse {
  AuthorizationProviderId?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateWebsiteCertificateAuthorityResponse {
  WebsiteCaId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateFleetResponse {
  FleetArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteFleetResponse {
}

// refs: 1 - tags: named, output
export interface DescribeAuditStreamConfigurationResponse {
  AuditStreamArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeCompanyNetworkConfigurationResponse {
  VpcId?: string | null;
  SubnetIds?: string[] | null;
  SecurityGroupIds?: string[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeDeviceResponse {
  Status?: DeviceStatus | null;
  Model?: string | null;
  Manufacturer?: string | null;
  OperatingSystem?: string | null;
  OperatingSystemVersion?: string | null;
  PatchLevel?: string | null;
  FirstAccessedTime?: Date | number | null;
  LastAccessedTime?: Date | number | null;
  Username?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDevicePolicyConfigurationResponse {
  DeviceCaCertificate?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDomainResponse {
  DomainName?: string | null;
  DisplayName?: string | null;
  CreatedTime?: Date | number | null;
  DomainStatus?: DomainStatus | null;
  AcmCertificateArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeFleetMetadataResponse {
  CreatedTime?: Date | number | null;
  LastUpdatedTime?: Date | number | null;
  FleetName?: string | null;
  DisplayName?: string | null;
  OptimizeForEndUserLocation?: boolean | null;
  CompanyCode?: string | null;
  FleetStatus?: FleetStatus | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DescribeIdentityProviderConfigurationResponse {
  IdentityProviderType?: IdentityProviderType | null;
  ServiceProviderSamlMetadata?: string | null;
  IdentityProviderSamlMetadata?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeWebsiteCertificateAuthorityResponse {
  Certificate?: string | null;
  CreatedTime?: Date | number | null;
  DisplayName?: string | null;
}

// refs: 1 - tags: named, output
export interface DisassociateDomainResponse {
}

// refs: 1 - tags: named, output
export interface DisassociateWebsiteAuthorizationProviderResponse {
}

// refs: 1 - tags: named, output
export interface DisassociateWebsiteCertificateAuthorityResponse {
}

// refs: 1 - tags: named, output
export interface ListDevicesResponse {
  Devices?: DeviceSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDomainsResponse {
  Domains?: DomainSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListFleetsResponse {
  FleetSummaryList?: FleetSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListWebsiteAuthorizationProvidersResponse {
  WebsiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListWebsiteCertificateAuthoritiesResponse {
  WebsiteCertificateAuthorities?: WebsiteCaSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface RestoreDomainAccessResponse {
}

// refs: 1 - tags: named, output
export interface RevokeDomainAccessResponse {
}

// refs: 1 - tags: named, output
export interface SignOutUserResponse {
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateAuditStreamConfigurationResponse {
}

// refs: 1 - tags: named, output
export interface UpdateCompanyNetworkConfigurationResponse {
}

// refs: 1 - tags: named, output
export interface UpdateDevicePolicyConfigurationResponse {
}

// refs: 1 - tags: named, output
export interface UpdateDomainMetadataResponse {
}

// refs: 1 - tags: named, output
export interface UpdateFleetMetadataResponse {
}

// refs: 1 - tags: named, output
export interface UpdateIdentityProviderConfigurationResponse {
}

// refs: 2 - tags: input, named, enum, output
export type AuthorizationProviderType =
| "SAML"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type IdentityProviderType =
| "SAML"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type DeviceStatus =
| "ACTIVE"
| "SIGNED_OUT"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type DomainStatus =
| "PENDING_VALIDATION"
| "ASSOCIATING"
| "ACTIVE"
| "INACTIVE"
| "DISASSOCIATING"
| "DISASSOCIATED"
| "FAILED_TO_ASSOCIATE"
| "FAILED_TO_DISASSOCIATE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type FleetStatus =
| "CREATING"
| "ACTIVE"
| "DELETING"
| "DELETED"
| "FAILED_TO_CREATE"
| "FAILED_TO_DELETE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DeviceSummary {
  DeviceId?: string | null;
  DeviceStatus?: DeviceStatus | null;
}
function toDeviceSummary(root: jsonP.JSONValue): DeviceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "DeviceId": "s",
      "DeviceStatus": (x: jsonP.JSONValue) => cmnP.readEnum<DeviceStatus>(x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DomainSummary {
  DomainName: string;
  DisplayName?: string | null;
  CreatedTime: Date | number;
  DomainStatus: DomainStatus;
}
function toDomainSummary(root: jsonP.JSONValue): DomainSummary {
  return jsonP.readObj({
    required: {
      "DomainName": "s",
      "CreatedTime": "d",
      "DomainStatus": (x: jsonP.JSONValue) => cmnP.readEnum<DomainStatus>(x),
    },
    optional: {
      "DisplayName": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface FleetSummary {
  FleetArn?: string | null;
  CreatedTime?: Date | number | null;
  LastUpdatedTime?: Date | number | null;
  FleetName?: string | null;
  DisplayName?: string | null;
  CompanyCode?: string | null;
  FleetStatus?: FleetStatus | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}
function toFleetSummary(root: jsonP.JSONValue): FleetSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "FleetArn": "s",
      "CreatedTime": "d",
      "LastUpdatedTime": "d",
      "FleetName": "s",
      "DisplayName": "s",
      "CompanyCode": "s",
      "FleetStatus": (x: jsonP.JSONValue) => cmnP.readEnum<FleetStatus>(x),
      "Tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface WebsiteAuthorizationProviderSummary {
  AuthorizationProviderId?: string | null;
  AuthorizationProviderType: AuthorizationProviderType;
  DomainName?: string | null;
  CreatedTime?: Date | number | null;
}
function toWebsiteAuthorizationProviderSummary(root: jsonP.JSONValue): WebsiteAuthorizationProviderSummary {
  return jsonP.readObj({
    required: {
      "AuthorizationProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<AuthorizationProviderType>(x),
    },
    optional: {
      "AuthorizationProviderId": "s",
      "DomainName": "s",
      "CreatedTime": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface WebsiteCaSummary {
  WebsiteCaId?: string | null;
  CreatedTime?: Date | number | null;
  DisplayName?: string | null;
}
function toWebsiteCaSummary(root: jsonP.JSONValue): WebsiteCaSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "WebsiteCaId": "s",
      "CreatedTime": "d",
      "DisplayName": "s",
    },
  }, root);
}
