// Autogenerated API structures for: AWS App Mesh

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateMeshInput {
  clientToken?: string | null;
  meshName: string;
}

// refs: 1 - tags: named, input
export interface CreateRouteInput {
  clientToken?: string | null;
  meshName: string;
  routeName: string;
  spec: RouteSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualNodeInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualNodeSpec;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualRouterInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualRouterSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DeleteMeshInput {
  meshName: string;
}

// refs: 1 - tags: named, input
export interface DeleteRouteInput {
  meshName: string;
  routeName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualNodeInput {
  meshName: string;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualRouterInput {
  meshName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DescribeMeshInput {
  meshName: string;
}

// refs: 1 - tags: named, input
export interface DescribeRouteInput {
  meshName: string;
  routeName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualNodeInput {
  meshName: string;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualRouterInput {
  meshName: string;
  virtualRouterName: string;
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
  nextToken?: string | null;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface ListVirtualNodesInput {
  limit?: number | null;
  meshName: string;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListVirtualRoutersInput {
  limit?: number | null;
  meshName: string;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateRouteInput {
  clientToken?: string | null;
  meshName: string;
  routeName: string;
  spec: RouteSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualNodeInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualNodeSpec;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualRouterInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualRouterSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, output
export interface CreateMeshOutput {
  mesh?: MeshData | null;
}

// refs: 1 - tags: named, output
export interface CreateRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface CreateVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface CreateVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
}

// refs: 1 - tags: named, output
export interface DeleteMeshOutput {
  mesh?: MeshData | null;
}

// refs: 1 - tags: named, output
export interface DeleteRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
}

// refs: 1 - tags: named, output
export interface DescribeMeshOutput {
  mesh?: MeshData | null;
}

// refs: 1 - tags: named, output
export interface DescribeRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
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
export interface UpdateRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
}

// refs: 6 - tags: input, named, interface, output
export interface RouteSpec {
  httpRoute?: HttpRoute | null;
}

// refs: 6 - tags: input, named, interface, output
export interface HttpRoute {
  action?: HttpRouteAction | null;
  match?: HttpRouteMatch | null;
}

// refs: 6 - tags: input, named, interface, output
export interface HttpRouteAction {
  weightedTargets?: WeightedTarget[] | null;
}

// refs: 6 - tags: input, named, interface, output
export interface WeightedTarget {
  virtualNode?: string | null;
  weight?: number | null;
}

// refs: 6 - tags: input, named, interface, output
export interface HttpRouteMatch {
  prefix?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeSpec {
  backends?: string[] | null;
  listeners?: Listener[] | null;
  serviceDiscovery?: ServiceDiscovery | null;
}

// refs: 6 - tags: input, named, interface, output
export interface Listener {
  healthCheck?: HealthCheckPolicy | null;
  portMapping?: PortMapping | null;
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

// refs: 12 - tags: input, named, enum, output
export type PortProtocol =
| "http"
| "tcp"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface PortMapping {
  port?: number | null;
  protocol?: PortProtocol | null;
}

// refs: 6 - tags: input, named, interface, output
export interface ServiceDiscovery {
  dns?: DnsServiceDiscovery | null;
}

// refs: 6 - tags: input, named, interface, output
export interface DnsServiceDiscovery {
  serviceName?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualRouterSpec {
  serviceNames?: string[] | null;
}

// refs: 3 - tags: output, named, interface
export interface MeshData {
  meshName: string;
  metadata: ResourceMetadata;
  status?: MeshStatus | null;
}

// refs: 15 - tags: output, named, interface
export interface ResourceMetadata {
  arn?: string | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
  uid?: string | null;
  version?: number | null;
}

// refs: 3 - tags: output, named, interface
export interface MeshStatus {
  status?: MeshStatusCode | null;
}

// refs: 3 - tags: output, named, enum
export type MeshStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface RouteData {
  meshName: string;
  metadata?: ResourceMetadata | null;
  routeName: string;
  spec?: RouteSpec | null;
  status?: RouteStatus | null;
  virtualRouterName: string;
}

// refs: 4 - tags: output, named, interface
export interface RouteStatus {
  status?: RouteStatusCode | null;
}

// refs: 4 - tags: output, named, enum
export type RouteStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualNodeData {
  meshName: string;
  metadata?: ResourceMetadata | null;
  spec?: VirtualNodeSpec | null;
  status?: VirtualNodeStatus | null;
  virtualNodeName: string;
}

// refs: 4 - tags: output, named, interface
export interface VirtualNodeStatus {
  status?: VirtualNodeStatusCode | null;
}

// refs: 4 - tags: output, named, enum
export type VirtualNodeStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualRouterData {
  meshName: string;
  metadata?: ResourceMetadata | null;
  spec?: VirtualRouterSpec | null;
  status?: VirtualRouterStatus | null;
  virtualRouterName: string;
}

// refs: 4 - tags: output, named, interface
export interface VirtualRouterStatus {
  status?: VirtualRouterStatusCode | null;
}

// refs: 4 - tags: output, named, enum
export type VirtualRouterStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface MeshRef {
  arn?: string | null;
  meshName?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface RouteRef {
  arn?: string | null;
  meshName?: string | null;
  routeName?: string | null;
  virtualRouterName?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface VirtualNodeRef {
  arn?: string | null;
  meshName?: string | null;
  virtualNodeName?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface VirtualRouterRef {
  arn?: string | null;
  meshName?: string | null;
  virtualRouterName?: string | null;
}
