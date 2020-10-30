// Autogenerated API client for: AWS Import/Export

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { readXmlResult, readXmlMap, parseTimestamp, XmlNode } from '../../encoding/xml.ts';
import * as prt from "../../encoding/querystring.ts";

export default class ImportExport {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ImportExport.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "uid": "importexport-2010-06-01",
    "apiVersion": "2010-06-01",
    "endpointPrefix": "importexport",
    "globalEndpoint": "importexport.amazonaws.com",
    "serviceFullName": "AWS Import/Export",
    "serviceId": "ImportExport",
    "signatureVersion": "v2",
    "xmlNamespace": "http://importexport.amazonaws.com/doc/2010-06-01/",
    "protocol": "query"
  };

  async cancelJob(
    {abortSignal, ...params}: RequestConfig & CancelJobInput,
  ): Promise<CancelJobOutput> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"JobId", (params["JobId"] ?? '').toString());
    if ("APIVersion" in params) body.append(prefix+"APIVersion", (params["APIVersion"] ?? '').toString());
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CancelJob",
      requestUri: "/?Operation=CancelJob",
    });
    const xml = readXmlResult(await resp.text(), "CancelJobResult");
    return {
      Success: xml.first("Success", false, x => x.content === 'true'),
    };
  }

  async createJob(
    {abortSignal, ...params}: RequestConfig & CreateJobInput,
  ): Promise<CreateJobOutput> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"JobType", (params["JobType"] ?? '').toString());
    body.append(prefix+"Manifest", (params["Manifest"] ?? '').toString());
    if ("ManifestAddendum" in params) body.append(prefix+"ManifestAddendum", (params["ManifestAddendum"] ?? '').toString());
    body.append(prefix+"ValidateOnly", (params["ValidateOnly"] ?? '').toString());
    if ("APIVersion" in params) body.append(prefix+"APIVersion", (params["APIVersion"] ?? '').toString());
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateJob",
      requestUri: "/?Operation=CreateJob",
    });
    const xml = readXmlResult(await resp.text(), "CreateJobResult");
    return {
      ...xml.strings({
        optional: {"JobId":true,"Signature":true,"SignatureFileContents":true,"WarningMessage":true},
      }),
      JobType: xml.first("JobType", false, x => (x.content ?? '') as JobType),
      ArtifactList: xml.getList("ArtifactList", "member").map(Artifact_Parse),
    };
  }

  async getShippingLabel(
    {abortSignal, ...params}: RequestConfig & GetShippingLabelInput,
  ): Promise<GetShippingLabelOutput> {
    const body = new URLSearchParams;
    const prefix = '';
    if (params["jobIds"]) prt.appendList(body, prefix+"jobIds", params["jobIds"], {"entryPrefix":".member."})
    if ("name" in params) body.append(prefix+"name", (params["name"] ?? '').toString());
    if ("company" in params) body.append(prefix+"company", (params["company"] ?? '').toString());
    if ("phoneNumber" in params) body.append(prefix+"phoneNumber", (params["phoneNumber"] ?? '').toString());
    if ("country" in params) body.append(prefix+"country", (params["country"] ?? '').toString());
    if ("stateOrProvince" in params) body.append(prefix+"stateOrProvince", (params["stateOrProvince"] ?? '').toString());
    if ("city" in params) body.append(prefix+"city", (params["city"] ?? '').toString());
    if ("postalCode" in params) body.append(prefix+"postalCode", (params["postalCode"] ?? '').toString());
    if ("street1" in params) body.append(prefix+"street1", (params["street1"] ?? '').toString());
    if ("street2" in params) body.append(prefix+"street2", (params["street2"] ?? '').toString());
    if ("street3" in params) body.append(prefix+"street3", (params["street3"] ?? '').toString());
    if ("APIVersion" in params) body.append(prefix+"APIVersion", (params["APIVersion"] ?? '').toString());
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetShippingLabel",
      requestUri: "/?Operation=GetShippingLabel",
    });
    const xml = readXmlResult(await resp.text(), "GetShippingLabelResult");
    return xml.strings({
      optional: {"ShippingLabelURL":true,"Warning":true},
    });
  }

  async getStatus(
    {abortSignal, ...params}: RequestConfig & GetStatusInput,
  ): Promise<GetStatusOutput> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"JobId", (params["JobId"] ?? '').toString());
    if ("APIVersion" in params) body.append(prefix+"APIVersion", (params["APIVersion"] ?? '').toString());
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetStatus",
      requestUri: "/?Operation=GetStatus",
    });
    const xml = readXmlResult(await resp.text(), "GetStatusResult");
    return {
      ...xml.strings({
        optional: {"JobId":true,"LocationCode":true,"LocationMessage":true,"ProgressCode":true,"ProgressMessage":true,"Carrier":true,"TrackingNumber":true,"LogBucket":true,"LogKey":true,"Signature":true,"SignatureFileContents":true,"CurrentManifest":true},
      }),
      JobType: xml.first("JobType", false, x => (x.content ?? '') as JobType),
      ErrorCount: xml.first("ErrorCount", false, x => parseInt(x.content ?? '0')),
      CreationDate: xml.first("CreationDate", false, x => parseTimestamp(x.content)),
      ArtifactList: xml.getList("ArtifactList", "member").map(Artifact_Parse),
    };
  }

  async listJobs(
    {abortSignal, ...params}: RequestConfig & ListJobsInput = {},
  ): Promise<ListJobsOutput> {
    const body = new URLSearchParams;
    const prefix = '';
    if ("MaxJobs" in params) body.append(prefix+"MaxJobs", (params["MaxJobs"] ?? '').toString());
    if ("Marker" in params) body.append(prefix+"Marker", (params["Marker"] ?? '').toString());
    if ("APIVersion" in params) body.append(prefix+"APIVersion", (params["APIVersion"] ?? '').toString());
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListJobs",
      requestUri: "/?Operation=ListJobs",
    });
    const xml = readXmlResult(await resp.text(), "ListJobsResult");
    return {
      Jobs: xml.getList("Jobs", "member").map(Job_Parse),
      IsTruncated: xml.first("IsTruncated", false, x => x.content === 'true'),
    };
  }

  async updateJob(
    {abortSignal, ...params}: RequestConfig & UpdateJobInput,
  ): Promise<UpdateJobOutput> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"JobId", (params["JobId"] ?? '').toString());
    body.append(prefix+"Manifest", (params["Manifest"] ?? '').toString());
    body.append(prefix+"JobType", (params["JobType"] ?? '').toString());
    body.append(prefix+"ValidateOnly", (params["ValidateOnly"] ?? '').toString());
    if ("APIVersion" in params) body.append(prefix+"APIVersion", (params["APIVersion"] ?? '').toString());
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateJob",
      requestUri: "/?Operation=UpdateJob",
    });
    const xml = readXmlResult(await resp.text(), "UpdateJobResult");
    return {
      ...xml.strings({
        optional: {"WarningMessage":true},
      }),
      Success: xml.first("Success", false, x => x.content === 'true'),
      ArtifactList: xml.getList("ArtifactList", "member").map(Artifact_Parse),
    };
  }

}

