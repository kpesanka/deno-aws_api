// Autogenerated API structures for: AWS IoT Things Graph

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateEntityToThingRequest {
  thingName: string;
  entityId: string;
  namespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface CreateFlowTemplateRequest {
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface CreateSystemInstanceRequest {
  tags?: Tag[] | null;
  definition: DefinitionDocument;
  target: DeploymentTarget;
  greengrassGroupName?: string | null;
  s3BucketName?: string | null;
  metricsConfiguration?: MetricsConfiguration | null;
  flowActionsRoleArn?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateSystemTemplateRequest {
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface DeleteFlowTemplateRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface DeleteNamespaceRequest {
}

// refs: 1 - tags: named, input
export interface DeleteSystemInstanceRequest {
  id?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteSystemTemplateRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface DeploySystemInstanceRequest {
  id?: string | null;
}

// refs: 1 - tags: named, input
export interface DeprecateFlowTemplateRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface DeprecateSystemTemplateRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface DescribeNamespaceRequest {
  namespaceName?: string | null;
}

// refs: 1 - tags: named, input
export interface DissociateEntityFromThingRequest {
  thingName: string;
  entityType: EntityType;
}

// refs: 1 - tags: named, input
export interface GetEntitiesRequest {
  ids: string[];
  namespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface GetFlowTemplateRequest {
  id: string;
  revisionNumber?: number | null;
}

// refs: 1 - tags: named, input
export interface GetFlowTemplateRevisionsRequest {
  id: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetNamespaceDeletionStatusRequest {
}

// refs: 1 - tags: named, input
export interface GetSystemInstanceRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface GetSystemTemplateRequest {
  id: string;
  revisionNumber?: number | null;
}

// refs: 1 - tags: named, input
export interface GetSystemTemplateRevisionsRequest {
  id: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetUploadStatusRequest {
  uploadId: string;
}

// refs: 1 - tags: named, input
export interface ListFlowExecutionMessagesRequest {
  flowExecutionId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  maxResults?: number | null;
  resourceArn: string;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface SearchEntitiesRequest {
  entityTypes: EntityType[];
  filters?: EntityFilter[] | null;
  nextToken?: string | null;
  maxResults?: number | null;
  namespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface SearchFlowExecutionsRequest {
  systemInstanceId: string;
  flowExecutionId?: string | null;
  startTime?: Date | number | null;
  endTime?: Date | number | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface SearchFlowTemplatesRequest {
  filters?: FlowTemplateFilter[] | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface SearchSystemInstancesRequest {
  filters?: SystemInstanceFilter[] | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface SearchSystemTemplatesRequest {
  filters?: SystemTemplateFilter[] | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface SearchThingsRequest {
  entityId: string;
  nextToken?: string | null;
  maxResults?: number | null;
  namespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UndeploySystemInstanceRequest {
  id?: string | null;
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateFlowTemplateRequest {
  id: string;
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface UpdateSystemTemplateRequest {
  id: string;
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number | null;
}

// refs: 1 - tags: named, input
export interface UploadEntityDefinitionsRequest {
  document?: DefinitionDocument | null;
  syncWithPublicNamespace?: boolean | null;
  deprecateExistingEntities?: boolean | null;
}

// refs: 1 - tags: named, output
export interface AssociateEntityToThingResponse {
}

// refs: 1 - tags: named, output
export interface CreateFlowTemplateResponse {
  summary?: FlowTemplateSummary | null;
}

// refs: 1 - tags: named, output
export interface CreateSystemInstanceResponse {
  summary?: SystemInstanceSummary | null;
}

// refs: 1 - tags: named, output
export interface CreateSystemTemplateResponse {
  summary?: SystemTemplateSummary | null;
}

// refs: 1 - tags: named, output
export interface DeleteFlowTemplateResponse {
}

// refs: 1 - tags: named, output
export interface DeleteNamespaceResponse {
  namespaceArn?: string | null;
  namespaceName?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteSystemInstanceResponse {
}

// refs: 1 - tags: named, output
export interface DeleteSystemTemplateResponse {
}

// refs: 1 - tags: named, output
export interface DeploySystemInstanceResponse {
  summary: SystemInstanceSummary;
  greengrassDeploymentId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeprecateFlowTemplateResponse {
}

// refs: 1 - tags: named, output
export interface DeprecateSystemTemplateResponse {
}

// refs: 1 - tags: named, output
export interface DescribeNamespaceResponse {
  namespaceArn?: string | null;
  namespaceName?: string | null;
  trackingNamespaceName?: string | null;
  trackingNamespaceVersion?: number | null;
  namespaceVersion?: number | null;
}

// refs: 1 - tags: named, output
export interface DissociateEntityFromThingResponse {
}

// refs: 1 - tags: named, output
export interface GetEntitiesResponse {
  descriptions?: EntityDescription[] | null;
}

// refs: 1 - tags: named, output
export interface GetFlowTemplateResponse {
  description?: FlowTemplateDescription | null;
}

// refs: 1 - tags: named, output
export interface GetFlowTemplateRevisionsResponse {
  summaries?: FlowTemplateSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetNamespaceDeletionStatusResponse {
  namespaceArn?: string | null;
  namespaceName?: string | null;
  status?: NamespaceDeletionStatus | null;
  errorCode?: NamespaceDeletionStatusErrorCodes | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSystemInstanceResponse {
  description?: SystemInstanceDescription | null;
}

// refs: 1 - tags: named, output
export interface GetSystemTemplateResponse {
  description?: SystemTemplateDescription | null;
}

// refs: 1 - tags: named, output
export interface GetSystemTemplateRevisionsResponse {
  summaries?: SystemTemplateSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetUploadStatusResponse {
  uploadId: string;
  uploadStatus: UploadStatus;
  namespaceArn?: string | null;
  namespaceName?: string | null;
  namespaceVersion?: number | null;
  failureReason?: string[] | null;
  createdDate: Date | number;
}

// refs: 1 - tags: named, output
export interface ListFlowExecutionMessagesResponse {
  messages?: FlowExecutionMessage[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: Tag[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface SearchEntitiesResponse {
  descriptions?: EntityDescription[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface SearchFlowExecutionsResponse {
  summaries?: FlowExecutionSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface SearchFlowTemplatesResponse {
  summaries?: FlowTemplateSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface SearchSystemInstancesResponse {
  summaries?: SystemInstanceSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface SearchSystemTemplatesResponse {
  summaries?: SystemTemplateSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface SearchThingsResponse {
  things?: Thing[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UndeploySystemInstanceResponse {
  summary?: SystemInstanceSummary | null;
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateFlowTemplateResponse {
  summary?: FlowTemplateSummary | null;
}

// refs: 1 - tags: named, output
export interface UpdateSystemTemplateResponse {
  summary?: SystemTemplateSummary | null;
}

// refs: 1 - tags: named, output
export interface UploadEntityDefinitionsResponse {
  uploadId: string;
}

// refs: 11 - tags: input, named, interface, output
export interface DefinitionDocument {
  language: DefinitionLanguage;
  text: string;
}

// refs: 11 - tags: input, named, enum, output
export type DefinitionLanguage =
| "GRAPHQL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface Tag {
  key: string;
  value: string;
}

// refs: 6 - tags: input, named, enum, output
export type DeploymentTarget =
| "GREENGRASS"
| "CLOUD"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface MetricsConfiguration {
  cloudMetricEnabled?: boolean | null;
  metricRuleRoleArn?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type EntityType =
| "DEVICE"
| "SERVICE"
| "DEVICE_MODEL"
| "CAPABILITY"
| "STATE"
| "ACTION"
| "EVENT"
| "PROPERTY"
| "MAPPING"
| "ENUM"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface EntityFilter {
  name?: EntityFilterName | null;
  value?: string[] | null;
}

// refs: 1 - tags: input, named, enum
export type EntityFilterName =
| "NAME"
| "NAMESPACE"
| "SEMANTIC_TYPE_PATH"
| "REFERENCED_ENTITY_ID"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface FlowTemplateFilter {
  name: FlowTemplateFilterName;
  value: string[];
}

// refs: 1 - tags: input, named, enum
export type FlowTemplateFilterName =
| "DEVICE_MODEL_ID"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SystemInstanceFilter {
  name?: SystemInstanceFilterName | null;
  value?: string[] | null;
}

// refs: 1 - tags: input, named, enum
export type SystemInstanceFilterName =
| "SYSTEM_TEMPLATE_ID"
| "STATUS"
| "GREENGRASS_GROUP_NAME"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SystemTemplateFilter {
  name: SystemTemplateFilterName;
  value: string[];
}

// refs: 1 - tags: input, named, enum
export type SystemTemplateFilterName =
| "FLOW_TEMPLATE_ID"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, interface
export interface FlowTemplateSummary {
  id?: string | null;
  arn?: string | null;
  revisionNumber?: number | null;
  createdAt?: Date | number | null;
}

// refs: 5 - tags: output, named, interface
export interface SystemInstanceSummary {
  id?: string | null;
  arn?: string | null;
  status?: SystemInstanceDeploymentStatus | null;
  target?: DeploymentTarget | null;
  greengrassGroupName?: string | null;
  createdAt?: Date | number | null;
  updatedAt?: Date | number | null;
  greengrassGroupId?: string | null;
  greengrassGroupVersionId?: string | null;
}

// refs: 5 - tags: output, named, enum
export type SystemInstanceDeploymentStatus =
| "NOT_DEPLOYED"
| "BOOTSTRAP"
| "DEPLOY_IN_PROGRESS"
| "DEPLOYED_IN_TARGET"
| "UNDEPLOY_IN_PROGRESS"
| "FAILED"
| "PENDING_DELETE"
| "DELETED_IN_TARGET"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, interface
export interface SystemTemplateSummary {
  id?: string | null;
  arn?: string | null;
  revisionNumber?: number | null;
  createdAt?: Date | number | null;
}

// refs: 2 - tags: output, named, interface
export interface EntityDescription {
  id?: string | null;
  arn?: string | null;
  type?: EntityType | null;
  createdAt?: Date | number | null;
  definition?: DefinitionDocument | null;
}

// refs: 1 - tags: output, named, interface
export interface FlowTemplateDescription {
  summary?: FlowTemplateSummary | null;
  definition?: DefinitionDocument | null;
  validatedNamespaceVersion?: number | null;
}

// refs: 1 - tags: output, named, enum
export type NamespaceDeletionStatus =
| "IN_PROGRESS"
| "SUCCEEDED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type NamespaceDeletionStatusErrorCodes =
| "VALIDATION_FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface SystemInstanceDescription {
  summary?: SystemInstanceSummary | null;
  definition?: DefinitionDocument | null;
  s3BucketName?: string | null;
  metricsConfiguration?: MetricsConfiguration | null;
  validatedNamespaceVersion?: number | null;
  validatedDependencyRevisions?: DependencyRevision[] | null;
  flowActionsRoleArn?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface DependencyRevision {
  id?: string | null;
  revisionNumber?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface SystemTemplateDescription {
  summary?: SystemTemplateSummary | null;
  definition?: DefinitionDocument | null;
  validatedNamespaceVersion?: number | null;
}

// refs: 1 - tags: output, named, enum
export type UploadStatus =
| "IN_PROGRESS"
| "SUCCEEDED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface FlowExecutionMessage {
  messageId?: string | null;
  eventType?: FlowExecutionEventType | null;
  timestamp?: Date | number | null;
  payload?: string | null;
}

// refs: 1 - tags: output, named, enum
export type FlowExecutionEventType =
| "EXECUTION_STARTED"
| "EXECUTION_FAILED"
| "EXECUTION_ABORTED"
| "EXECUTION_SUCCEEDED"
| "STEP_STARTED"
| "STEP_FAILED"
| "STEP_SUCCEEDED"
| "ACTIVITY_SCHEDULED"
| "ACTIVITY_STARTED"
| "ACTIVITY_FAILED"
| "ACTIVITY_SUCCEEDED"
| "START_FLOW_EXECUTION_TASK"
| "SCHEDULE_NEXT_READY_STEPS_TASK"
| "THING_ACTION_TASK"
| "THING_ACTION_TASK_FAILED"
| "THING_ACTION_TASK_SUCCEEDED"
| "ACKNOWLEDGE_TASK_MESSAGE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface FlowExecutionSummary {
  flowExecutionId?: string | null;
  status?: FlowExecutionStatus | null;
  systemInstanceId?: string | null;
  flowTemplateId?: string | null;
  createdAt?: Date | number | null;
  updatedAt?: Date | number | null;
}

// refs: 1 - tags: output, named, enum
export type FlowExecutionStatus =
| "RUNNING"
| "ABORTED"
| "SUCCEEDED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Thing {
  thingArn?: string | null;
  thingName?: string | null;
}