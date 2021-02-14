// Autogenerated API structures for: Synthetics

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateCanaryRequest {
  Name: string;
  Code: CanaryCodeInput;
  ArtifactS3Location: string;
  ExecutionRoleArn: string;
  Schedule: CanaryScheduleInput;
  RunConfig?: CanaryRunConfigInput | null;
  SuccessRetentionPeriodInDays?: number | null;
  FailureRetentionPeriodInDays?: number | null;
  RuntimeVersion: string;
  VpcConfig?: VpcConfigInput | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteCanaryRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DescribeCanariesRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeCanariesLastRunRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeRuntimeVersionsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetCanaryRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface GetCanaryRunsRequest {
  Name: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface StartCanaryRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface StopCanaryRequest {
  Name: string;
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
export interface UpdateCanaryRequest {
  Name: string;
  Code?: CanaryCodeInput | null;
  ExecutionRoleArn?: string | null;
  RuntimeVersion?: string | null;
  Schedule?: CanaryScheduleInput | null;
  RunConfig?: CanaryRunConfigInput | null;
  SuccessRetentionPeriodInDays?: number | null;
  FailureRetentionPeriodInDays?: number | null;
  VpcConfig?: VpcConfigInput | null;
}

// refs: 1 - tags: named, output
export interface CreateCanaryResponse {
  Canary?: Canary | null;
}

// refs: 1 - tags: named, output
export interface DeleteCanaryResponse {
}

// refs: 1 - tags: named, output
export interface DescribeCanariesResponse {
  Canaries?: Canary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeCanariesLastRunResponse {
  CanariesLastRun?: CanaryLastRun[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeRuntimeVersionsResponse {
  RuntimeVersions?: RuntimeVersion[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetCanaryResponse {
  Canary?: Canary | null;
}

// refs: 1 - tags: named, output
export interface GetCanaryRunsResponse {
  CanaryRuns?: CanaryRun[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface StartCanaryResponse {
}

// refs: 1 - tags: named, output
export interface StopCanaryResponse {
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateCanaryResponse {
}

// refs: 2 - tags: input, named, interface
export interface CanaryCodeInput {
  S3Bucket?: string | null;
  S3Key?: string | null;
  S3Version?: string | null;
  ZipFile?: Uint8Array | string | null;
  Handler: string;
}

// refs: 2 - tags: input, named, interface
export interface CanaryScheduleInput {
  Expression: string;
  DurationInSeconds?: number | null;
}

// refs: 2 - tags: input, named, interface
export interface CanaryRunConfigInput {
  TimeoutInSeconds?: number | null;
  MemoryInMB?: number | null;
  ActiveTracing?: boolean | null;
  EnvironmentVariables?: { [key: string]: string | null | undefined } | null;
}

// refs: 2 - tags: input, named, interface
export interface VpcConfigInput {
  SubnetIds?: string[] | null;
  SecurityGroupIds?: string[] | null;
}

// refs: 3 - tags: output, named, interface
export interface Canary {
  Id?: string | null;
  Name?: string | null;
  Code?: CanaryCodeOutput | null;
  ExecutionRoleArn?: string | null;
  Schedule?: CanaryScheduleOutput | null;
  RunConfig?: CanaryRunConfigOutput | null;
  SuccessRetentionPeriodInDays?: number | null;
  FailureRetentionPeriodInDays?: number | null;
  Status?: CanaryStatus | null;
  Timeline?: CanaryTimeline | null;
  ArtifactS3Location?: string | null;
  EngineArn?: string | null;
  RuntimeVersion?: string | null;
  VpcConfig?: VpcConfigOutput | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 3 - tags: output, named, interface
export interface CanaryCodeOutput {
  SourceLocationArn?: string | null;
  Handler?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface CanaryScheduleOutput {
  Expression?: string | null;
  DurationInSeconds?: number | null;
}

// refs: 3 - tags: output, named, interface
export interface CanaryRunConfigOutput {
  TimeoutInSeconds?: number | null;
  MemoryInMB?: number | null;
  ActiveTracing?: boolean | null;
}

// refs: 3 - tags: output, named, interface
export interface CanaryStatus {
  State?: CanaryState | null;
  StateReason?: string | null;
  StateReasonCode?: CanaryStateReasonCode | null;
}

// refs: 3 - tags: output, named, enum
export type CanaryState =
| "CREATING"
| "READY"
| "STARTING"
| "RUNNING"
| "UPDATING"
| "STOPPING"
| "STOPPED"
| "ERROR"
| "DELETING"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, enum
export type CanaryStateReasonCode =
| "INVALID_PERMISSIONS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface CanaryTimeline {
  Created?: Date | number | null;
  LastModified?: Date | number | null;
  LastStarted?: Date | number | null;
  LastStopped?: Date | number | null;
}

// refs: 3 - tags: output, named, interface
export interface VpcConfigOutput {
  VpcId?: string | null;
  SubnetIds?: string[] | null;
  SecurityGroupIds?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface CanaryLastRun {
  CanaryName?: string | null;
  LastRun?: CanaryRun | null;
}

// refs: 2 - tags: output, named, interface
export interface CanaryRun {
  Id?: string | null;
  Name?: string | null;
  Status?: CanaryRunStatus | null;
  Timeline?: CanaryRunTimeline | null;
  ArtifactS3Location?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface CanaryRunStatus {
  State?: CanaryRunState | null;
  StateReason?: string | null;
  StateReasonCode?: CanaryRunStateReasonCode | null;
}

// refs: 2 - tags: output, named, enum
export type CanaryRunState =
| "RUNNING"
| "PASSED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type CanaryRunStateReasonCode =
| "CANARY_FAILURE"
| "EXECUTION_FAILURE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface CanaryRunTimeline {
  Started?: Date | number | null;
  Completed?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface RuntimeVersion {
  VersionName?: string | null;
  Description?: string | null;
  ReleaseDate?: Date | number | null;
  DeprecationDate?: Date | number | null;
}