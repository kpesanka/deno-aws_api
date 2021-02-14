// Autogenerated API client for: AWS Certificate Manager Private Certificate Authority

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class ACMPCA {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ACMPCA.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-08-22",
    "endpointPrefix": "acm-pca",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "ACM-PCA",
    "serviceFullName": "AWS Certificate Manager Private Certificate Authority",
    "serviceId": "ACM PCA",
    "signatureVersion": "v4",
    "targetPrefix": "ACMPrivateCA",
    "uid": "acm-pca-2017-08-22"
  };

  async createCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & s.CreateCertificateAuthorityRequest,
  ): Promise<s.CreateCertificateAuthorityResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityConfiguration: fromCertificateAuthorityConfiguration(params["CertificateAuthorityConfiguration"]),
      RevocationConfiguration: fromRevocationConfiguration(params["RevocationConfiguration"]),
      CertificateAuthorityType: params["CertificateAuthorityType"],
      IdempotencyToken: params["IdempotencyToken"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateCertificateAuthority",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CertificateAuthorityArn": "s",
      },
    }, await resp.json());
  }

  async createCertificateAuthorityAuditReport(
    {abortSignal, ...params}: RequestConfig & s.CreateCertificateAuthorityAuditReportRequest,
  ): Promise<s.CreateCertificateAuthorityAuditReportResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      S3BucketName: params["S3BucketName"],
      AuditReportResponseFormat: params["AuditReportResponseFormat"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateCertificateAuthorityAuditReport",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AuditReportId": "s",
        "S3Key": "s",
      },
    }, await resp.json());
  }

  async createPermission(
    {abortSignal, ...params}: RequestConfig & s.CreatePermissionRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      Principal: params["Principal"],
      SourceAccount: params["SourceAccount"],
      Actions: params["Actions"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePermission",
    });
  }

  async deleteCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & s.DeleteCertificateAuthorityRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      PermanentDeletionTimeInDays: params["PermanentDeletionTimeInDays"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteCertificateAuthority",
    });
  }

  async deletePermission(
    {abortSignal, ...params}: RequestConfig & s.DeletePermissionRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      Principal: params["Principal"],
      SourceAccount: params["SourceAccount"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeletePermission",
    });
  }

  async deletePolicy(
    {abortSignal, ...params}: RequestConfig & s.DeletePolicyRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeletePolicy",
    });
  }

  async describeCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & s.DescribeCertificateAuthorityRequest,
  ): Promise<s.DescribeCertificateAuthorityResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeCertificateAuthority",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CertificateAuthority": toCertificateAuthority,
      },
    }, await resp.json());
  }

  async describeCertificateAuthorityAuditReport(
    {abortSignal, ...params}: RequestConfig & s.DescribeCertificateAuthorityAuditReportRequest,
  ): Promise<s.DescribeCertificateAuthorityAuditReportResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      AuditReportId: params["AuditReportId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeCertificateAuthorityAuditReport",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AuditReportStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.AuditReportStatus>(x),
        "S3BucketName": "s",
        "S3Key": "s",
        "CreatedAt": "d",
      },
    }, await resp.json());
  }

  async getCertificate(
    {abortSignal, ...params}: RequestConfig & s.GetCertificateRequest,
  ): Promise<s.GetCertificateResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      CertificateArn: params["CertificateArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetCertificate",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Certificate": "s",
        "CertificateChain": "s",
      },
    }, await resp.json());
  }

  async getCertificateAuthorityCertificate(
    {abortSignal, ...params}: RequestConfig & s.GetCertificateAuthorityCertificateRequest,
  ): Promise<s.GetCertificateAuthorityCertificateResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetCertificateAuthorityCertificate",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Certificate": "s",
        "CertificateChain": "s",
      },
    }, await resp.json());
  }

  async getCertificateAuthorityCsr(
    {abortSignal, ...params}: RequestConfig & s.GetCertificateAuthorityCsrRequest,
  ): Promise<s.GetCertificateAuthorityCsrResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetCertificateAuthorityCsr",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Csr": "s",
      },
    }, await resp.json());
  }

  async getPolicy(
    {abortSignal, ...params}: RequestConfig & s.GetPolicyRequest,
  ): Promise<s.GetPolicyResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Policy": "s",
      },
    }, await resp.json());
  }

  async importCertificateAuthorityCertificate(
    {abortSignal, ...params}: RequestConfig & s.ImportCertificateAuthorityCertificateRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      Certificate: jsonP.serializeBlob(params["Certificate"]),
      CertificateChain: jsonP.serializeBlob(params["CertificateChain"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ImportCertificateAuthorityCertificate",
    });
  }

  async issueCertificate(
    {abortSignal, ...params}: RequestConfig & s.IssueCertificateRequest,
  ): Promise<s.IssueCertificateResponse> {
    const body: jsonP.JSONObject = {
      ApiPassthrough: fromApiPassthrough(params["ApiPassthrough"]),
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      Csr: jsonP.serializeBlob(params["Csr"]),
      SigningAlgorithm: params["SigningAlgorithm"],
      TemplateArn: params["TemplateArn"],
      Validity: fromValidity(params["Validity"]),
      ValidityNotBefore: fromValidity(params["ValidityNotBefore"]),
      IdempotencyToken: params["IdempotencyToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "IssueCertificate",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CertificateArn": "s",
      },
    }, await resp.json());
  }

  async listCertificateAuthorities(
    {abortSignal, ...params}: RequestConfig & s.ListCertificateAuthoritiesRequest = {},
  ): Promise<s.ListCertificateAuthoritiesResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      ResourceOwner: params["ResourceOwner"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListCertificateAuthorities",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CertificateAuthorities": [toCertificateAuthority],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPermissions(
    {abortSignal, ...params}: RequestConfig & s.ListPermissionsRequest,
  ): Promise<s.ListPermissionsResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPermissions",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Permissions": [toPermission],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTags(
    {abortSignal, ...params}: RequestConfig & s.ListTagsRequest,
  ): Promise<s.ListTagsResponse> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
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

  async putPolicy(
    {abortSignal, ...params}: RequestConfig & s.PutPolicyRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      Policy: params["Policy"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutPolicy",
    });
  }

  async restoreCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & s.RestoreCertificateAuthorityRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RestoreCertificateAuthority",
    });
  }

  async revokeCertificate(
    {abortSignal, ...params}: RequestConfig & s.RevokeCertificateRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      CertificateSerial: params["CertificateSerial"],
      RevocationReason: params["RevocationReason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RevokeCertificate",
    });
  }

  async tagCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & s.TagCertificateAuthorityRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagCertificateAuthority",
    });
  }

  async untagCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & s.UntagCertificateAuthorityRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagCertificateAuthority",
    });
  }

  async updateCertificateAuthority(
    {abortSignal, ...params}: RequestConfig & s.UpdateCertificateAuthorityRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      CertificateAuthorityArn: params["CertificateAuthorityArn"],
      RevocationConfiguration: fromRevocationConfiguration(params["RevocationConfiguration"]),
      Status: params["Status"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateCertificateAuthority",
    });
  }

  // Resource State Waiters

  /**
   * Wait until a Certificate Authority CSR is created
   * Checks state up to 60 times, 3 seconds apart (about 3 minutes max wait time).
   */
  async waitForCertificateAuthorityCSRCreated(
    params: RequestConfig & s.GetCertificateAuthorityCsrRequest,
  ): Promise<s.GetCertificateAuthorityCsrResponse> {
    const errMessage = 'ResourceNotReady: Resource is not in the state CertificateAuthorityCSRCreated';
    for (let i = 0; i < 60; i++) {
      try {
        const resp = await this.getCertificateAuthorityCsr(params);
        return resp; // for status 200
      } catch (err) {
        if (!["RequestInProgressException"].includes(err.shortCode)) throw err;
      }
      await new Promise(r => setTimeout(r, 3000));
    }
    throw new Error(errMessage);
  }

  /**
   * Wait until a certificate is issued
   * Checks state up to 60 times, 3 seconds apart (about 3 minutes max wait time).
   */
  async waitForCertificateIssued(
    params: RequestConfig & s.GetCertificateRequest,
  ): Promise<s.GetCertificateResponse> {
    const errMessage = 'ResourceNotReady: Resource is not in the state CertificateIssued';
    for (let i = 0; i < 60; i++) {
      try {
        const resp = await this.getCertificate(params);
        return resp; // for status 200
      } catch (err) {
        if (!["RequestInProgressException"].includes(err.shortCode)) throw err;
      }
      await new Promise(r => setTimeout(r, 3000));
    }
    throw new Error(errMessage);
  }

  /**
   * Wait until a Audit Report is created
   * Checks state up to 60 times, 3 seconds apart (about 3 minutes max wait time).
   */
  async waitForAuditReportCreated(
    params: RequestConfig & s.DescribeCertificateAuthorityAuditReportRequest,
  ): Promise<s.DescribeCertificateAuthorityAuditReportResponse> {
    const errMessage = 'ResourceNotReady: Resource is not in the state AuditReportCreated';
    for (let i = 0; i < 60; i++) {
      const resp = await this.describeCertificateAuthorityAuditReport(params);
      const field = resp?.AuditReportStatus;
      if (field === "SUCCESS") return resp;
      if (field === "FAILED") throw new Error(errMessage);
      await new Promise(r => setTimeout(r, 3000));
    }
    throw new Error(errMessage);
  }

}

