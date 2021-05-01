// Generation parameters:
//   aws-sdk-js definitions from v2.895.0
//   AWS service UID s3-2006-03-01
//   extra options: actions=GetObject%2CPutObject%2CDeleteObject
//   current time: 2021-05-01T11:39:20.603Z
//   skipped 93 out of 96 actions, leaving 3

// Originally served at https://aws-api.deno.dev/v0.1/services/s3.ts?actions=GetObject,PutObject,DeleteObject

// Autogenerated API client for: Amazon Simple Storage Service

import * as Base64 from "https://deno.land/std@0.91.0/encoding/base64.ts";
import * as HashMd5 from "https://deno.land/std@0.91.0/hash/md5.ts";
import * as client from "../../lib/client/common.ts";
import * as cmnP from "../../lib/encoding/common.ts";
function hashMD5(data: HashMd5.Message): string {
  const hasher = new HashMd5.Md5();
  hasher.update(data);
  return hasher.toString('base64');
}
function serializeBlob(input: string | Uint8Array | null | undefined) {
  if (input == null) return input;
  return Base64.encode(input);
}

export class S3 {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(S3.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2006-03-01",
    "checksumFormat": "md5",
    "endpointPrefix": "s3",
    "protocol": "rest-xml",
    "serviceAbbreviation": "Amazon S3",
    "serviceFullName": "Amazon Simple Storage Service",
    "serviceId": "S3",
    "signatureVersion": "s3",
    "uid": "s3-2006-03-01"
  };

