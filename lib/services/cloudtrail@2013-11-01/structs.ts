// Autogenerated API structures for: AWS CloudTrail

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AddTagsRequest {
  ResourceId: string;
  TagsList?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateTrailRequest {
  Name: string;
  S3BucketName: string;
  S3KeyPrefix?: string | null;
  SnsTopicName?: string | null;
  IncludeGlobalServiceEvents?: boolean | null;
  IsMultiRegionTrail?: boolean | null;
  EnableLogFileValidation?: boolean | null;
  CloudWatchLogsLogGroupArn?: string | null;
  CloudWatchLogsRoleArn?: string | null;
  KmsKeyId?: string | null;
  IsOrganizationTrail?: boolean | null;
  TagsList?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteTrailRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DescribeTrailsRequest {
  trailNameList?: string[] | null;
  includeShadowTrails?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetEventSelectorsRequest {
  TrailName: string;
}

// refs: 1 - tags: named, input
export interface GetInsightSelectorsRequest {
  TrailName: string;
}

// refs: 1 - tags: named, input
export interface GetTrailRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface GetTrailStatusRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface ListPublicKeysRequest {
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsRequest {
  ResourceIdList: string[];
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTrailsRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface LookupEventsRequest {
  LookupAttributes?: LookupAttribute[] | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  EventCategory?: EventCategory | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface PutEventSelectorsRequest {
  TrailName: string;
  EventSelectors?: EventSelector[] | null;
  AdvancedEventSelectors?: AdvancedEventSelector[] | null;
}

// refs: 1 - tags: named, input
export interface PutInsightSelectorsRequest {
  TrailName: string;
  InsightSelectors: InsightSelector[];
}

// refs: 1 - tags: named, input
export interface RemoveTagsRequest {
  ResourceId: string;
  TagsList?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface StartLoggingRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface StopLoggingRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface UpdateTrailRequest {
  Name: string;
  S3BucketName?: string | null;
  S3KeyPrefix?: string | null;
  SnsTopicName?: string | null;
  IncludeGlobalServiceEvents?: boolean | null;
  IsMultiRegionTrail?: boolean | null;
  EnableLogFileValidation?: boolean | null;
  CloudWatchLogsLogGroupArn?: string | null;
  CloudWatchLogsRoleArn?: string | null;
  KmsKeyId?: string | null;
  IsOrganizationTrail?: boolean | null;
}

// refs: 1 - tags: named, output
export interface AddTagsResponse {
}

// refs: 1 - tags: named, output
export interface CreateTrailResponse {
  Name?: string | null;
  S3BucketName?: string | null;
  S3KeyPrefix?: string | null;
  SnsTopicName?: string | null;
  SnsTopicARN?: string | null;
  IncludeGlobalServiceEvents?: boolean | null;
  IsMultiRegionTrail?: boolean | null;
  TrailARN?: string | null;
  LogFileValidationEnabled?: boolean | null;
  CloudWatchLogsLogGroupArn?: string | null;
  CloudWatchLogsRoleArn?: string | null;
  KmsKeyId?: string | null;
  IsOrganizationTrail?: boolean | null;
}

// refs: 1 - tags: named, output
export interface DeleteTrailResponse {
}

// refs: 1 - tags: named, output
export interface DescribeTrailsResponse {
  trailList?: Trail[] | null;
}

// refs: 1 - tags: named, output
export interface GetEventSelectorsResponse {
  TrailARN?: string | null;
  EventSelectors?: EventSelector[] | null;
  AdvancedEventSelectors?: AdvancedEventSelector[] | null;
}

// refs: 1 - tags: named, output
export interface GetInsightSelectorsResponse {
  TrailARN?: string | null;
  InsightSelectors?: InsightSelector[] | null;
}

// refs: 1 - tags: named, output
export interface GetTrailResponse {
  Trail?: Trail | null;
}

// refs: 1 - tags: named, output
export interface GetTrailStatusResponse {
  IsLogging?: boolean | null;
  LatestDeliveryError?: string | null;
  LatestNotificationError?: string | null;
  LatestDeliveryTime?: Date | number | null;
  LatestNotificationTime?: Date | number | null;
  StartLoggingTime?: Date | number | null;
  StopLoggingTime?: Date | number | null;
  LatestCloudWatchLogsDeliveryError?: string | null;
  LatestCloudWatchLogsDeliveryTime?: Date | number | null;
  LatestDigestDeliveryTime?: Date | number | null;
  LatestDigestDeliveryError?: string | null;
  LatestDeliveryAttemptTime?: string | null;
  LatestNotificationAttemptTime?: string | null;
  LatestNotificationAttemptSucceeded?: string | null;
  LatestDeliveryAttemptSucceeded?: string | null;
  TimeLoggingStarted?: string | null;
  TimeLoggingStopped?: string | null;
}

// refs: 1 - tags: named, output
export interface ListPublicKeysResponse {
  PublicKeyList?: PublicKey[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsResponse {
  ResourceTagList?: ResourceTag[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTrailsResponse {
  Trails?: TrailInfo[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface LookupEventsResponse {
  Events?: Event[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutEventSelectorsResponse {
  TrailARN?: string | null;
  EventSelectors?: EventSelector[] | null;
  AdvancedEventSelectors?: AdvancedEventSelector[] | null;
}

// refs: 1 - tags: named, output
export interface PutInsightSelectorsResponse {
  TrailARN?: string | null;
  InsightSelectors?: InsightSelector[] | null;
}

// refs: 1 - tags: named, output
export interface RemoveTagsResponse {
}

// refs: 1 - tags: named, output
export interface StartLoggingResponse {
}

// refs: 1 - tags: named, output
export interface StopLoggingResponse {
}

// refs: 1 - tags: named, output
export interface UpdateTrailResponse {
  Name?: string | null;
  S3BucketName?: string | null;
  S3KeyPrefix?: string | null;
  SnsTopicName?: string | null;
  SnsTopicARN?: string | null;
  IncludeGlobalServiceEvents?: boolean | null;
  IsMultiRegionTrail?: boolean | null;
  TrailARN?: string | null;
  LogFileValidationEnabled?: boolean | null;
  CloudWatchLogsLogGroupArn?: string | null;
  CloudWatchLogsRoleArn?: string | null;
  KmsKeyId?: string | null;
  IsOrganizationTrail?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface LookupAttribute {
  AttributeKey: LookupAttributeKey;
  AttributeValue: string;
}

// refs: 1 - tags: input, named, enum
export type LookupAttributeKey =
| "EventId"
| "EventName"
| "ReadOnly"
| "Username"
| "ResourceType"
| "ResourceName"
| "EventSource"
| "AccessKeyId"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type EventCategory =
| "insight"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface EventSelector {
  ReadWriteType?: ReadWriteType | null;
  IncludeManagementEvents?: boolean | null;
  DataResources?: DataResource[] | null;
  ExcludeManagementEventSources?: string[] | null;
}

// refs: 3 - tags: input, named, enum, output
export type ReadWriteType =
| "ReadOnly"
| "WriteOnly"
| "All"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface DataResource {
  Type?: string | null;
  Values?: string[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface AdvancedEventSelector {
  Name?: string | null;
  FieldSelectors: AdvancedFieldSelector[];
}

// refs: 3 - tags: input, named, interface, output
export interface AdvancedFieldSelector {
  Field: string;
  Equals?: string[] | null;
  StartsWith?: string[] | null;
  EndsWith?: string[] | null;
  NotEquals?: string[] | null;
  NotStartsWith?: string[] | null;
  NotEndsWith?: string[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface InsightSelector {
  InsightType?: InsightType | null;
}

// refs: 3 - tags: input, named, enum, output
export type InsightType =
| "ApiCallRateInsight"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Trail {
  Name?: string | null;
  S3BucketName?: string | null;
  S3KeyPrefix?: string | null;
  SnsTopicName?: string | null;
  SnsTopicARN?: string | null;
  IncludeGlobalServiceEvents?: boolean | null;
  IsMultiRegionTrail?: boolean | null;
  HomeRegion?: string | null;
  TrailARN?: string | null;
  LogFileValidationEnabled?: boolean | null;
  CloudWatchLogsLogGroupArn?: string | null;
  CloudWatchLogsRoleArn?: string | null;
  KmsKeyId?: string | null;
  HasCustomEventSelectors?: boolean | null;
  HasInsightSelectors?: boolean | null;
  IsOrganizationTrail?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface PublicKey {
  Value?: Uint8Array | string | null;
  ValidityStartTime?: Date | number | null;
  ValidityEndTime?: Date | number | null;
  Fingerprint?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ResourceTag {
  ResourceId?: string | null;
  TagsList?: Tag[] | null;
}

// refs: 1 - tags: output, named, interface
export interface TrailInfo {
  TrailARN?: string | null;
  Name?: string | null;
  HomeRegion?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Event {
  EventId?: string | null;
  EventName?: string | null;
  ReadOnly?: string | null;
  AccessKeyId?: string | null;
  EventTime?: Date | number | null;
  EventSource?: string | null;
  Username?: string | null;
  Resources?: Resource[] | null;
  CloudTrailEvent?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Resource {
  ResourceType?: string | null;
  ResourceName?: string | null;
}
