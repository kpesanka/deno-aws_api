// Autogenerated API structures for: Amazon CloudFront

import * as cmnP from "../../encoding/common.ts";
import * as xmlP from "../../encoding/xml.ts";

// refs: 1 - tags: named, input
export interface CreateCloudFrontOriginAccessIdentityRequest {
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
}

// refs: 1 - tags: named, input
export interface CreateDistributionRequest {
  DistributionConfig: DistributionConfig;
}

// refs: 1 - tags: named, input
export interface CreateDistributionWithTagsRequest {
  DistributionConfigWithTags: DistributionConfigWithTags;
}

// refs: 1 - tags: named, input
export interface CreateFieldLevelEncryptionConfigRequest {
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
}

// refs: 1 - tags: named, input
export interface CreateFieldLevelEncryptionProfileRequest {
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
}

// refs: 1 - tags: named, input
export interface CreateInvalidationRequest {
  DistributionId: string;
  InvalidationBatch: InvalidationBatch;
}

// refs: 1 - tags: named, input
export interface CreatePublicKeyRequest {
  PublicKeyConfig: PublicKeyConfig;
}

// refs: 1 - tags: named, input
export interface CreateStreamingDistributionRequest {
  StreamingDistributionConfig: StreamingDistributionConfig;
}

// refs: 1 - tags: named, input
export interface CreateStreamingDistributionWithTagsRequest {
  StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;
}

