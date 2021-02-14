// Autogenerated API structures for: AWS App Mesh

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateGatewayRouteInput {
  clientToken?: string | null;
  gatewayRouteName: string;
  meshName: string;
  meshOwner?: string | null;
  spec: GatewayRouteSpec;
  tags?: TagRef[] | null;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface CreateMeshInput {
  clientToken?: string | null;
  meshName: string;
  spec?: MeshSpec | null;
  tags?: TagRef[] | null;
}

// refs: 1 - tags: named, input
export interface CreateRouteInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  routeName: string;
  spec: RouteSpec;
  tags?: TagRef[] | null;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualGatewayInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualGatewaySpec;
  tags?: TagRef[] | null;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualNodeInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualNodeSpec;
  tags?: TagRef[] | null;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualRouterInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualRouterSpec;
  tags?: TagRef[] | null;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualServiceInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualServiceSpec;
  tags?: TagRef[] | null;
  virtualServiceName: string;
}

// refs: 1 - tags: named, input
export interface DeleteGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  meshOwner?: string | null;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface DeleteMeshInput {
  meshName: string;
}

// refs: 1 - tags: named, input
export interface DeleteRouteInput {
  meshName: string;
  meshOwner?: string | null;
  routeName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualGatewayInput {
  meshName: string;
  meshOwner?: string | null;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualNodeInput {
  meshName: string;
  meshOwner?: string | null;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualRouterInput {
  meshName: string;
  meshOwner?: string | null;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualServiceInput {
  meshName: string;
  meshOwner?: string | null;
  virtualServiceName: string;
}

// refs: 1 - tags: named, input
export interface DescribeGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  meshOwner?: string | null;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface DescribeMeshInput {
  meshName: string;
  meshOwner?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeRouteInput {
  meshName: string;
  meshOwner?: string | null;
  routeName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualGatewayInput {
  meshName: string;
  meshOwner?: string | null;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualNodeInput {
  meshName: string;
  meshOwner?: string | null;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualRouterInput {
  meshName: string;
  meshOwner?: string | null;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualServiceInput {
  meshName: string;
  meshOwner?: string | null;
  virtualServiceName: string;
}

// refs: 1 - tags: named, input
export interface ListGatewayRoutesInput {
  limit?: number | null;
  meshName: string;
  meshOwner?: string | null;
  nextToken?: string | null;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface ListMeshesInput {
  limit?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListRoutesInput {
  limit?: number | null;
  meshName: string;
  meshOwner?: string | null;
  nextToken?: string | null;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceInput {
  limit?: number | null;
  nextToken?: string | null;
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface ListVirtualGatewaysInput {
  limit?: number | null;
  meshName: string;
  meshOwner?: string | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListVirtualNodesInput {
  limit?: number | null;
  meshName: string;
  meshOwner?: string | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListVirtualRoutersInput {
  limit?: number | null;
  meshName: string;
  meshOwner?: string | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListVirtualServicesInput {
  limit?: number | null;
  meshName: string;
  meshOwner?: string | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface TagResourceInput {
  resourceArn: string;
  tags: TagRef[];
}

// refs: 1 - tags: named, input
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateGatewayRouteInput {
  clientToken?: string | null;
  gatewayRouteName: string;
  meshName: string;
  meshOwner?: string | null;
  spec: GatewayRouteSpec;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface UpdateMeshInput {
  clientToken?: string | null;
  meshName: string;
  spec?: MeshSpec | null;
}

// refs: 1 - tags: named, input
export interface UpdateRouteInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  routeName: string;
  spec: RouteSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualGatewayInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualGatewaySpec;
  virtualGatewayName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualNodeInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualNodeSpec;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualRouterInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualRouterSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualServiceInput {
  clientToken?: string | null;
  meshName: string;
  meshOwner?: string | null;
  spec: VirtualServiceSpec;
  virtualServiceName: string;
}

// refs: 1 - tags: named, output
export interface CreateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}

// refs: 1 - tags: named, output
export interface CreateMeshOutput {
  mesh: MeshData;
}

// refs: 1 - tags: named, output
export interface CreateRouteOutput {
  route: RouteData;
}

// refs: 1 - tags: named, output
export interface CreateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}

// refs: 1 - tags: named, output
export interface CreateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}

// refs: 1 - tags: named, output
export interface CreateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}

// refs: 1 - tags: named, output
export interface CreateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}

// refs: 1 - tags: named, output
export interface DeleteGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}

// refs: 1 - tags: named, output
export interface DeleteMeshOutput {
  mesh: MeshData;
}

// refs: 1 - tags: named, output
export interface DeleteRouteOutput {
  route: RouteData;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualServiceOutput {
  virtualService: VirtualServiceData;
}

// refs: 1 - tags: named, output
export interface DescribeGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}

// refs: 1 - tags: named, output
export interface DescribeMeshOutput {
  mesh: MeshData;
}

// refs: 1 - tags: named, output
export interface DescribeRouteOutput {
  route: RouteData;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualServiceOutput {
  virtualService: VirtualServiceData;
}

// refs: 1 - tags: named, output
export interface ListGatewayRoutesOutput {
  gatewayRoutes: GatewayRouteRef[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListMeshesOutput {
  meshes: MeshRef[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRoutesOutput {
  nextToken?: string | null;
  routes: RouteRef[];
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceOutput {
  nextToken?: string | null;
  tags: TagRef[];
}

// refs: 1 - tags: named, output
export interface ListVirtualGatewaysOutput {
  nextToken?: string | null;
  virtualGateways: VirtualGatewayRef[];
}

// refs: 1 - tags: named, output
export interface ListVirtualNodesOutput {
  nextToken?: string | null;
  virtualNodes: VirtualNodeRef[];
}

// refs: 1 - tags: named, output
export interface ListVirtualRoutersOutput {
  nextToken?: string | null;
  virtualRouters: VirtualRouterRef[];
}

// refs: 1 - tags: named, output
export interface ListVirtualServicesOutput {
  nextToken?: string | null;
  virtualServices: VirtualServiceRef[];
}

// refs: 1 - tags: named, output
export interface TagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UntagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UpdateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}

// refs: 1 - tags: named, output
export interface UpdateMeshOutput {
  mesh: MeshData;
}

// refs: 1 - tags: named, output
export interface UpdateRouteOutput {
  route: RouteData;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}

// refs: 6 - tags: input, named, interface, output
export interface GatewayRouteSpec {
  grpcRoute?: GrpcGatewayRoute | null;
  http2Route?: HttpGatewayRoute | null;
  httpRoute?: HttpGatewayRoute | null;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcGatewayRoute {
  action: GrpcGatewayRouteAction;
  match: GrpcGatewayRouteMatch;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcGatewayRouteAction {
  target: GatewayRouteTarget;
}

// refs: 18 - tags: input, named, interface, output
export interface GatewayRouteTarget {
  virtualService: GatewayRouteVirtualService;
}

// refs: 18 - tags: input, named, interface, output
export interface GatewayRouteVirtualService {
  virtualServiceName: string;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcGatewayRouteMatch {
  serviceName?: string | null;
}

// refs: 12 - tags: input, named, interface, output
export interface HttpGatewayRoute {
  action: HttpGatewayRouteAction;
  match: HttpGatewayRouteMatch;
}

// refs: 12 - tags: input, named, interface, output
export interface HttpGatewayRouteAction {
  target: GatewayRouteTarget;
}

// refs: 12 - tags: input, named, interface, output
export interface HttpGatewayRouteMatch {
  prefix: string;
}

// refs: 9 - tags: input, named, interface, output
export interface TagRef {
  key: string;
  value: string;
}

// refs: 6 - tags: input, named, interface, output
export interface MeshSpec {
  egressFilter?: EgressFilter | null;
}

// refs: 6 - tags: input, named, interface, output
export interface EgressFilter {
  type: EgressFilterType;
}

// refs: 6 - tags: input, named, enum, output
export type EgressFilterType =
| "ALLOW_ALL"
| "DROP_ALL"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface RouteSpec {
  grpcRoute?: GrpcRoute | null;
  http2Route?: HttpRoute | null;
  httpRoute?: HttpRoute | null;
  priority?: number | null;
  tcpRoute?: TcpRoute | null;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcRoute {
  action: GrpcRouteAction;
  match: GrpcRouteMatch;
  retryPolicy?: GrpcRetryPolicy | null;
  timeout?: GrpcTimeout | null;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcRouteAction {
  weightedTargets: WeightedTarget[];
}

// refs: 24 - tags: input, named, interface, output
export interface WeightedTarget {
  virtualNode: string;
  weight: number;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcRouteMatch {
  metadata?: GrpcRouteMetadata[] | null;
  methodName?: string | null;
  serviceName?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcRouteMetadata {
  invert?: boolean | null;
  match?: GrpcRouteMetadataMatchMethod | null;
  name: string;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcRouteMetadataMatchMethod {
  exact?: string | null;
  prefix?: string | null;
  range?: MatchRange | null;
  regex?: string | null;
  suffix?: string | null;
}

// refs: 18 - tags: input, named, interface, output
export interface MatchRange {
  end: number;
  start: number;
}

// refs: 6 - tags: input, named, interface, output
export interface GrpcRetryPolicy {
  grpcRetryEvents?: GrpcRetryPolicyEvent[] | null;
  httpRetryEvents?: string[] | null;
  maxRetries: number;
  perRetryTimeout: Duration;
  tcpRetryEvents?: TcpRetryPolicyEvent[] | null;
}

// refs: 6 - tags: input, named, enum, output
export type GrpcRetryPolicyEvent =
| "cancelled"
| "deadline-exceeded"
| "internal"
| "resource-exhausted"
| "unavailable"
| cmnP.UnexpectedEnumValue;

// refs: 114 - tags: input, named, interface, output
export interface Duration {
  unit?: DurationUnit | null;
  value?: number | null;
}

// refs: 114 - tags: input, named, enum, output
export type DurationUnit =
| "s"
| "ms"
| cmnP.UnexpectedEnumValue;

// refs: 18 - tags: input, named, enum, output
export type TcpRetryPolicyEvent =
| "connection-error"
| cmnP.UnexpectedEnumValue;

// refs: 12 - tags: input, named, interface, output
export interface GrpcTimeout {
  idle?: Duration | null;
  perRequest?: Duration | null;
}

// refs: 12 - tags: input, named, interface, output
export interface HttpRoute {
  action: HttpRouteAction;
  match: HttpRouteMatch;
  retryPolicy?: HttpRetryPolicy | null;
  timeout?: HttpTimeout | null;
}

// refs: 12 - tags: input, named, interface, output
export interface HttpRouteAction {
  weightedTargets: WeightedTarget[];
}

// refs: 12 - tags: input, named, interface, output
export interface HttpRouteMatch {
  headers?: HttpRouteHeader[] | null;
  method?: HttpMethod | null;
  prefix: string;
  scheme?: HttpScheme | null;
}

// refs: 12 - tags: input, named, interface, output
export interface HttpRouteHeader {
  invert?: boolean | null;
  match?: HeaderMatchMethod | null;
  name: string;
}

// refs: 12 - tags: input, named, interface, output
export interface HeaderMatchMethod {
  exact?: string | null;
  prefix?: string | null;
  range?: MatchRange | null;
  regex?: string | null;
  suffix?: string | null;
}

// refs: 12 - tags: input, named, enum, output
export type HttpMethod =
| "GET"
| "HEAD"
| "POST"
| "PUT"
| "DELETE"
| "CONNECT"
| "OPTIONS"
| "TRACE"
| "PATCH"
| cmnP.UnexpectedEnumValue;

// refs: 12 - tags: input, named, enum, output
export type HttpScheme =
| "http"
| "https"
| cmnP.UnexpectedEnumValue;

// refs: 12 - tags: input, named, interface, output
export interface HttpRetryPolicy {
  httpRetryEvents?: string[] | null;
  maxRetries: number;
  perRetryTimeout: Duration;
  tcpRetryEvents?: TcpRetryPolicyEvent[] | null;
}

// refs: 24 - tags: input, named, interface, output
export interface HttpTimeout {
  idle?: Duration | null;
  perRequest?: Duration | null;
}

// refs: 6 - tags: input, named, interface, output
export interface TcpRoute {
  action: TcpRouteAction;
  timeout?: TcpTimeout | null;
}

// refs: 6 - tags: input, named, interface, output
export interface TcpRouteAction {
  weightedTargets: WeightedTarget[];
}

// refs: 12 - tags: input, named, interface, output
export interface TcpTimeout {
  idle?: Duration | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewaySpec {
  backendDefaults?: VirtualGatewayBackendDefaults | null;
  listeners: VirtualGatewayListener[];
  logging?: VirtualGatewayLogging | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayBackendDefaults {
  clientPolicy?: VirtualGatewayClientPolicy | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayClientPolicy {
  tls?: VirtualGatewayClientPolicyTls | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayClientPolicyTls {
  certificate?: VirtualGatewayClientTlsCertificate | null;
  enforce?: boolean | null;
  ports?: number[] | null;
  validation: VirtualGatewayTlsValidationContext;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayClientTlsCertificate {
  file?: VirtualGatewayListenerTlsFileCertificate | null;
  sds?: VirtualGatewayListenerTlsSdsCertificate | null;
}

// refs: 12 - tags: input, named, interface, output
export interface VirtualGatewayListenerTlsFileCertificate {
  certificateChain: string;
  privateKey: string;
}

// refs: 12 - tags: input, named, interface, output
export interface VirtualGatewayListenerTlsSdsCertificate {
  secretName: string;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayTlsValidationContext {
  subjectAlternativeNames?: SubjectAlternativeNames | null;
  trust: VirtualGatewayTlsValidationContextTrust;
}

// refs: 30 - tags: input, named, interface, output
export interface SubjectAlternativeNames {
  match: SubjectAlternativeNameMatchers;
}

// refs: 30 - tags: input, named, interface, output
export interface SubjectAlternativeNameMatchers {
  exact: string[];
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayTlsValidationContextTrust {
  acm?: VirtualGatewayTlsValidationContextAcmTrust | null;
  file?: VirtualGatewayTlsValidationContextFileTrust | null;
  sds?: VirtualGatewayTlsValidationContextSdsTrust | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayTlsValidationContextAcmTrust {
  certificateAuthorityArns: string[];
}

// refs: 12 - tags: input, named, interface, output
export interface VirtualGatewayTlsValidationContextFileTrust {
  certificateChain: string;
}

// refs: 12 - tags: input, named, interface, output
export interface VirtualGatewayTlsValidationContextSdsTrust {
  secretName: string;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayListener {
  connectionPool?: VirtualGatewayConnectionPool | null;
  healthCheck?: VirtualGatewayHealthCheckPolicy | null;
  portMapping: VirtualGatewayPortMapping;
  tls?: VirtualGatewayListenerTls | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayConnectionPool {
  grpc?: VirtualGatewayGrpcConnectionPool | null;
  http?: VirtualGatewayHttpConnectionPool | null;
  http2?: VirtualGatewayHttp2ConnectionPool | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayGrpcConnectionPool {
  maxRequests: number;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayHttp2ConnectionPool {
  maxRequests: number;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayHealthCheckPolicy {
  healthyThreshold: number;
  intervalMillis: number;
  path?: string | null;
  port?: number | null;
  protocol: VirtualGatewayPortProtocol;
  timeoutMillis: number;
  unhealthyThreshold: number;
}

// refs: 12 - tags: input, named, enum, output
export type VirtualGatewayPortProtocol =
| "http"
| "http2"
| "grpc"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayPortMapping {
  port: number;
  protocol: VirtualGatewayPortProtocol;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayListenerTls {
  certificate: VirtualGatewayListenerTlsCertificate;
  mode: VirtualGatewayListenerTlsMode;
  validation?: VirtualGatewayListenerTlsValidationContext | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayListenerTlsCertificate {
  acm?: VirtualGatewayListenerTlsAcmCertificate | null;
  file?: VirtualGatewayListenerTlsFileCertificate | null;
  sds?: VirtualGatewayListenerTlsSdsCertificate | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayListenerTlsAcmCertificate {
  certificateArn: string;
}

// refs: 6 - tags: input, named, enum, output
export type VirtualGatewayListenerTlsMode =
| "STRICT"
| "PERMISSIVE"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayListenerTlsValidationContext {
  subjectAlternativeNames?: SubjectAlternativeNames | null;
  trust: VirtualGatewayListenerTlsValidationContextTrust;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayListenerTlsValidationContextTrust {
  file?: VirtualGatewayTlsValidationContextFileTrust | null;
  sds?: VirtualGatewayTlsValidationContextSdsTrust | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayLogging {
  accessLog?: VirtualGatewayAccessLog | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayAccessLog {
  file?: VirtualGatewayFileAccessLog | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualGatewayFileAccessLog {
  path: string;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeSpec {
  backendDefaults?: BackendDefaults | null;
  backends?: Backend[] | null;
  listeners?: Listener[] | null;
  logging?: Logging | null;
  serviceDiscovery?: ServiceDiscovery | null;
}

// refs: 6 - tags: input, named, interface, output
export interface BackendDefaults {
  clientPolicy?: ClientPolicy | null;
}

// refs: 12 - tags: input, named, interface, output
export interface ClientPolicy {
  tls?: ClientPolicyTls | null;
}

// refs: 12 - tags: input, named, interface, output
export interface ClientPolicyTls {
  certificate?: ClientTlsCertificate | null;
  enforce?: boolean | null;
  ports?: number[] | null;
  validation: TlsValidationContext;
}

// refs: 12 - tags: input, named, interface, output
export interface ClientTlsCertificate {
  file?: ListenerTlsFileCertificate | null;
  sds?: ListenerTlsSdsCertificate | null;
}

// refs: 18 - tags: input, named, interface, output
export interface ListenerTlsFileCertificate {
  certificateChain: string;
  privateKey: string;
}

// refs: 18 - tags: input, named, interface, output
export interface ListenerTlsSdsCertificate {
  secretName: string;
}

// refs: 12 - tags: input, named, interface, output
export interface TlsValidationContext {
  subjectAlternativeNames?: SubjectAlternativeNames | null;
  trust: TlsValidationContextTrust;
}

// refs: 12 - tags: input, named, interface, output
export interface TlsValidationContextTrust {
  acm?: TlsValidationContextAcmTrust | null;
  file?: TlsValidationContextFileTrust | null;
  sds?: TlsValidationContextSdsTrust | null;
}

// refs: 12 - tags: input, named, interface, output
export interface TlsValidationContextAcmTrust {
  certificateAuthorityArns: string[];
}

// refs: 18 - tags: input, named, interface, output
export interface TlsValidationContextFileTrust {
  certificateChain: string;
}

// refs: 18 - tags: input, named, interface, output
export interface TlsValidationContextSdsTrust {
  secretName: string;
}

// refs: 6 - tags: input, named, interface, output
export interface Backend {
  virtualService?: VirtualServiceBackend | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualServiceBackend {
  clientPolicy?: ClientPolicy | null;
  virtualServiceName: string;
}

// refs: 6 - tags: input, named, interface, output
export interface Listener {
  connectionPool?: VirtualNodeConnectionPool | null;
  healthCheck?: HealthCheckPolicy | null;
  outlierDetection?: OutlierDetection | null;
  portMapping: PortMapping;
  timeout?: ListenerTimeout | null;
  tls?: ListenerTls | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeConnectionPool {
  grpc?: VirtualNodeGrpcConnectionPool | null;
  http?: VirtualNodeHttpConnectionPool | null;
  http2?: VirtualNodeHttp2ConnectionPool | null;
  tcp?: VirtualNodeTcpConnectionPool | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeGrpcConnectionPool {
  maxRequests: number;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeHttp2ConnectionPool {
  maxRequests: number;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeTcpConnectionPool {
  maxConnections: number;
}

// refs: 6 - tags: input, named, interface, output
export interface HealthCheckPolicy {
  healthyThreshold: number;
  intervalMillis: number;
  path?: string | null;
  port?: number | null;
  protocol: PortProtocol;
  timeoutMillis: number;
  unhealthyThreshold: number;
}

// refs: 18 - tags: input, named, enum, output
export type PortProtocol =
| "http"
| "tcp"
| "http2"
| "grpc"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface OutlierDetection {
  baseEjectionDuration: Duration;
  interval: Duration;
  maxEjectionPercent: number;
  maxServerErrors: number;
}

// refs: 12 - tags: input, named, interface, output
export interface PortMapping {
  port: number;
  protocol: PortProtocol;
}

// refs: 6 - tags: input, named, interface, output
export interface ListenerTimeout {
  grpc?: GrpcTimeout | null;
  http?: HttpTimeout | null;
  http2?: HttpTimeout | null;
  tcp?: TcpTimeout | null;
}

// refs: 6 - tags: input, named, interface, output
export interface ListenerTls {
  certificate: ListenerTlsCertificate;
  mode: ListenerTlsMode;
  validation?: ListenerTlsValidationContext | null;
}

// refs: 6 - tags: input, named, interface, output
export interface ListenerTlsCertificate {
  acm?: ListenerTlsAcmCertificate | null;
  file?: ListenerTlsFileCertificate | null;
  sds?: ListenerTlsSdsCertificate | null;
}

// refs: 6 - tags: input, named, interface, output
export interface ListenerTlsAcmCertificate {
  certificateArn: string;
}

// refs: 6 - tags: input, named, enum, output
export type ListenerTlsMode =
| "STRICT"
| "PERMISSIVE"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface ListenerTlsValidationContext {
  subjectAlternativeNames?: SubjectAlternativeNames | null;
  trust: ListenerTlsValidationContextTrust;
}

// refs: 6 - tags: input, named, interface, output
export interface ListenerTlsValidationContextTrust {
  file?: TlsValidationContextFileTrust | null;
  sds?: TlsValidationContextSdsTrust | null;
}

// refs: 6 - tags: input, named, interface, output
export interface Logging {
  accessLog?: AccessLog | null;
}

// refs: 6 - tags: input, named, interface, output
export interface AccessLog {
  file?: FileAccessLog | null;
}

// refs: 6 - tags: input, named, interface, output
export interface FileAccessLog {
  path: string;
}

// refs: 6 - tags: input, named, interface, output
export interface ServiceDiscovery {
  awsCloudMap?: AwsCloudMapServiceDiscovery | null;
  dns?: DnsServiceDiscovery | null;
}

// refs: 6 - tags: input, named, interface, output
export interface AwsCloudMapServiceDiscovery {
  attributes?: AwsCloudMapInstanceAttribute[] | null;
  namespaceName: string;
  serviceName: string;
}

// refs: 6 - tags: input, named, interface, output
export interface AwsCloudMapInstanceAttribute {
  key: string;
  value: string;
}

// refs: 6 - tags: input, named, interface, output
export interface DnsServiceDiscovery {
  hostname: string;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualRouterSpec {
  listeners?: VirtualRouterListener[] | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualRouterListener {
  portMapping: PortMapping;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualServiceSpec {
  provider?: VirtualServiceProvider | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualServiceProvider {
  virtualNode?: VirtualNodeServiceProvider | null;
  virtualRouter?: VirtualRouterServiceProvider | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeServiceProvider {
  virtualNodeName: string;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualRouterServiceProvider {
  virtualRouterName: string;
}

// refs: 4 - tags: output, named, interface
export interface GatewayRouteData {
  gatewayRouteName: string;
  meshName: string;
  metadata: ResourceMetadata;
  spec: GatewayRouteSpec;
  status: GatewayRouteStatus;
  virtualGatewayName: string;
}

// refs: 28 - tags: output, named, interface
export interface ResourceMetadata {
  arn: string;
  createdAt: Date | number;
  lastUpdatedAt: Date | number;
  meshOwner: string;
  resourceOwner: string;
  uid: string;
  version: number;
}

// refs: 4 - tags: output, named, interface
export interface GatewayRouteStatus {
  status: GatewayRouteStatusCode;
}

// refs: 4 - tags: output, named, enum
export type GatewayRouteStatusCode =
| "ACTIVE"
| "INACTIVE"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface MeshData {
  meshName: string;
  metadata: ResourceMetadata;
  spec: MeshSpec;
  status: MeshStatus;
}

// refs: 4 - tags: output, named, interface
export interface MeshStatus {
  status?: MeshStatusCode | null;
}

// refs: 4 - tags: output, named, enum
export type MeshStatusCode =
| "ACTIVE"
| "INACTIVE"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface RouteData {
  meshName: string;
  metadata: ResourceMetadata;
  routeName: string;
  spec: RouteSpec;
  status: RouteStatus;
  virtualRouterName: string;
}

// refs: 4 - tags: output, named, interface
export interface RouteStatus {
  status: RouteStatusCode;
}

// refs: 4 - tags: output, named, enum
export type RouteStatusCode =
| "ACTIVE"
| "INACTIVE"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualGatewayData {
  meshName: string;
  metadata: ResourceMetadata;
  spec: VirtualGatewaySpec;
  status: VirtualGatewayStatus;
  virtualGatewayName: string;
}

// refs: 4 - tags: output, named, interface
export interface VirtualGatewayStatus {
  status: VirtualGatewayStatusCode;
}

// refs: 4 - tags: output, named, enum
export type VirtualGatewayStatusCode =
| "ACTIVE"
| "INACTIVE"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualNodeData {
  meshName: string;
  metadata: ResourceMetadata;
  spec: VirtualNodeSpec;
  status: VirtualNodeStatus;
  virtualNodeName: string;
}

// refs: 4 - tags: output, named, interface
export interface VirtualNodeStatus {
  status: VirtualNodeStatusCode;
}

// refs: 4 - tags: output, named, enum
export type VirtualNodeStatusCode =
| "ACTIVE"
| "INACTIVE"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualRouterData {
  meshName: string;
  metadata: ResourceMetadata;
  spec: VirtualRouterSpec;
  status: VirtualRouterStatus;
  virtualRouterName: string;
}

// refs: 4 - tags: output, named, interface
export interface VirtualRouterStatus {
  status: VirtualRouterStatusCode;
}

// refs: 4 - tags: output, named, enum
export type VirtualRouterStatusCode =
| "ACTIVE"
| "INACTIVE"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualServiceData {
  meshName: string;
  metadata: ResourceMetadata;
  spec: VirtualServiceSpec;
  status: VirtualServiceStatus;
  virtualServiceName: string;
}

// refs: 4 - tags: output, named, interface
export interface VirtualServiceStatus {
  status: VirtualServiceStatusCode;
}

// refs: 4 - tags: output, named, enum
export type VirtualServiceStatusCode =
| "ACTIVE"
| "INACTIVE"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface GatewayRouteRef {
  arn: string;
  createdAt: Date | number;
  gatewayRouteName: string;
  lastUpdatedAt: Date | number;
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  version: number;
  virtualGatewayName: string;
}

// refs: 1 - tags: output, named, interface
export interface MeshRef {
  arn: string;
  createdAt: Date | number;
  lastUpdatedAt: Date | number;
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  version: number;
}

// refs: 1 - tags: output, named, interface
export interface RouteRef {
  arn: string;
  createdAt: Date | number;
  lastUpdatedAt: Date | number;
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  routeName: string;
  version: number;
  virtualRouterName: string;
}

// refs: 1 - tags: output, named, interface
export interface VirtualGatewayRef {
  arn: string;
  createdAt: Date | number;
  lastUpdatedAt: Date | number;
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  version: number;
  virtualGatewayName: string;
}

// refs: 1 - tags: output, named, interface
export interface VirtualNodeRef {
  arn: string;
  createdAt: Date | number;
  lastUpdatedAt: Date | number;
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  version: number;
  virtualNodeName: string;
}

// refs: 1 - tags: output, named, interface
export interface VirtualRouterRef {
  arn: string;
  createdAt: Date | number;
  lastUpdatedAt: Date | number;
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  version: number;
  virtualRouterName: string;
}

// refs: 1 - tags: output, named, interface
export interface VirtualServiceRef {
  arn: string;
  createdAt: Date | number;
  lastUpdatedAt: Date | number;
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  version: number;
  virtualServiceName: string;
}