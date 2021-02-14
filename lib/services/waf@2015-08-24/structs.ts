// Autogenerated API structures for: AWS WAF

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateByteMatchSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface CreateGeoMatchSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface CreateIPSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface CreateRateBasedRuleRequest {
  Name: string;
  MetricName: string;
  RateKey: RateKey;
  RateLimit: number;
  ChangeToken: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateRegexMatchSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface CreateRegexPatternSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface CreateRuleRequest {
  Name: string;
  MetricName: string;
  ChangeToken: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateRuleGroupRequest {
  Name: string;
  MetricName: string;
  ChangeToken: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateSizeConstraintSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface CreateSqlInjectionMatchSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface CreateWebACLRequest {
  Name: string;
  MetricName: string;
  DefaultAction: WafAction;
  ChangeToken: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateWebACLMigrationStackRequest {
  WebACLId: string;
  S3BucketName: string;
  IgnoreUnsupportedType: boolean;
}

// refs: 1 - tags: named, input
export interface CreateXssMatchSetRequest {
  Name: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteByteMatchSetRequest {
  ByteMatchSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteGeoMatchSetRequest {
  GeoMatchSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteIPSetRequest {
  IPSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteLoggingConfigurationRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface DeletePermissionPolicyRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface DeleteRateBasedRuleRequest {
  RuleId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteRegexMatchSetRequest {
  RegexMatchSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteRegexPatternSetRequest {
  RegexPatternSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteRuleRequest {
  RuleId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteRuleGroupRequest {
  RuleGroupId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteSizeConstraintSetRequest {
  SizeConstraintSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteSqlInjectionMatchSetRequest {
  SqlInjectionMatchSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteWebACLRequest {
  WebACLId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteXssMatchSetRequest {
  XssMatchSetId: string;
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface GetByteMatchSetRequest {
  ByteMatchSetId: string;
}

// refs: 1 - tags: named, input
export interface GetChangeTokenRequest {
}

// refs: 1 - tags: named, input
export interface GetChangeTokenStatusRequest {
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface GetGeoMatchSetRequest {
  GeoMatchSetId: string;
}

// refs: 1 - tags: named, input
export interface GetIPSetRequest {
  IPSetId: string;
}

// refs: 1 - tags: named, input
export interface GetLoggingConfigurationRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface GetPermissionPolicyRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface GetRateBasedRuleRequest {
  RuleId: string;
}

// refs: 1 - tags: named, input
export interface GetRateBasedRuleManagedKeysRequest {
  RuleId: string;
  NextMarker?: string | null;
}

// refs: 1 - tags: named, input
export interface GetRegexMatchSetRequest {
  RegexMatchSetId: string;
}

// refs: 1 - tags: named, input
export interface GetRegexPatternSetRequest {
  RegexPatternSetId: string;
}

// refs: 1 - tags: named, input
export interface GetRuleRequest {
  RuleId: string;
}

// refs: 1 - tags: named, input
export interface GetRuleGroupRequest {
  RuleGroupId: string;
}

// refs: 1 - tags: named, input
export interface GetSampledRequestsRequest {
  WebAclId: string;
  RuleId: string;
  TimeWindow: TimeWindow;
  MaxItems: number;
}

// refs: 1 - tags: named, input
export interface GetSizeConstraintSetRequest {
  SizeConstraintSetId: string;
}

// refs: 1 - tags: named, input
export interface GetSqlInjectionMatchSetRequest {
  SqlInjectionMatchSetId: string;
}

// refs: 1 - tags: named, input
export interface GetWebACLRequest {
  WebACLId: string;
}

// refs: 1 - tags: named, input
export interface GetXssMatchSetRequest {
  XssMatchSetId: string;
}

// refs: 1 - tags: named, input
export interface ListActivatedRulesInRuleGroupRequest {
  RuleGroupId?: string | null;
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListByteMatchSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListGeoMatchSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListIPSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListLoggingConfigurationsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRateBasedRulesRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRegexMatchSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRegexPatternSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRuleGroupsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRulesRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListSizeConstraintSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListSqlInjectionMatchSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListSubscribedRuleGroupsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  NextMarker?: string | null;
  Limit?: number | null;
  ResourceARN: string;
}

// refs: 1 - tags: named, input
export interface ListWebACLsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListXssMatchSetsRequest {
  NextMarker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface PutLoggingConfigurationRequest {
  LoggingConfiguration: LoggingConfiguration;
}

// refs: 1 - tags: named, input
export interface PutPermissionPolicyRequest {
  ResourceArn: string;
  Policy: string;
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
export interface UpdateByteMatchSetRequest {
  ByteMatchSetId: string;
  ChangeToken: string;
  Updates: ByteMatchSetUpdate[];
}

// refs: 1 - tags: named, input
export interface UpdateGeoMatchSetRequest {
  GeoMatchSetId: string;
  ChangeToken: string;
  Updates: GeoMatchSetUpdate[];
}

// refs: 1 - tags: named, input
export interface UpdateIPSetRequest {
  IPSetId: string;
  ChangeToken: string;
  Updates: IPSetUpdate[];
}

// refs: 1 - tags: named, input
export interface UpdateRateBasedRuleRequest {
  RuleId: string;
  ChangeToken: string;
  Updates: RuleUpdate[];
  RateLimit: number;
}

// refs: 1 - tags: named, input
export interface UpdateRegexMatchSetRequest {
  RegexMatchSetId: string;
  Updates: RegexMatchSetUpdate[];
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface UpdateRegexPatternSetRequest {
  RegexPatternSetId: string;
  Updates: RegexPatternSetUpdate[];
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface UpdateRuleRequest {
  RuleId: string;
  ChangeToken: string;
  Updates: RuleUpdate[];
}

// refs: 1 - tags: named, input
export interface UpdateRuleGroupRequest {
  RuleGroupId: string;
  Updates: RuleGroupUpdate[];
  ChangeToken: string;
}

// refs: 1 - tags: named, input
export interface UpdateSizeConstraintSetRequest {
  SizeConstraintSetId: string;
  ChangeToken: string;
  Updates: SizeConstraintSetUpdate[];
}

// refs: 1 - tags: named, input
export interface UpdateSqlInjectionMatchSetRequest {
  SqlInjectionMatchSetId: string;
  ChangeToken: string;
  Updates: SqlInjectionMatchSetUpdate[];
}

// refs: 1 - tags: named, input
export interface UpdateWebACLRequest {
  WebACLId: string;
  ChangeToken: string;
  Updates?: WebACLUpdate[] | null;
  DefaultAction?: WafAction | null;
}

// refs: 1 - tags: named, input
export interface UpdateXssMatchSetRequest {
  XssMatchSetId: string;
  ChangeToken: string;
  Updates: XssMatchSetUpdate[];
}

// refs: 1 - tags: named, output
export interface CreateByteMatchSetResponse {
  ByteMatchSet?: ByteMatchSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateGeoMatchSetResponse {
  GeoMatchSet?: GeoMatchSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateIPSetResponse {
  IPSet?: IPSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateRateBasedRuleResponse {
  Rule?: RateBasedRule | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateRegexMatchSetResponse {
  RegexMatchSet?: RegexMatchSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateRegexPatternSetResponse {
  RegexPatternSet?: RegexPatternSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateRuleResponse {
  Rule?: Rule | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateRuleGroupResponse {
  RuleGroup?: RuleGroup | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateSizeConstraintSetResponse {
  SizeConstraintSet?: SizeConstraintSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateSqlInjectionMatchSetResponse {
  SqlInjectionMatchSet?: SqlInjectionMatchSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateWebACLResponse {
  WebACL?: WebACL | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateWebACLMigrationStackResponse {
  S3ObjectUrl: string;
}

// refs: 1 - tags: named, output
export interface CreateXssMatchSetResponse {
  XssMatchSet?: XssMatchSet | null;
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteByteMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteGeoMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteIPSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteLoggingConfigurationResponse {
}

// refs: 1 - tags: named, output
export interface DeletePermissionPolicyResponse {
}

// refs: 1 - tags: named, output
export interface DeleteRateBasedRuleResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteRegexMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteRegexPatternSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteRuleResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteRuleGroupResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteSizeConstraintSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteSqlInjectionMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteWebACLResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteXssMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetByteMatchSetResponse {
  ByteMatchSet?: ByteMatchSet | null;
}

// refs: 1 - tags: named, output
export interface GetChangeTokenResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetChangeTokenStatusResponse {
  ChangeTokenStatus?: ChangeTokenStatus | null;
}

// refs: 1 - tags: named, output
export interface GetGeoMatchSetResponse {
  GeoMatchSet?: GeoMatchSet | null;
}

// refs: 1 - tags: named, output
export interface GetIPSetResponse {
  IPSet?: IPSet | null;
}

// refs: 1 - tags: named, output
export interface GetLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration | null;
}

// refs: 1 - tags: named, output
export interface GetPermissionPolicyResponse {
  Policy?: string | null;
}

// refs: 1 - tags: named, output
export interface GetRateBasedRuleResponse {
  Rule?: RateBasedRule | null;
}

// refs: 1 - tags: named, output
export interface GetRateBasedRuleManagedKeysResponse {
  ManagedKeys?: string[] | null;
  NextMarker?: string | null;
}

// refs: 1 - tags: named, output
export interface GetRegexMatchSetResponse {
  RegexMatchSet?: RegexMatchSet | null;
}

// refs: 1 - tags: named, output
export interface GetRegexPatternSetResponse {
  RegexPatternSet?: RegexPatternSet | null;
}

// refs: 1 - tags: named, output
export interface GetRuleResponse {
  Rule?: Rule | null;
}

// refs: 1 - tags: named, output
export interface GetRuleGroupResponse {
  RuleGroup?: RuleGroup | null;
}

// refs: 1 - tags: named, output
export interface GetSampledRequestsResponse {
  SampledRequests?: SampledHTTPRequest[] | null;
  PopulationSize?: number | null;
  TimeWindow?: TimeWindow | null;
}

// refs: 1 - tags: named, output
export interface GetSizeConstraintSetResponse {
  SizeConstraintSet?: SizeConstraintSet | null;
}

// refs: 1 - tags: named, output
export interface GetSqlInjectionMatchSetResponse {
  SqlInjectionMatchSet?: SqlInjectionMatchSet | null;
}

// refs: 1 - tags: named, output
export interface GetWebACLResponse {
  WebACL?: WebACL | null;
}

// refs: 1 - tags: named, output
export interface GetXssMatchSetResponse {
  XssMatchSet?: XssMatchSet | null;
}

// refs: 1 - tags: named, output
export interface ListActivatedRulesInRuleGroupResponse {
  NextMarker?: string | null;
  ActivatedRules?: ActivatedRule[] | null;
}

// refs: 1 - tags: named, output
export interface ListByteMatchSetsResponse {
  NextMarker?: string | null;
  ByteMatchSets?: ByteMatchSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListGeoMatchSetsResponse {
  NextMarker?: string | null;
  GeoMatchSets?: GeoMatchSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListIPSetsResponse {
  NextMarker?: string | null;
  IPSets?: IPSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListLoggingConfigurationsResponse {
  LoggingConfigurations?: LoggingConfiguration[] | null;
  NextMarker?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRateBasedRulesResponse {
  NextMarker?: string | null;
  Rules?: RuleSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListRegexMatchSetsResponse {
  NextMarker?: string | null;
  RegexMatchSets?: RegexMatchSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListRegexPatternSetsResponse {
  NextMarker?: string | null;
  RegexPatternSets?: RegexPatternSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListRuleGroupsResponse {
  NextMarker?: string | null;
  RuleGroups?: RuleGroupSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListRulesResponse {
  NextMarker?: string | null;
  Rules?: RuleSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListSizeConstraintSetsResponse {
  NextMarker?: string | null;
  SizeConstraintSets?: SizeConstraintSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListSqlInjectionMatchSetsResponse {
  NextMarker?: string | null;
  SqlInjectionMatchSets?: SqlInjectionMatchSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListSubscribedRuleGroupsResponse {
  NextMarker?: string | null;
  RuleGroups?: SubscribedRuleGroupSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  NextMarker?: string | null;
  TagInfoForResource?: TagInfoForResource | null;
}

// refs: 1 - tags: named, output
export interface ListWebACLsResponse {
  NextMarker?: string | null;
  WebACLs?: WebACLSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListXssMatchSetsResponse {
  NextMarker?: string | null;
  XssMatchSets?: XssMatchSetSummary[] | null;
}

// refs: 1 - tags: named, output
export interface PutLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration | null;
}

// refs: 1 - tags: named, output
export interface PutPermissionPolicyResponse {
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateByteMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateGeoMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateIPSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateRateBasedRuleResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateRegexMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateRegexPatternSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateRuleResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateRuleGroupResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateSizeConstraintSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateSqlInjectionMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateWebACLResponse {
  ChangeToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateXssMatchSetResponse {
  ChangeToken?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type RateKey =
| "IP"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 9 - tags: input, named, interface, output
export interface WafAction {
  Type: WafActionType;
}

// refs: 9 - tags: input, named, enum, output
export type WafActionType =
| "BLOCK"
| "ALLOW"
| "COUNT"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface TimeWindow {
  StartTime: Date | number;
  EndTime: Date | number;
}

// refs: 4 - tags: input, named, interface, output
export interface LoggingConfiguration {
  ResourceArn: string;
  LogDestinationConfigs: string[];
  RedactedFields?: FieldToMatch[] | null;
}

// refs: 19 - tags: input, named, interface, output
export interface FieldToMatch {
  Type: MatchFieldType;
  Data?: string | null;
}

// refs: 19 - tags: input, named, enum, output
export type MatchFieldType =
| "URI"
| "QUERY_STRING"
| "HEADER"
| "METHOD"
| "BODY"
| "SINGLE_QUERY_ARG"
| "ALL_QUERY_ARGS"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface ByteMatchSetUpdate {
  Action: ChangeAction;
  ByteMatchTuple: ByteMatchTuple;
}

// refs: 12 - tags: input, named, enum
export type ChangeAction =
| "INSERT"
| "DELETE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ByteMatchTuple {
  FieldToMatch: FieldToMatch;
  TargetString: Uint8Array | string;
  TextTransformation: TextTransformation;
  PositionalConstraint: PositionalConstraint;
}

// refs: 15 - tags: input, named, enum, output
export type TextTransformation =
| "NONE"
| "COMPRESS_WHITE_SPACE"
| "HTML_ENTITY_DECODE"
| "LOWERCASE"
| "CMD_LINE"
| "URL_DECODE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type PositionalConstraint =
| "EXACTLY"
| "STARTS_WITH"
| "ENDS_WITH"
| "CONTAINS"
| "CONTAINS_WORD"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface GeoMatchSetUpdate {
  Action: ChangeAction;
  GeoMatchConstraint: GeoMatchConstraint;
}

// refs: 3 - tags: input, named, interface, output
export interface GeoMatchConstraint {
  Type: GeoMatchConstraintType;
  Value: GeoMatchConstraintValue;
}

// refs: 3 - tags: input, named, enum, output
export type GeoMatchConstraintType =
| "Country"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type GeoMatchConstraintValue =
| "AF"
| "AX"
| "AL"
| "DZ"
| "AS"
| "AD"
| "AO"
| "AI"
| "AQ"
| "AG"
| "AR"
| "AM"
| "AW"
| "AU"
| "AT"
| "AZ"
| "BS"
| "BH"
| "BD"
| "BB"
| "BY"
| "BE"
| "BZ"
| "BJ"
| "BM"
| "BT"
| "BO"
| "BQ"
| "BA"
| "BW"
| "BV"
| "BR"
| "IO"
| "BN"
| "BG"
| "BF"
| "BI"
| "KH"
| "CM"
| "CA"
| "CV"
| "KY"
| "CF"
| "TD"
| "CL"
| "CN"
| "CX"
| "CC"
| "CO"
| "KM"
| "CG"
| "CD"
| "CK"
| "CR"
| "CI"
| "HR"
| "CU"
| "CW"
| "CY"
| "CZ"
| "DK"
| "DJ"
| "DM"
| "DO"
| "EC"
| "EG"
| "SV"
| "GQ"
| "ER"
| "EE"
| "ET"
| "FK"
| "FO"
| "FJ"
| "FI"
| "FR"
| "GF"
| "PF"
| "TF"
| "GA"
| "GM"
| "GE"
| "DE"
| "GH"
| "GI"
| "GR"
| "GL"
| "GD"
| "GP"
| "GU"
| "GT"
| "GG"
| "GN"
| "GW"
| "GY"
| "HT"
| "HM"
| "VA"
| "HN"
| "HK"
| "HU"
| "IS"
| "IN"
| "ID"
| "IR"
| "IQ"
| "IE"
| "IM"
| "IL"
| "IT"
| "JM"
| "JP"
| "JE"
| "JO"
| "KZ"
| "KE"
| "KI"
| "KP"
| "KR"
| "KW"
| "KG"
| "LA"
| "LV"
| "LB"
| "LS"
| "LR"
| "LY"
| "LI"
| "LT"
| "LU"
| "MO"
| "MK"
| "MG"
| "MW"
| "MY"
| "MV"
| "ML"
| "MT"
| "MH"
| "MQ"
| "MR"
| "MU"
| "YT"
| "MX"
| "FM"
| "MD"
| "MC"
| "MN"
| "ME"
| "MS"
| "MA"
| "MZ"
| "MM"
| "NA"
| "NR"
| "NP"
| "NL"
| "NC"
| "NZ"
| "NI"
| "NE"
| "NG"
| "NU"
| "NF"
| "MP"
| "NO"
| "OM"
| "PK"
| "PW"
| "PS"
| "PA"
| "PG"
| "PY"
| "PE"
| "PH"
| "PN"
| "PL"
| "PT"
| "PR"
| "QA"
| "RE"
| "RO"
| "RU"
| "RW"
| "BL"
| "SH"
| "KN"
| "LC"
| "MF"
| "PM"
| "VC"
| "WS"
| "SM"
| "ST"
| "SA"
| "SN"
| "RS"
| "SC"
| "SL"
| "SG"
| "SX"
| "SK"
| "SI"
| "SB"
| "SO"
| "ZA"
| "GS"
| "SS"
| "ES"
| "LK"
| "SD"
| "SR"
| "SJ"
| "SZ"
| "SE"
| "CH"
| "SY"
| "TW"
| "TJ"
| "TZ"
| "TH"
| "TL"
| "TG"
| "TK"
| "TO"
| "TT"
| "TN"
| "TR"
| "TM"
| "TC"
| "TV"
| "UG"
| "UA"
| "AE"
| "GB"
| "US"
| "UM"
| "UY"
| "UZ"
| "VU"
| "VE"
| "VN"
| "VG"
| "VI"
| "WF"
| "EH"
| "YE"
| "ZM"
| "ZW"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface IPSetUpdate {
  Action: ChangeAction;
  IPSetDescriptor: IPSetDescriptor;
}

// refs: 3 - tags: input, named, interface, output
export interface IPSetDescriptor {
  Type: IPSetDescriptorType;
  Value: string;
}

// refs: 3 - tags: input, named, enum, output
export type IPSetDescriptorType =
| "IPV4"
| "IPV6"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface
export interface RuleUpdate {
  Action: ChangeAction;
  Predicate: Predicate;
}

// refs: 6 - tags: input, named, interface, output
export interface Predicate {
  Negated: boolean;
  Type: PredicateType;
  DataId: string;
}

// refs: 6 - tags: input, named, enum, output
export type PredicateType =
| "IPMatch"
| "ByteMatch"
| "SqlInjectionMatch"
| "GeoMatch"
| "SizeConstraint"
| "XssMatch"
| "RegexMatch"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface RegexMatchSetUpdate {
  Action: ChangeAction;
  RegexMatchTuple: RegexMatchTuple;
}

// refs: 3 - tags: input, named, interface, output
export interface RegexMatchTuple {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
  RegexPatternSetId: string;
}

// refs: 1 - tags: input, named, interface
export interface RegexPatternSetUpdate {
  Action: ChangeAction;
  RegexPatternString: string;
}

// refs: 1 - tags: input, named, interface
export interface RuleGroupUpdate {
  Action: ChangeAction;
  ActivatedRule: ActivatedRule;
}

// refs: 5 - tags: input, named, interface, output
export interface ActivatedRule {
  Priority: number;
  RuleId: string;
  Action?: WafAction | null;
  OverrideAction?: WafOverrideAction | null;
  Type?: WafRuleType | null;
  ExcludedRules?: ExcludedRule[] | null;
}

// refs: 5 - tags: input, named, interface, output
export interface WafOverrideAction {
  Type: WafOverrideActionType;
}

// refs: 5 - tags: input, named, enum, output
export type WafOverrideActionType =
| "NONE"
| "COUNT"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, enum, output
export type WafRuleType =
| "REGULAR"
| "RATE_BASED"
| "GROUP"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, interface, output
export interface ExcludedRule {
  RuleId: string;
}

// refs: 1 - tags: input, named, interface
export interface SizeConstraintSetUpdate {
  Action: ChangeAction;
  SizeConstraint: SizeConstraint;
}

// refs: 3 - tags: input, named, interface, output
export interface SizeConstraint {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
  ComparisonOperator: ComparisonOperator;
  Size: number;
}

// refs: 3 - tags: input, named, enum, output
export type ComparisonOperator =
| "EQ"
| "NE"
| "LE"
| "LT"
| "GE"
| "GT"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SqlInjectionMatchSetUpdate {
  Action: ChangeAction;
  SqlInjectionMatchTuple: SqlInjectionMatchTuple;
}

// refs: 3 - tags: input, named, interface, output
export interface SqlInjectionMatchTuple {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
}

// refs: 1 - tags: input, named, interface
export interface WebACLUpdate {
  Action: ChangeAction;
  ActivatedRule: ActivatedRule;
}

// refs: 1 - tags: input, named, interface
export interface XssMatchSetUpdate {
  Action: ChangeAction;
  XssMatchTuple: XssMatchTuple;
}

// refs: 3 - tags: input, named, interface, output
export interface XssMatchTuple {
  FieldToMatch: FieldToMatch;
  TextTransformation: TextTransformation;
}

// refs: 2 - tags: output, named, interface
export interface ByteMatchSet {
  ByteMatchSetId: string;
  Name?: string | null;
  ByteMatchTuples: ByteMatchTuple[];
}

// refs: 2 - tags: output, named, interface
export interface GeoMatchSet {
  GeoMatchSetId: string;
  Name?: string | null;
  GeoMatchConstraints: GeoMatchConstraint[];
}

// refs: 2 - tags: output, named, interface
export interface IPSet {
  IPSetId: string;
  Name?: string | null;
  IPSetDescriptors: IPSetDescriptor[];
}

// refs: 2 - tags: output, named, interface
export interface RateBasedRule {
  RuleId: string;
  Name?: string | null;
  MetricName?: string | null;
  MatchPredicates: Predicate[];
  RateKey: RateKey;
  RateLimit: number;
}

// refs: 2 - tags: output, named, interface
export interface RegexMatchSet {
  RegexMatchSetId?: string | null;
  Name?: string | null;
  RegexMatchTuples?: RegexMatchTuple[] | null;
}

// refs: 2 - tags: output, named, interface
export interface RegexPatternSet {
  RegexPatternSetId: string;
  Name?: string | null;
  RegexPatternStrings: string[];
}

// refs: 2 - tags: output, named, interface
export interface Rule {
  RuleId: string;
  Name?: string | null;
  MetricName?: string | null;
  Predicates: Predicate[];
}

// refs: 2 - tags: output, named, interface
export interface RuleGroup {
  RuleGroupId: string;
  Name?: string | null;
  MetricName?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface SizeConstraintSet {
  SizeConstraintSetId: string;
  Name?: string | null;
  SizeConstraints: SizeConstraint[];
}

// refs: 2 - tags: output, named, interface
export interface SqlInjectionMatchSet {
  SqlInjectionMatchSetId: string;
  Name?: string | null;
  SqlInjectionMatchTuples: SqlInjectionMatchTuple[];
}

// refs: 2 - tags: output, named, interface
export interface WebACL {
  WebACLId: string;
  Name?: string | null;
  MetricName?: string | null;
  DefaultAction: WafAction;
  Rules: ActivatedRule[];
  WebACLArn?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface XssMatchSet {
  XssMatchSetId: string;
  Name?: string | null;
  XssMatchTuples: XssMatchTuple[];
}

// refs: 1 - tags: output, named, enum
export type ChangeTokenStatus =
| "PROVISIONED"
| "PENDING"
| "INSYNC"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface SampledHTTPRequest {
  Request: HTTPRequest;
  Weight: number;
  Timestamp?: Date | number | null;
  Action?: string | null;
  RuleWithinRuleGroup?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface HTTPRequest {
  ClientIP?: string | null;
  Country?: string | null;
  URI?: string | null;
  Method?: string | null;
  HTTPVersion?: string | null;
  Headers?: HTTPHeader[] | null;
}

// refs: 1 - tags: output, named, interface
export interface HTTPHeader {
  Name?: string | null;
  Value?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ByteMatchSetSummary {
  ByteMatchSetId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface GeoMatchSetSummary {
  GeoMatchSetId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface IPSetSummary {
  IPSetId: string;
  Name: string;
}

// refs: 2 - tags: output, named, interface
export interface RuleSummary {
  RuleId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface RegexMatchSetSummary {
  RegexMatchSetId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface RegexPatternSetSummary {
  RegexPatternSetId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface RuleGroupSummary {
  RuleGroupId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface SizeConstraintSetSummary {
  SizeConstraintSetId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface SqlInjectionMatchSetSummary {
  SqlInjectionMatchSetId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface SubscribedRuleGroupSummary {
  RuleGroupId: string;
  Name: string;
  MetricName: string;
}

// refs: 1 - tags: output, named, interface
export interface TagInfoForResource {
  ResourceARN?: string | null;
  TagList?: Tag[] | null;
}

// refs: 1 - tags: output, named, interface
export interface WebACLSummary {
  WebACLId: string;
  Name: string;
}

// refs: 1 - tags: output, named, interface
export interface XssMatchSetSummary {
  XssMatchSetId: string;
  Name: string;
}
