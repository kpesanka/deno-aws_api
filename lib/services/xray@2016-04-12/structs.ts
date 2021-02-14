// Autogenerated API structures for: AWS X-Ray

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface BatchGetTracesRequest {
  TraceIds: string[];
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateGroupRequest {
  GroupName: string;
  FilterExpression?: string | null;
  InsightsConfiguration?: InsightsConfiguration | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateSamplingRuleRequest {
  SamplingRule: SamplingRule;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteGroupRequest {
  GroupName?: string | null;
  GroupARN?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteSamplingRuleRequest {
  RuleName?: string | null;
  RuleARN?: string | null;
}

// refs: 1 - tags: named, input
export interface GetEncryptionConfigRequest {
}

// refs: 1 - tags: named, input
export interface GetGroupRequest {
  GroupName?: string | null;
  GroupARN?: string | null;
}

// refs: 1 - tags: named, input
export interface GetGroupsRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetInsightRequest {
  InsightId: string;
}

// refs: 1 - tags: named, input
export interface GetInsightEventsRequest {
  InsightId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetInsightImpactGraphRequest {
  InsightId: string;
  StartTime: Date | number;
  EndTime: Date | number;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetInsightSummariesRequest {
  States?: InsightState[] | null;
  GroupARN?: string | null;
  GroupName?: string | null;
  StartTime: Date | number;
  EndTime: Date | number;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetSamplingRulesRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetSamplingStatisticSummariesRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetSamplingTargetsRequest {
  SamplingStatisticsDocuments: SamplingStatisticsDocument[];
}

// refs: 1 - tags: named, input
export interface GetServiceGraphRequest {
  StartTime: Date | number;
  EndTime: Date | number;
  GroupName?: string | null;
  GroupARN?: string | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetTimeSeriesServiceStatisticsRequest {
  StartTime: Date | number;
  EndTime: Date | number;
  GroupName?: string | null;
  GroupARN?: string | null;
  EntitySelectorExpression?: string | null;
  Period?: number | null;
  ForecastStatistics?: boolean | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetTraceGraphRequest {
  TraceIds: string[];
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetTraceSummariesRequest {
  StartTime: Date | number;
  EndTime: Date | number;
  TimeRangeType?: TimeRangeType | null;
  Sampling?: boolean | null;
  SamplingStrategy?: SamplingStrategy | null;
  FilterExpression?: string | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceARN: string;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface PutEncryptionConfigRequest {
  KeyId?: string | null;
  Type: EncryptionType;
}

// refs: 1 - tags: named, input
export interface PutTelemetryRecordsRequest {
  TelemetryRecords: TelemetryRecord[];
  EC2InstanceId?: string | null;
  Hostname?: string | null;
  ResourceARN?: string | null;
}

// refs: 1 - tags: named, input
export interface PutTraceSegmentsRequest {
  TraceSegmentDocuments: string[];
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateGroupRequest {
  GroupName?: string | null;
  GroupARN?: string | null;
  FilterExpression?: string | null;
  InsightsConfiguration?: InsightsConfiguration | null;
}

// refs: 1 - tags: named, input
export interface UpdateSamplingRuleRequest {
  SamplingRuleUpdate: SamplingRuleUpdate;
}

// refs: 1 - tags: named, output
export interface BatchGetTracesResult {
  Traces?: Trace[] | null;
  UnprocessedTraceIds?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateGroupResult {
  Group?: Group | null;
}

// refs: 1 - tags: named, output
export interface CreateSamplingRuleResult {
  SamplingRuleRecord?: SamplingRuleRecord | null;
}

// refs: 1 - tags: named, output
export interface DeleteGroupResult {
}

// refs: 1 - tags: named, output
export interface DeleteSamplingRuleResult {
  SamplingRuleRecord?: SamplingRuleRecord | null;
}

// refs: 1 - tags: named, output
export interface GetEncryptionConfigResult {
  EncryptionConfig?: EncryptionConfig | null;
}

// refs: 1 - tags: named, output
export interface GetGroupResult {
  Group?: Group | null;
}

// refs: 1 - tags: named, output
export interface GetGroupsResult {
  Groups?: GroupSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetInsightResult {
  Insight?: Insight | null;
}

// refs: 1 - tags: named, output
export interface GetInsightEventsResult {
  InsightEvents?: InsightEvent[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetInsightImpactGraphResult {
  InsightId?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  ServiceGraphStartTime?: Date | number | null;
  ServiceGraphEndTime?: Date | number | null;
  Services?: InsightImpactGraphService[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetInsightSummariesResult {
  InsightSummaries?: InsightSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSamplingRulesResult {
  SamplingRuleRecords?: SamplingRuleRecord[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSamplingStatisticSummariesResult {
  SamplingStatisticSummaries?: SamplingStatisticSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSamplingTargetsResult {
  SamplingTargetDocuments?: SamplingTargetDocument[] | null;
  LastRuleModification?: Date | number | null;
  UnprocessedStatistics?: UnprocessedStatistics[] | null;
}

// refs: 1 - tags: named, output
export interface GetServiceGraphResult {
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  Services?: Service[] | null;
  ContainsOldGroupVersions?: boolean | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetTimeSeriesServiceStatisticsResult {
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[] | null;
  ContainsOldGroupVersions?: boolean | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetTraceGraphResult {
  Services?: Service[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetTraceSummariesResult {
  TraceSummaries?: TraceSummary[] | null;
  ApproximateTime?: Date | number | null;
  TracesProcessedCount?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutEncryptionConfigResult {
  EncryptionConfig?: EncryptionConfig | null;
}

// refs: 1 - tags: named, output
export interface PutTelemetryRecordsResult {
}

// refs: 1 - tags: named, output
export interface PutTraceSegmentsResult {
  UnprocessedTraceSegments?: UnprocessedTraceSegment[] | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateGroupResult {
  Group?: Group | null;
}

// refs: 1 - tags: named, output
export interface UpdateSamplingRuleResult {
  SamplingRuleRecord?: SamplingRuleRecord | null;
}

// refs: 6 - tags: input, named, interface, output
export interface InsightsConfiguration {
  InsightsEnabled?: boolean | null;
  NotificationsEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 5 - tags: input, named, interface, output
export interface SamplingRule {
  RuleName?: string | null;
  RuleARN?: string | null;
  ResourceARN: string;
  Priority: number;
  FixedRate: number;
  ReservoirSize: number;
  ServiceName: string;
  ServiceType: string;
  Host: string;
  HTTPMethod: string;
  URLPath: string;
  Version: number;
  Attributes?: { [key: string]: string | null | undefined } | null;
}

// refs: 3 - tags: input, named, enum, output
export type InsightState =
| "ACTIVE"
| "CLOSED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SamplingStatisticsDocument {
  RuleName: string;
  ClientID: string;
  Timestamp: Date | number;
  RequestCount: number;
  SampledCount: number;
  BorrowCount?: number | null;
}

// refs: 1 - tags: input, named, enum
export type TimeRangeType =
| "TraceId"
| "Event"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SamplingStrategy {
  Name?: SamplingStrategyName | null;
  Value?: number | null;
}

// refs: 1 - tags: input, named, enum
export type SamplingStrategyName =
| "PartialScan"
| "FixedRate"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type EncryptionType =
| "NONE"
| "KMS"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface TelemetryRecord {
  Timestamp: Date | number;
  SegmentsReceivedCount?: number | null;
  SegmentsSentCount?: number | null;
  SegmentsSpilloverCount?: number | null;
  SegmentsRejectedCount?: number | null;
  BackendConnectionErrors?: BackendConnectionErrors | null;
}

// refs: 1 - tags: input, named, interface
export interface BackendConnectionErrors {
  TimeoutCount?: number | null;
  ConnectionRefusedCount?: number | null;
  HTTPCode4XXCount?: number | null;
  HTTPCode5XXCount?: number | null;
  UnknownHostCount?: number | null;
  OtherCount?: number | null;
}

// refs: 1 - tags: input, named, interface
export interface SamplingRuleUpdate {
  RuleName?: string | null;
  RuleARN?: string | null;
  ResourceARN?: string | null;
  Priority?: number | null;
  FixedRate?: number | null;
  ReservoirSize?: number | null;
  Host?: string | null;
  ServiceName?: string | null;
  ServiceType?: string | null;
  HTTPMethod?: string | null;
  URLPath?: string | null;
  Attributes?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface Trace {
  Id?: string | null;
  Duration?: number | null;
  LimitExceeded?: boolean | null;
  Segments?: Segment[] | null;
}

// refs: 1 - tags: output, named, interface
export interface Segment {
  Id?: string | null;
  Document?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface Group {
  GroupName?: string | null;
  GroupARN?: string | null;
  FilterExpression?: string | null;
  InsightsConfiguration?: InsightsConfiguration | null;
}

// refs: 4 - tags: output, named, interface
export interface SamplingRuleRecord {
  SamplingRule?: SamplingRule | null;
  CreatedAt?: Date | number | null;
  ModifiedAt?: Date | number | null;
}

// refs: 2 - tags: output, named, interface
export interface EncryptionConfig {
  KeyId?: string | null;
  Status?: EncryptionStatus | null;
  Type?: EncryptionType | null;
}

// refs: 2 - tags: output, named, enum
export type EncryptionStatus =
| "UPDATING"
| "ACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface GroupSummary {
  GroupName?: string | null;
  GroupARN?: string | null;
  FilterExpression?: string | null;
  InsightsConfiguration?: InsightsConfiguration | null;
}

// refs: 1 - tags: output, named, interface
export interface Insight {
  InsightId?: string | null;
  GroupARN?: string | null;
  GroupName?: string | null;
  RootCauseServiceId?: ServiceId | null;
  Categories?: InsightCategory[] | null;
  State?: InsightState | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  Summary?: string | null;
  ClientRequestImpactStatistics?: RequestImpactStatistics | null;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | null;
  TopAnomalousServices?: AnomalousService[] | null;
}

// refs: 9 - tags: output, named, interface
export interface ServiceId {
  Name?: string | null;
  Names?: string[] | null;
  AccountId?: string | null;
  Type?: string | null;
}

// refs: 2 - tags: output, named, enum
export type InsightCategory =
| "FAULT"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: output, named, interface
export interface RequestImpactStatistics {
  FaultCount?: number | null;
  OkCount?: number | null;
  TotalCount?: number | null;
}

// refs: 3 - tags: output, named, interface
export interface AnomalousService {
  ServiceId?: ServiceId | null;
}

// refs: 1 - tags: output, named, interface
export interface InsightEvent {
  Summary?: string | null;
  EventTime?: Date | number | null;
  ClientRequestImpactStatistics?: RequestImpactStatistics | null;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | null;
  TopAnomalousServices?: AnomalousService[] | null;
}

// refs: 1 - tags: output, named, interface
export interface InsightImpactGraphService {
  ReferenceId?: number | null;
  Type?: string | null;
  Name?: string | null;
  Names?: string[] | null;
  AccountId?: string | null;
  Edges?: InsightImpactGraphEdge[] | null;
}

// refs: 1 - tags: output, named, interface
export interface InsightImpactGraphEdge {
  ReferenceId?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface InsightSummary {
  InsightId?: string | null;
  GroupARN?: string | null;
  GroupName?: string | null;
  RootCauseServiceId?: ServiceId | null;
  Categories?: InsightCategory[] | null;
  State?: InsightState | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  Summary?: string | null;
  ClientRequestImpactStatistics?: RequestImpactStatistics | null;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | null;
  TopAnomalousServices?: AnomalousService[] | null;
  LastUpdateTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface SamplingStatisticSummary {
  RuleName?: string | null;
  Timestamp?: Date | number | null;
  RequestCount?: number | null;
  BorrowCount?: number | null;
  SampledCount?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface SamplingTargetDocument {
  RuleName?: string | null;
  FixedRate?: number | null;
  ReservoirQuota?: number | null;
  ReservoirQuotaTTL?: Date | number | null;
  Interval?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface UnprocessedStatistics {
  RuleName?: string | null;
  ErrorCode?: string | null;
  Message?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface Service {
  ReferenceId?: number | null;
  Name?: string | null;
  Names?: string[] | null;
  Root?: boolean | null;
  AccountId?: string | null;
  Type?: string | null;
  State?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  Edges?: Edge[] | null;
  SummaryStatistics?: ServiceStatistics | null;
  DurationHistogram?: HistogramEntry[] | null;
  ResponseTimeHistogram?: HistogramEntry[] | null;
}

// refs: 2 - tags: output, named, interface
export interface Edge {
  ReferenceId?: number | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  SummaryStatistics?: EdgeStatistics | null;
  ResponseTimeHistogram?: HistogramEntry[] | null;
  Aliases?: Alias[] | null;
}

// refs: 3 - tags: output, named, interface
export interface EdgeStatistics {
  OkCount?: number | null;
  ErrorStatistics?: ErrorStatistics | null;
  FaultStatistics?: FaultStatistics | null;
  TotalCount?: number | null;
  TotalResponseTime?: number | null;
}

// refs: 6 - tags: output, named, interface
export interface ErrorStatistics {
  ThrottleCount?: number | null;
  OtherCount?: number | null;
  TotalCount?: number | null;
}

// refs: 6 - tags: output, named, interface
export interface FaultStatistics {
  OtherCount?: number | null;
  TotalCount?: number | null;
}

// refs: 7 - tags: output, named, interface
export interface HistogramEntry {
  Value?: number | null;
  Count?: number | null;
}

// refs: 2 - tags: output, named, interface
export interface Alias {
  Name?: string | null;
  Names?: string[] | null;
  Type?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface ServiceStatistics {
  OkCount?: number | null;
  ErrorStatistics?: ErrorStatistics | null;
  FaultStatistics?: FaultStatistics | null;
  TotalCount?: number | null;
  TotalResponseTime?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface TimeSeriesServiceStatistics {
  Timestamp?: Date | number | null;
  EdgeSummaryStatistics?: EdgeStatistics | null;
  ServiceSummaryStatistics?: ServiceStatistics | null;
  ServiceForecastStatistics?: ForecastStatistics | null;
  ResponseTimeHistogram?: HistogramEntry[] | null;
}

// refs: 1 - tags: output, named, interface
export interface ForecastStatistics {
  FaultCountHigh?: number | null;
  FaultCountLow?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface TraceSummary {
  Id?: string | null;
  Duration?: number | null;
  ResponseTime?: number | null;
  HasFault?: boolean | null;
  HasError?: boolean | null;
  HasThrottle?: boolean | null;
  IsPartial?: boolean | null;
  Http?: Http | null;
  Annotations?: { [key: string]: ValueWithServiceIds[] | null | undefined } | null;
  Users?: TraceUser[] | null;
  ServiceIds?: ServiceId[] | null;
  ResourceARNs?: ResourceARNDetail[] | null;
  InstanceIds?: InstanceIdDetail[] | null;
  AvailabilityZones?: AvailabilityZoneDetail[] | null;
  EntryPoint?: ServiceId | null;
  FaultRootCauses?: FaultRootCause[] | null;
  ErrorRootCauses?: ErrorRootCause[] | null;
  ResponseTimeRootCauses?: ResponseTimeRootCause[] | null;
  Revision?: number | null;
  MatchedEventTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface Http {
  HttpURL?: string | null;
  HttpStatus?: number | null;
  HttpMethod?: string | null;
  UserAgent?: string | null;
  ClientIp?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ValueWithServiceIds {
  AnnotationValue?: AnnotationValue | null;
  ServiceIds?: ServiceId[] | null;
}

// refs: 1 - tags: output, named, interface
export interface AnnotationValue {
  NumberValue?: number | null;
  BooleanValue?: boolean | null;
  StringValue?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface TraceUser {
  UserName?: string | null;
  ServiceIds?: ServiceId[] | null;
}

// refs: 1 - tags: output, named, interface
export interface ResourceARNDetail {
  ARN?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface InstanceIdDetail {
  Id?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface AvailabilityZoneDetail {
  Name?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface FaultRootCause {
  Services?: FaultRootCauseService[] | null;
  ClientImpacting?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface FaultRootCauseService {
  Name?: string | null;
  Names?: string[] | null;
  Type?: string | null;
  AccountId?: string | null;
  EntityPath?: FaultRootCauseEntity[] | null;
  Inferred?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface FaultRootCauseEntity {
  Name?: string | null;
  Exceptions?: RootCauseException[] | null;
  Remote?: boolean | null;
}

// refs: 2 - tags: output, named, interface
export interface RootCauseException {
  Name?: string | null;
  Message?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ErrorRootCause {
  Services?: ErrorRootCauseService[] | null;
  ClientImpacting?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface ErrorRootCauseService {
  Name?: string | null;
  Names?: string[] | null;
  Type?: string | null;
  AccountId?: string | null;
  EntityPath?: ErrorRootCauseEntity[] | null;
  Inferred?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface ErrorRootCauseEntity {
  Name?: string | null;
  Exceptions?: RootCauseException[] | null;
  Remote?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface ResponseTimeRootCause {
  Services?: ResponseTimeRootCauseService[] | null;
  ClientImpacting?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface ResponseTimeRootCauseService {
  Name?: string | null;
  Names?: string[] | null;
  Type?: string | null;
  AccountId?: string | null;
  EntityPath?: ResponseTimeRootCauseEntity[] | null;
  Inferred?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface ResponseTimeRootCauseEntity {
  Name?: string | null;
  Coverage?: number | null;
  Remote?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface UnprocessedTraceSegment {
  Id?: string | null;
  ErrorCode?: string | null;
  Message?: string | null;
}
