// Autogenerated API structures for: AWS IoT 1-Click Projects Service

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateDeviceWithPlacementRequest {
  projectName: string;
  placementName: string;
  deviceId: string;
  deviceTemplateName: string;
}

// refs: 1 - tags: named, input
export interface CreatePlacementRequest {
  placementName: string;
  projectName: string;
  attributes?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateProjectRequest {
  projectName: string;
  description?: string | null;
  placementTemplate?: PlacementTemplate | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeletePlacementRequest {
  placementName: string;
  projectName: string;
}

// refs: 1 - tags: named, input
export interface DeleteProjectRequest {
  projectName: string;
}

// refs: 1 - tags: named, input
export interface DescribePlacementRequest {
  placementName: string;
  projectName: string;
}

// refs: 1 - tags: named, input
export interface DescribeProjectRequest {
  projectName: string;
}

// refs: 1 - tags: named, input
export interface DisassociateDeviceFromPlacementRequest {
  projectName: string;
  placementName: string;
  deviceTemplateName: string;
}

// refs: 1 - tags: named, input
export interface GetDevicesInPlacementRequest {
  projectName: string;
  placementName: string;
}

// refs: 1 - tags: named, input
export interface ListPlacementsRequest {
  projectName: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListProjectsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
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
export interface UpdatePlacementRequest {
  placementName: string;
  projectName: string;
  attributes?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface UpdateProjectRequest {
  projectName: string;
  description?: string | null;
  placementTemplate?: PlacementTemplate | null;
}

// refs: 1 - tags: named, output
export interface AssociateDeviceWithPlacementResponse {
}

// refs: 1 - tags: named, output
export interface CreatePlacementResponse {
}

// refs: 1 - tags: named, output
export interface CreateProjectResponse {
}

// refs: 1 - tags: named, output
export interface DeletePlacementResponse {
}

// refs: 1 - tags: named, output
export interface DeleteProjectResponse {
}

// refs: 1 - tags: named, output
export interface DescribePlacementResponse {
  placement: PlacementDescription;
}

// refs: 1 - tags: named, output
export interface DescribeProjectResponse {
  project: ProjectDescription;
}

// refs: 1 - tags: named, output
export interface DisassociateDeviceFromPlacementResponse {
}

// refs: 1 - tags: named, output
export interface GetDevicesInPlacementResponse {
  devices: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, output
export interface ListPlacementsResponse {
  placements: PlacementSummary[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListProjectsResponse {
  projects: ProjectSummary[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdatePlacementResponse {
}

// refs: 1 - tags: named, output
export interface UpdateProjectResponse {
}

// refs: 3 - tags: input, named, interface, output
export interface PlacementTemplate {
  defaultAttributes?: { [key: string]: string | null | undefined } | null;
  deviceTemplates?: { [key: string]: DeviceTemplate | null | undefined } | null;
}

// refs: 3 - tags: input, named, interface, output
export interface DeviceTemplate {
  deviceType?: string | null;
  callbackOverrides?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface PlacementDescription {
  projectName: string;
  placementName: string;
  attributes: { [key: string]: string | null | undefined };
  createdDate: Date | number;
  updatedDate: Date | number;
}

// refs: 1 - tags: output, named, interface
export interface ProjectDescription {
  arn?: string | null;
  projectName: string;
  description?: string | null;
  createdDate: Date | number;
  updatedDate: Date | number;
  placementTemplate?: PlacementTemplate | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface PlacementSummary {
  projectName: string;
  placementName: string;
  createdDate: Date | number;
  updatedDate: Date | number;
}

// refs: 1 - tags: output, named, interface
export interface ProjectSummary {
  arn?: string | null;
  projectName: string;
  createdDate: Date | number;
  updatedDate: Date | number;
  tags?: { [key: string]: string | null | undefined } | null;
}