// refs: 1 - tags: named, input
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteDistributionRequest {
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteFieldLevelEncryptionConfigRequest {
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteFieldLevelEncryptionProfileRequest {
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface DeletePublicKeyRequest {
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteStreamingDistributionRequest {
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface GetCloudFrontOriginAccessIdentityRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetDistributionRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetDistributionConfigRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetFieldLevelEncryptionRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetFieldLevelEncryptionConfigRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetFieldLevelEncryptionProfileRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetFieldLevelEncryptionProfileConfigRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetInvalidationRequest {
  DistributionId: string;
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetPublicKeyRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetPublicKeyConfigRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetStreamingDistributionRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetStreamingDistributionConfigRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  Marker?: string | null;
  MaxItems?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDistributionsRequest {
  Marker?: string | null;
  MaxItems?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDistributionsByWebACLIdRequest {
  Marker?: string | null;
  MaxItems?: string | null;
  WebACLId: string;
}

// refs: 1 - tags: named, input
export interface ListFieldLevelEncryptionConfigsRequest {
  Marker?: string | null;
  MaxItems?: string | null;
}

// refs: 1 - tags: named, input
export interface ListFieldLevelEncryptionProfilesRequest {
  Marker?: string | null;
  MaxItems?: string | null;
}

// refs: 1 - tags: named, input
export interface ListInvalidationsRequest {
  DistributionId: string;
  Marker?: string | null;
  MaxItems?: string | null;
}

// refs: 1 - tags: named, input
export interface ListPublicKeysRequest {
  Marker?: string | null;
  MaxItems?: string | null;
}

// refs: 1 - tags: named, input
export interface ListStreamingDistributionsRequest {
  Marker?: string | null;
  MaxItems?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  Resource: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  Resource: string;
  Tags: Tags;
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  Resource: string;
  TagKeys: TagKeys;
}

// refs: 1 - tags: named, input
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateDistributionRequest {
  DistributionConfig: DistributionConfig;
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateFieldLevelEncryptionConfigRequest {
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateFieldLevelEncryptionProfileRequest {
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdatePublicKeyRequest {
  PublicKeyConfig: PublicKeyConfig;
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateStreamingDistributionRequest {
  StreamingDistributionConfig: StreamingDistributionConfig;
  Id: string;
  IfMatch?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateCloudFrontOriginAccessIdentityResult {
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDistributionResult {
  Distribution?: Distribution | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDistributionWithTagsResult {
  Distribution?: Distribution | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateFieldLevelEncryptionConfigResult {
  FieldLevelEncryption?: FieldLevelEncryption | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateFieldLevelEncryptionProfileResult {
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateInvalidationResult {
  Location?: string | null;
  Invalidation?: Invalidation | null;
}

// refs: 1 - tags: named, output
export interface CreatePublicKeyResult {
  PublicKey?: PublicKey | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateStreamingDistributionResult {
  StreamingDistribution?: StreamingDistribution | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateStreamingDistributionWithTagsResult {
  StreamingDistribution?: StreamingDistribution | null;
  Location?: string | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetCloudFrontOriginAccessIdentityResult {
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetCloudFrontOriginAccessIdentityConfigResult {
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetDistributionResult {
  Distribution?: Distribution | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetDistributionConfigResult {
  DistributionConfig?: DistributionConfig | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetFieldLevelEncryptionResult {
  FieldLevelEncryption?: FieldLevelEncryption | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetFieldLevelEncryptionConfigResult {
  FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetFieldLevelEncryptionProfileResult {
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetFieldLevelEncryptionProfileConfigResult {
  FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetInvalidationResult {
  Invalidation?: Invalidation | null;
}

// refs: 1 - tags: named, output
export interface GetPublicKeyResult {
  PublicKey?: PublicKey | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetPublicKeyConfigResult {
  PublicKeyConfig?: PublicKeyConfig | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetStreamingDistributionResult {
  StreamingDistribution?: StreamingDistribution | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface GetStreamingDistributionConfigResult {
  StreamingDistributionConfig?: StreamingDistributionConfig | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface ListCloudFrontOriginAccessIdentitiesResult {
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList | null;
}

// refs: 1 - tags: named, output
export interface ListDistributionsResult {
  DistributionList?: DistributionList | null;
}

// refs: 1 - tags: named, output
export interface ListDistributionsByWebACLIdResult {
  DistributionList?: DistributionList | null;
}

// refs: 1 - tags: named, output
export interface ListFieldLevelEncryptionConfigsResult {
  FieldLevelEncryptionList?: FieldLevelEncryptionList | null;
}

// refs: 1 - tags: named, output
export interface ListFieldLevelEncryptionProfilesResult {
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList | null;
}

// refs: 1 - tags: named, output
export interface ListInvalidationsResult {
  InvalidationList?: InvalidationList | null;
}

// refs: 1 - tags: named, output
export interface ListPublicKeysResult {
  PublicKeyList?: PublicKeyList | null;
}

// refs: 1 - tags: named, output
export interface ListStreamingDistributionsResult {
  StreamingDistributionList?: StreamingDistributionList | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResult {
  Tags: Tags;
}

// refs: 1 - tags: named, output
export interface UpdateCloudFrontOriginAccessIdentityResult {
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateDistributionResult {
  Distribution?: Distribution | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateFieldLevelEncryptionConfigResult {
  FieldLevelEncryption?: FieldLevelEncryption | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateFieldLevelEncryptionProfileResult {
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdatePublicKeyResult {
  PublicKey?: PublicKey | null;
  ETag?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateStreamingDistributionResult {
  StreamingDistribution?: StreamingDistribution | null;
  ETag?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface CloudFrontOriginAccessIdentityConfig {
  CallerReference: string;
  Comment: string;
}

// refs: 8 - tags: input, named, interface, output
export interface DistributionConfig {
  CallerReference: string;
  Aliases?: Aliases | null;
  DefaultRootObject?: string | null;
  Origins: Origins;
  OriginGroups?: OriginGroups | null;
  DefaultCacheBehavior: DefaultCacheBehavior;
  CacheBehaviors?: CacheBehaviors | null;
  CustomErrorResponses?: CustomErrorResponses | null;
  Comment: string;
  Logging?: LoggingConfig | null;
  PriceClass?: PriceClass | null;
  Enabled: boolean;
  ViewerCertificate?: ViewerCertificate | null;
  Restrictions?: Restrictions | null;
  WebACLId?: string | null;
  HttpVersion?: HttpVersion | null;
  IsIPV6Enabled?: boolean | null;
}

// refs: 19 - tags: input, named, interface, output
export interface Aliases {
  Quantity: number;
  Items: string[];
}

// refs: 10 - tags: input, named, interface, output
export interface Origins {
  Quantity: number;
  Items: Origin[];
}

// refs: 10 - tags: input, named, interface, output
export interface Origin {
  Id: string;
  DomainName: string;
  OriginPath?: string | null;
  CustomHeaders?: CustomHeaders | null;
  S3OriginConfig?: S3OriginConfig | null;
  CustomOriginConfig?: CustomOriginConfig | null;
  ConnectionAttempts?: number | null;
  ConnectionTimeout?: number | null;
}

// refs: 10 - tags: input, named, interface, output
export interface CustomHeaders {
  Quantity: number;
  Items: OriginCustomHeader[];
}

// refs: 10 - tags: input, named, interface, output
export interface OriginCustomHeader {
  HeaderName: string;
  HeaderValue: string;
}

// refs: 10 - tags: input, named, interface, output
export interface S3OriginConfig {
  OriginAccessIdentity: string;
}

// refs: 10 - tags: input, named, interface, output
export interface CustomOriginConfig {
  HTTPPort: number;
  HTTPSPort: number;
  OriginProtocolPolicy: OriginProtocolPolicy;
  OriginSslProtocols?: OriginSslProtocols | null;
  OriginReadTimeout?: number | null;
  OriginKeepaliveTimeout?: number | null;
}

// refs: 10 - tags: input, named, enum, output
export type OriginProtocolPolicy =
| "http-only"
| "match-viewer"
| "https-only"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, interface, output
export interface OriginSslProtocols {
  Quantity: number;
  Items: SslProtocol[];
}

// refs: 10 - tags: input, named, enum, output
export type SslProtocol =
| "SSLv3"
| "TLSv1"
| "TLSv1.1"
| "TLSv1.2"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, interface, output
export interface OriginGroups {
  Quantity: number;
  Items: OriginGroup[];
}

// refs: 10 - tags: input, named, interface, output
export interface OriginGroup {
  Id: string;
  FailoverCriteria: OriginGroupFailoverCriteria;
  Members: OriginGroupMembers;
}

// refs: 10 - tags: input, named, interface, output
export interface OriginGroupFailoverCriteria {
  StatusCodes: StatusCodes;
}

// refs: 10 - tags: input, named, interface, output
export interface StatusCodes {
  Quantity: number;
  Items: number[];
}

// refs: 10 - tags: input, named, interface, output
export interface OriginGroupMembers {
  Quantity: number;
  Items: OriginGroupMember[];
}

// refs: 10 - tags: input, named, interface, output
export interface OriginGroupMember {
  OriginId: string;
}

// refs: 10 - tags: input, named, interface, output
export interface DefaultCacheBehavior {
  TargetOriginId: string;
  ForwardedValues: ForwardedValues;
  TrustedSigners: TrustedSigners;
  ViewerProtocolPolicy: ViewerProtocolPolicy;
  MinTTL: number;
  AllowedMethods?: AllowedMethods | null;
  SmoothStreaming?: boolean | null;
  DefaultTTL?: number | null;
  MaxTTL?: number | null;
  Compress?: boolean | null;
  LambdaFunctionAssociations?: LambdaFunctionAssociations | null;
  FieldLevelEncryptionId?: string | null;
}

// refs: 20 - tags: input, named, interface, output
export interface ForwardedValues {
  QueryString: boolean;
  Cookies: CookiePreference;
  Headers?: Headers | null;
  QueryStringCacheKeys?: QueryStringCacheKeys | null;
}

// refs: 20 - tags: input, named, interface, output
export interface CookiePreference {
  Forward: ItemSelection;
  WhitelistedNames?: CookieNames | null;
}

// refs: 20 - tags: input, named, enum, output
export type ItemSelection =
| "none"
| "whitelist"
| "all"
| cmnP.UnexpectedEnumValue;

// refs: 20 - tags: input, named, interface, output
export interface CookieNames {
  Quantity: number;
  Items: string[];
}

// refs: 20 - tags: input, named, interface, output
export interface Headers {
  Quantity: number;
  Items: string[];
}

// refs: 20 - tags: input, named, interface, output
export interface QueryStringCacheKeys {
  Quantity: number;
  Items: string[];
}

// refs: 29 - tags: input, named, interface, output
export interface TrustedSigners {
  Enabled: boolean;
  Quantity: number;
  Items: string[];
}

// refs: 20 - tags: input, named, enum, output
export type ViewerProtocolPolicy =
| "allow-all"
| "https-only"
| "redirect-to-https"
| cmnP.UnexpectedEnumValue;

// refs: 20 - tags: input, named, interface, output
export interface AllowedMethods {
  Quantity: number;
  Items: Method[];
  CachedMethods?: CachedMethods | null;
}

// refs: 40 - tags: input, named, enum, output
export type Method =
| "GET"
| "HEAD"
| "POST"
| "PUT"
| "PATCH"
| "OPTIONS"
| "DELETE"
| cmnP.UnexpectedEnumValue;

// refs: 20 - tags: input, named, interface, output
export interface CachedMethods {
  Quantity: number;
  Items: Method[];
}

// refs: 20 - tags: input, named, interface, output
export interface LambdaFunctionAssociations {
  Quantity: number;
  Items: LambdaFunctionAssociation[];
}

// refs: 20 - tags: input, named, interface, output
export interface LambdaFunctionAssociation {
  LambdaFunctionARN: string;
  EventType: EventType;
  IncludeBody?: boolean | null;
}

// refs: 20 - tags: input, named, enum, output
export type EventType =
| "viewer-request"
| "viewer-response"
| "origin-request"
| "origin-response"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, interface, output
export interface CacheBehaviors {
  Quantity: number;
  Items: CacheBehavior[];
}

// refs: 10 - tags: input, named, interface, output
export interface CacheBehavior {
  PathPattern: string;
  TargetOriginId: string;
  ForwardedValues: ForwardedValues;
  TrustedSigners: TrustedSigners;
  ViewerProtocolPolicy: ViewerProtocolPolicy;
  MinTTL: number;
  AllowedMethods?: AllowedMethods | null;
  SmoothStreaming?: boolean | null;
  DefaultTTL?: number | null;
  MaxTTL?: number | null;
  Compress?: boolean | null;
  LambdaFunctionAssociations?: LambdaFunctionAssociations | null;
  FieldLevelEncryptionId?: string | null;
}

// refs: 10 - tags: input, named, interface, output
export interface CustomErrorResponses {
  Quantity: number;
  Items: CustomErrorResponse[];
}

// refs: 10 - tags: input, named, interface, output
export interface CustomErrorResponse {
  ErrorCode: number;
  ResponsePagePath?: string | null;
  ResponseCode?: string | null;
  ErrorCachingMinTTL?: number | null;
}

// refs: 8 - tags: input, named, interface, output
export interface LoggingConfig {
  Enabled: boolean;
  IncludeCookies: boolean;
  Bucket: string;
  Prefix: string;
}

// refs: 19 - tags: input, named, enum, output
export type PriceClass =
| "PriceClass_100"
| "PriceClass_200"
| "PriceClass_All"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, interface, output
export interface ViewerCertificate {
  CloudFrontDefaultCertificate?: boolean | null;
  IAMCertificateId?: string | null;
  ACMCertificateArn?: string | null;
  SSLSupportMethod?: SSLSupportMethod | null;
  MinimumProtocolVersion?: MinimumProtocolVersion | null;
  Certificate?: string | null;
  CertificateSource?: CertificateSource | null;
}

// refs: 10 - tags: input, named, enum, output
export type SSLSupportMethod =
| "sni-only"
| "vip"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, enum, output
export type MinimumProtocolVersion =
| "SSLv3"
| "TLSv1"
| "TLSv1_2016"
| "TLSv1.1_2016"
| "TLSv1.2_2018"
| "TLSv1.2_2019"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, enum, output
export type CertificateSource =
| "cloudfront"
| "iam"
| "acm"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, interface, output
export interface Restrictions {
  GeoRestriction: GeoRestriction;
}

// refs: 10 - tags: input, named, interface, output
export interface GeoRestriction {
  RestrictionType: GeoRestrictionType;
  Quantity: number;
  Items: string[];
}

// refs: 10 - tags: input, named, enum, output
export type GeoRestrictionType =
| "blacklist"
| "whitelist"
| "none"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, enum, output
export type HttpVersion =
| "http1.1"
| "http2"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface DistributionConfigWithTags {
  DistributionConfig: DistributionConfig;
  Tags: Tags;
}

// refs: 4 - tags: input, named, interface, output
export interface Tags {
  Items: Tag[];
}

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface FieldLevelEncryptionConfig {
  CallerReference: string;
  Comment?: string | null;
  QueryArgProfileConfig?: QueryArgProfileConfig | null;
  ContentTypeProfileConfig?: ContentTypeProfileConfig | null;
}

// refs: 7 - tags: input, named, interface, output
export interface QueryArgProfileConfig {
  ForwardWhenQueryArgProfileIsUnknown: boolean;
  QueryArgProfiles?: QueryArgProfiles | null;
}

// refs: 7 - tags: input, named, interface, output
export interface QueryArgProfiles {
  Quantity: number;
  Items: QueryArgProfile[];
}

// refs: 7 - tags: input, named, interface, output
export interface QueryArgProfile {
  QueryArg: string;
  ProfileId: string;
}

// refs: 7 - tags: input, named, interface, output
export interface ContentTypeProfileConfig {
  ForwardWhenContentTypeIsUnknown: boolean;
  ContentTypeProfiles?: ContentTypeProfiles | null;
}

// refs: 7 - tags: input, named, interface, output
export interface ContentTypeProfiles {
  Quantity: number;
  Items: ContentTypeProfile[];
}

// refs: 7 - tags: input, named, interface, output
export interface ContentTypeProfile {
  Format: Format;
  ProfileId?: string | null;
  ContentType: string;
}

// refs: 7 - tags: input, named, enum, output
export type Format =
| "URLEncoded"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface FieldLevelEncryptionProfileConfig {
  Name: string;
  CallerReference: string;
  Comment?: string | null;
  EncryptionEntities: EncryptionEntities;
}

// refs: 7 - tags: input, named, interface, output
export interface EncryptionEntities {
  Quantity: number;
  Items: EncryptionEntity[];
}

// refs: 7 - tags: input, named, interface, output
export interface EncryptionEntity {
  PublicKeyId: string;
  ProviderId: string;
  FieldPatterns: FieldPatterns;
}

// refs: 7 - tags: input, named, interface, output
export interface FieldPatterns {
  Quantity: number;
  Items: string[];
}

// refs: 3 - tags: input, named, interface, output
export interface InvalidationBatch {
  Paths: Paths;
  CallerReference: string;
}

// refs: 3 - tags: input, named, interface, output
export interface Paths {
  Quantity: number;
  Items: string[];
}

// refs: 6 - tags: input, named, interface, output
export interface PublicKeyConfig {
  CallerReference: string;
  Name: string;
  EncodedKey: string;
  Comment?: string | null;
}

// refs: 8 - tags: input, named, interface, output
export interface StreamingDistributionConfig {
  CallerReference: string;
  S3Origin: S3Origin;
  Aliases?: Aliases | null;
  Comment: string;
  Logging?: StreamingLoggingConfig | null;
  TrustedSigners: TrustedSigners;
  PriceClass?: PriceClass | null;
  Enabled: boolean;
}

// refs: 9 - tags: input, named, interface, output
export interface S3Origin {
  DomainName: string;
  OriginAccessIdentity: string;
}

// refs: 8 - tags: input, named, interface, output
export interface StreamingLoggingConfig {
  Enabled: boolean;
  Bucket: string;
  Prefix: string;
}

// refs: 1 - tags: input, named, interface
export interface StreamingDistributionConfigWithTags {
  StreamingDistributionConfig: StreamingDistributionConfig;
  Tags: Tags;
}

// refs: 1 - tags: input, named, interface
export interface TagKeys {
  Items?: string[] | null;
}

// refs: 3 - tags: output, named, interface
export interface CloudFrontOriginAccessIdentity {
  Id: string;
  S3CanonicalUserId: string;
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig | null;
}

// refs: 4 - tags: output, named, interface
export interface Distribution {
  Id: string;
  ARN: string;
  Status: string;
  LastModifiedTime: Date | number;
  InProgressInvalidationBatches: number;
  DomainName: string;
  ActiveTrustedSigners: ActiveTrustedSigners;
  DistributionConfig: DistributionConfig;
  AliasICPRecordals: AliasICPRecordal[];
}

// refs: 8 - tags: output, named, interface
export interface ActiveTrustedSigners {
  Enabled: boolean;
  Quantity: number;
  Items: Signer[];
}

// refs: 8 - tags: output, named, interface
export interface Signer {
  AwsAccountNumber?: string | null;
  KeyPairIds?: KeyPairIds | null;
}

// refs: 8 - tags: output, named, interface
export interface KeyPairIds {
  Quantity: number;
  Items: string[];
}

// refs: 6 - tags: output, named, interface
export interface AliasICPRecordal {
  CNAME?: string | null;
  ICPRecordalStatus?: ICPRecordalStatus | null;
}

// refs: 6 - tags: output, named, enum
export type ICPRecordalStatus =
| "APPROVED"
| "SUSPENDED"
| "PENDING"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface FieldLevelEncryption {
  Id: string;
  LastModifiedTime: Date | number;
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
}

// refs: 3 - tags: output, named, interface
export interface FieldLevelEncryptionProfile {
  Id: string;
  LastModifiedTime: Date | number;
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
}

// refs: 2 - tags: output, named, interface
export interface Invalidation {
  Id: string;
  Status: string;
  CreateTime: Date | number;
  InvalidationBatch: InvalidationBatch;
}

// refs: 3 - tags: output, named, interface
export interface PublicKey {
  Id: string;
  CreatedTime: Date | number;
  PublicKeyConfig: PublicKeyConfig;
}

// refs: 4 - tags: output, named, interface
export interface StreamingDistribution {
  Id: string;
  ARN: string;
  Status: string;
  LastModifiedTime?: Date | number | null;
  DomainName: string;
  ActiveTrustedSigners: ActiveTrustedSigners;
  StreamingDistributionConfig: StreamingDistributionConfig;
}

// refs: 1 - tags: output, named, interface
export interface CloudFrontOriginAccessIdentityList {
  Marker: string;
  NextMarker?: string | null;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items: CloudFrontOriginAccessIdentitySummary[];
}

// refs: 1 - tags: output, named, interface
export interface CloudFrontOriginAccessIdentitySummary {
  Id: string;
  S3CanonicalUserId: string;
  Comment: string;
}

// refs: 2 - tags: output, named, interface
export interface DistributionList {
  Marker: string;
  NextMarker?: string | null;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items: DistributionSummary[];
}

// refs: 2 - tags: output, named, interface
export interface DistributionSummary {
  Id: string;
  ARN: string;
  Status: string;
  LastModifiedTime: Date | number;
  DomainName: string;
  Aliases: Aliases;
  Origins: Origins;
  OriginGroups?: OriginGroups | null;
  DefaultCacheBehavior: DefaultCacheBehavior;
  CacheBehaviors: CacheBehaviors;
  CustomErrorResponses: CustomErrorResponses;
  Comment: string;
  PriceClass: PriceClass;
  Enabled: boolean;
  ViewerCertificate: ViewerCertificate;
  Restrictions: Restrictions;
  WebACLId: string;
  HttpVersion: HttpVersion;
  IsIPV6Enabled: boolean;
  AliasICPRecordals: AliasICPRecordal[];
}

// refs: 1 - tags: output, named, interface
export interface FieldLevelEncryptionList {
  NextMarker?: string | null;
  MaxItems: number;
  Quantity: number;
  Items: FieldLevelEncryptionSummary[];
}

// refs: 1 - tags: output, named, interface
export interface FieldLevelEncryptionSummary {
  Id: string;
  LastModifiedTime: Date | number;
  Comment?: string | null;
  QueryArgProfileConfig?: QueryArgProfileConfig | null;
  ContentTypeProfileConfig?: ContentTypeProfileConfig | null;
}

// refs: 1 - tags: output, named, interface
export interface FieldLevelEncryptionProfileList {
  NextMarker?: string | null;
  MaxItems: number;
  Quantity: number;
  Items: FieldLevelEncryptionProfileSummary[];
}

// refs: 1 - tags: output, named, interface
export interface FieldLevelEncryptionProfileSummary {
  Id: string;
  LastModifiedTime: Date | number;
  Name: string;
  EncryptionEntities: EncryptionEntities;
  Comment?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface InvalidationList {
  Marker: string;
  NextMarker?: string | null;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items: InvalidationSummary[];
}

// refs: 1 - tags: output, named, interface
export interface InvalidationSummary {
  Id: string;
  CreateTime: Date | number;
  Status: string;
}

// refs: 1 - tags: output, named, interface
export interface PublicKeyList {
  NextMarker?: string | null;
  MaxItems: number;
  Quantity: number;
  Items: PublicKeySummary[];
}

// refs: 1 - tags: output, named, interface
export interface PublicKeySummary {
  Id: string;
  Name: string;
  CreatedTime: Date | number;
  EncodedKey: string;
  Comment?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface StreamingDistributionList {
  Marker: string;
  NextMarker?: string | null;
  MaxItems: number;
  IsTruncated: boolean;
  Quantity: number;
  Items: StreamingDistributionSummary[];
}

// refs: 1 - tags: output, named, interface
export interface StreamingDistributionSummary {
  Id: string;
  ARN: string;
  Status: string;
  LastModifiedTime: Date | number;
  DomainName: string;
  S3Origin: S3Origin;
  Aliases: Aliases;
  TrustedSigners: TrustedSigners;
  Comment: string;
  PriceClass: PriceClass;
  Enabled: boolean;
}