function fromCertificateAuthorityConfiguration(input?: s.CertificateAuthorityConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    KeyAlgorithm: input["KeyAlgorithm"],
    SigningAlgorithm: input["SigningAlgorithm"],
    Subject: fromASN1Subject(input["Subject"]),
    CsrExtensions: fromCsrExtensions(input["CsrExtensions"]),
  }
}
function toCertificateAuthorityConfiguration(root: jsonP.JSONValue): s.CertificateAuthorityConfiguration {
  return jsonP.readObj({
    required: {
      "KeyAlgorithm": (x: jsonP.JSONValue) => cmnP.readEnum<s.KeyAlgorithm>(x),
      "SigningAlgorithm": (x: jsonP.JSONValue) => cmnP.readEnum<s.SigningAlgorithm>(x),
      "Subject": toASN1Subject,
    },
    optional: {
      "CsrExtensions": toCsrExtensions,
    },
  }, root);
}

function fromASN1Subject(input?: s.ASN1Subject | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Country: input["Country"],
    Organization: input["Organization"],
    OrganizationalUnit: input["OrganizationalUnit"],
    DistinguishedNameQualifier: input["DistinguishedNameQualifier"],
    State: input["State"],
    CommonName: input["CommonName"],
    SerialNumber: input["SerialNumber"],
    Locality: input["Locality"],
    Title: input["Title"],
    Surname: input["Surname"],
    GivenName: input["GivenName"],
    Initials: input["Initials"],
    Pseudonym: input["Pseudonym"],
    GenerationQualifier: input["GenerationQualifier"],
  }
}
function toASN1Subject(root: jsonP.JSONValue): s.ASN1Subject {
  return jsonP.readObj({
    required: {},
    optional: {
      "Country": "s",
      "Organization": "s",
      "OrganizationalUnit": "s",
      "DistinguishedNameQualifier": "s",
      "State": "s",
      "CommonName": "s",
      "SerialNumber": "s",
      "Locality": "s",
      "Title": "s",
      "Surname": "s",
      "GivenName": "s",
      "Initials": "s",
      "Pseudonym": "s",
      "GenerationQualifier": "s",
    },
  }, root);
}

