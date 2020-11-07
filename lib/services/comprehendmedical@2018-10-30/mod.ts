// Autogenerated API client for: AWS Comprehend Medical

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

export default class ComprehendMedical {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ComprehendMedical.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-10-30",
    "endpointPrefix": "comprehendmedical",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "ComprehendMedical",
    "serviceFullName": "AWS Comprehend Medical",
    "serviceId": "ComprehendMedical",
    "signatureVersion": "v4",
    "signingName": "comprehendmedical",
    "targetPrefix": "ComprehendMedical_20181030",
    "uid": "comprehendmedical-2018-10-30"
  };

  async describeEntitiesDetectionV2Job(
    {abortSignal, ...params}: RequestConfig & DescribeEntitiesDetectionV2JobRequest,
  ): Promise<DescribeEntitiesDetectionV2JobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEntitiesDetectionV2Job",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async describeICD10CMInferenceJob(
    {abortSignal, ...params}: RequestConfig & DescribeICD10CMInferenceJobRequest,
  ): Promise<DescribeICD10CMInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeICD10CMInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async describePHIDetectionJob(
    {abortSignal, ...params}: RequestConfig & DescribePHIDetectionJobRequest,
  ): Promise<DescribePHIDetectionJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribePHIDetectionJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async describeRxNormInferenceJob(
    {abortSignal, ...params}: RequestConfig & DescribeRxNormInferenceJobRequest,
  ): Promise<DescribeRxNormInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRxNormInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async detectEntities(
    {abortSignal, ...params}: RequestConfig & DetectEntitiesRequest,
  ): Promise<DetectEntitiesResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectEntities",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toEntity],
        "ModelVersion": "s",
      },
      optional: {
        "UnmappedAttributes": [toUnmappedAttribute],
        "PaginationToken": "s",
      },
    }, await resp.json());
  }

  async detectEntitiesV2(
    {abortSignal, ...params}: RequestConfig & DetectEntitiesV2Request,
  ): Promise<DetectEntitiesV2Response> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectEntitiesV2",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toEntity],
        "ModelVersion": "s",
      },
      optional: {
        "UnmappedAttributes": [toUnmappedAttribute],
        "PaginationToken": "s",
      },
    }, await resp.json());
  }

  async detectPHI(
    {abortSignal, ...params}: RequestConfig & DetectPHIRequest,
  ): Promise<DetectPHIResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectPHI",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toEntity],
        "ModelVersion": "s",
      },
      optional: {
        "PaginationToken": "s",
      },
    }, await resp.json());
  }

  async inferICD10CM(
    {abortSignal, ...params}: RequestConfig & InferICD10CMRequest,
  ): Promise<InferICD10CMResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InferICD10CM",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toICD10CMEntity],
      },
      optional: {
        "PaginationToken": "s",
        "ModelVersion": "s",
      },
    }, await resp.json());
  }

  async inferRxNorm(
    {abortSignal, ...params}: RequestConfig & InferRxNormRequest,
  ): Promise<InferRxNormResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InferRxNorm",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toRxNormEntity],
      },
      optional: {
        "PaginationToken": "s",
        "ModelVersion": "s",
      },
    }, await resp.json());
  }

  async listEntitiesDetectionV2Jobs(
    {abortSignal, ...params}: RequestConfig & ListEntitiesDetectionV2JobsRequest = {},
  ): Promise<ListEntitiesDetectionV2JobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListEntitiesDetectionV2Jobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listICD10CMInferenceJobs(
    {abortSignal, ...params}: RequestConfig & ListICD10CMInferenceJobsRequest = {},
  ): Promise<ListICD10CMInferenceJobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListICD10CMInferenceJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPHIDetectionJobs(
    {abortSignal, ...params}: RequestConfig & ListPHIDetectionJobsRequest = {},
  ): Promise<ListPHIDetectionJobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPHIDetectionJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRxNormInferenceJobs(
    {abortSignal, ...params}: RequestConfig & ListRxNormInferenceJobsRequest = {},
  ): Promise<ListRxNormInferenceJobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListRxNormInferenceJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async startEntitiesDetectionV2Job(
    {abortSignal, ...params}: RequestConfig & StartEntitiesDetectionV2JobRequest,
  ): Promise<StartEntitiesDetectionV2JobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartEntitiesDetectionV2Job",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startICD10CMInferenceJob(
    {abortSignal, ...params}: RequestConfig & StartICD10CMInferenceJobRequest,
  ): Promise<StartICD10CMInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartICD10CMInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startPHIDetectionJob(
    {abortSignal, ...params}: RequestConfig & StartPHIDetectionJobRequest,
  ): Promise<StartPHIDetectionJobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartPHIDetectionJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startRxNormInferenceJob(
    {abortSignal, ...params}: RequestConfig & StartRxNormInferenceJobRequest,
  ): Promise<StartRxNormInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartRxNormInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopEntitiesDetectionV2Job(
    {abortSignal, ...params}: RequestConfig & StopEntitiesDetectionV2JobRequest,
  ): Promise<StopEntitiesDetectionV2JobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopEntitiesDetectionV2Job",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopICD10CMInferenceJob(
    {abortSignal, ...params}: RequestConfig & StopICD10CMInferenceJobRequest,
  ): Promise<StopICD10CMInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopICD10CMInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopPHIDetectionJob(
    {abortSignal, ...params}: RequestConfig & StopPHIDetectionJobRequest,
  ): Promise<StopPHIDetectionJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopPHIDetectionJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopRxNormInferenceJob(
    {abortSignal, ...params}: RequestConfig & StopRxNormInferenceJobRequest,
  ): Promise<StopRxNormInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopRxNormInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface DescribeEntitiesDetectionV2JobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface DescribeICD10CMInferenceJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface DescribePHIDetectionJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface DescribeRxNormInferenceJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface DetectEntitiesRequest {
  Text: string;
}

