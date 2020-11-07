// Autogenerated API client for: AWS SSO OIDC

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class SSOOIDC {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(SSOOIDC.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-06-10",
    "endpointPrefix": "oidc",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "SSO OIDC",
    "serviceFullName": "AWS SSO OIDC",
    "serviceId": "SSO OIDC",
    "signatureVersion": "v4",
    "signingName": "awsssooidc",
    "uid": "sso-oidc-2019-06-10"
  };

  async createToken(
    {abortSignal, ...params}: RequestConfig & CreateTokenRequest,
  ): Promise<CreateTokenResponse> {
    const body: jsonP.JSONObject = {
      clientId: params["clientId"],
      clientSecret: params["clientSecret"],
      grantType: params["grantType"],
      deviceCode: params["deviceCode"],
      code: params["code"],
      refreshToken: params["refreshToken"],
      scope: params["scope"],
      redirectUri: params["redirectUri"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateToken",
      requestUri: "/token",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "accessToken": "s",
        "tokenType": "s",
        "expiresIn": "n",
        "refreshToken": "s",
        "idToken": "s",
      },
    }, await resp.json());
  }

  async registerClient(
    {abortSignal, ...params}: RequestConfig & RegisterClientRequest,
  ): Promise<RegisterClientResponse> {
    const body: jsonP.JSONObject = {
      clientName: params["clientName"],
      clientType: params["clientType"],
      scopes: params["scopes"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterClient",
      requestUri: "/client/register",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "clientId": "s",
        "clientSecret": "s",
        "clientIdIssuedAt": "n",
        "clientSecretExpiresAt": "n",
        "authorizationEndpoint": "s",
        "tokenEndpoint": "s",
      },
    }, await resp.json());
  }

  async startDeviceAuthorization(
    {abortSignal, ...params}: RequestConfig & StartDeviceAuthorizationRequest,
  ): Promise<StartDeviceAuthorizationResponse> {
    const body: jsonP.JSONObject = {
      clientId: params["clientId"],
      clientSecret: params["clientSecret"],
      startUrl: params["startUrl"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartDeviceAuthorization",
      requestUri: "/device_authorization",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "deviceCode": "s",
        "userCode": "s",
        "verificationUri": "s",
        "verificationUriComplete": "s",
        "expiresIn": "n",
        "interval": "n",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateTokenRequest {
  clientId: string;
  clientSecret: string;
  grantType: string;
  deviceCode: string;
  code?: string | null;
  refreshToken?: string | null;
  scope?: string[] | null;
  redirectUri?: string | null;
}

// refs: 1 - tags: named, input
export interface RegisterClientRequest {
  clientName: string;
  clientType: string;
  scopes?: string[] | null;
}

// refs: 1 - tags: named, input
export interface StartDeviceAuthorizationRequest {
  clientId: string;
  clientSecret: string;
  startUrl: string;
}

// refs: 1 - tags: named, output
export interface CreateTokenResponse {
  accessToken?: string | null;
  tokenType?: string | null;
  expiresIn?: number | null;
  refreshToken?: string | null;
  idToken?: string | null;
}

// refs: 1 - tags: named, output
export interface RegisterClientResponse {
  clientId?: string | null;
  clientSecret?: string | null;
  clientIdIssuedAt?: number | null;
  clientSecretExpiresAt?: number | null;
  authorizationEndpoint?: string | null;
  tokenEndpoint?: string | null;
}

// refs: 1 - tags: named, output
export interface StartDeviceAuthorizationResponse {
  deviceCode?: string | null;
  userCode?: string | null;
  verificationUri?: string | null;
  verificationUriComplete?: string | null;
  expiresIn?: number | null;
  interval?: number | null;
}
