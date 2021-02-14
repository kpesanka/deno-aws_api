// Autogenerated API structures for: AWS OpsWorks

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssignInstanceRequest {
  InstanceId: string;
  LayerIds: string[];
}

// refs: 1 - tags: named, input
export interface AssignVolumeRequest {
  VolumeId: string;
  InstanceId?: string | null;
}

// refs: 1 - tags: named, input
export interface AssociateElasticIpRequest {
  ElasticIp: string;
  InstanceId?: string | null;
}

// refs: 1 - tags: named, input
export interface AttachElasticLoadBalancerRequest {
  ElasticLoadBalancerName: string;
  LayerId: string;
}

// refs: 1 - tags: named, input
export interface CloneStackRequest {
  SourceStackId: string;
  Name?: string | null;
  Region?: string | null;
  VpcId?: string | null;
  Attributes?: { [key in StackAttributesKeys]: string | null | undefined } | null;
  ServiceRoleArn: string;
  DefaultInstanceProfileArn?: string | null;
  DefaultOs?: string | null;
  HostnameTheme?: string | null;
  DefaultAvailabilityZone?: string | null;
  DefaultSubnetId?: string | null;
  CustomJson?: string | null;
  ConfigurationManager?: StackConfigurationManager | null;
  ChefConfiguration?: ChefConfiguration | null;
  UseCustomCookbooks?: boolean | null;
  UseOpsworksSecurityGroups?: boolean | null;
  CustomCookbooksSource?: Source | null;
  DefaultSshKeyName?: string | null;
  ClonePermissions?: boolean | null;
  CloneAppIds?: string[] | null;
  DefaultRootDeviceType?: RootDeviceType | null;
  AgentVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateAppRequest {
  StackId: string;
  Shortname?: string | null;
  Name: string;
  Description?: string | null;
  DataSources?: DataSource[] | null;
  Type: AppType;
  AppSource?: Source | null;
  Domains?: string[] | null;
  EnableSsl?: boolean | null;
  SslConfiguration?: SslConfiguration | null;
  Attributes?: { [key in AppAttributesKeys]: string | null | undefined } | null;
  Environment?: EnvironmentVariable[] | null;
}

// refs: 1 - tags: named, input
export interface CreateDeploymentRequest {
  StackId: string;
  AppId?: string | null;
  InstanceIds?: string[] | null;
  LayerIds?: string[] | null;
  Command: DeploymentCommand;
  Comment?: string | null;
  CustomJson?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateInstanceRequest {
  StackId: string;
  LayerIds: string[];
  InstanceType: string;
  AutoScalingType?: AutoScalingType | null;
  Hostname?: string | null;
  Os?: string | null;
  AmiId?: string | null;
  SshKeyName?: string | null;
  AvailabilityZone?: string | null;
  VirtualizationType?: string | null;
  SubnetId?: string | null;
  Architecture?: Architecture | null;
  RootDeviceType?: RootDeviceType | null;
  BlockDeviceMappings?: BlockDeviceMapping[] | null;
  InstallUpdatesOnBoot?: boolean | null;
  EbsOptimized?: boolean | null;
  AgentVersion?: string | null;
  Tenancy?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateLayerRequest {
  StackId: string;
  Type: LayerType;
  Name: string;
  Shortname: string;
  Attributes?: { [key in LayerAttributesKeys]: string | null | undefined } | null;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration | null;
  CustomInstanceProfileArn?: string | null;
  CustomJson?: string | null;
  CustomSecurityGroupIds?: string[] | null;
  Packages?: string[] | null;
  VolumeConfigurations?: VolumeConfiguration[] | null;
  EnableAutoHealing?: boolean | null;
  AutoAssignElasticIps?: boolean | null;
  AutoAssignPublicIps?: boolean | null;
  CustomRecipes?: Recipes | null;
  InstallUpdatesOnBoot?: boolean | null;
  UseEbsOptimizedInstances?: boolean | null;
  LifecycleEventConfiguration?: LifecycleEventConfiguration | null;
}

// refs: 1 - tags: named, input
export interface CreateStackRequest {
  Name: string;
  Region: string;
  VpcId?: string | null;
  Attributes?: { [key in StackAttributesKeys]: string | null | undefined } | null;
  ServiceRoleArn: string;
  DefaultInstanceProfileArn: string;
  DefaultOs?: string | null;
  HostnameTheme?: string | null;
  DefaultAvailabilityZone?: string | null;
  DefaultSubnetId?: string | null;
  CustomJson?: string | null;
  ConfigurationManager?: StackConfigurationManager | null;
  ChefConfiguration?: ChefConfiguration | null;
  UseCustomCookbooks?: boolean | null;
  UseOpsworksSecurityGroups?: boolean | null;
  CustomCookbooksSource?: Source | null;
  DefaultSshKeyName?: string | null;
  DefaultRootDeviceType?: RootDeviceType | null;
  AgentVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateUserProfileRequest {
  IamUserArn: string;
  SshUsername?: string | null;
  SshPublicKey?: string | null;
  AllowSelfManagement?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteAppRequest {
  AppId: string;
}

// refs: 1 - tags: named, input
export interface DeleteInstanceRequest {
  InstanceId: string;
  DeleteElasticIp?: boolean | null;
  DeleteVolumes?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteLayerRequest {
  LayerId: string;
}

// refs: 1 - tags: named, input
export interface DeleteStackRequest {
  StackId: string;
}

// refs: 1 - tags: named, input
export interface DeleteUserProfileRequest {
  IamUserArn: string;
}

// refs: 1 - tags: named, input
export interface DeregisterEcsClusterRequest {
  EcsClusterArn: string;
}

// refs: 1 - tags: named, input
export interface DeregisterElasticIpRequest {
  ElasticIp: string;
}

// refs: 1 - tags: named, input
export interface DeregisterInstanceRequest {
  InstanceId: string;
}

// refs: 1 - tags: named, input
export interface DeregisterRdsDbInstanceRequest {
  RdsDbInstanceArn: string;
}

// refs: 1 - tags: named, input
export interface DeregisterVolumeRequest {
  VolumeId: string;
}

// refs: 1 - tags: named, input
export interface DescribeAgentVersionsRequest {
  StackId?: string | null;
  ConfigurationManager?: StackConfigurationManager | null;
}

// refs: 1 - tags: named, input
export interface DescribeAppsRequest {
  StackId?: string | null;
  AppIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeCommandsRequest {
  DeploymentId?: string | null;
  InstanceId?: string | null;
  CommandIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeDeploymentsRequest {
  StackId?: string | null;
  AppId?: string | null;
  DeploymentIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeEcsClustersRequest {
  EcsClusterArns?: string[] | null;
  StackId?: string | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeElasticIpsRequest {
  InstanceId?: string | null;
  StackId?: string | null;
  Ips?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeElasticLoadBalancersRequest {
  StackId?: string | null;
  LayerIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeInstancesRequest {
  StackId?: string | null;
  LayerId?: string | null;
  InstanceIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeLayersRequest {
  StackId?: string | null;
  LayerIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeLoadBasedAutoScalingRequest {
  LayerIds: string[];
}

// refs: 1 - tags: named, input
export interface DescribePermissionsRequest {
  IamUserArn?: string | null;
  StackId?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeRaidArraysRequest {
  InstanceId?: string | null;
  StackId?: string | null;
  RaidArrayIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeRdsDbInstancesRequest {
  StackId: string;
  RdsDbInstanceArns?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeServiceErrorsRequest {
  StackId?: string | null;
  InstanceId?: string | null;
  ServiceErrorIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeStackProvisioningParametersRequest {
  StackId: string;
}

// refs: 1 - tags: named, input
export interface DescribeStackSummaryRequest {
  StackId: string;
}

// refs: 1 - tags: named, input
export interface DescribeStacksRequest {
  StackIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeTimeBasedAutoScalingRequest {
  InstanceIds: string[];
}

// refs: 1 - tags: named, input
export interface DescribeUserProfilesRequest {
  IamUserArns?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeVolumesRequest {
  InstanceId?: string | null;
  StackId?: string | null;
  RaidArrayId?: string | null;
  VolumeIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DetachElasticLoadBalancerRequest {
  ElasticLoadBalancerName: string;
  LayerId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateElasticIpRequest {
  ElasticIp: string;
}

// refs: 1 - tags: named, input
export interface GetHostnameSuggestionRequest {
  LayerId: string;
}

// refs: 1 - tags: named, input
export interface GrantAccessRequest {
  InstanceId: string;
  ValidForInMinutes?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsRequest {
  ResourceArn: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface RebootInstanceRequest {
  InstanceId: string;
}

// refs: 1 - tags: named, input
export interface RegisterEcsClusterRequest {
  EcsClusterArn: string;
  StackId: string;
}

// refs: 1 - tags: named, input
export interface RegisterElasticIpRequest {
  ElasticIp: string;
  StackId: string;
}

// refs: 1 - tags: named, input
export interface RegisterInstanceRequest {
  StackId: string;
  Hostname?: string | null;
  PublicIp?: string | null;
  PrivateIp?: string | null;
  RsaPublicKey?: string | null;
  RsaPublicKeyFingerprint?: string | null;
  InstanceIdentity?: InstanceIdentity | null;
}

// refs: 1 - tags: named, input
export interface RegisterRdsDbInstanceRequest {
  StackId: string;
  RdsDbInstanceArn: string;
  DbUser: string;
  DbPassword: string;
}

// refs: 1 - tags: named, input
export interface RegisterVolumeRequest {
  Ec2VolumeId?: string | null;
  StackId: string;
}

// refs: 1 - tags: named, input
export interface SetLoadBasedAutoScalingRequest {
  LayerId: string;
  Enable?: boolean | null;
  UpScaling?: AutoScalingThresholds | null;
  DownScaling?: AutoScalingThresholds | null;
}

// refs: 1 - tags: named, input
export interface SetPermissionRequest {
  StackId: string;
  IamUserArn: string;
  AllowSsh?: boolean | null;
  AllowSudo?: boolean | null;
  Level?: string | null;
}

// refs: 1 - tags: named, input
export interface SetTimeBasedAutoScalingRequest {
  InstanceId: string;
  AutoScalingSchedule?: WeeklyAutoScalingSchedule | null;
}

// refs: 1 - tags: named, input
export interface StartInstanceRequest {
  InstanceId: string;
}

// refs: 1 - tags: named, input
export interface StartStackRequest {
  StackId: string;
}

// refs: 1 - tags: named, input
export interface StopInstanceRequest {
  InstanceId: string;
  Force?: boolean | null;
}

// refs: 1 - tags: named, input
export interface StopStackRequest {
  StackId: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UnassignInstanceRequest {
  InstanceId: string;
}

// refs: 1 - tags: named, input
export interface UnassignVolumeRequest {
  VolumeId: string;
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateAppRequest {
  AppId: string;
  Name?: string | null;
  Description?: string | null;
  DataSources?: DataSource[] | null;
  Type?: AppType | null;
  AppSource?: Source | null;
  Domains?: string[] | null;
  EnableSsl?: boolean | null;
  SslConfiguration?: SslConfiguration | null;
  Attributes?: { [key in AppAttributesKeys]: string | null | undefined } | null;
  Environment?: EnvironmentVariable[] | null;
}

// refs: 1 - tags: named, input
export interface UpdateElasticIpRequest {
  ElasticIp: string;
  Name?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateInstanceRequest {
  InstanceId: string;
  LayerIds?: string[] | null;
  InstanceType?: string | null;
  AutoScalingType?: AutoScalingType | null;
  Hostname?: string | null;
  Os?: string | null;
  AmiId?: string | null;
  SshKeyName?: string | null;
  Architecture?: Architecture | null;
  InstallUpdatesOnBoot?: boolean | null;
  EbsOptimized?: boolean | null;
  AgentVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateLayerRequest {
  LayerId: string;
  Name?: string | null;
  Shortname?: string | null;
  Attributes?: { [key in LayerAttributesKeys]: string | null | undefined } | null;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration | null;
  CustomInstanceProfileArn?: string | null;
  CustomJson?: string | null;
  CustomSecurityGroupIds?: string[] | null;
  Packages?: string[] | null;
  VolumeConfigurations?: VolumeConfiguration[] | null;
  EnableAutoHealing?: boolean | null;
  AutoAssignElasticIps?: boolean | null;
  AutoAssignPublicIps?: boolean | null;
  CustomRecipes?: Recipes | null;
  InstallUpdatesOnBoot?: boolean | null;
  UseEbsOptimizedInstances?: boolean | null;
  LifecycleEventConfiguration?: LifecycleEventConfiguration | null;
}

// refs: 1 - tags: named, input
export interface UpdateMyUserProfileRequest {
  SshPublicKey?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateRdsDbInstanceRequest {
  RdsDbInstanceArn: string;
  DbUser?: string | null;
  DbPassword?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateStackRequest {
  StackId: string;
  Name?: string | null;
  Attributes?: { [key in StackAttributesKeys]: string | null | undefined } | null;
  ServiceRoleArn?: string | null;
  DefaultInstanceProfileArn?: string | null;
  DefaultOs?: string | null;
  HostnameTheme?: string | null;
  DefaultAvailabilityZone?: string | null;
  DefaultSubnetId?: string | null;
  CustomJson?: string | null;
  ConfigurationManager?: StackConfigurationManager | null;
  ChefConfiguration?: ChefConfiguration | null;
  UseCustomCookbooks?: boolean | null;
  CustomCookbooksSource?: Source | null;
  DefaultSshKeyName?: string | null;
  DefaultRootDeviceType?: RootDeviceType | null;
  UseOpsworksSecurityGroups?: boolean | null;
  AgentVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateUserProfileRequest {
  IamUserArn: string;
  SshUsername?: string | null;
  SshPublicKey?: string | null;
  AllowSelfManagement?: boolean | null;
}

// refs: 1 - tags: named, input
export interface UpdateVolumeRequest {
  VolumeId: string;
  Name?: string | null;
  MountPoint?: string | null;
}

// refs: 1 - tags: named, output
export interface CloneStackResult {
  StackId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateAppResult {
  AppId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDeploymentResult {
  DeploymentId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateInstanceResult {
  InstanceId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateLayerResult {
  LayerId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateStackResult {
  StackId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateUserProfileResult {
  IamUserArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeAgentVersionsResult {
  AgentVersions?: AgentVersion[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeAppsResult {
  Apps?: App[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeCommandsResult {
  Commands?: Command[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeDeploymentsResult {
  Deployments?: Deployment[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeEcsClustersResult {
  EcsClusters?: EcsCluster[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeElasticIpsResult {
  ElasticIps?: ElasticIp[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeElasticLoadBalancersResult {
  ElasticLoadBalancers?: ElasticLoadBalancer[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeInstancesResult {
  Instances?: Instance[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeLayersResult {
  Layers?: Layer[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeLoadBasedAutoScalingResult {
  LoadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfiguration[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeMyUserProfileResult {
  UserProfile?: SelfUserProfile | null;
}

// refs: 1 - tags: named, output
export interface DescribeOperatingSystemsResponse {
  OperatingSystems?: OperatingSystem[] | null;
}

// refs: 1 - tags: named, output
export interface DescribePermissionsResult {
  Permissions?: Permission[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeRaidArraysResult {
  RaidArrays?: RaidArray[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeRdsDbInstancesResult {
  RdsDbInstances?: RdsDbInstance[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeServiceErrorsResult {
  ServiceErrors?: ServiceError[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeStackProvisioningParametersResult {
  AgentInstallerUrl?: string | null;
  Parameters?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DescribeStackSummaryResult {
  StackSummary?: StackSummary | null;
}

// refs: 1 - tags: named, output
export interface DescribeStacksResult {
  Stacks?: Stack[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeTimeBasedAutoScalingResult {
  TimeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfiguration[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeUserProfilesResult {
  UserProfiles?: UserProfile[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeVolumesResult {
  Volumes?: Volume[] | null;
}

// refs: 1 - tags: named, output
export interface GetHostnameSuggestionResult {
  LayerId?: string | null;
  Hostname?: string | null;
}

// refs: 1 - tags: named, output
export interface GrantAccessResult {
  TemporaryCredential?: TemporaryCredential | null;
}

// refs: 1 - tags: named, output
export interface ListTagsResult {
  Tags?: { [key: string]: string | null | undefined } | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface RegisterEcsClusterResult {
  EcsClusterArn?: string | null;
}

// refs: 1 - tags: named, output
export interface RegisterElasticIpResult {
  ElasticIp?: string | null;
}

// refs: 1 - tags: named, output
export interface RegisterInstanceResult {
  InstanceId?: string | null;
}

// refs: 1 - tags: named, output
export interface RegisterVolumeResult {
  VolumeId?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type StackAttributesKeys =
| "Color"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface StackConfigurationManager {
  Name?: string | null;
  Version?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface ChefConfiguration {
  ManageBerkshelf?: boolean | null;
  BerkshelfVersion?: string | null;
}

// refs: 7 - tags: input, named, interface, output
export interface Source {
  Type?: SourceType | null;
  Url?: string | null;
  Username?: string | null;
  Password?: string | null;
  SshKey?: string | null;
  Revision?: string | null;
}

// refs: 7 - tags: input, named, enum, output
export type SourceType =
| "git"
| "svn"
| "archive"
| "s3"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, enum, output
export type RootDeviceType =
| "ebs"
| "instance-store"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface DataSource {
  Type?: string | null;
  Arn?: string | null;
  DatabaseName?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type AppType =
| "aws-flow-ruby"
| "java"
| "rails"
| "php"
| "nodejs"
| "static"
| "other"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SslConfiguration {
  Certificate: string;
  PrivateKey: string;
  Chain?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type AppAttributesKeys =
| "DocumentRoot"
| "RailsEnv"
| "AutoBundleOnDeploy"
| "AwsFlowRubySettings"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface EnvironmentVariable {
  Key: string;
  Value: string;
  Secure?: boolean | null;
}

// refs: 2 - tags: input, named, interface, output
export interface DeploymentCommand {
  Name: DeploymentCommandName;
  Args?: { [key: string]: string[] | null | undefined } | null;
}

// refs: 2 - tags: input, named, enum, output
export type DeploymentCommandName =
| "install_dependencies"
| "update_dependencies"
| "update_custom_cookbooks"
| "execute_recipes"
| "configure"
| "setup"
| "deploy"
| "rollback"
| "start"
| "stop"
| "restart"
| "undeploy"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type AutoScalingType =
| "load"
| "timer"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type Architecture =
| "x86_64"
| "i386"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface BlockDeviceMapping {
  DeviceName?: string | null;
  NoDevice?: string | null;
  VirtualName?: string | null;
  Ebs?: EbsBlockDevice | null;
}

// refs: 2 - tags: input, named, interface, output
export interface EbsBlockDevice {
  SnapshotId?: string | null;
  Iops?: number | null;
  VolumeSize?: number | null;
  VolumeType?: VolumeType | null;
  DeleteOnTermination?: boolean | null;
}

// refs: 2 - tags: input, named, enum, output
export type VolumeType =
| "gp2"
| "io1"
| "standard"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type LayerType =
| "aws-flow-ruby"
| "ecs-cluster"
| "java-app"
| "lb"
| "web"
| "php-app"
| "rails-app"
| "nodejs-app"
| "memcached"
| "db-master"
| "monitoring-master"
| "custom"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type LayerAttributesKeys =
| "EcsClusterArn"
| "EnableHaproxyStats"
| "HaproxyStatsUrl"
| "HaproxyStatsUser"
| "HaproxyStatsPassword"
| "HaproxyHealthCheckUrl"
| "HaproxyHealthCheckMethod"
| "MysqlRootPassword"
| "MysqlRootPasswordUbiquitous"
| "GangliaUrl"
| "GangliaUser"
| "GangliaPassword"
| "MemcachedMemory"
| "NodejsVersion"
| "RubyVersion"
| "RubygemsVersion"
| "ManageBundler"
| "BundlerVersion"
| "RailsStack"
| "PassengerVersion"
| "Jvm"
| "JvmVersion"
| "JvmOptions"
| "JavaAppServer"
| "JavaAppServerVersion"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface CloudWatchLogsConfiguration {
  Enabled?: boolean | null;
  LogStreams?: CloudWatchLogsLogStream[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface CloudWatchLogsLogStream {
  LogGroupName?: string | null;
  DatetimeFormat?: string | null;
  TimeZone?: CloudWatchLogsTimeZone | null;
  File?: string | null;
  FileFingerprintLines?: string | null;
  MultiLineStartPattern?: string | null;
  InitialPosition?: CloudWatchLogsInitialPosition | null;
  Encoding?: CloudWatchLogsEncoding | null;
  BufferDuration?: number | null;
  BatchCount?: number | null;
  BatchSize?: number | null;
}

// refs: 3 - tags: input, named, enum, output
export type CloudWatchLogsTimeZone =
| "LOCAL"
| "UTC"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type CloudWatchLogsInitialPosition =
| "start_of_file"
| "end_of_file"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type CloudWatchLogsEncoding =
| "ascii"
| "big5"
| "big5hkscs"
| "cp037"
| "cp424"
| "cp437"
| "cp500"
| "cp720"
| "cp737"
| "cp775"
| "cp850"
| "cp852"
| "cp855"
| "cp856"
| "cp857"
| "cp858"
| "cp860"
| "cp861"
| "cp862"
| "cp863"
| "cp864"
| "cp865"
| "cp866"
| "cp869"
| "cp874"
| "cp875"
| "cp932"
| "cp949"
| "cp950"
| "cp1006"
| "cp1026"
| "cp1140"
| "cp1250"
| "cp1251"
| "cp1252"
| "cp1253"
| "cp1254"
| "cp1255"
| "cp1256"
| "cp1257"
| "cp1258"
| "euc_jp"
| "euc_jis_2004"
| "euc_jisx0213"
| "euc_kr"
| "gb2312"
| "gbk"
| "gb18030"
| "hz"
| "iso2022_jp"
| "iso2022_jp_1"
| "iso2022_jp_2"
| "iso2022_jp_2004"
| "iso2022_jp_3"
| "iso2022_jp_ext"
| "iso2022_kr"
| "latin_1"
| "iso8859_2"
| "iso8859_3"
| "iso8859_4"
| "iso8859_5"
| "iso8859_6"
| "iso8859_7"
| "iso8859_8"
| "iso8859_9"
| "iso8859_10"
| "iso8859_13"
| "iso8859_14"
| "iso8859_15"
| "iso8859_16"
| "johab"
| "koi8_r"
| "koi8_u"
| "mac_cyrillic"
| "mac_greek"
| "mac_iceland"
| "mac_latin2"
| "mac_roman"
| "mac_turkish"
| "ptcp154"
| "shift_jis"
| "shift_jis_2004"
| "shift_jisx0213"
| "utf_32"
| "utf_32_be"
| "utf_32_le"
| "utf_16"
| "utf_16_be"
| "utf_16_le"
| "utf_7"
| "utf_8"
| "utf_8_sig"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface VolumeConfiguration {
  MountPoint: string;
  RaidLevel?: number | null;
  NumberOfDisks: number;
  Size: number;
  VolumeType?: string | null;
  Iops?: number | null;
  Encrypted?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Recipes {
  Setup?: string[] | null;
  Configure?: string[] | null;
  Deploy?: string[] | null;
  Undeploy?: string[] | null;
  Shutdown?: string[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface LifecycleEventConfiguration {
  Shutdown?: ShutdownEventConfiguration | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ShutdownEventConfiguration {
  ExecutionTimeout?: number | null;
  DelayUntilElbConnectionsDrained?: boolean | null;
}

// refs: 1 - tags: input, named, interface
export interface InstanceIdentity {
  Document?: string | null;
  Signature?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface AutoScalingThresholds {
  InstanceCount?: number | null;
  ThresholdsWaitTime?: number | null;
  IgnoreMetricsTime?: number | null;
  CpuThreshold?: number | null;
  MemoryThreshold?: number | null;
  LoadThreshold?: number | null;
  Alarms?: string[] | null;
}

// refs: 2 - tags: input, named, interface, output
export interface WeeklyAutoScalingSchedule {
  Monday?: { [key: string]: string | null | undefined } | null;
  Tuesday?: { [key: string]: string | null | undefined } | null;
  Wednesday?: { [key: string]: string | null | undefined } | null;
  Thursday?: { [key: string]: string | null | undefined } | null;
  Friday?: { [key: string]: string | null | undefined } | null;
  Saturday?: { [key: string]: string | null | undefined } | null;
  Sunday?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface AgentVersion {
  Version?: string | null;
  ConfigurationManager?: StackConfigurationManager | null;
}

// refs: 1 - tags: output, named, interface
export interface App {
  AppId?: string | null;
  StackId?: string | null;
  Shortname?: string | null;
  Name?: string | null;
  Description?: string | null;
  DataSources?: DataSource[] | null;
  Type?: AppType | null;
  AppSource?: Source | null;
  Domains?: string[] | null;
  EnableSsl?: boolean | null;
  SslConfiguration?: SslConfiguration | null;
  Attributes?: { [key in AppAttributesKeys]: string | null | undefined } | null;
  CreatedAt?: string | null;
  Environment?: EnvironmentVariable[] | null;
}

// refs: 1 - tags: output, named, interface
export interface Command {
  CommandId?: string | null;
  InstanceId?: string | null;
  DeploymentId?: string | null;
  CreatedAt?: string | null;
  AcknowledgedAt?: string | null;
  CompletedAt?: string | null;
  Status?: string | null;
  ExitCode?: number | null;
  LogUrl?: string | null;
  Type?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Deployment {
  DeploymentId?: string | null;
  StackId?: string | null;
  AppId?: string | null;
  CreatedAt?: string | null;
  CompletedAt?: string | null;
  Duration?: number | null;
  IamUserArn?: string | null;
  Comment?: string | null;
  Command?: DeploymentCommand | null;
  Status?: string | null;
  CustomJson?: string | null;
  InstanceIds?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface EcsCluster {
  EcsClusterArn?: string | null;
  EcsClusterName?: string | null;
  StackId?: string | null;
  RegisteredAt?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ElasticIp {
  Ip?: string | null;
  Name?: string | null;
  Domain?: string | null;
  Region?: string | null;
  InstanceId?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ElasticLoadBalancer {
  ElasticLoadBalancerName?: string | null;
  Region?: string | null;
  DnsName?: string | null;
  StackId?: string | null;
  LayerId?: string | null;
  VpcId?: string | null;
  AvailabilityZones?: string[] | null;
  SubnetIds?: string[] | null;
  Ec2InstanceIds?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface Instance {
  AgentVersion?: string | null;
  AmiId?: string | null;
  Architecture?: Architecture | null;
  Arn?: string | null;
  AutoScalingType?: AutoScalingType | null;
  AvailabilityZone?: string | null;
  BlockDeviceMappings?: BlockDeviceMapping[] | null;
  CreatedAt?: string | null;
  EbsOptimized?: boolean | null;
  Ec2InstanceId?: string | null;
  EcsClusterArn?: string | null;
  EcsContainerInstanceArn?: string | null;
  ElasticIp?: string | null;
  Hostname?: string | null;
  InfrastructureClass?: string | null;
  InstallUpdatesOnBoot?: boolean | null;
  InstanceId?: string | null;
  InstanceProfileArn?: string | null;
  InstanceType?: string | null;
  LastServiceErrorId?: string | null;
  LayerIds?: string[] | null;
  Os?: string | null;
  Platform?: string | null;
  PrivateDns?: string | null;
  PrivateIp?: string | null;
  PublicDns?: string | null;
  PublicIp?: string | null;
  RegisteredBy?: string | null;
  ReportedAgentVersion?: string | null;
  ReportedOs?: ReportedOs | null;
  RootDeviceType?: RootDeviceType | null;
  RootDeviceVolumeId?: string | null;
  SecurityGroupIds?: string[] | null;
  SshHostDsaKeyFingerprint?: string | null;
  SshHostRsaKeyFingerprint?: string | null;
  SshKeyName?: string | null;
  StackId?: string | null;
  Status?: string | null;
  SubnetId?: string | null;
  Tenancy?: string | null;
  VirtualizationType?: VirtualizationType | null;
}

// refs: 1 - tags: output, named, interface
export interface ReportedOs {
  Family?: string | null;
  Name?: string | null;
  Version?: string | null;
}

// refs: 1 - tags: output, named, enum
export type VirtualizationType =
| "paravirtual"
| "hvm"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Layer {
  Arn?: string | null;
  StackId?: string | null;
  LayerId?: string | null;
  Type?: LayerType | null;
  Name?: string | null;
  Shortname?: string | null;
  Attributes?: { [key in LayerAttributesKeys]: string | null | undefined } | null;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration | null;
  CustomInstanceProfileArn?: string | null;
  CustomJson?: string | null;
  CustomSecurityGroupIds?: string[] | null;
  DefaultSecurityGroupNames?: string[] | null;
  Packages?: string[] | null;
  VolumeConfigurations?: VolumeConfiguration[] | null;
  EnableAutoHealing?: boolean | null;
  AutoAssignElasticIps?: boolean | null;
  AutoAssignPublicIps?: boolean | null;
  DefaultRecipes?: Recipes | null;
  CustomRecipes?: Recipes | null;
  CreatedAt?: string | null;
  InstallUpdatesOnBoot?: boolean | null;
  UseEbsOptimizedInstances?: boolean | null;
  LifecycleEventConfiguration?: LifecycleEventConfiguration | null;
}

// refs: 1 - tags: output, named, interface
export interface LoadBasedAutoScalingConfiguration {
  LayerId?: string | null;
  Enable?: boolean | null;
  UpScaling?: AutoScalingThresholds | null;
  DownScaling?: AutoScalingThresholds | null;
}

// refs: 1 - tags: output, named, interface
export interface SelfUserProfile {
  IamUserArn?: string | null;
  Name?: string | null;
  SshUsername?: string | null;
  SshPublicKey?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface OperatingSystem {
  Name?: string | null;
  Id?: string | null;
  Type?: string | null;
  ConfigurationManagers?: OperatingSystemConfigurationManager[] | null;
  ReportedName?: string | null;
  ReportedVersion?: string | null;
  Supported?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface OperatingSystemConfigurationManager {
  Name?: string | null;
  Version?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Permission {
  StackId?: string | null;
  IamUserArn?: string | null;
  AllowSsh?: boolean | null;
  AllowSudo?: boolean | null;
  Level?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface RaidArray {
  RaidArrayId?: string | null;
  InstanceId?: string | null;
  Name?: string | null;
  RaidLevel?: number | null;
  NumberOfDisks?: number | null;
  Size?: number | null;
  Device?: string | null;
  MountPoint?: string | null;
  AvailabilityZone?: string | null;
  CreatedAt?: string | null;
  StackId?: string | null;
  VolumeType?: string | null;
  Iops?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface RdsDbInstance {
  RdsDbInstanceArn?: string | null;
  DbInstanceIdentifier?: string | null;
  DbUser?: string | null;
  DbPassword?: string | null;
  Region?: string | null;
  Address?: string | null;
  Engine?: string | null;
  StackId?: string | null;
  MissingOnRds?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface ServiceError {
  ServiceErrorId?: string | null;
  StackId?: string | null;
  InstanceId?: string | null;
  Type?: string | null;
  Message?: string | null;
  CreatedAt?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface StackSummary {
  StackId?: string | null;
  Name?: string | null;
  Arn?: string | null;
  LayersCount?: number | null;
  AppsCount?: number | null;
  InstancesCount?: InstancesCount | null;
}

// refs: 1 - tags: output, named, interface
export interface InstancesCount {
  Assigning?: number | null;
  Booting?: number | null;
  ConnectionLost?: number | null;
  Deregistering?: number | null;
  Online?: number | null;
  Pending?: number | null;
  Rebooting?: number | null;
  Registered?: number | null;
  Registering?: number | null;
  Requested?: number | null;
  RunningSetup?: number | null;
  SetupFailed?: number | null;
  ShuttingDown?: number | null;
  StartFailed?: number | null;
  StopFailed?: number | null;
  Stopped?: number | null;
  Stopping?: number | null;
  Terminated?: number | null;
  Terminating?: number | null;
  Unassigning?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface Stack {
  StackId?: string | null;
  Name?: string | null;
  Arn?: string | null;
  Region?: string | null;
  VpcId?: string | null;
  Attributes?: { [key in StackAttributesKeys]: string | null | undefined } | null;
  ServiceRoleArn?: string | null;
  DefaultInstanceProfileArn?: string | null;
  DefaultOs?: string | null;
  HostnameTheme?: string | null;
  DefaultAvailabilityZone?: string | null;
  DefaultSubnetId?: string | null;
  CustomJson?: string | null;
  ConfigurationManager?: StackConfigurationManager | null;
  ChefConfiguration?: ChefConfiguration | null;
  UseCustomCookbooks?: boolean | null;
  UseOpsworksSecurityGroups?: boolean | null;
  CustomCookbooksSource?: Source | null;
  DefaultSshKeyName?: string | null;
  CreatedAt?: string | null;
  DefaultRootDeviceType?: RootDeviceType | null;
  AgentVersion?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface TimeBasedAutoScalingConfiguration {
  InstanceId?: string | null;
  AutoScalingSchedule?: WeeklyAutoScalingSchedule | null;
}

// refs: 1 - tags: output, named, interface
export interface UserProfile {
  IamUserArn?: string | null;
  Name?: string | null;
  SshUsername?: string | null;
  SshPublicKey?: string | null;
  AllowSelfManagement?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface Volume {
  VolumeId?: string | null;
  Ec2VolumeId?: string | null;
  Name?: string | null;
  RaidArrayId?: string | null;
  InstanceId?: string | null;
  Status?: string | null;
  Size?: number | null;
  Device?: string | null;
  MountPoint?: string | null;
  Region?: string | null;
  AvailabilityZone?: string | null;
  VolumeType?: string | null;
  Iops?: number | null;
  Encrypted?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface TemporaryCredential {
  Username?: string | null;
  Password?: string | null;
  ValidForInMinutes?: number | null;
  InstanceId?: string | null;
}