// refs: 1 - tags: named, input
export interface DetectEntitiesV2Request {
  Text: string;
}

// refs: 1 - tags: named, input
export interface DetectPHIRequest {
  Text: string;
}

// refs: 1 - tags: named, input
export interface InferICD10CMRequest {
  Text: string;
}

// refs: 1 - tags: named, input
export interface InferRxNormRequest {
  Text: string;
}

// refs: 1 - tags: named, input
export interface ListEntitiesDetectionV2JobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListICD10CMInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListPHIDetectionJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRxNormInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface StartEntitiesDetectionV2JobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string | null;
  ClientRequestToken?: string | null;
  KMSKey?: string | null;
  LanguageCode: LanguageCode;
}

// refs: 1 - tags: named, input
export interface StartICD10CMInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string | null;
  ClientRequestToken?: string | null;
  KMSKey?: string | null;
  LanguageCode: LanguageCode;
}

// refs: 1 - tags: named, input
export interface StartPHIDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string | null;
  ClientRequestToken?: string | null;
  KMSKey?: string | null;
  LanguageCode: LanguageCode;
}

// refs: 1 - tags: named, input
export interface StartRxNormInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string | null;
  ClientRequestToken?: string | null;
  KMSKey?: string | null;
  LanguageCode: LanguageCode;
}

// refs: 1 - tags: named, input
export interface StopEntitiesDetectionV2JobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface StopICD10CMInferenceJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface StopPHIDetectionJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface StopRxNormInferenceJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, output
export interface DescribeEntitiesDetectionV2JobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | null;
}

// refs: 1 - tags: named, output
export interface DescribeICD10CMInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | null;
}

// refs: 1 - tags: named, output
export interface DescribePHIDetectionJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | null;
}

// refs: 1 - tags: named, output
export interface DescribeRxNormInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties | null;
}

// refs: 1 - tags: named, output
export interface DetectEntitiesResponse {
  Entities: Entity[];
  UnmappedAttributes?: UnmappedAttribute[] | null;
  PaginationToken?: string | null;
  ModelVersion: string;
}

// refs: 1 - tags: named, output
export interface DetectEntitiesV2Response {
  Entities: Entity[];
  UnmappedAttributes?: UnmappedAttribute[] | null;
  PaginationToken?: string | null;
  ModelVersion: string;
}

// refs: 1 - tags: named, output
export interface DetectPHIResponse {
  Entities: Entity[];
  PaginationToken?: string | null;
  ModelVersion: string;
}

// refs: 1 - tags: named, output
export interface InferICD10CMResponse {
  Entities: ICD10CMEntity[];
  PaginationToken?: string | null;
  ModelVersion?: string | null;
}