// refs: 1 - tags: named, input
export interface CancelJobInput {
  JobId: string;
  APIVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateJobInput {
  JobType: JobType;
  Manifest: string;
  ManifestAddendum?: string | null;
  ValidateOnly: boolean;
  APIVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface GetShippingLabelInput {
  jobIds: string[];
  name?: string | null;
  company?: string | null;
  phoneNumber?: string | null;
  country?: string | null;
  stateOrProvince?: string | null;
  city?: string | null;
  postalCode?: string | null;
  street1?: string | null;
  street2?: string | null;
  street3?: string | null;
  APIVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface GetStatusInput {
  JobId: string;
  APIVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface ListJobsInput {
  MaxJobs?: number | null;
  Marker?: string | null;
  APIVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateJobInput {
  JobId: string;
  Manifest: string;
  JobType: JobType;
  ValidateOnly: boolean;
  APIVersion?: string | null;
}

// refs: 1 - tags: named, output
export interface CancelJobOutput {
  Success?: boolean | null;
}

// refs: 1 - tags: named, output
export interface CreateJobOutput {
  JobId?: string | null;
  JobType?: JobType | null;
  Signature?: string | null;
  SignatureFileContents?: string | null;
  WarningMessage?: string | null;
  ArtifactList: Artifact[];
}

// refs: 1 - tags: named, output
export interface GetShippingLabelOutput {
  ShippingLabelURL?: string | null;
  Warning?: string | null;
}

// refs: 1 - tags: named, output
export interface GetStatusOutput {
  JobId?: string | null;
  JobType?: JobType | null;
  LocationCode?: string | null;
  LocationMessage?: string | null;
  ProgressCode?: string | null;
  ProgressMessage?: string | null;
  Carrier?: string | null;
  TrackingNumber?: string | null;
  LogBucket?: string | null;
  LogKey?: string | null;
  ErrorCount?: number | null;
  Signature?: string | null;
  SignatureFileContents?: string | null;
  CurrentManifest?: string | null;
  CreationDate?: Date | number | null;
  ArtifactList: Artifact[];
}

// refs: 1 - tags: named, output
export interface ListJobsOutput {
  Jobs: Job[];
  IsTruncated?: boolean | null;
}

// refs: 1 - tags: named, output
export interface UpdateJobOutput {
  Success?: boolean | null;
  WarningMessage?: string | null;
  ArtifactList: Artifact[];
}

// refs: 5 - tags: input, named, enum, output
export type JobType =
| "Import"
| "Export"
;



// refs: 3 - tags: output, named, interface
export interface Artifact {
  Description?: string | null;
  URL?: string | null;
}
function Artifact_Parse(node: XmlNode): Artifact {
  return node.strings({
    optional: {"Description":true,"URL":true},
  });
}

// refs: 1 - tags: output, named, interface
export interface Job {
  JobId?: string | null;
  CreationDate?: Date | number | null;
  IsCanceled?: boolean | null;
  JobType?: JobType | null;
}
function Job_Parse(node: XmlNode): Job {
  return {
    ...node.strings({
      optional: {"JobId":true},
    }),
    CreationDate: node.first("CreationDate", false, x => parseTimestamp(x.content)),
    IsCanceled: node.first("IsCanceled", false, x => x.content === 'true'),
    JobType: node.first("JobType", false, x => (x.content ?? '') as JobType),
  };
}