// Autogenerated API structures for: Amazon Route 53 Resolver

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateResolverEndpointIpAddressRequest {
  ResolverEndpointId: string;
  IpAddress: IpAddressUpdate;
}

// refs: 1 - tags: named, input
export interface AssociateResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface AssociateResolverRuleRequest {
  ResolverRuleId: string;
  Name?: string | null;
  VPCId: string;
}

// refs: 1 - tags: named, input
export interface CreateResolverEndpointRequest {
  CreatorRequestId: string;
  Name?: string | null;
  SecurityGroupIds: string[];
  Direction: ResolverEndpointDirection;
  IpAddresses: IpAddressRequest[];
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateResolverQueryLogConfigRequest {
  Name: string;
  DestinationArn: string;
  CreatorRequestId: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateResolverRuleRequest {
  CreatorRequestId: string;
  Name?: string | null;
  RuleType: RuleTypeOption;
  DomainName: string;
  TargetIps?: TargetAddress[] | null;
  ResolverEndpointId?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteResolverEndpointRequest {
  ResolverEndpointId: string;
}

// refs: 1 - tags: named, input
export interface DeleteResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
}

// refs: 1 - tags: named, input
export interface DeleteResolverRuleRequest {
  ResolverRuleId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateResolverEndpointIpAddressRequest {
  ResolverEndpointId: string;
  IpAddress: IpAddressUpdate;
}

// refs: 1 - tags: named, input
export interface DisassociateResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateResolverRuleRequest {
  VPCId: string;
  ResolverRuleId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverDnssecConfigRequest {
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverEndpointRequest {
  ResolverEndpointId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverQueryLogConfigAssociationRequest {
  ResolverQueryLogConfigAssociationId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverQueryLogConfigPolicyRequest {
  Arn: string;
}

// refs: 1 - tags: named, input
export interface GetResolverRuleRequest {
  ResolverRuleId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverRuleAssociationRequest {
  ResolverRuleAssociationId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverRulePolicyRequest {
  Arn: string;
}

// refs: 1 - tags: named, input
export interface ListResolverDnssecConfigsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
}

// refs: 1 - tags: named, input
export interface ListResolverEndpointIpAddressesRequest {
  ResolverEndpointId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListResolverEndpointsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
}

// refs: 1 - tags: named, input
export interface ListResolverQueryLogConfigAssociationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
  SortBy?: string | null;
  SortOrder?: SortOrder | null;
}

// refs: 1 - tags: named, input
export interface ListResolverQueryLogConfigsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
  SortBy?: string | null;
  SortOrder?: SortOrder | null;
}

// refs: 1 - tags: named, input
export interface ListResolverRuleAssociationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
}

// refs: 1 - tags: named, input
export interface ListResolverRulesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface PutResolverQueryLogConfigPolicyRequest {
  Arn: string;
  ResolverQueryLogConfigPolicy: string;
}

// refs: 1 - tags: named, input
export interface PutResolverRulePolicyRequest {
  Arn: string;
  ResolverRulePolicy: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateResolverDnssecConfigRequest {
  ResourceId: string;
  Validation: Validation;
}

// refs: 1 - tags: named, input
export interface UpdateResolverEndpointRequest {
  ResolverEndpointId: string;
  Name?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateResolverRuleRequest {
  ResolverRuleId: string;
  Config: ResolverRuleConfig;
}

// refs: 1 - tags: named, output
export interface AssociateResolverEndpointIpAddressResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface AssociateResolverQueryLogConfigResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | null;
}

// refs: 1 - tags: named, output
export interface AssociateResolverRuleResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation | null;
}

// refs: 1 - tags: named, output
export interface CreateResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface CreateResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig | null;
}

// refs: 1 - tags: named, output
export interface CreateResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 1 - tags: named, output
export interface DeleteResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface DeleteResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig | null;
}

// refs: 1 - tags: named, output
export interface DeleteResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResolverEndpointIpAddressResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResolverQueryLogConfigResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResolverRuleResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation | null;
}

// refs: 1 - tags: named, output
export interface GetResolverDnssecConfigResponse {
  ResolverDNSSECConfig?: ResolverDnssecConfig | null;
}

// refs: 1 - tags: named, output
export interface GetResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface GetResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig | null;
}

// refs: 1 - tags: named, output
export interface GetResolverQueryLogConfigAssociationResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | null;
}

