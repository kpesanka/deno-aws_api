// Autogenerated API structures for: AWS Direct Connect

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  directConnectGatewayId: string;
  proposalId: string;
  associatedGatewayOwnerAccount: string;
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
}

// refs: 1 - tags: named, input
export interface AllocateConnectionOnInterconnectRequest {
  bandwidth: string;
  connectionName: string;
  ownerAccount: string;
  interconnectId: string;
  vlan: number;
}

// refs: 1 - tags: named, input
export interface AllocateHostedConnectionRequest {
  connectionId: string;
  ownerAccount: string;
  bandwidth: string;
  connectionName: string;
  vlan: number;
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface AllocatePrivateVirtualInterfaceRequest {
  connectionId: string;
  ownerAccount: string;
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
}

// refs: 1 - tags: named, input
export interface AllocatePublicVirtualInterfaceRequest {
  connectionId: string;
  ownerAccount: string;
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
}

// refs: 1 - tags: named, input
export interface AllocateTransitVirtualInterfaceRequest {
  connectionId: string;
  ownerAccount: string;
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;
}

// refs: 1 - tags: named, input
export interface AssociateConnectionWithLagRequest {
  connectionId: string;
  lagId: string;
}

// refs: 1 - tags: named, input
export interface AssociateHostedConnectionRequest {
  connectionId: string;
  parentConnectionId: string;
}

// refs: 1 - tags: named, input
export interface AssociateVirtualInterfaceRequest {
  virtualInterfaceId: string;
  connectionId: string;
}

// refs: 1 - tags: named, input
export interface ConfirmConnectionRequest {
  connectionId: string;
}

// refs: 1 - tags: named, input
export interface ConfirmPrivateVirtualInterfaceRequest {
  virtualInterfaceId: string;
  virtualGatewayId?: string | null;
  directConnectGatewayId?: string | null;
}

// refs: 1 - tags: named, input
export interface ConfirmPublicVirtualInterfaceRequest {
  virtualInterfaceId: string;
}

// refs: 1 - tags: named, input
export interface ConfirmTransitVirtualInterfaceRequest {
  virtualInterfaceId: string;
  directConnectGatewayId: string;
}

// refs: 1 - tags: named, input
export interface CreateBGPPeerRequest {
  virtualInterfaceId?: string | null;
  newBGPPeer?: NewBGPPeer | null;
}

// refs: 1 - tags: named, input
export interface CreateConnectionRequest {
  location: string;
  bandwidth: string;
  connectionName: string;
  lagId?: string | null;
  tags?: Tag[] | null;
  providerName?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateDirectConnectGatewayRequest {
  directConnectGatewayName: string;
  amazonSideAsn?: number | null;
}

// refs: 1 - tags: named, input
export interface CreateDirectConnectGatewayAssociationRequest {
  directConnectGatewayId: string;
  gatewayId?: string | null;
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
  virtualGatewayId?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateDirectConnectGatewayAssociationProposalRequest {
  directConnectGatewayId: string;
  directConnectGatewayOwnerAccount: string;
  gatewayId: string;
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
}

// refs: 1 - tags: named, input
export interface CreateInterconnectRequest {
  interconnectName: string;
  bandwidth: string;
  location: string;
  lagId?: string | null;
  tags?: Tag[] | null;
  providerName?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateLagRequest {
  numberOfConnections: number;
  location: string;
  connectionsBandwidth: string;
  lagName: string;
  connectionId?: string | null;
  tags?: Tag[] | null;
  childConnectionTags?: Tag[] | null;
  providerName?: string | null;
}

// refs: 1 - tags: named, input
export interface CreatePrivateVirtualInterfaceRequest {
  connectionId: string;
  newPrivateVirtualInterface: NewPrivateVirtualInterface;
}

// refs: 1 - tags: named, input
export interface CreatePublicVirtualInterfaceRequest {
  connectionId: string;
  newPublicVirtualInterface: NewPublicVirtualInterface;
}

// refs: 1 - tags: named, input
export interface CreateTransitVirtualInterfaceRequest {
  connectionId: string;
  newTransitVirtualInterface: NewTransitVirtualInterface;
}

// refs: 1 - tags: named, input
export interface DeleteBGPPeerRequest {
  virtualInterfaceId?: string | null;
  asn?: number | null;
  customerAddress?: string | null;
  bgpPeerId?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteConnectionRequest {
  connectionId: string;
}

// refs: 1 - tags: named, input
export interface DeleteDirectConnectGatewayRequest {
  directConnectGatewayId: string;
}

// refs: 1 - tags: named, input
export interface DeleteDirectConnectGatewayAssociationRequest {
  associationId?: string | null;
  directConnectGatewayId?: string | null;
  virtualGatewayId?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  proposalId: string;
}

// refs: 1 - tags: named, input
export interface DeleteInterconnectRequest {
  interconnectId: string;
}

// refs: 1 - tags: named, input
export interface DeleteLagRequest {
  lagId: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualInterfaceRequest {
  virtualInterfaceId: string;
}

// refs: 1 - tags: named, input
export interface DescribeConnectionLoaRequest {
  connectionId: string;
  providerName?: string | null;
  loaContentType?: LoaContentType | null;
}

// refs: 1 - tags: named, input
export interface DescribeConnectionsRequest {
  connectionId?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeConnectionsOnInterconnectRequest {
  interconnectId: string;
}

// refs: 1 - tags: named, input
export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  directConnectGatewayId?: string | null;
  proposalId?: string | null;
  associatedGatewayId?: string | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDirectConnectGatewayAssociationsRequest {
  associationId?: string | null;
  associatedGatewayId?: string | null;
  directConnectGatewayId?: string | null;
  maxResults?: number | null;
  nextToken?: string | null;
  virtualGatewayId?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDirectConnectGatewayAttachmentsRequest {
  directConnectGatewayId?: string | null;
  virtualInterfaceId?: string | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDirectConnectGatewaysRequest {
  directConnectGatewayId?: string | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeHostedConnectionsRequest {
  connectionId: string;
}

// refs: 1 - tags: named, input
export interface DescribeInterconnectLoaRequest {
  interconnectId: string;
  providerName?: string | null;
  loaContentType?: LoaContentType | null;
}

// refs: 1 - tags: named, input
export interface DescribeInterconnectsRequest {
  interconnectId?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeLagsRequest {
  lagId?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeLoaRequest {
  connectionId: string;
  providerName?: string | null;
  loaContentType?: LoaContentType | null;
}

// refs: 1 - tags: named, input
export interface DescribeTagsRequest {
  resourceArns: string[];
}

// refs: 1 - tags: named, input
export interface DescribeVirtualInterfacesRequest {
  connectionId?: string | null;
  virtualInterfaceId?: string | null;
}

// refs: 1 - tags: named, input
export interface DisassociateConnectionFromLagRequest {
  connectionId: string;
  lagId: string;
}

// refs: 1 - tags: named, input
export interface ListVirtualInterfaceTestHistoryRequest {
  testId?: string | null;
  virtualInterfaceId?: string | null;
  bgpPeers?: string[] | null;
  status?: string | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface StartBgpFailoverTestRequest {
  virtualInterfaceId: string;
  bgpPeers?: string[] | null;
  testDurationInMinutes?: number | null;
}

// refs: 1 - tags: named, input
export interface StopBgpFailoverTestRequest {
  virtualInterfaceId: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateDirectConnectGatewayAssociationRequest {
  associationId?: string | null;
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
}

// refs: 1 - tags: named, input
export interface UpdateLagRequest {
  lagId: string;
  lagName?: string | null;
  minimumLinks?: number | null;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualInterfaceAttributesRequest {
  virtualInterfaceId: string;
  mtu?: number | null;
}

// refs: 1 - tags: named, output
export interface AcceptDirectConnectGatewayAssociationProposalResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | null;
}

// refs: 4 - tags: named, output, interface
export interface Connection {
  ownerAccount?: string | null;
  connectionId?: string | null;
  connectionName?: string | null;
  connectionState?: ConnectionState | null;
  region?: string | null;
  location?: string | null;
  bandwidth?: string | null;
  vlan?: number | null;
  partnerName?: string | null;
  loaIssueTime?: Date | number | null;
  lagId?: string | null;
  awsDevice?: string | null;
  jumboFrameCapable?: boolean | null;
  awsDeviceV2?: string | null;
  hasLogicalRedundancy?: HasLogicalRedundancy | null;
  tags?: Tag[] | null;
  providerName?: string | null;
}

// refs: 6 - tags: named, output, interface
export interface VirtualInterface {
  ownerAccount?: string | null;
  virtualInterfaceId?: string | null;
  location?: string | null;
  connectionId?: string | null;
  virtualInterfaceType?: string | null;
  virtualInterfaceName?: string | null;
  vlan?: number | null;
  asn?: number | null;
  amazonSideAsn?: number | null;
  authKey?: string | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
  addressFamily?: AddressFamily | null;
  virtualInterfaceState?: VirtualInterfaceState | null;
  customerRouterConfig?: string | null;
  mtu?: number | null;
  jumboFrameCapable?: boolean | null;
  virtualGatewayId?: string | null;
  directConnectGatewayId?: string | null;
  routeFilterPrefixes?: RouteFilterPrefix[] | null;
  bgpPeers?: BGPPeer[] | null;
  region?: string | null;
  awsDeviceV2?: string | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface AllocateTransitVirtualInterfaceResult {
  virtualInterface?: VirtualInterface | null;
}

// refs: 1 - tags: named, output
export interface ConfirmConnectionResponse {
  connectionState?: ConnectionState | null;
}

// refs: 1 - tags: named, output
export interface ConfirmPrivateVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState | null;
}

// refs: 1 - tags: named, output
export interface ConfirmPublicVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState | null;
}

// refs: 1 - tags: named, output
export interface ConfirmTransitVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState | null;
}

// refs: 1 - tags: named, output
export interface CreateBGPPeerResponse {
  virtualInterface?: VirtualInterface | null;
}

// refs: 1 - tags: named, output
export interface CreateDirectConnectGatewayResult {
  directConnectGateway?: DirectConnectGateway | null;
}

// refs: 1 - tags: named, output
export interface CreateDirectConnectGatewayAssociationResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | null;
}

// refs: 1 - tags: named, output
export interface CreateDirectConnectGatewayAssociationProposalResult {
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal | null;
}

// refs: 2 - tags: named, output, interface
export interface Interconnect {
  interconnectId?: string | null;
  interconnectName?: string | null;
  interconnectState?: InterconnectState | null;
  region?: string | null;
  location?: string | null;
  bandwidth?: string | null;
  loaIssueTime?: Date | number | null;
  lagId?: string | null;
  awsDevice?: string | null;
  jumboFrameCapable?: boolean | null;
  awsDeviceV2?: string | null;
  hasLogicalRedundancy?: HasLogicalRedundancy | null;
  tags?: Tag[] | null;
  providerName?: string | null;
}

// refs: 2 - tags: named, output, interface
export interface Lag {
  connectionsBandwidth?: string | null;
  numberOfConnections?: number | null;
  lagId?: string | null;
  ownerAccount?: string | null;
  lagName?: string | null;
  lagState?: LagState | null;
  location?: string | null;
  region?: string | null;
  minimumLinks?: number | null;
  awsDevice?: string | null;
  awsDeviceV2?: string | null;
  connections?: Connection[] | null;
  allowsHostedConnections?: boolean | null;
  jumboFrameCapable?: boolean | null;
  hasLogicalRedundancy?: HasLogicalRedundancy | null;
  tags?: Tag[] | null;
  providerName?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateTransitVirtualInterfaceResult {
  virtualInterface?: VirtualInterface | null;
}

// refs: 1 - tags: named, output
export interface DeleteBGPPeerResponse {
  virtualInterface?: VirtualInterface | null;
}

// refs: 1 - tags: named, output
export interface DeleteDirectConnectGatewayResult {
  directConnectGateway?: DirectConnectGateway | null;
}

// refs: 1 - tags: named, output
export interface DeleteDirectConnectGatewayAssociationResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | null;
}

// refs: 1 - tags: named, output
export interface DeleteDirectConnectGatewayAssociationProposalResult {
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal | null;
}

// refs: 1 - tags: named, output
export interface DeleteInterconnectResponse {
  interconnectState?: InterconnectState | null;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState | null;
}

// refs: 1 - tags: named, output
export interface DescribeConnectionLoaResponse {
  loa?: Loa | null;
}

// refs: 1 - tags: named, output
export interface Connections {
  connections?: Connection[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDirectConnectGatewayAssociationsResult {
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDirectConnectGatewayAttachmentsResult {
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDirectConnectGatewaysResult {
  directConnectGateways?: DirectConnectGateway[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeInterconnectLoaResponse {
  loa?: Loa | null;
}

// refs: 1 - tags: named, output
export interface Interconnects {
  interconnects?: Interconnect[] | null;
}

// refs: 1 - tags: named, output
export interface Lags {
  lags?: Lag[] | null;
}

// refs: 3 - tags: output, named, interface
export interface Loa {
  loaContent?: Uint8Array | string | null;
  loaContentType?: LoaContentType | null;
}

// refs: 1 - tags: named, output
export interface Locations {
  locations?: Location[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeTagsResponse {
  resourceTags?: ResourceTag[] | null;
}

// refs: 1 - tags: named, output
export interface VirtualGateways {
  virtualGateways?: VirtualGateway[] | null;
}

// refs: 1 - tags: named, output
export interface VirtualInterfaces {
  virtualInterfaces?: VirtualInterface[] | null;
}

// refs: 1 - tags: named, output
export interface ListVirtualInterfaceTestHistoryResponse {
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartBgpFailoverTestResponse {
  virtualInterfaceTest?: VirtualInterfaceTestHistory | null;
}

// refs: 1 - tags: named, output
export interface StopBgpFailoverTestResponse {
  virtualInterfaceTest?: VirtualInterfaceTestHistory | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateDirectConnectGatewayAssociationResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | null;
}

// refs: 25 - tags: input, named, interface, output
export interface RouteFilterPrefix {
  cidr?: string | null;
}

// refs: 27 - tags: input, named, interface, output
export interface Tag {
  key: string;
  value?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface NewPrivateVirtualInterfaceAllocation {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  mtu?: number | null;
  authKey?: string | null;
  amazonAddress?: string | null;
  addressFamily?: AddressFamily | null;
  customerAddress?: string | null;
  tags?: Tag[] | null;
}

// refs: 19 - tags: input, named, enum, output
export type AddressFamily =
| "ipv4"
| "ipv6"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface NewPublicVirtualInterfaceAllocation {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  authKey?: string | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
  addressFamily?: AddressFamily | null;
  routeFilterPrefixes?: RouteFilterPrefix[] | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: input, named, interface
export interface NewTransitVirtualInterfaceAllocation {
  virtualInterfaceName?: string | null;
  vlan?: number | null;
  asn?: number | null;
  mtu?: number | null;
  authKey?: string | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
  addressFamily?: AddressFamily | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: input, named, interface
export interface NewBGPPeer {
  asn?: number | null;
  authKey?: string | null;
  addressFamily?: AddressFamily | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface NewPrivateVirtualInterface {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  mtu?: number | null;
  authKey?: string | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
  addressFamily?: AddressFamily | null;
  virtualGatewayId?: string | null;
  directConnectGatewayId?: string | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: input, named, interface
export interface NewPublicVirtualInterface {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  authKey?: string | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
  addressFamily?: AddressFamily | null;
  routeFilterPrefixes?: RouteFilterPrefix[] | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: input, named, interface
export interface NewTransitVirtualInterface {
  virtualInterfaceName?: string | null;
  vlan?: number | null;
  asn?: number | null;
  mtu?: number | null;
  authKey?: string | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
  addressFamily?: AddressFamily | null;
  directConnectGatewayId?: string | null;
  tags?: Tag[] | null;
}

// refs: 6 - tags: input, named, enum, output
export type LoaContentType =
| "application/pdf"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, interface
export interface DirectConnectGatewayAssociation {
  directConnectGatewayId?: string | null;
  directConnectGatewayOwnerAccount?: string | null;
  associationState?: DirectConnectGatewayAssociationState | null;
  stateChangeError?: string | null;
  associatedGateway?: AssociatedGateway | null;
  associationId?: string | null;
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
  virtualGatewayId?: string | null;
  virtualGatewayRegion?: string | null;
  virtualGatewayOwnerAccount?: string | null;
}

// refs: 5 - tags: output, named, enum
export type DirectConnectGatewayAssociationState =
| "associating"
| "associated"
| "disassociating"
| "disassociated"
| "updating"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: output, named, interface
export interface AssociatedGateway {
  id?: string | null;
  type?: GatewayType | null;
  ownerAccount?: string | null;
  region?: string | null;
}

// refs: 8 - tags: output, named, enum
export type GatewayType =
| "virtualPrivateGateway"
| "transitGateway"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, enum
export type ConnectionState =
| "ordering"
| "requested"
| "pending"
| "available"
| "down"
| "deleting"
| "deleted"
| "rejected"
| "unknown"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: output, named, enum
export type HasLogicalRedundancy =
| "unknown"
| "yes"
| "no"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: output, named, enum
export type VirtualInterfaceState =
| "confirming"
| "verifying"
| "pending"
| "available"
| "down"
| "deleting"
| "deleted"
| "rejected"
| "unknown"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: output, named, interface
export interface BGPPeer {
  bgpPeerId?: string | null;
  asn?: number | null;
  authKey?: string | null;
  addressFamily?: AddressFamily | null;
  amazonAddress?: string | null;
  customerAddress?: string | null;
  bgpPeerState?: BGPPeerState | null;
  bgpStatus?: BGPStatus | null;
  awsDeviceV2?: string | null;
}

// refs: 6 - tags: output, named, enum
export type BGPPeerState =
| "verifying"
| "pending"
| "available"
| "deleting"
| "deleted"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: output, named, enum
export type BGPStatus =
| "up"
| "down"
| "unknown"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface DirectConnectGateway {
  directConnectGatewayId?: string | null;
  directConnectGatewayName?: string | null;
  amazonSideAsn?: number | null;
  ownerAccount?: string | null;
  directConnectGatewayState?: DirectConnectGatewayState | null;
  stateChangeError?: string | null;
}

// refs: 3 - tags: output, named, enum
export type DirectConnectGatewayState =
| "pending"
| "available"
| "deleting"
| "deleted"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface DirectConnectGatewayAssociationProposal {
  proposalId?: string | null;
  directConnectGatewayId?: string | null;
  directConnectGatewayOwnerAccount?: string | null;
  proposalState?: DirectConnectGatewayAssociationProposalState | null;
  associatedGateway?: AssociatedGateway | null;
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[] | null;
}

// refs: 3 - tags: output, named, enum
export type DirectConnectGatewayAssociationProposalState =
| "requested"
| "accepted"
| "deleted"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, enum
export type InterconnectState =
| "requested"
| "pending"
| "available"
| "down"
| "deleting"
| "deleted"
| "unknown"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type LagState =
| "requested"
| "pending"
| "available"
| "down"
| "deleting"
| "deleted"
| "unknown"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DirectConnectGatewayAttachment {
  directConnectGatewayId?: string | null;
  virtualInterfaceId?: string | null;
  virtualInterfaceRegion?: string | null;
  virtualInterfaceOwnerAccount?: string | null;
  attachmentState?: DirectConnectGatewayAttachmentState | null;
  attachmentType?: DirectConnectGatewayAttachmentType | null;
  stateChangeError?: string | null;
}

// refs: 1 - tags: output, named, enum
export type DirectConnectGatewayAttachmentState =
| "attaching"
| "attached"
| "detaching"
| "detached"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type DirectConnectGatewayAttachmentType =
| "TransitVirtualInterface"
| "PrivateVirtualInterface"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Location {
  locationCode?: string | null;
  locationName?: string | null;
  region?: string | null;
  availablePortSpeeds?: string[] | null;
  availableProviders?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface ResourceTag {
  resourceArn?: string | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: output, named, interface
export interface VirtualGateway {
  virtualGatewayId?: string | null;
  virtualGatewayState?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface VirtualInterfaceTestHistory {
  testId?: string | null;
  virtualInterfaceId?: string | null;
  bgpPeers?: string[] | null;
  status?: string | null;
  ownerAccount?: string | null;
  testDurationInMinutes?: number | null;
  startTime?: Date | number | null;
  endTime?: Date | number | null;
}
