// Autogenerated API structures for: Amazon Elastic Block Store

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CompleteSnapshotRequest {
  SnapshotId: string;
  ChangedBlocksCount: number;
  Checksum?: string | null;
  ChecksumAlgorithm?: ChecksumAlgorithm | null;
  ChecksumAggregationMethod?: ChecksumAggregationMethod | null;
}

// refs: 1 - tags: named, input
export interface GetSnapshotBlockRequest {
  SnapshotId: string;
  BlockIndex: number;
  BlockToken: string;
}

// refs: 1 - tags: named, input
export interface ListChangedBlocksRequest {
  FirstSnapshotId?: string | null;
  SecondSnapshotId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
  StartingBlockIndex?: number | null;
}

// refs: 1 - tags: named, input
export interface ListSnapshotBlocksRequest {
  SnapshotId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
  StartingBlockIndex?: number | null;
}

// refs: 1 - tags: named, input
export interface PutSnapshotBlockRequest {
  SnapshotId: string;
  BlockIndex: number;
  BlockData: Uint8Array | string;
  DataLength: number;
  Progress?: number | null;
  Checksum: string;
  ChecksumAlgorithm: ChecksumAlgorithm;
}

// refs: 1 - tags: named, input
export interface StartSnapshotRequest {
  VolumeSize: number;
  ParentSnapshotId?: string | null;
  Tags?: Tag[] | null;
  Description?: string | null;
  ClientToken?: string | null;
  Encrypted?: boolean | null;
  KmsKeyArn?: string | null;
  Timeout?: number | null;
}

// refs: 1 - tags: named, output
export interface CompleteSnapshotResponse {
  Status?: Status | null;
}

// refs: 1 - tags: named, output
export interface GetSnapshotBlockResponse {
  DataLength?: number | null;
  BlockData?: Uint8Array | string | null;
  Checksum?: string | null;
  ChecksumAlgorithm?: ChecksumAlgorithm | null;
}

// refs: 1 - tags: named, output
export interface ListChangedBlocksResponse {
  ChangedBlocks?: ChangedBlock[] | null;
  ExpiryTime?: Date | number | null;
  VolumeSize?: number | null;
  BlockSize?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListSnapshotBlocksResponse {
  Blocks?: Block[] | null;
  ExpiryTime?: Date | number | null;
  VolumeSize?: number | null;
  BlockSize?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutSnapshotBlockResponse {
  Checksum?: string | null;
  ChecksumAlgorithm?: ChecksumAlgorithm | null;
}

// refs: 1 - tags: named, output
export interface StartSnapshotResponse {
  Description?: string | null;
  SnapshotId?: string | null;
  OwnerId?: string | null;
  Status?: Status | null;
  StartTime?: Date | number | null;
  VolumeSize?: number | null;
  BlockSize?: number | null;
  Tags?: Tag[] | null;
  ParentSnapshotId?: string | null;
  KmsKeyArn?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type ChecksumAlgorithm =
| "SHA256"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ChecksumAggregationMethod =
| "LINEAR"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}

// refs: 2 - tags: output, named, enum
export type Status =
| "completed"
| "pending"
| "error"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ChangedBlock {
  BlockIndex?: number | null;
  FirstBlockToken?: string | null;
  SecondBlockToken?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Block {
  BlockIndex?: number | null;
  BlockToken?: string | null;
}