function fromCsrExtensions(input?: s.CsrExtensions | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    KeyUsage: fromKeyUsage(input["KeyUsage"]),
    SubjectInformationAccess: input["SubjectInformationAccess"]?.map(x => fromAccessDescription(x)),
  }
}
function toCsrExtensions(root: jsonP.JSONValue): s.CsrExtensions {
  return jsonP.readObj({
    required: {},
    optional: {
      "KeyUsage": toKeyUsage,
      "SubjectInformationAccess": [toAccessDescription],
    },
  }, root);
}

function fromKeyUsage(input?: s.KeyUsage | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DigitalSignature: input["DigitalSignature"],
    NonRepudiation: input["NonRepudiation"],
    KeyEncipherment: input["KeyEncipherment"],
    DataEncipherment: input["DataEncipherment"],
    KeyAgreement: input["KeyAgreement"],
    KeyCertSign: input["KeyCertSign"],
    CRLSign: input["CRLSign"],
    EncipherOnly: input["EncipherOnly"],
    DecipherOnly: input["DecipherOnly"],
  }
}
function toKeyUsage(root: jsonP.JSONValue): s.KeyUsage {
  return jsonP.readObj({
    required: {},
    optional: {
      "DigitalSignature": "b",
      "NonRepudiation": "b",
      "KeyEncipherment": "b",
      "DataEncipherment": "b",
      "KeyAgreement": "b",
      "KeyCertSign": "b",
      "CRLSign": "b",
      "EncipherOnly": "b",
      "DecipherOnly": "b",
    },
  }, root);
}

