// Autogenerated API structures for: AWS Lambda

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AddEventSourceRequest {
  EventSource: string;
  FunctionName: string;
  Role: string;
  BatchSize?: number | null;
  Parameters?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteFunctionRequest {
  FunctionName: string;
}

// refs: 1 - tags: named, input
export interface GetEventSourceRequest {
  UUID: string;
}

// refs: 1 - tags: named, input
export interface GetFunctionRequest {
  FunctionName: string;
}

// refs: 1 - tags: named, input
export interface GetFunctionConfigurationRequest {
  FunctionName: string;
}

// refs: 1 - tags: named, input
export interface InvokeAsyncRequest {
  FunctionName: string;
  InvokeArgs: Uint8Array | string;
}

// refs: 1 - tags: named, input
export interface ListEventSourcesRequest {
  EventSourceArn?: string | null;
  FunctionName?: string | null;
  Marker?: string | null;
  MaxItems?: number | null;
}

// refs: 1 - tags: named, input
export interface ListFunctionsRequest {
  Marker?: string | null;
  MaxItems?: number | null;
}

// refs: 1 - tags: named, input
export interface RemoveEventSourceRequest {
  UUID: string;
}

// refs: 1 - tags: named, input
export interface UpdateFunctionConfigurationRequest {
  FunctionName: string;
  Role?: string | null;
  Handler?: string | null;
  Description?: string | null;
  Timeout?: number | null;
  MemorySize?: number | null;
}

// refs: 1 - tags: named, input
export interface UploadFunctionRequest {
  FunctionName: string;
  FunctionZip: Uint8Array | string;
  Runtime: Runtime;
  Role: string;
  Handler: string;
  Mode: Mode;
  Description?: string | null;
  Timeout?: number | null;
  MemorySize?: number | null;
}

// refs: 2 - tags: named, output, interface
export interface EventSourceConfiguration {
  UUID?: string | null;
  BatchSize?: number | null;
  EventSource?: string | null;
  FunctionName?: string | null;
  Parameters?: { [key: string]: string | null | undefined } | null;
  Role?: string | null;
  LastModified?: Date | number | null;
  IsActive?: boolean | null;
  Status?: string | null;
}

// refs: 1 - tags: named, output
export interface GetFunctionResponse {
  Configuration?: FunctionConfiguration | null;
  Code?: FunctionCodeLocation | null;
}

// refs: 3 - tags: output, named, interface
export interface FunctionConfiguration {
  FunctionName?: string | null;
  FunctionARN?: string | null;
  ConfigurationId?: string | null;
  Runtime?: Runtime | null;
  Role?: string | null;
  Handler?: string | null;
  Mode?: Mode | null;
  CodeSize?: number | null;
  Description?: string | null;
  Timeout?: number | null;
  MemorySize?: number | null;
  LastModified?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface InvokeAsyncResponse {
  Status?: number | null;
}

// refs: 1 - tags: named, output
export interface ListEventSourcesResponse {
  NextMarker?: string | null;
  EventSources?: EventSourceConfiguration[] | null;
}

// refs: 1 - tags: named, output
export interface ListFunctionsResponse {
  NextMarker?: string | null;
  Functions?: FunctionConfiguration[] | null;
}

// refs: 4 - tags: input, named, enum, output
export type Runtime =
| "nodejs"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type Mode =
| "event"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface FunctionCodeLocation {
  RepositoryType?: string | null;
  Location?: string | null;
}