  async deleteObject(
    params: DeleteObjectRequest,
  ): Promise<DeleteObjectOutput> {
    const headers = new Headers;
    const query = new URLSearchParams;
    if (params["MFA"] != null) headers.append("x-amz-mfa", params["MFA"]);
    if (params["VersionId"] != null) query.set("versionId", params["VersionId"]?.toString() ?? "");
    if (params["RequestPayer"] != null) headers.append("x-amz-request-payer", params["RequestPayer"]);
    if (params["BypassGovernanceRetention"] != null) headers.append("x-amz-bypass-governance-retention", params["BypassGovernanceRetention"]?.toString() ?? '');
    if (params["ExpectedBucketOwner"] != null) headers.append("x-amz-expected-bucket-owner", params["ExpectedBucketOwner"]);
    const resp = await this.#client.performRequest({
      headers, query,
      action: "DeleteObject",
      method: "DELETE",
      requestUri: cmnP.encodePath`/${params["Bucket"]}/${params["Key"].split("/")}`,
      responseCode: 204,
    });
    return {
      DeleteMarker: cmnP.readBool(resp.headers.get("x-amz-delete-marker")),
      VersionId: resp.headers.get("x-amz-version-id"),
      RequestCharged: cmnP.readEnum<RequestCharged>(resp.headers.get("x-amz-request-charged")),
    };
  }

  async getObject(
    params: GetObjectRequest,
  ): Promise<GetObjectOutput> {
    const headers = new Headers;
    const query = new URLSearchParams;
    if (params["IfMatch"] != null) headers.append("If-Match", params["IfMatch"]);
    if (params["IfModifiedSince"] != null) headers.append("If-Modified-Since", cmnP.serializeDate_rfc822(params["IfModifiedSince"]) ?? "");
    if (params["IfNoneMatch"] != null) headers.append("If-None-Match", params["IfNoneMatch"]);
    if (params["IfUnmodifiedSince"] != null) headers.append("If-Unmodified-Since", cmnP.serializeDate_rfc822(params["IfUnmodifiedSince"]) ?? "");
    if (params["Range"] != null) headers.append("Range", params["Range"]);
    if (params["ResponseCacheControl"] != null) query.set("response-cache-control", params["ResponseCacheControl"]?.toString() ?? "");
    if (params["ResponseContentDisposition"] != null) query.set("response-content-disposition", params["ResponseContentDisposition"]?.toString() ?? "");
    if (params["ResponseContentEncoding"] != null) query.set("response-content-encoding", params["ResponseContentEncoding"]?.toString() ?? "");
    if (params["ResponseContentLanguage"] != null) query.set("response-content-language", params["ResponseContentLanguage"]?.toString() ?? "");
    if (params["ResponseContentType"] != null) query.set("response-content-type", params["ResponseContentType"]?.toString() ?? "");
    if (params["ResponseExpires"] != null) query.set("response-expires", cmnP.serializeDate_rfc822(params["ResponseExpires"]) ?? "");
    if (params["VersionId"] != null) query.set("versionId", params["VersionId"]?.toString() ?? "");
    if (params["SSECustomerAlgorithm"] != null) headers.append("x-amz-server-side-encryption-customer-algorithm", params["SSECustomerAlgorithm"]);
    if (params["SSECustomerKey"] != null) headers.append("x-amz-server-side-encryption-customer-key", serializeBlob(params["SSECustomerKey"]) ?? '');
    if (params["SSECustomerKeyMD5"] != null) headers.append("x-amz-server-side-encryption-customer-key-MD5", params["SSECustomerKeyMD5"]);
    if (params["RequestPayer"] != null) headers.append("x-amz-request-payer", params["RequestPayer"]);
    if (params["PartNumber"] != null) query.set("partNumber", params["PartNumber"]?.toString() ?? "");
    if (params["ExpectedBucketOwner"] != null) headers.append("x-amz-expected-bucket-owner", params["ExpectedBucketOwner"]);
    const resp = await this.#client.performRequest({
      headers, query,
      action: "GetObject",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["Bucket"]}/${params["Key"].split("/")}`,
    });
    return {
      DeleteMarker: cmnP.readBool(resp.headers.get("x-amz-delete-marker")),
      AcceptRanges: resp.headers.get("accept-ranges"),
      Expiration: resp.headers.get("x-amz-expiration"),
      Restore: resp.headers.get("x-amz-restore"),
      LastModified: cmnP.readTimestamp(resp.headers.get("Last-Modified")),
      ContentLength: cmnP.readNum(resp.headers.get("Content-Length")),
      ETag: resp.headers.get("ETag"),
      MissingMeta: cmnP.readNum(resp.headers.get("x-amz-missing-meta")),
      VersionId: resp.headers.get("x-amz-version-id"),
      CacheControl: resp.headers.get("Cache-Control"),
      ContentDisposition: resp.headers.get("Content-Disposition"),
      ContentEncoding: resp.headers.get("Content-Encoding"),
      ContentLanguage: resp.headers.get("Content-Language"),
      ContentRange: resp.headers.get("Content-Range"),
      ContentType: resp.headers.get("Content-Type"),
      Expires: cmnP.readTimestamp(resp.headers.get("Expires")),
      WebsiteRedirectLocation: resp.headers.get("x-amz-website-redirect-location"),
      ServerSideEncryption: cmnP.readEnum<ServerSideEncryption>(resp.headers.get("x-amz-server-side-encryption")),
      Metadata: cmnP.toJsObj(resp.headers, "x-amz-meta-", v => v),
      SSECustomerAlgorithm: resp.headers.get("x-amz-server-side-encryption-customer-algorithm"),
      SSECustomerKeyMD5: resp.headers.get("x-amz-server-side-encryption-customer-key-MD5"),
      SSEKMSKeyId: resp.headers.get("x-amz-server-side-encryption-aws-kms-key-id"),
      BucketKeyEnabled: cmnP.readBool(resp.headers.get("x-amz-server-side-encryption-bucket-key-enabled")),
      StorageClass: cmnP.readEnum<StorageClass>(resp.headers.get("x-amz-storage-class")),
      RequestCharged: cmnP.readEnum<RequestCharged>(resp.headers.get("x-amz-request-charged")),
      ReplicationStatus: cmnP.readEnum<ReplicationStatus>(resp.headers.get("x-amz-replication-status")),
      PartsCount: cmnP.readNum(resp.headers.get("x-amz-mp-parts-count")),
      TagCount: cmnP.readNum(resp.headers.get("x-amz-tagging-count")),
      ObjectLockMode: cmnP.readEnum<ObjectLockMode>(resp.headers.get("x-amz-object-lock-mode")),
      ObjectLockRetainUntilDate: cmnP.readTimestamp(resp.headers.get("x-amz-object-lock-retain-until-date")),
      ObjectLockLegalHoldStatus: cmnP.readEnum<ObjectLockLegalHoldStatus>(resp.headers.get("x-amz-object-lock-legal-hold")),
      Body: new Uint8Array(await resp.arrayBuffer()), // TODO: maybe allow proper body streaming,
    };
  }

  async putObject(
    params: PutObjectRequest,
  ): Promise<PutObjectOutput> {
    const body = typeof params["Body"] === 'string' ? new TextEncoder().encode(params["Body"]) : params["Body"];
    const headers = new Headers;
    if (params["ACL"] != null) headers.append("x-amz-acl", params["ACL"]);
    if (params["CacheControl"] != null) headers.append("Cache-Control", params["CacheControl"]);
    if (params["ContentDisposition"] != null) headers.append("Content-Disposition", params["ContentDisposition"]);
    if (params["ContentEncoding"] != null) headers.append("Content-Encoding", params["ContentEncoding"]);
    if (params["ContentLanguage"] != null) headers.append("Content-Language", params["ContentLanguage"]);
    if (params["ContentLength"] != null) headers.append("Content-Length", params["ContentLength"]?.toString() ?? '');
    headers.append("Content-MD5", params["ContentMD5"] ?? hashMD5(body ?? ''));
    if (params["ContentType"] != null) headers.append("Content-Type", params["ContentType"]);
    if (params["Expires"] != null) headers.append("Expires", cmnP.serializeDate_rfc822(params["Expires"]) ?? "");
    if (params["GrantFullControl"] != null) headers.append("x-amz-grant-full-control", params["GrantFullControl"]);
    if (params["GrantRead"] != null) headers.append("x-amz-grant-read", params["GrantRead"]);
    if (params["GrantReadACP"] != null) headers.append("x-amz-grant-read-acp", params["GrantReadACP"]);
    if (params["GrantWriteACP"] != null) headers.append("x-amz-grant-write-acp", params["GrantWriteACP"]);
    for (const [key, val] of Object.entries(params["Metadata"] ?? {})) {
      headers.append("x-amz-meta-"+key, val ?? "");
    }
    if (params["ServerSideEncryption"] != null) headers.append("x-amz-server-side-encryption", params["ServerSideEncryption"]);
    if (params["StorageClass"] != null) headers.append("x-amz-storage-class", params["StorageClass"]);
    if (params["WebsiteRedirectLocation"] != null) headers.append("x-amz-website-redirect-location", params["WebsiteRedirectLocation"]);
    if (params["SSECustomerAlgorithm"] != null) headers.append("x-amz-server-side-encryption-customer-algorithm", params["SSECustomerAlgorithm"]);
    if (params["SSECustomerKey"] != null) headers.append("x-amz-server-side-encryption-customer-key", serializeBlob(params["SSECustomerKey"]) ?? '');
    if (params["SSECustomerKeyMD5"] != null) headers.append("x-amz-server-side-encryption-customer-key-MD5", params["SSECustomerKeyMD5"]);
    if (params["SSEKMSKeyId"] != null) headers.append("x-amz-server-side-encryption-aws-kms-key-id", params["SSEKMSKeyId"]);
    if (params["SSEKMSEncryptionContext"] != null) headers.append("x-amz-server-side-encryption-context", params["SSEKMSEncryptionContext"]);
    if (params["BucketKeyEnabled"] != null) headers.append("x-amz-server-side-encryption-bucket-key-enabled", params["BucketKeyEnabled"]?.toString() ?? '');
    if (params["RequestPayer"] != null) headers.append("x-amz-request-payer", params["RequestPayer"]);
    if (params["Tagging"] != null) headers.append("x-amz-tagging", params["Tagging"]);
    if (params["ObjectLockMode"] != null) headers.append("x-amz-object-lock-mode", params["ObjectLockMode"]);
    if (params["ObjectLockRetainUntilDate"] != null) headers.append("x-amz-object-lock-retain-until-date", cmnP.serializeDate_iso8601(params["ObjectLockRetainUntilDate"]) ?? "");
    if (params["ObjectLockLegalHoldStatus"] != null) headers.append("x-amz-object-lock-legal-hold", params["ObjectLockLegalHoldStatus"]);
    if (params["ExpectedBucketOwner"] != null) headers.append("x-amz-expected-bucket-owner", params["ExpectedBucketOwner"]);
    const resp = await this.#client.performRequest({
      headers, body,
      action: "PutObject",
      method: "PUT",
      requestUri: cmnP.encodePath`/${params["Bucket"]}/${params["Key"].split("/")}`,
    });
    await resp.arrayBuffer(); // consume body without use
    return {
      Expiration: resp.headers.get("x-amz-expiration"),
      ETag: resp.headers.get("ETag"),
      ServerSideEncryption: cmnP.readEnum<ServerSideEncryption>(resp.headers.get("x-amz-server-side-encryption")),
      VersionId: resp.headers.get("x-amz-version-id"),
      SSECustomerAlgorithm: resp.headers.get("x-amz-server-side-encryption-customer-algorithm"),
      SSECustomerKeyMD5: resp.headers.get("x-amz-server-side-encryption-customer-key-MD5"),
      SSEKMSKeyId: resp.headers.get("x-amz-server-side-encryption-aws-kms-key-id"),
      SSEKMSEncryptionContext: resp.headers.get("x-amz-server-side-encryption-context"),
      BucketKeyEnabled: cmnP.readBool(resp.headers.get("x-amz-server-side-encryption-bucket-key-enabled")),
      RequestCharged: cmnP.readEnum<RequestCharged>(resp.headers.get("x-amz-request-charged")),
    };
  }

  // Resource State Waiters

  // waitForBucketExists() skipped - depends on HeadBucket
  // waitForBucketNotExists() skipped - depends on HeadBucket
  // waitForObjectExists() skipped - depends on HeadObject
  // waitForObjectNotExists() skipped - depends on HeadObject
}

// refs: 1 - tags: named, input
export interface DeleteObjectRequest {
  Bucket: string;
  Key: string;
  MFA?: string | null;
  VersionId?: string | null;
  RequestPayer?: RequestPayer | null;
  BypassGovernanceRetention?: boolean | null;
  ExpectedBucketOwner?: string | null;
}

// refs: 1 - tags: named, input
export interface GetObjectRequest {
  Bucket: string;
  IfMatch?: string | null;
  IfModifiedSince?: Date | number | null;
  IfNoneMatch?: string | null;
  IfUnmodifiedSince?: Date | number | null;
  Key: string;
  Range?: string | null;
  ResponseCacheControl?: string | null;
  ResponseContentDisposition?: string | null;
  ResponseContentEncoding?: string | null;
  ResponseContentLanguage?: string | null;
  ResponseContentType?: string | null;
  ResponseExpires?: Date | number | null;
  VersionId?: string | null;
  SSECustomerAlgorithm?: string | null;
  SSECustomerKey?: Uint8Array | string | null;
  SSECustomerKeyMD5?: string | null;
  RequestPayer?: RequestPayer | null;
  PartNumber?: number | null;
  ExpectedBucketOwner?: string | null;
}

// refs: 1 - tags: named, input
export interface PutObjectRequest {
  ACL?: ObjectCannedACL | null;
  Body?: Uint8Array | string | null;
  Bucket: string;
  CacheControl?: string | null;
  ContentDisposition?: string | null;
  ContentEncoding?: string | null;
  ContentLanguage?: string | null;
  ContentLength?: number | null;
  ContentMD5?: string | null;
  ContentType?: string | null;
  Expires?: Date | number | null;
  GrantFullControl?: string | null;
  GrantRead?: string | null;
  GrantReadACP?: string | null;
  GrantWriteACP?: string | null;
  Key: string;
  Metadata?: { [key: string]: string | null | undefined } | null;
  ServerSideEncryption?: ServerSideEncryption | null;
  StorageClass?: StorageClass | null;
  WebsiteRedirectLocation?: string | null;
  SSECustomerAlgorithm?: string | null;
  SSECustomerKey?: Uint8Array | string | null;
  SSECustomerKeyMD5?: string | null;
  SSEKMSKeyId?: string | null;
  SSEKMSEncryptionContext?: string | null;
  BucketKeyEnabled?: boolean | null;
  RequestPayer?: RequestPayer | null;
  Tagging?: string | null;
  ObjectLockMode?: ObjectLockMode | null;
  ObjectLockRetainUntilDate?: Date | number | null;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | null;
  ExpectedBucketOwner?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteObjectOutput {
  DeleteMarker?: boolean | null;
  VersionId?: string | null;
  RequestCharged?: RequestCharged | null;
}

// refs: 1 - tags: named, output
export interface GetObjectOutput {
  Body?: Uint8Array | null;
  DeleteMarker?: boolean | null;
  AcceptRanges?: string | null;
  Expiration?: string | null;
  Restore?: string | null;
  LastModified?: Date | number | null;
  ContentLength?: number | null;
  ETag?: string | null;
  MissingMeta?: number | null;
  VersionId?: string | null;
  CacheControl?: string | null;
  ContentDisposition?: string | null;
  ContentEncoding?: string | null;
  ContentLanguage?: string | null;
  ContentRange?: string | null;
  ContentType?: string | null;
  Expires?: Date | number | null;
  WebsiteRedirectLocation?: string | null;
  ServerSideEncryption?: ServerSideEncryption | null;
  Metadata: { [key: string]: string | null | undefined };
  SSECustomerAlgorithm?: string | null;
  SSECustomerKeyMD5?: string | null;
  SSEKMSKeyId?: string | null;
  BucketKeyEnabled?: boolean | null;
  StorageClass?: StorageClass | null;
  RequestCharged?: RequestCharged | null;
  ReplicationStatus?: ReplicationStatus | null;
  PartsCount?: number | null;
  TagCount?: number | null;
  ObjectLockMode?: ObjectLockMode | null;
  ObjectLockRetainUntilDate?: Date | number | null;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | null;
}

// refs: 1 - tags: named, output
export interface PutObjectOutput {
  Expiration?: string | null;
  ETag?: string | null;
  ServerSideEncryption?: ServerSideEncryption | null;
  VersionId?: string | null;
  SSECustomerAlgorithm?: string | null;
  SSECustomerKeyMD5?: string | null;
  SSEKMSKeyId?: string | null;
  SSEKMSEncryptionContext?: string | null;
  BucketKeyEnabled?: boolean | null;
  RequestCharged?: RequestCharged | null;
}

// refs: 3 - tags: input, named, enum
export type RequestPayer =
| "requester"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ObjectCannedACL =
| "private"
| "public-read"
| "public-read-write"
| "authenticated-read"
| "aws-exec-read"
| "bucket-owner-read"
| "bucket-owner-full-control"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type ServerSideEncryption =
| "AES256"
| "aws:kms"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type StorageClass =
| "STANDARD"
| "REDUCED_REDUNDANCY"
| "STANDARD_IA"
| "ONEZONE_IA"
| "INTELLIGENT_TIERING"
| "GLACIER"
| "DEEP_ARCHIVE"
| "OUTPOSTS"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type ObjectLockMode =
| "GOVERNANCE"
| "COMPLIANCE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type ObjectLockLegalHoldStatus =
| "ON"
| "OFF"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, enum
export type RequestCharged =
| "requester"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type ReplicationStatus =
| "COMPLETE"
| "PENDING"
| "FAILED"
| "REPLICA"
| cmnP.UnexpectedEnumValue;
