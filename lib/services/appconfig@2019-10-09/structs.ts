// Autogenerated API structures for: Amazon AppConfig

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateApplicationRequest {
  Name: string;
  Description?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateConfigurationProfileRequest {
  ApplicationId: string;
  Name: string;
  Description?: string | null;
  LocationUri: string;
  RetrievalRoleArn?: string | null;
  Validators?: Validator[] | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateDeploymentStrategyRequest {
  Name: string;
  Description?: string | null;
  DeploymentDurationInMinutes: number;
  FinalBakeTimeInMinutes?: number | null;
  GrowthFactor: number;
  GrowthType?: GrowthType | null;
  ReplicateTo: ReplicateTo;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateEnvironmentRequest {
  ApplicationId: string;
  Name: string;
  Description?: string | null;
  Monitors?: Monitor[] | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  Description?: string | null;
  Content: Uint8Array | string;
  ContentType: string;
  LatestVersionNumber?: number | null;
}

// refs: 1 - tags: named, input
export interface DeleteApplicationRequest {
  ApplicationId: string;
}

// refs: 1 - tags: named, input
export interface DeleteConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
}

// refs: 1 - tags: named, input
export interface DeleteDeploymentStrategyRequest {
  DeploymentStrategyId: string;
}

// refs: 1 - tags: named, input
export interface DeleteEnvironmentRequest {
  ApplicationId: string;
  EnvironmentId: string;
}

// refs: 1 - tags: named, input
export interface DeleteHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  VersionNumber: number;
}

// refs: 1 - tags: named, input
export interface GetApplicationRequest {
  ApplicationId: string;
}

// refs: 1 - tags: named, input
export interface GetConfigurationRequest {
  Application: string;
  Environment: string;
  Configuration: string;
  ClientId: string;
  ClientConfigurationVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface GetConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
}

// refs: 1 - tags: named, input
export interface GetDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentNumber: number;
}

// refs: 1 - tags: named, input
export interface GetDeploymentStrategyRequest {
  DeploymentStrategyId: string;
}

// refs: 1 - tags: named, input
export interface GetEnvironmentRequest {
  ApplicationId: string;
  EnvironmentId: string;
}

// refs: 1 - tags: named, input
export interface GetHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  VersionNumber: number;
}

