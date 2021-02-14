// Autogenerated API structures for: AWS Network Manager

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateCustomerGatewayRequest {
  CustomerGatewayArn: string;
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId?: string | null;
}

// refs: 1 - tags: named, input
export interface AssociateLinkRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId: string;
}

// refs: 1 - tags: named, input
export interface AssociateTransitGatewayConnectPeerRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArn: string;
  DeviceId: string;
  LinkId?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateConnectionRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  ConnectedDeviceId: string;
  LinkId?: string | null;
  ConnectedLinkId?: string | null;
  Description?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateDeviceRequest {
  GlobalNetworkId: string;
  AWSLocation?: AWSLocation | null;
  Description?: string | null;
  Type?: string | null;
  Vendor?: string | null;
  Model?: string | null;
  SerialNumber?: string | null;
  Location?: Location | null;
  SiteId?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateGlobalNetworkRequest {
  Description?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateLinkRequest {
  GlobalNetworkId: string;
  Description?: string | null;
  Type?: string | null;
  Bandwidth: Bandwidth;
  Provider?: string | null;
  SiteId: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateSiteRequest {
  GlobalNetworkId: string;
  Description?: string | null;
  Location?: Location | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteConnectionRequest {
  GlobalNetworkId: string;
  ConnectionId: string;
}

// refs: 1 - tags: named, input
export interface DeleteDeviceRequest {
  GlobalNetworkId: string;
  DeviceId: string;
}

// refs: 1 - tags: named, input
export interface DeleteGlobalNetworkRequest {
  GlobalNetworkId: string;
}

// refs: 1 - tags: named, input
export interface DeleteLinkRequest {
  GlobalNetworkId: string;
  LinkId: string;
}

// refs: 1 - tags: named, input
export interface DeleteSiteRequest {
  GlobalNetworkId: string;
  SiteId: string;
}

// refs: 1 - tags: named, input
export interface DeregisterTransitGatewayRequest {
  GlobalNetworkId: string;
  TransitGatewayArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeGlobalNetworksRequest {
  GlobalNetworkIds?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DisassociateCustomerGatewayRequest {
  GlobalNetworkId: string;
  CustomerGatewayArn: string;
}

// refs: 1 - tags: named, input
export interface DisassociateLinkRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateTransitGatewayConnectPeerRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArn: string;
}

// refs: 1 - tags: named, input
export interface GetConnectionsRequest {
  GlobalNetworkId: string;
  ConnectionIds?: string[] | null;
  DeviceId?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetCustomerGatewayAssociationsRequest {
  GlobalNetworkId: string;
  CustomerGatewayArns?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetDevicesRequest {
  GlobalNetworkId: string;
  DeviceIds?: string[] | null;
  SiteId?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetLinkAssociationsRequest {
  GlobalNetworkId: string;
  DeviceId?: string | null;
  LinkId?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetLinksRequest {
  GlobalNetworkId: string;
  LinkIds?: string[] | null;
  SiteId?: string | null;
  Type?: string | null;
  Provider?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetSitesRequest {
  GlobalNetworkId: string;
  SiteIds?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetTransitGatewayConnectPeerAssociationsRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArns?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetTransitGatewayRegistrationsRequest {
  GlobalNetworkId: string;
  TransitGatewayArns?: string[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface RegisterTransitGatewayRequest {
  GlobalNetworkId: string;
  TransitGatewayArn: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateConnectionRequest {
  GlobalNetworkId: string;
  ConnectionId: string;
  LinkId?: string | null;
  ConnectedLinkId?: string | null;
  Description?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateDeviceRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  AWSLocation?: AWSLocation | null;
  Description?: string | null;
  Type?: string | null;
  Vendor?: string | null;
  Model?: string | null;
  SerialNumber?: string | null;
  Location?: Location | null;
  SiteId?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateGlobalNetworkRequest {
  GlobalNetworkId: string;
  Description?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateLinkRequest {
  GlobalNetworkId: string;
  LinkId: string;
  Description?: string | null;
  Type?: string | null;
  Bandwidth?: Bandwidth | null;
  Provider?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateSiteRequest {
  GlobalNetworkId: string;
  SiteId: string;
  Description?: string | null;
  Location?: Location | null;
}

// refs: 1 - tags: named, output
export interface AssociateCustomerGatewayResponse {
  CustomerGatewayAssociation?: CustomerGatewayAssociation | null;
}

// refs: 1 - tags: named, output
export interface AssociateLinkResponse {
  LinkAssociation?: LinkAssociation | null;
}

// refs: 1 - tags: named, output
export interface AssociateTransitGatewayConnectPeerResponse {
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation | null;
}

// refs: 1 - tags: named, output
export interface CreateConnectionResponse {
  Connection?: Connection | null;
}

// refs: 1 - tags: named, output
export interface CreateDeviceResponse {
  Device?: Device | null;
}

// refs: 1 - tags: named, output
export interface CreateGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork | null;
}

// refs: 1 - tags: named, output
export interface CreateLinkResponse {
  Link?: Link | null;
}

// refs: 1 - tags: named, output
export interface CreateSiteResponse {
  Site?: Site | null;
}

// refs: 1 - tags: named, output
export interface DeleteConnectionResponse {
  Connection?: Connection | null;
}

// refs: 1 - tags: named, output
export interface DeleteDeviceResponse {
  Device?: Device | null;
}

// refs: 1 - tags: named, output
export interface DeleteGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork | null;
}

// refs: 1 - tags: named, output
export interface DeleteLinkResponse {
  Link?: Link | null;
}

// refs: 1 - tags: named, output
export interface DeleteSiteResponse {
  Site?: Site | null;
}

// refs: 1 - tags: named, output
export interface DeregisterTransitGatewayResponse {
  TransitGatewayRegistration?: TransitGatewayRegistration | null;
}

// refs: 1 - tags: named, output
export interface DescribeGlobalNetworksResponse {
  GlobalNetworks?: GlobalNetwork[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DisassociateCustomerGatewayResponse {
  CustomerGatewayAssociation?: CustomerGatewayAssociation | null;
}

// refs: 1 - tags: named, output
export interface DisassociateLinkResponse {
  LinkAssociation?: LinkAssociation | null;
}

// refs: 1 - tags: named, output
export interface DisassociateTransitGatewayConnectPeerResponse {
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation | null;
}

// refs: 1 - tags: named, output
export interface GetConnectionsResponse {
  Connections?: Connection[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetCustomerGatewayAssociationsResponse {
  CustomerGatewayAssociations?: CustomerGatewayAssociation[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetDevicesResponse {
  Devices?: Device[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetLinkAssociationsResponse {
  LinkAssociations?: LinkAssociation[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetLinksResponse {
  Links?: Link[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSitesResponse {
  Sites?: Site[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetTransitGatewayConnectPeerAssociationsResponse {
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetTransitGatewayRegistrationsResponse {
  TransitGatewayRegistrations?: TransitGatewayRegistration[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  TagList?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface RegisterTransitGatewayResponse {
  TransitGatewayRegistration?: TransitGatewayRegistration | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateConnectionResponse {
  Connection?: Connection | null;
}

// refs: 1 - tags: named, output
export interface UpdateDeviceResponse {
  Device?: Device | null;
}

// refs: 1 - tags: named, output
export interface UpdateGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork | null;
}

// refs: 1 - tags: named, output
export interface UpdateLinkResponse {
  Link?: Link | null;
}

// refs: 1 - tags: named, output
export interface UpdateSiteResponse {
  Site?: Site | null;
}

// refs: 27 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface AWSLocation {
  Zone?: string | null;
  SubnetArn?: string | null;
}

// refs: 12 - tags: input, named, interface, output
export interface Location {
  Address?: string | null;
  Latitude?: string | null;
  Longitude?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface Bandwidth {
  UploadSpeed?: number | null;
  DownloadSpeed?: number | null;
}

// refs: 3 - tags: output, named, interface
export interface CustomerGatewayAssociation {
  CustomerGatewayArn?: string | null;
  GlobalNetworkId?: string | null;
  DeviceId?: string | null;
  LinkId?: string | null;
  State?: CustomerGatewayAssociationState | null;
}

// refs: 3 - tags: output, named, enum
export type CustomerGatewayAssociationState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface LinkAssociation {
  GlobalNetworkId?: string | null;
  DeviceId?: string | null;
  LinkId?: string | null;
  LinkAssociationState?: LinkAssociationState | null;
}

// refs: 3 - tags: output, named, enum
export type LinkAssociationState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface TransitGatewayConnectPeerAssociation {
  TransitGatewayConnectPeerArn?: string | null;
  GlobalNetworkId?: string | null;
  DeviceId?: string | null;
  LinkId?: string | null;
  State?: TransitGatewayConnectPeerAssociationState | null;
}

// refs: 3 - tags: output, named, enum
export type TransitGatewayConnectPeerAssociationState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface Connection {
  ConnectionId?: string | null;
  ConnectionArn?: string | null;
  GlobalNetworkId?: string | null;
  DeviceId?: string | null;
  ConnectedDeviceId?: string | null;
  LinkId?: string | null;
  ConnectedLinkId?: string | null;
  Description?: string | null;
  CreatedAt?: Date | number | null;
  State?: ConnectionState | null;
  Tags?: Tag[] | null;
}

// refs: 4 - tags: output, named, enum
export type ConnectionState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "UPDATING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface Device {
  DeviceId?: string | null;
  DeviceArn?: string | null;
  GlobalNetworkId?: string | null;
  AWSLocation?: AWSLocation | null;
  Description?: string | null;
  Type?: string | null;
  Vendor?: string | null;
  Model?: string | null;
  SerialNumber?: string | null;
  Location?: Location | null;
  SiteId?: string | null;
  CreatedAt?: Date | number | null;
  State?: DeviceState | null;
  Tags?: Tag[] | null;
}

// refs: 4 - tags: output, named, enum
export type DeviceState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "UPDATING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface GlobalNetwork {
  GlobalNetworkId?: string | null;
  GlobalNetworkArn?: string | null;
  Description?: string | null;
  CreatedAt?: Date | number | null;
  State?: GlobalNetworkState | null;
  Tags?: Tag[] | null;
}

// refs: 4 - tags: output, named, enum
export type GlobalNetworkState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "UPDATING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface Link {
  LinkId?: string | null;
  LinkArn?: string | null;
  GlobalNetworkId?: string | null;
  SiteId?: string | null;
  Description?: string | null;
  Type?: string | null;
  Bandwidth?: Bandwidth | null;
  Provider?: string | null;
  CreatedAt?: Date | number | null;
  State?: LinkState | null;
  Tags?: Tag[] | null;
}

// refs: 4 - tags: output, named, enum
export type LinkState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "UPDATING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface Site {
  SiteId?: string | null;
  SiteArn?: string | null;
  GlobalNetworkId?: string | null;
  Description?: string | null;
  Location?: Location | null;
  CreatedAt?: Date | number | null;
  State?: SiteState | null;
  Tags?: Tag[] | null;
}

// refs: 4 - tags: output, named, enum
export type SiteState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "UPDATING"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface TransitGatewayRegistration {
  GlobalNetworkId?: string | null;
  TransitGatewayArn?: string | null;
  State?: TransitGatewayRegistrationStateReason | null;
}

// refs: 3 - tags: output, named, interface
export interface TransitGatewayRegistrationStateReason {
  Code?: TransitGatewayRegistrationState | null;
  Message?: string | null;
}

// refs: 3 - tags: output, named, enum
export type TransitGatewayRegistrationState =
| "PENDING"
| "AVAILABLE"
| "DELETING"
| "DELETED"
| "FAILED"
| cmnP.UnexpectedEnumValue;
