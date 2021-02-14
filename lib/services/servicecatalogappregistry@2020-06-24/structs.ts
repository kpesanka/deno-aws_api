// Autogenerated API structures for: AWS Service Catalog App Registry

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateAttributeGroupRequest {
  application: string;
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface AssociateResourceRequest {
  application: string;
  resourceType: ResourceType;
  resource: string;
}

// refs: 1 - tags: named, input
export interface CreateApplicationRequest {
  name: string;
  description?: string | null;
  tags?: { [key: string]: string | null | undefined } | null;
  clientToken: string;
}

// refs: 1 - tags: named, input
export interface CreateAttributeGroupRequest {
  name: string;
  description?: string | null;
  attributes: string;
  tags?: { [key: string]: string | null | undefined } | null;
  clientToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteApplicationRequest {
  application: string;
}

// refs: 1 - tags: named, input
export interface DeleteAttributeGroupRequest {
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface DisassociateAttributeGroupRequest {
  application: string;
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface DisassociateResourceRequest {
  application: string;
  resourceType: ResourceType;
  resource: string;
}

// refs: 1 - tags: named, input
export interface GetApplicationRequest {
  application: string;
}

// refs: 1 - tags: named, input
export interface GetAttributeGroupRequest {
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface ListApplicationsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAssociatedAttributeGroupsRequest {
  application: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAssociatedResourcesRequest {
  application: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAttributeGroupsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface SyncResourceRequest {
  resourceType: ResourceType;
  resource: string;
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

// refs: 1 - tags: named, input
export interface UpdateApplicationRequest {
  application: string;
  name?: string | null;
  description?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateAttributeGroupRequest {
  attributeGroup: string;
  name?: string | null;
  description?: string | null;
  attributes?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateAttributeGroupResponse {
  applicationArn?: string | null;
  attributeGroupArn?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateResourceResponse {
  applicationArn?: string | null;
  resourceArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateApplicationResponse {
  application?: Application | null;
}

// refs: 1 - tags: named, output
export interface CreateAttributeGroupResponse {
  attributeGroup?: AttributeGroup | null;
}

// refs: 1 - tags: named, output
export interface DeleteApplicationResponse {
  application?: ApplicationSummary | null;
}

// refs: 1 - tags: named, output
export interface DeleteAttributeGroupResponse {
  attributeGroup?: AttributeGroupSummary | null;
}

// refs: 1 - tags: named, output
export interface DisassociateAttributeGroupResponse {
  applicationArn?: string | null;
  attributeGroupArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResourceResponse {
  applicationArn?: string | null;
  resourceArn?: string | null;
}

// refs: 1 - tags: named, output
export interface GetApplicationResponse {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  associatedResourceCount?: number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface GetAttributeGroupResponse {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  attributes?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationsResponse {
  applications?: ApplicationSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAssociatedAttributeGroupsResponse {
  attributeGroups?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAssociatedResourcesResponse {
  resources?: ResourceInfo[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAttributeGroupsResponse {
  attributeGroups?: AttributeGroupSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface SyncResourceResponse {
  applicationArn?: string | null;
  resourceArn?: string | null;
  actionTaken?: SyncAction | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateApplicationResponse {
  application?: Application | null;
}

// refs: 1 - tags: named, output
export interface UpdateAttributeGroupResponse {
  attributeGroup?: AttributeGroup | null;
}

// refs: 3 - tags: input, named, enum
export type ResourceType =
| "CFN_STACK"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Application {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 2 - tags: output, named, interface
export interface AttributeGroup {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 2 - tags: output, named, interface
export interface ApplicationSummary {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
}

// refs: 2 - tags: output, named, interface
export interface AttributeGroupSummary {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface ResourceInfo {
  name?: string | null;
  arn?: string | null;
}

// refs: 1 - tags: output, named, enum
export type SyncAction =
| "START_SYNC"
| "NO_ACTION"
| cmnP.UnexpectedEnumValue;