// refs: 1 - tags: named, output
export interface InferRxNormResponse {
  Entities: RxNormEntity[];
  PaginationToken?: string | null;
  ModelVersion?: string | null;
}

// refs: 1 - tags: named, output
export interface ListEntitiesDetectionV2JobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListICD10CMInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListPHIDetectionJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRxNormInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartEntitiesDetectionV2JobResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StartICD10CMInferenceJobResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StartPHIDetectionJobResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StartRxNormInferenceJobResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StopEntitiesDetectionV2JobResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StopICD10CMInferenceJobResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StopPHIDetectionJobResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StopRxNormInferenceJobResponse {
  JobId?: string | null;
}

// refs: 4 - tags: input, named, interface
export interface ComprehendMedicalAsyncJobFilter {
  JobName?: string | null;
  JobStatus?: JobStatus | null;
  SubmitTimeBefore?: Date | number | null;
  SubmitTimeAfter?: Date | number | null;
}
function fromComprehendMedicalAsyncJobFilter(input?: ComprehendMedicalAsyncJobFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    JobName: input["JobName"],
    JobStatus: input["JobStatus"],
    SubmitTimeBefore: jsonP.serializeDate_unixTimestamp(input["SubmitTimeBefore"]),
    SubmitTimeAfter: jsonP.serializeDate_unixTimestamp(input["SubmitTimeAfter"]),
  }
}

// refs: 12 - tags: input, named, enum, output
export type JobStatus =
| "SUBMITTED"
| "IN_PROGRESS"
| "COMPLETED"
| "PARTIAL_SUCCESS"
| "FAILED"
| "STOP_REQUESTED"
| "STOPPED"
| cmnP.UnexpectedEnumValue;

// refs: 12 - tags: input, named, interface, output
export interface InputDataConfig {
  S3Bucket: string;
  S3Key?: string | null;
}
function fromInputDataConfig(input?: InputDataConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Bucket: input["S3Bucket"],
    S3Key: input["S3Key"],
  }
}
function toInputDataConfig(root: jsonP.JSONValue): InputDataConfig {
  return jsonP.readObj({
    required: {
      "S3Bucket": "s",
    },
    optional: {
      "S3Key": "s",
    },
  }, root);
}

// refs: 12 - tags: input, named, interface, output
export interface OutputDataConfig {
  S3Bucket: string;
  S3Key?: string | null;
}
function fromOutputDataConfig(input?: OutputDataConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Bucket: input["S3Bucket"],
    S3Key: input["S3Key"],
  }
}
function toOutputDataConfig(root: jsonP.JSONValue): OutputDataConfig {
  return jsonP.readObj({
    required: {
      "S3Bucket": "s",
    },
    optional: {
      "S3Key": "s",
    },
  }, root);
}

// refs: 12 - tags: input, named, enum, output
export type LanguageCode =
| "en"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: output, named, interface
export interface ComprehendMedicalAsyncJobProperties {
  JobId?: string | null;
  JobName?: string | null;
  JobStatus?: JobStatus | null;
  Message?: string | null;
  SubmitTime?: Date | number | null;
  EndTime?: Date | number | null;
  ExpirationTime?: Date | number | null;
  InputDataConfig?: InputDataConfig | null;
  OutputDataConfig?: OutputDataConfig | null;
  LanguageCode?: LanguageCode | null;
  DataAccessRoleArn?: string | null;
  ManifestFilePath?: string | null;
  KMSKey?: string | null;
  ModelVersion?: string | null;
}
function toComprehendMedicalAsyncJobProperties(root: jsonP.JSONValue): ComprehendMedicalAsyncJobProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "JobId": "s",
      "JobName": "s",
      "JobStatus": (x: jsonP.JSONValue) => cmnP.readEnum<JobStatus>(x),
      "Message": "s",
      "SubmitTime": "d",
      "EndTime": "d",
      "ExpirationTime": "d",
      "InputDataConfig": toInputDataConfig,
      "OutputDataConfig": toOutputDataConfig,
      "LanguageCode": (x: jsonP.JSONValue) => cmnP.readEnum<LanguageCode>(x),
      "DataAccessRoleArn": "s",
      "ManifestFilePath": "s",
      "KMSKey": "s",
      "ModelVersion": "s",
    },
  }, root);
}