// refs: 1 - tags: named, input
export interface ListApplicationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListConfigurationProfilesRequest {
  ApplicationId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDeploymentStrategiesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDeploymentsRequest {
  ApplicationId: string;
  EnvironmentId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListEnvironmentsRequest {
  ApplicationId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListHostedConfigurationVersionsRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface StartDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentStrategyId: string;
  ConfigurationProfileId: string;
  ConfigurationVersion: string;
  Description?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface StopDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentNumber: number;
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
export interface UpdateApplicationRequest {
  ApplicationId: string;
  Name?: string | null;
  Description?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  Name?: string | null;
  Description?: string | null;
  RetrievalRoleArn?: string | null;
  Validators?: Validator[] | null;
}

// refs: 1 - tags: named, input
export interface UpdateDeploymentStrategyRequest {
  DeploymentStrategyId: string;
  Description?: string | null;
  DeploymentDurationInMinutes?: number | null;
  FinalBakeTimeInMinutes?: number | null;
  GrowthFactor?: number | null;
  GrowthType?: GrowthType | null;
}

// refs: 1 - tags: named, input
export interface UpdateEnvironmentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  Name?: string | null;
  Description?: string | null;
  Monitors?: Monitor[] | null;
}

// refs: 1 - tags: named, input
export interface ValidateConfigurationRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  ConfigurationVersion: string;
}

// refs: 2 - tags: named, output, interface
export interface Application {
  Id?: string | null;
  Name?: string | null;
  Description?: string | null;
}

// refs: 1 - tags: named, output
export interface ConfigurationProfile {
  ApplicationId?: string | null;
  Id?: string | null;
  Name?: string | null;
  Description?: string | null;
  LocationUri?: string | null;
  RetrievalRoleArn?: string | null;
  Validators?: Validator[] | null;
}

// refs: 2 - tags: named, output, interface
export interface DeploymentStrategy {
  Id?: string | null;
  Name?: string | null;
  Description?: string | null;
  DeploymentDurationInMinutes?: number | null;
  GrowthType?: GrowthType | null;
  GrowthFactor?: number | null;
  FinalBakeTimeInMinutes?: number | null;
  ReplicateTo?: ReplicateTo | null;
}

// refs: 2 - tags: named, output, interface
export interface Environment {
  ApplicationId?: string | null;
  Id?: string | null;
  Name?: string | null;
  Description?: string | null;
  State?: EnvironmentState | null;
  Monitors?: Monitor[] | null;
}

// refs: 1 - tags: named, output
export interface HostedConfigurationVersion {
  ApplicationId?: string | null;
  ConfigurationProfileId?: string | null;
  VersionNumber?: number | null;
  Description?: string | null;
  Content?: Uint8Array | string | null;
  ContentType?: string | null;
}

// refs: 1 - tags: named, output
export interface Configuration {
  Content?: Uint8Array | string | null;
  ConfigurationVersion?: string | null;
  ContentType?: string | null;
}

// refs: 1 - tags: named, output
export interface Deployment {
  ApplicationId?: string | null;
  EnvironmentId?: string | null;
  DeploymentStrategyId?: string | null;
  ConfigurationProfileId?: string | null;
  DeploymentNumber?: number | null;
  ConfigurationName?: string | null;
  ConfigurationLocationUri?: string | null;
  ConfigurationVersion?: string | null;
  Description?: string | null;
  DeploymentDurationInMinutes?: number | null;
  GrowthType?: GrowthType | null;
  GrowthFactor?: number | null;
  FinalBakeTimeInMinutes?: number | null;
  State?: DeploymentState | null;
  EventLog?: DeploymentEvent[] | null;
  PercentageComplete?: number | null;
  StartedAt?: Date | number | null;
  CompletedAt?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface Applications {
  Items?: Application[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ConfigurationProfiles {
  Items?: ConfigurationProfileSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeploymentStrategies {
  Items?: DeploymentStrategy[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface Deployments {
  Items?: DeploymentSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface Environments {
  Items?: Environment[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface HostedConfigurationVersions {
  Items?: HostedConfigurationVersionSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ResourceTags {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 3 - tags: input, named, interface, output
export interface Validator {
  Type: ValidatorType;
  Content: string;
}

// refs: 4 - tags: input, named, enum, output
export type ValidatorType =
| "JSON_SCHEMA"
| "LAMBDA"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, enum, output
export type GrowthType =
| "LINEAR"
| "EXPONENTIAL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type ReplicateTo =
| "NONE"
| "SSM_DOCUMENT"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface Monitor {
  AlarmArn?: string | null;
  AlarmRoleArn?: string | null;
}

// refs: 2 - tags: output, named, enum
export type EnvironmentState =
| "READY_FOR_DEPLOYMENT"
| "DEPLOYING"
| "ROLLING_BACK"
| "ROLLED_BACK"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type DeploymentState =
| "BAKING"
| "VALIDATING"
| "DEPLOYING"
| "COMPLETE"
| "ROLLING_BACK"
| "ROLLED_BACK"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DeploymentEvent {
  EventType?: DeploymentEventType | null;
  TriggeredBy?: TriggeredBy | null;
  Description?: string | null;
  OccurredAt?: Date | number | null;
}

// refs: 1 - tags: output, named, enum
export type DeploymentEventType =
| "PERCENTAGE_UPDATED"
| "ROLLBACK_STARTED"
| "ROLLBACK_COMPLETED"
| "BAKE_TIME_STARTED"
| "DEPLOYMENT_STARTED"
| "DEPLOYMENT_COMPLETED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type TriggeredBy =
| "USER"
| "APPCONFIG"
| "CLOUDWATCH_ALARM"
| "INTERNAL_ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ConfigurationProfileSummary {
  ApplicationId?: string | null;
  Id?: string | null;
  Name?: string | null;
  LocationUri?: string | null;
  ValidatorTypes?: ValidatorType[] | null;
}

// refs: 1 - tags: output, named, interface
export interface DeploymentSummary {
  DeploymentNumber?: number | null;
  ConfigurationName?: string | null;
  ConfigurationVersion?: string | null;
  DeploymentDurationInMinutes?: number | null;
  GrowthType?: GrowthType | null;
  GrowthFactor?: number | null;
  FinalBakeTimeInMinutes?: number | null;
  State?: DeploymentState | null;
  PercentageComplete?: number | null;
  StartedAt?: Date | number | null;
  CompletedAt?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface HostedConfigurationVersionSummary {
  ApplicationId?: string | null;
  ConfigurationProfileId?: string | null;
  VersionNumber?: number | null;
  Description?: string | null;
  ContentType?: string | null;
}
