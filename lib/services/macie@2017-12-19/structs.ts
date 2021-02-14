// Autogenerated API structures for: Amazon Macie

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateMemberAccountRequest {
  memberAccountId: string;
}

// refs: 1 - tags: named, input
export interface AssociateS3ResourcesRequest {
  memberAccountId?: string | null;
  s3Resources: S3ResourceClassification[];
}

// refs: 1 - tags: named, input
export interface DisassociateMemberAccountRequest {
  memberAccountId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateS3ResourcesRequest {
  memberAccountId?: string | null;
  associatedS3Resources: S3Resource[];
}

// refs: 1 - tags: named, input
export interface ListMemberAccountsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListS3ResourcesRequest {
  memberAccountId?: string | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface UpdateS3ResourcesRequest {
  memberAccountId?: string | null;
  s3ResourcesUpdate: S3ResourceClassificationUpdate[];
}

// refs: 1 - tags: named, output
export interface AssociateS3ResourcesResult {
  failedS3Resources?: FailedS3Resource[] | null;
}

// refs: 1 - tags: named, output
export interface DisassociateS3ResourcesResult {
  failedS3Resources?: FailedS3Resource[] | null;
}

// refs: 1 - tags: named, output
export interface ListMemberAccountsResult {
  memberAccounts?: MemberAccount[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListS3ResourcesResult {
  s3Resources?: S3ResourceClassification[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateS3ResourcesResult {
  failedS3Resources?: FailedS3Resource[] | null;
}

// refs: 2 - tags: input, named, interface, output
export interface S3ResourceClassification {
  bucketName: string;
  prefix?: string | null;
  classificationType: ClassificationType;
}

// refs: 2 - tags: input, named, interface, output
export interface ClassificationType {
  oneTime: S3OneTimeClassificationType;
  continuous: S3ContinuousClassificationType;
}

// refs: 3 - tags: input, named, enum, output
export type S3OneTimeClassificationType =
| "FULL"
| "NONE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type S3ContinuousClassificationType =
| "FULL"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface S3Resource {
  bucketName: string;
  prefix?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface S3ResourceClassificationUpdate {
  bucketName: string;
  prefix?: string | null;
  classificationTypeUpdate: ClassificationTypeUpdate;
}

// refs: 1 - tags: input, named, interface
export interface ClassificationTypeUpdate {
  oneTime?: S3OneTimeClassificationType | null;
  continuous?: S3ContinuousClassificationType | null;
}

// refs: 3 - tags: output, named, interface
export interface FailedS3Resource {
  failedItem?: S3Resource | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface MemberAccount {
  accountId?: string | null;
}