// refs: 3 - tags: output, named, interface
export interface Entity {
  Id?: number | null;
  BeginOffset?: number | null;
  EndOffset?: number | null;
  Score?: number | null;
  Text?: string | null;
  Category?: EntityType | null;
  Type?: EntitySubType | null;
  Traits?: Trait[] | null;
  Attributes?: Attribute[] | null;
}
function toEntity(root: jsonP.JSONValue): Entity {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Score": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<EntityType>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<EntitySubType>(x),
      "Traits": [toTrait],
      "Attributes": [toAttribute],
    },
  }, root);
}

// refs: 10 - tags: output, named, enum
export type EntityType =
| "MEDICATION"
| "MEDICAL_CONDITION"
| "PROTECTED_HEALTH_INFORMATION"
| "TEST_TREATMENT_PROCEDURE"
| "ANATOMY"
| "TIME_EXPRESSION"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: output, named, enum
export type EntitySubType =
| "NAME"
| "DOSAGE"
| "ROUTE_OR_MODE"
| "FORM"
| "FREQUENCY"
| "DURATION"
| "GENERIC_NAME"
| "BRAND_NAME"
| "STRENGTH"
| "RATE"
| "ACUITY"
| "TEST_NAME"
| "TEST_VALUE"
| "TEST_UNITS"
| "PROCEDURE_NAME"
| "TREATMENT_NAME"
| "DATE"
| "AGE"
| "CONTACT_POINT"
| "EMAIL"
| "IDENTIFIER"
| "URL"
| "ADDRESS"
| "PROFESSION"
| "SYSTEM_ORGAN_SITE"
| "DIRECTION"
| "QUALITY"
| "QUANTITY"
| "TIME_EXPRESSION"
| "TIME_TO_MEDICATION_NAME"
| "TIME_TO_DX_NAME"
| "TIME_TO_TEST_NAME"
| "TIME_TO_PROCEDURE_NAME"
| "TIME_TO_TREATMENT_NAME"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: output, named, interface
export interface Trait {
  Name?: AttributeName | null;
  Score?: number | null;
}
function toTrait(root: jsonP.JSONValue): Trait {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": (x: jsonP.JSONValue) => cmnP.readEnum<AttributeName>(x),
      "Score": "n",
    },
  }, root);
}

// refs: 8 - tags: output, named, enum
export type AttributeName =
| "SIGN"
| "SYMPTOM"
| "DIAGNOSIS"
| "NEGATION"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, interface
export interface Attribute {
  Type?: EntitySubType | null;
  Score?: number | null;
  RelationshipScore?: number | null;
  RelationshipType?: RelationshipType | null;
  Id?: number | null;
  BeginOffset?: number | null;
  EndOffset?: number | null;
  Text?: string | null;
  Category?: EntityType | null;
  Traits?: Trait[] | null;
}
function toAttribute(root: jsonP.JSONValue): Attribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<EntitySubType>(x),
      "Score": "n",
      "RelationshipScore": "n",
      "RelationshipType": (x: jsonP.JSONValue) => cmnP.readEnum<RelationshipType>(x),
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<EntityType>(x),
      "Traits": [toTrait],
    },
  }, root);
}