function fromAccessDescription(input?: s.AccessDescription | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    AccessMethod: fromAccessMethod(input["AccessMethod"]),
    AccessLocation: fromGeneralName(input["AccessLocation"]),
  }
}
function toAccessDescription(root: jsonP.JSONValue): s.AccessDescription {
  return jsonP.readObj({
    required: {
      "AccessMethod": toAccessMethod,
      "AccessLocation": toGeneralName,
    },
    optional: {},
  }, root);
}

function fromAccessMethod(input?: s.AccessMethod | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CustomObjectIdentifier: input["CustomObjectIdentifier"],
    AccessMethodType: input["AccessMethodType"],
  }
}
function toAccessMethod(root: jsonP.JSONValue): s.AccessMethod {
  return jsonP.readObj({
    required: {},
    optional: {
      "CustomObjectIdentifier": "s",
      "AccessMethodType": (x: jsonP.JSONValue) => cmnP.readEnum<s.AccessMethodType>(x),
    },
  }, root);
}

function fromGeneralName(input?: s.GeneralName | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    OtherName: fromOtherName(input["OtherName"]),
    Rfc822Name: input["Rfc822Name"],
    DnsName: input["DnsName"],
    DirectoryName: fromASN1Subject(input["DirectoryName"]),
    EdiPartyName: fromEdiPartyName(input["EdiPartyName"]),
    UniformResourceIdentifier: input["UniformResourceIdentifier"],
    IpAddress: input["IpAddress"],
    RegisteredId: input["RegisteredId"],
  }
}
function toGeneralName(root: jsonP.JSONValue): s.GeneralName {
  return jsonP.readObj({
    required: {},
    optional: {
      "OtherName": toOtherName,
      "Rfc822Name": "s",
      "DnsName": "s",
      "DirectoryName": toASN1Subject,
      "EdiPartyName": toEdiPartyName,
      "UniformResourceIdentifier": "s",
      "IpAddress": "s",
      "RegisteredId": "s",
    },
  }, root);
}

function fromOtherName(input?: s.OtherName | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    TypeId: input["TypeId"],
    Value: input["Value"],
  }
}
function toOtherName(root: jsonP.JSONValue): s.OtherName {
  return jsonP.readObj({
    required: {
      "TypeId": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

function fromEdiPartyName(input?: s.EdiPartyName | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PartyName: input["PartyName"],
    NameAssigner: input["NameAssigner"],
  }
}
function toEdiPartyName(root: jsonP.JSONValue): s.EdiPartyName {
  return jsonP.readObj({
    required: {
      "PartyName": "s",
    },
    optional: {
      "NameAssigner": "s",
    },
  }, root);
}

function fromRevocationConfiguration(input?: s.RevocationConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CrlConfiguration: fromCrlConfiguration(input["CrlConfiguration"]),
  }
}
function toRevocationConfiguration(root: jsonP.JSONValue): s.RevocationConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "CrlConfiguration": toCrlConfiguration,
    },
  }, root);
}

