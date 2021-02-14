// Autogenerated API structures for: Amazon Augmented AI Runtime

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface DeleteHumanLoopRequest {
  HumanLoopName: string;
}

// refs: 1 - tags: named, input
export interface DescribeHumanLoopRequest {
  HumanLoopName: string;
}

// refs: 1 - tags: named, input
export interface ListHumanLoopsRequest {
  CreationTimeAfter?: Date | number | null;
  CreationTimeBefore?: Date | number | null;
  FlowDefinitionArn: string;
  SortOrder?: SortOrder | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface StartHumanLoopRequest {
  HumanLoopName: string;
  FlowDefinitionArn: string;
  HumanLoopInput: HumanLoopInput;
  DataAttributes?: HumanLoopDataAttributes | null;
}

// refs: 1 - tags: named, input
export interface StopHumanLoopRequest {
  HumanLoopName: string;
}

// refs: 1 - tags: named, output
export interface DeleteHumanLoopResponse {
}

// refs: 1 - tags: named, output
export interface DescribeHumanLoopResponse {
  CreationTime: Date | number;
  FailureReason?: string | null;
  FailureCode?: string | null;
  HumanLoopStatus: HumanLoopStatus;
  HumanLoopName: string;
  HumanLoopArn: string;
  FlowDefinitionArn: string;
  HumanLoopOutput?: HumanLoopOutput | null;
}

// refs: 1 - tags: named, output
export interface ListHumanLoopsResponse {
  HumanLoopSummaries: HumanLoopSummary[];
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartHumanLoopResponse {
  HumanLoopArn?: string | null;
}

// refs: 1 - tags: named, output
export interface StopHumanLoopResponse {
}

// refs: 1 - tags: input, named, enum
export type SortOrder =
| "Ascending"
| "Descending"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface HumanLoopInput {
  InputContent: string;
}

// refs: 1 - tags: input, named, interface
export interface HumanLoopDataAttributes {
  ContentClassifiers: ContentClassifier[];
}

// refs: 1 - tags: input, named, enum
export type ContentClassifier =
| "FreeOfPersonallyIdentifiableInformation"
| "FreeOfAdultContent"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type HumanLoopStatus =
| "InProgress"
| "Failed"
| "Completed"
| "Stopped"
| "Stopping"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface HumanLoopOutput {
  OutputS3Uri: string;
}

// refs: 1 - tags: output, named, interface
export interface HumanLoopSummary {
  HumanLoopName?: string | null;
  HumanLoopStatus?: HumanLoopStatus | null;
  CreationTime?: Date | number | null;
  FailureReason?: string | null;
  FlowDefinitionArn?: string | null;
}