// refs: 5 - tags: output, named, enum
export type RelationshipType =
| "EVERY"
| "WITH_DOSAGE"
| "ADMINISTERED_VIA"
| "FOR"
| "NEGATIVE"
| "OVERLAP"
| "DOSAGE"
| "ROUTE_OR_MODE"
| "FORM"
| "FREQUENCY"
| "DURATION"
| "STRENGTH"
| "RATE"
| "ACUITY"
| "TEST_VALUE"
| "TEST_UNITS"
| "DIRECTION"
| "SYSTEM_ORGAN_SITE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface UnmappedAttribute {
  Type?: EntityType | null;
  Attribute?: Attribute | null;
}
function toUnmappedAttribute(root: jsonP.JSONValue): UnmappedAttribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<EntityType>(x),
      "Attribute": toAttribute,
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ICD10CMEntity {
  Id?: number | null;
  Text?: string | null;
  Category?: ICD10CMEntityCategory | null;
  Type?: ICD10CMEntityType | null;
  Score?: number | null;
  BeginOffset?: number | null;
  EndOffset?: number | null;
  Attributes?: ICD10CMAttribute[] | null;
  Traits?: ICD10CMTrait[] | null;
  ICD10CMConcepts?: ICD10CMConcept[] | null;
}
function toICD10CMEntity(root: jsonP.JSONValue): ICD10CMEntity {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<ICD10CMEntityCategory>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<ICD10CMEntityType>(x),
      "Score": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Attributes": [toICD10CMAttribute],
      "Traits": [toICD10CMTrait],
      "ICD10CMConcepts": [toICD10CMConcept],
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type ICD10CMEntityCategory =
| "MEDICAL_CONDITION"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type ICD10CMEntityType =
| "DX_NAME"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ICD10CMAttribute {
  Type?: ICD10CMAttributeType | null;
  Score?: number | null;
  RelationshipScore?: number | null;
  Id?: number | null;
  BeginOffset?: number | null;
  EndOffset?: number | null;
  Text?: string | null;
  Traits?: ICD10CMTrait[] | null;
}
function toICD10CMAttribute(root: jsonP.JSONValue): ICD10CMAttribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<ICD10CMAttributeType>(x),
      "Score": "n",
      "RelationshipScore": "n",
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Text": "s",
      "Traits": [toICD10CMTrait],
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type ICD10CMAttributeType =
| "ACUITY"
| "DIRECTION"
| "SYSTEM_ORGAN_SITE"
| "QUALITY"
| "QUANTITY"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface ICD10CMTrait {
  Name?: ICD10CMTraitName | null;
  Score?: number | null;
}
function toICD10CMTrait(root: jsonP.JSONValue): ICD10CMTrait {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": (x: jsonP.JSONValue) => cmnP.readEnum<ICD10CMTraitName>(x),
      "Score": "n",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type ICD10CMTraitName =
| "NEGATION"
| "DIAGNOSIS"
| "SIGN"
| "SYMPTOM"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ICD10CMConcept {
  Description?: string | null;
  Code?: string | null;
  Score?: number | null;
}
function toICD10CMConcept(root: jsonP.JSONValue): ICD10CMConcept {
  return jsonP.readObj({
    required: {},
    optional: {
      "Description": "s",
      "Code": "s",
      "Score": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface RxNormEntity {
  Id?: number | null;
  Text?: string | null;
  Category?: RxNormEntityCategory | null;
  Type?: RxNormEntityType | null;
  Score?: number | null;
  BeginOffset?: number | null;
  EndOffset?: number | null;
  Attributes?: RxNormAttribute[] | null;
  Traits?: RxNormTrait[] | null;
  RxNormConcepts?: RxNormConcept[] | null;
}
function toRxNormEntity(root: jsonP.JSONValue): RxNormEntity {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<RxNormEntityCategory>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<RxNormEntityType>(x),
      "Score": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Attributes": [toRxNormAttribute],
      "Traits": [toRxNormTrait],
      "RxNormConcepts": [toRxNormConcept],
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type RxNormEntityCategory =
| "MEDICATION"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type RxNormEntityType =
| "BRAND_NAME"
| "GENERIC_NAME"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface RxNormAttribute {
  Type?: RxNormAttributeType | null;
  Score?: number | null;
  RelationshipScore?: number | null;
  Id?: number | null;
  BeginOffset?: number | null;
  EndOffset?: number | null;
  Text?: string | null;
  Traits?: RxNormTrait[] | null;
}
function toRxNormAttribute(root: jsonP.JSONValue): RxNormAttribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<RxNormAttributeType>(x),
      "Score": "n",
      "RelationshipScore": "n",
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Text": "s",
      "Traits": [toRxNormTrait],
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type RxNormAttributeType =
| "DOSAGE"
| "DURATION"
| "FORM"
| "FREQUENCY"
| "RATE"
| "ROUTE_OR_MODE"
| "STRENGTH"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface RxNormTrait {
  Name?: RxNormTraitName | null;
  Score?: number | null;
}
function toRxNormTrait(root: jsonP.JSONValue): RxNormTrait {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": (x: jsonP.JSONValue) => cmnP.readEnum<RxNormTraitName>(x),
      "Score": "n",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type RxNormTraitName =
| "NEGATION"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface RxNormConcept {
  Description?: string | null;
  Code?: string | null;
  Score?: number | null;
}
function toRxNormConcept(root: jsonP.JSONValue): RxNormConcept {
  return jsonP.readObj({
    required: {},
    optional: {
      "Description": "s",
      "Code": "s",
      "Score": "n",
    },
  }, root);
}