function fromCrlConfiguration(input?: s.CrlConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Enabled: input["Enabled"],
    ExpirationInDays: input["ExpirationInDays"],
    CustomCname: input["CustomCname"],
    S3BucketName: input["S3BucketName"],
  }
}
function toCrlConfiguration(root: jsonP.JSONValue): s.CrlConfiguration {
  return jsonP.readObj({
    required: {
      "Enabled": "b",
    },
    optional: {
      "ExpirationInDays": "n",
      "CustomCname": "s",
      "S3BucketName": "s",
    },
  }, root);
}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
    },
    optional: {
      "Value": "s",
    },
  }, root);
}

function fromApiPassthrough(input?: s.ApiPassthrough | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Extensions: fromExtensions(input["Extensions"]),
    Subject: fromASN1Subject(input["Subject"]),
  }
}

function fromExtensions(input?: s.Extensions | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CertificatePolicies: input["CertificatePolicies"]?.map(x => fromPolicyInformation(x)),
    ExtendedKeyUsage: input["ExtendedKeyUsage"]?.map(x => fromExtendedKeyUsage(x)),
    KeyUsage: fromKeyUsage(input["KeyUsage"]),
    SubjectAlternativeNames: input["SubjectAlternativeNames"]?.map(x => fromGeneralName(x)),
  }
}

function fromPolicyInformation(input?: s.PolicyInformation | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CertPolicyId: input["CertPolicyId"],
    PolicyQualifiers: input["PolicyQualifiers"]?.map(x => fromPolicyQualifierInfo(x)),
  }
}

function fromPolicyQualifierInfo(input?: s.PolicyQualifierInfo | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PolicyQualifierId: input["PolicyQualifierId"],
    Qualifier: fromQualifier(input["Qualifier"]),
  }
}

function fromQualifier(input?: s.Qualifier | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CpsUri: input["CpsUri"],
  }
}

function fromExtendedKeyUsage(input?: s.ExtendedKeyUsage | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ExtendedKeyUsageType: input["ExtendedKeyUsageType"],
    ExtendedKeyUsageObjectIdentifier: input["ExtendedKeyUsageObjectIdentifier"],
  }
}

function fromValidity(input?: s.Validity | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Value: input["Value"],
    Type: input["Type"],
  }
}

function toCertificateAuthority(root: jsonP.JSONValue): s.CertificateAuthority {
  return jsonP.readObj({
    required: {},
    optional: {
      "Arn": "s",
      "OwnerAccount": "s",
      "CreatedAt": "d",
      "LastStateChangeAt": "d",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.CertificateAuthorityType>(x),
      "Serial": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.CertificateAuthorityStatus>(x),
      "NotBefore": "d",
      "NotAfter": "d",
      "FailureReason": (x: jsonP.JSONValue) => cmnP.readEnum<s.FailureReason>(x),
      "CertificateAuthorityConfiguration": toCertificateAuthorityConfiguration,
      "RevocationConfiguration": toRevocationConfiguration,
      "RestorableUntil": "d",
    },
  }, root);
}

function toPermission(root: jsonP.JSONValue): s.Permission {
  return jsonP.readObj({
    required: {},
    optional: {
      "CertificateAuthorityArn": "s",
      "CreatedAt": "d",
      "Principal": "s",
      "SourceAccount": "s",
      "Actions": [(x: jsonP.JSONValue) => cmnP.readEnum<s.ActionType>(x)],
      "Policy": "s",
    },
  }, root);
}
