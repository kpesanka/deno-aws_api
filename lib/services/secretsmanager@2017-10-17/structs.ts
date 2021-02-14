// Autogenerated API structures for: AWS Secrets Manager

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CancelRotateSecretRequest {
  SecretId: string;
}

// refs: 1 - tags: named, input
export interface CreateSecretRequest {
  Name: string;
  ClientRequestToken?: string | null;
  Description?: string | null;
  KmsKeyId?: string | null;
  SecretBinary?: Uint8Array | string | null;
  SecretString?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteResourcePolicyRequest {
  SecretId: string;
}

// refs: 1 - tags: named, input
export interface DeleteSecretRequest {
  SecretId: string;
  RecoveryWindowInDays?: number | null;
  ForceDeleteWithoutRecovery?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeSecretRequest {
  SecretId: string;
}

// refs: 1 - tags: named, input
export interface GetRandomPasswordRequest {
  PasswordLength?: number | null;
  ExcludeCharacters?: string | null;
  ExcludeNumbers?: boolean | null;
  ExcludePunctuation?: boolean | null;
  ExcludeUppercase?: boolean | null;
  ExcludeLowercase?: boolean | null;
  IncludeSpace?: boolean | null;
  RequireEachIncludedType?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetResourcePolicyRequest {
  SecretId: string;
}

// refs: 1 - tags: named, input
export interface GetSecretValueRequest {
  SecretId: string;
  VersionId?: string | null;
  VersionStage?: string | null;
}

// refs: 1 - tags: named, input
export interface ListSecretVersionIdsRequest {
  SecretId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
  IncludeDeprecated?: boolean | null;
}

// refs: 1 - tags: named, input
export interface ListSecretsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
  SortOrder?: SortOrderType | null;
}

// refs: 1 - tags: named, input
export interface PutResourcePolicyRequest {
  SecretId: string;
  ResourcePolicy: string;
  BlockPublicPolicy?: boolean | null;
}

// refs: 1 - tags: named, input
export interface PutSecretValueRequest {
  SecretId: string;
  ClientRequestToken?: string | null;
  SecretBinary?: Uint8Array | string | null;
  SecretString?: string | null;
  VersionStages?: string[] | null;
}

// refs: 1 - tags: named, input
export interface RestoreSecretRequest {
  SecretId: string;
}

// refs: 1 - tags: named, input
export interface RotateSecretRequest {
  SecretId: string;
  ClientRequestToken?: string | null;
  RotationLambdaARN?: string | null;
  RotationRules?: RotationRulesType | null;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  SecretId: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  SecretId: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateSecretRequest {
  SecretId: string;
  ClientRequestToken?: string | null;
  Description?: string | null;
  KmsKeyId?: string | null;
  SecretBinary?: Uint8Array | string | null;
  SecretString?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateSecretVersionStageRequest {
  SecretId: string;
  VersionStage: string;
  RemoveFromVersionId?: string | null;
  MoveToVersionId?: string | null;
}

// refs: 1 - tags: named, input
export interface ValidateResourcePolicyRequest {
  SecretId?: string | null;
  ResourcePolicy: string;
}

// refs: 1 - tags: named, output
export interface CancelRotateSecretResponse {
  ARN?: string | null;
  Name?: string | null;
  VersionId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateSecretResponse {
  ARN?: string | null;
  Name?: string | null;
  VersionId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteResourcePolicyResponse {
  ARN?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteSecretResponse {
  ARN?: string | null;
  Name?: string | null;
  DeletionDate?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DescribeSecretResponse {
  ARN?: string | null;
  Name?: string | null;
  Description?: string | null;
  KmsKeyId?: string | null;
  RotationEnabled?: boolean | null;
  RotationLambdaARN?: string | null;
  RotationRules?: RotationRulesType | null;
  LastRotatedDate?: Date | number | null;
  LastChangedDate?: Date | number | null;
  LastAccessedDate?: Date | number | null;
  DeletedDate?: Date | number | null;
  Tags?: Tag[] | null;
  VersionIdsToStages?: { [key: string]: string[] | null | undefined } | null;
  OwningService?: string | null;
  CreatedDate?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface GetRandomPasswordResponse {
  RandomPassword?: string | null;
}

// refs: 1 - tags: named, output
export interface GetResourcePolicyResponse {
  ARN?: string | null;
  Name?: string | null;
  ResourcePolicy?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSecretValueResponse {
  ARN?: string | null;
  Name?: string | null;
  VersionId?: string | null;
  SecretBinary?: Uint8Array | string | null;
  SecretString?: string | null;
  VersionStages?: string[] | null;
  CreatedDate?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface ListSecretVersionIdsResponse {
  Versions?: SecretVersionsListEntry[] | null;
  NextToken?: string | null;
  ARN?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: named, output
export interface ListSecretsResponse {
  SecretList?: SecretListEntry[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutResourcePolicyResponse {
  ARN?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: named, output
export interface PutSecretValueResponse {
  ARN?: string | null;
  Name?: string | null;
  VersionId?: string | null;
  VersionStages?: string[] | null;
}

// refs: 1 - tags: named, output
export interface RestoreSecretResponse {
  ARN?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: named, output
export interface RotateSecretResponse {
  ARN?: string | null;
  Name?: string | null;
  VersionId?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateSecretResponse {
  ARN?: string | null;
  Name?: string | null;
  VersionId?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateSecretVersionStageResponse {
  ARN?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: named, output
export interface ValidateResourcePolicyResponse {
  PolicyValidationPassed?: boolean | null;
  ValidationErrors?: ValidationErrorsEntry[] | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface Filter {
  Key?: FilterNameStringType | null;
  Values?: string[] | null;
}

// refs: 1 - tags: input, named, enum
export type FilterNameStringType =
| "description"
| "name"
| "tag-key"
| "tag-value"
| "all"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type SortOrderType =
| "asc"
| "desc"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface RotationRulesType {
  AutomaticallyAfterDays?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface SecretVersionsListEntry {
  VersionId?: string | null;
  VersionStages?: string[] | null;
  LastAccessedDate?: Date | number | null;
  CreatedDate?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface SecretListEntry {
  ARN?: string | null;
  Name?: string | null;
  Description?: string | null;
  KmsKeyId?: string | null;
  RotationEnabled?: boolean | null;
  RotationLambdaARN?: string | null;
  RotationRules?: RotationRulesType | null;
  LastRotatedDate?: Date | number | null;
  LastChangedDate?: Date | number | null;
  LastAccessedDate?: Date | number | null;
  DeletedDate?: Date | number | null;
  Tags?: Tag[] | null;
  SecretVersionsToStages?: { [key: string]: string[] | null | undefined } | null;
  OwningService?: string | null;
  CreatedDate?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface ValidationErrorsEntry {
  CheckName?: string | null;
  ErrorMessage?: string | null;
}
