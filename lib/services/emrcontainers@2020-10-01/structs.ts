// Autogenerated API structures for: Amazon EMR Containers

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CancelJobRunRequest {
  id: string;
  virtualClusterId: string;
}

// refs: 1 - tags: named, input
export interface CreateManagedEndpointRequest {
  name: string;
  virtualClusterId: string;
  type: string;
  releaseLabel: string;
  executionRoleArn: string;
  certificateArn: string;
  configurationOverrides?: ConfigurationOverrides | null;
  clientToken: string;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateVirtualClusterRequest {
  name: string;
  containerProvider: ContainerProvider;
  clientToken: string;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualClusterRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface DescribeJobRunRequest {
  id: string;
  virtualClusterId: string;
}

// refs: 1 - tags: named, input
export interface DescribeManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualClusterRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface ListJobRunsRequest {
  virtualClusterId: string;
  createdBefore?: Date | number | null;
  createdAfter?: Date | number | null;
  name?: string | null;
  states?: JobRunState[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListManagedEndpointsRequest {
  virtualClusterId: string;
  createdBefore?: Date | number | null;
  createdAfter?: Date | number | null;
  types?: string[] | null;
  states?: EndpointState[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface ListVirtualClustersRequest {
  containerProviderId?: string | null;
  containerProviderType?: ContainerProviderType | null;
  createdAfter?: Date | number | null;
  createdBefore?: Date | number | null;
  states?: VirtualClusterState[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface StartJobRunRequest {
  name?: string | null;
  virtualClusterId: string;
  clientToken: string;
  executionRoleArn: string;
  releaseLabel: string;
  jobDriver: JobDriver;
  configurationOverrides?: ConfigurationOverrides | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, output
export interface CancelJobRunResponse {
  id?: string | null;
  virtualClusterId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateManagedEndpointResponse {
  id?: string | null;
  name?: string | null;
  arn?: string | null;
  virtualClusterId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateVirtualClusterResponse {
  id?: string | null;
  name?: string | null;
  arn?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteManagedEndpointResponse {
  id?: string | null;
  virtualClusterId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualClusterResponse {
  id?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeJobRunResponse {
  jobRun?: JobRun | null;
}

// refs: 1 - tags: named, output
export interface DescribeManagedEndpointResponse {
  endpoint?: Endpoint | null;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualClusterResponse {
  virtualCluster?: VirtualCluster | null;
}

// refs: 1 - tags: named, output
export interface ListJobRunsResponse {
  jobRuns?: JobRun[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListManagedEndpointsResponse {
  endpoints?: Endpoint[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListVirtualClustersResponse {
  virtualClusters?: VirtualCluster[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartJobRunResponse {
  id?: string | null;
  name?: string | null;
  arn?: string | null;
  virtualClusterId?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 6 - tags: input, named, interface, output
export interface ConfigurationOverrides {
  applicationConfiguration?: Configuration[] | null;
  monitoringConfiguration?: MonitoringConfiguration | null;
}

// refs: 6 - tags: input, named, interface, recursive, output
export interface Configuration {
  classification: string;
  properties?: { [key: string]: string | null | undefined } | null;
  configurations?: Configuration[] | null;
}

// refs: 6 - tags: input, named, interface, output
export interface MonitoringConfiguration {
  persistentAppUI?: PersistentAppUI | null;
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration | null;
  s3MonitoringConfiguration?: S3MonitoringConfiguration | null;
}

// refs: 6 - tags: input, named, enum, output
export type PersistentAppUI =
| "ENABLED"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface CloudWatchMonitoringConfiguration {
  logGroupName: string;
  logStreamNamePrefix?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface S3MonitoringConfiguration {
  logUri: string;
}

// refs: 3 - tags: input, named, interface, output
export interface ContainerProvider {
  type: ContainerProviderType;
  id: string;
  info?: ContainerInfo | null;
}

// refs: 4 - tags: input, named, enum, output
export type ContainerProviderType =
| "EKS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ContainerInfo {
  eksInfo?: EksInfo | null;
}

// refs: 3 - tags: input, named, interface, output
export interface EksInfo {
  namespace?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type JobRunState =
| "PENDING"
| "SUBMITTED"
| "RUNNING"
| "FAILED"
| "CANCELLED"
| "CANCEL_PENDING"
| "COMPLETED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type EndpointState =
| "CREATING"
| "ACTIVE"
| "TERMINATING"
| "TERMINATED"
| "TERMINATED_WITH_ERRORS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type VirtualClusterState =
| "RUNNING"
| "TERMINATING"
| "TERMINATED"
| "ARRESTED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface JobDriver {
  sparkSubmitJobDriver?: SparkSubmitJobDriver | null;
}

// refs: 3 - tags: input, named, interface, output
export interface SparkSubmitJobDriver {
  entryPoint: string;
  entryPointArguments?: string[] | null;
  sparkSubmitParameters?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface JobRun {
  id?: string | null;
  name?: string | null;
  virtualClusterId?: string | null;
  arn?: string | null;
  state?: JobRunState | null;
  clientToken?: string | null;
  executionRoleArn?: string | null;
  releaseLabel?: string | null;
  configurationOverrides?: ConfigurationOverrides | null;
  jobDriver?: JobDriver | null;
  createdAt?: Date | number | null;
  createdBy?: string | null;
  finishedAt?: Date | number | null;
  stateDetails?: string | null;
  failureReason?: FailureReason | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 2 - tags: output, named, enum
export type FailureReason =
| "INTERNAL_ERROR"
| "USER_ERROR"
| "VALIDATION_ERROR"
| "CLUSTER_UNAVAILABLE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Endpoint {
  id?: string | null;
  name?: string | null;
  arn?: string | null;
  virtualClusterId?: string | null;
  type?: string | null;
  state?: EndpointState | null;
  releaseLabel?: string | null;
  executionRoleArn?: string | null;
  certificateArn?: string | null;
  configurationOverrides?: ConfigurationOverrides | null;
  serverUrl?: string | null;
  createdAt?: Date | number | null;
  securityGroup?: string | null;
  subnetIds?: string[] | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 2 - tags: output, named, interface
export interface VirtualCluster {
  id?: string | null;
  name?: string | null;
  arn?: string | null;
  state?: VirtualClusterState | null;
  containerProvider?: ContainerProvider | null;
  createdAt?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}