// refs: 1 - tags: named, output
export interface GetResolverQueryLogConfigPolicyResponse {
  ResolverQueryLogConfigPolicy?: string | null;
}

// refs: 1 - tags: named, output
export interface GetResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 1 - tags: named, output
export interface GetResolverRuleAssociationResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation | null;
}

// refs: 1 - tags: named, output
export interface GetResolverRulePolicyResponse {
  ResolverRulePolicy?: string | null;
}

// refs: 1 - tags: named, output
export interface ListResolverDnssecConfigsResponse {
  NextToken?: string | null;
  ResolverDnssecConfigs?: ResolverDnssecConfig[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverEndpointIpAddressesResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  IpAddresses?: IpAddressResponse[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverEndpointsResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  ResolverEndpoints?: ResolverEndpoint[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverQueryLogConfigAssociationsResponse {
  NextToken?: string | null;
  TotalCount?: number | null;
  TotalFilteredCount?: number | null;
  ResolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverQueryLogConfigsResponse {
  NextToken?: string | null;
  TotalCount?: number | null;
  TotalFilteredCount?: number | null;
  ResolverQueryLogConfigs?: ResolverQueryLogConfig[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverRuleAssociationsResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  ResolverRuleAssociations?: ResolverRuleAssociation[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverRulesResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  ResolverRules?: ResolverRule[] | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutResolverQueryLogConfigPolicyResponse {
  ReturnValue?: boolean | null;
}

// refs: 1 - tags: named, output
export interface PutResolverRulePolicyResponse {
  ReturnValue?: boolean | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateResolverDnssecConfigResponse {
  ResolverDNSSECConfig?: ResolverDnssecConfig | null;
}

// refs: 1 - tags: named, output
export interface UpdateResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface UpdateResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 2 - tags: input, named, interface
export interface IpAddressUpdate {
  IpId?: string | null;
  SubnetId?: string | null;
  Ip?: string | null;
}

// refs: 8 - tags: input, named, enum, output
export type ResolverEndpointDirection =
| "INBOUND"
| "OUTBOUND"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface IpAddressRequest {
  SubnetId: string;
  Ip?: string | null;
}

// refs: 5 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 6 - tags: input, named, enum, output
export type RuleTypeOption =
| "FORWARD"
| "SYSTEM"
| "RECURSIVE"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, interface, output
export interface TargetAddress {
  Ip: string;
  Port?: number | null;
}

// refs: 6 - tags: input, named, interface
export interface Filter {
  Name?: string | null;
  Values?: string[] | null;
}

// refs: 2 - tags: input, named, enum
export type SortOrder =
| "ASCENDING"
| "DESCENDING"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type Validation =
| "ENABLE"
| "DISABLE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface ResolverRuleConfig {
  Name?: string | null;
  TargetIps?: TargetAddress[] | null;
  ResolverEndpointId?: string | null;
}

// refs: 7 - tags: output, named, interface
export interface ResolverEndpoint {
  Id?: string | null;
  CreatorRequestId?: string | null;
  Arn?: string | null;
  Name?: string | null;
  SecurityGroupIds?: string[] | null;
  Direction?: ResolverEndpointDirection | null;
  IpAddressCount?: number | null;
  HostVPCId?: string | null;
  Status?: ResolverEndpointStatus | null;
  StatusMessage?: string | null;
  CreationTime?: string | null;
  ModificationTime?: string | null;
}

// refs: 7 - tags: output, named, enum
export type ResolverEndpointStatus =
| "CREATING"
| "OPERATIONAL"
| "UPDATING"
| "AUTO_RECOVERING"
| "ACTION_NEEDED"
| "DELETING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface ResolverQueryLogConfigAssociation {
  Id?: string | null;
  ResolverQueryLogConfigId?: string | null;
  ResourceId?: string | null;
  Status?: ResolverQueryLogConfigAssociationStatus | null;
  Error?: ResolverQueryLogConfigAssociationError | null;
  ErrorMessage?: string | null;
  CreationTime?: string | null;
}

// refs: 4 - tags: output, named, enum
export type ResolverQueryLogConfigAssociationStatus =
| "CREATING"
| "ACTIVE"
| "ACTION_NEEDED"
| "DELETING"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, enum
export type ResolverQueryLogConfigAssociationError =
| "NONE"
| "DESTINATION_NOT_FOUND"
| "ACCESS_DENIED"
| "INTERNAL_SERVICE_ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface ResolverRuleAssociation {
  Id?: string | null;
  ResolverRuleId?: string | null;
  Name?: string | null;
  VPCId?: string | null;
  Status?: ResolverRuleAssociationStatus | null;
  StatusMessage?: string | null;
}

// refs: 4 - tags: output, named, enum
export type ResolverRuleAssociationStatus =
| "CREATING"
| "COMPLETE"
| "DELETING"
| "FAILED"
| "OVERRIDDEN"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface ResolverQueryLogConfig {
  Id?: string | null;
  OwnerId?: string | null;
  Status?: ResolverQueryLogConfigStatus | null;
  ShareStatus?: ShareStatus | null;
  AssociationCount?: number | null;
  Arn?: string | null;
  Name?: string | null;
  DestinationArn?: string | null;
  CreatorRequestId?: string | null;
  CreationTime?: string | null;
}

// refs: 4 - tags: output, named, enum
export type ResolverQueryLogConfigStatus =
| "CREATING"
| "CREATED"
| "DELETING"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: output, named, enum
export type ShareStatus =
| "NOT_SHARED"
| "SHARED_WITH_ME"
| "SHARED_BY_ME"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, interface
export interface ResolverRule {
  Id?: string | null;
  CreatorRequestId?: string | null;
  Arn?: string | null;
  DomainName?: string | null;
  Status?: ResolverRuleStatus | null;
  StatusMessage?: string | null;
  RuleType?: RuleTypeOption | null;
  Name?: string | null;
  TargetIps?: TargetAddress[] | null;
  ResolverEndpointId?: string | null;
  OwnerId?: string | null;
  ShareStatus?: ShareStatus | null;
  CreationTime?: string | null;
  ModificationTime?: string | null;
}

// refs: 5 - tags: output, named, enum
export type ResolverRuleStatus =
| "COMPLETE"
| "DELETING"
| "UPDATING"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface ResolverDnssecConfig {
  Id?: string | null;
  OwnerId?: string | null;
  ResourceId?: string | null;
  ValidationStatus?: ResolverDNSSECValidationStatus | null;
}

// refs: 3 - tags: output, named, enum
export type ResolverDNSSECValidationStatus =
| "ENABLING"
| "ENABLED"
| "DISABLING"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface IpAddressResponse {
  IpId?: string | null;
  SubnetId?: string | null;
  Ip?: string | null;
  Status?: IpAddressStatus | null;
  StatusMessage?: string | null;
  CreationTime?: string | null;
  ModificationTime?: string | null;
}

// refs: 1 - tags: output, named, enum
export type IpAddressStatus =
| "CREATING"
| "FAILED_CREATION"
| "ATTACHING"
| "ATTACHED"
| "REMAP_DETACHING"
| "REMAP_ATTACHING"
| "DETACHING"
| "FAILED_RESOURCE_GONE"
| "DELETING"
| "DELETE_FAILED_FAS_EXPIRED"
| cmnP.UnexpectedEnumValue;
