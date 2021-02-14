// Autogenerated API client for: Amazon Location Service

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class Location {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Location.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2020-11-19",
    "endpointPrefix": "geo",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "Amazon Location Service",
    "serviceId": "Location",
    "signatureVersion": "v4",
    "signingName": "geo",
    "uid": "location-2020-11-19"
  };

  async associateTrackerConsumer(
    {abortSignal, ...params}: RequestConfig & s.AssociateTrackerConsumerRequest,
  ): Promise<s.AssociateTrackerConsumerResponse> {
    const body: jsonP.JSONObject = {
      ConsumerArn: params["ConsumerArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateTrackerConsumer",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}/consumers`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async batchDeleteGeofence(
    {abortSignal, ...params}: RequestConfig & s.BatchDeleteGeofenceRequest,
  ): Promise<s.BatchDeleteGeofenceResponse> {
    const body: jsonP.JSONObject = {
      GeofenceIds: params["GeofenceIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchDeleteGeofence",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}/delete-geofences`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "Errors": [toBatchDeleteGeofenceError],
      },
      optional: {},
    }, await resp.json());
  }

  async batchEvaluateGeofences(
    {abortSignal, ...params}: RequestConfig & s.BatchEvaluateGeofencesRequest,
  ): Promise<s.BatchEvaluateGeofencesResponse> {
    const body: jsonP.JSONObject = {
      DevicePositionUpdates: params["DevicePositionUpdates"]?.map(x => fromDevicePositionUpdate(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchEvaluateGeofences",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}/positions`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "Errors": [toBatchEvaluateGeofencesError],
      },
      optional: {},
    }, await resp.json());
  }

  async batchGetDevicePosition(
    {abortSignal, ...params}: RequestConfig & s.BatchGetDevicePositionRequest,
  ): Promise<s.BatchGetDevicePositionResponse> {
    const body: jsonP.JSONObject = {
      DeviceIds: params["DeviceIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchGetDevicePosition",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}/get-positions`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "DevicePositions": [toDevicePosition],
        "Errors": [toBatchGetDevicePositionError],
      },
      optional: {},
    }, await resp.json());
  }

  async batchPutGeofence(
    {abortSignal, ...params}: RequestConfig & s.BatchPutGeofenceRequest,
  ): Promise<s.BatchPutGeofenceResponse> {
    const body: jsonP.JSONObject = {
      Entries: params["Entries"]?.map(x => fromBatchPutGeofenceRequestEntry(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchPutGeofence",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}/put-geofences`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "Errors": [toBatchPutGeofenceError],
        "Successes": [toBatchPutGeofenceSuccess],
      },
      optional: {},
    }, await resp.json());
  }

  async batchUpdateDevicePosition(
    {abortSignal, ...params}: RequestConfig & s.BatchUpdateDevicePositionRequest,
  ): Promise<s.BatchUpdateDevicePositionResponse> {
    const body: jsonP.JSONObject = {
      Updates: params["Updates"]?.map(x => fromDevicePositionUpdate(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchUpdateDevicePosition",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}/positions`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "Errors": [toBatchUpdateDevicePositionError],
      },
      optional: {},
    }, await resp.json());
  }

  async createGeofenceCollection(
    {abortSignal, ...params}: RequestConfig & s.CreateGeofenceCollectionRequest,
  ): Promise<s.CreateGeofenceCollectionResponse> {
    const body: jsonP.JSONObject = {
      CollectionName: params["CollectionName"],
      Description: params["Description"],
      PricingPlan: params["PricingPlan"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateGeofenceCollection",
      requestUri: "/geofencing/v0/collections",
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "CollectionArn": "s",
        "CollectionName": "s",
        "CreateTime": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async createMap(
    {abortSignal, ...params}: RequestConfig & s.CreateMapRequest,
  ): Promise<s.CreateMapResponse> {
    const body: jsonP.JSONObject = {
      Configuration: fromMapConfiguration(params["Configuration"]),
      Description: params["Description"],
      MapName: params["MapName"],
      PricingPlan: params["PricingPlan"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateMap",
      requestUri: "/maps/v0/maps",
      responseCode: 200,
      hostPrefix: `maps.`,
    });
    return jsonP.readObj({
      required: {
        "CreateTime": "d",
        "MapArn": "s",
        "MapName": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createPlaceIndex(
    {abortSignal, ...params}: RequestConfig & s.CreatePlaceIndexRequest,
  ): Promise<s.CreatePlaceIndexResponse> {
    const body: jsonP.JSONObject = {
      DataSource: params["DataSource"],
      DataSourceConfiguration: fromDataSourceConfiguration(params["DataSourceConfiguration"]),
      Description: params["Description"],
      IndexName: params["IndexName"],
      PricingPlan: params["PricingPlan"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePlaceIndex",
      requestUri: "/places/v0/indexes",
      responseCode: 200,
      hostPrefix: `places.`,
    });
    return jsonP.readObj({
      required: {
        "CreateTime": "d",
        "IndexArn": "s",
        "IndexName": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createTracker(
    {abortSignal, ...params}: RequestConfig & s.CreateTrackerRequest,
  ): Promise<s.CreateTrackerResponse> {
    const body: jsonP.JSONObject = {
      Description: params["Description"],
      PricingPlan: params["PricingPlan"],
      TrackerName: params["TrackerName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateTracker",
      requestUri: "/tracking/v0/trackers",
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "CreateTime": "d",
        "TrackerArn": "s",
        "TrackerName": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteGeofenceCollection(
    {abortSignal, ...params}: RequestConfig & s.DeleteGeofenceCollectionRequest,
  ): Promise<s.DeleteGeofenceCollectionResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteGeofenceCollection",
      method: "DELETE",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteMap(
    {abortSignal, ...params}: RequestConfig & s.DeleteMapRequest,
  ): Promise<s.DeleteMapResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteMap",
      method: "DELETE",
      requestUri: cmnP.encodePath`/maps/v0/maps/${params["MapName"]}`,
      responseCode: 200,
      hostPrefix: `maps.`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deletePlaceIndex(
    {abortSignal, ...params}: RequestConfig & s.DeletePlaceIndexRequest,
  ): Promise<s.DeletePlaceIndexResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeletePlaceIndex",
      method: "DELETE",
      requestUri: cmnP.encodePath`/places/v0/indexes/${params["IndexName"]}`,
      responseCode: 200,
      hostPrefix: `places.`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteTracker(
    {abortSignal, ...params}: RequestConfig & s.DeleteTrackerRequest,
  ): Promise<s.DeleteTrackerResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteTracker",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeGeofenceCollection(
    {abortSignal, ...params}: RequestConfig & s.DescribeGeofenceCollectionRequest,
  ): Promise<s.DescribeGeofenceCollectionResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeGeofenceCollection",
      method: "GET",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "CollectionArn": "s",
        "CollectionName": "s",
        "CreateTime": "d",
        "Description": "s",
        "UpdateTime": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async describeMap(
    {abortSignal, ...params}: RequestConfig & s.DescribeMapRequest,
  ): Promise<s.DescribeMapResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeMap",
      method: "GET",
      requestUri: cmnP.encodePath`/maps/v0/maps/${params["MapName"]}`,
      responseCode: 200,
      hostPrefix: `maps.`,
    });
    return jsonP.readObj({
      required: {
        "Configuration": toMapConfiguration,
        "CreateTime": "d",
        "DataSource": "s",
        "Description": "s",
        "MapArn": "s",
        "MapName": "s",
        "UpdateTime": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async describePlaceIndex(
    {abortSignal, ...params}: RequestConfig & s.DescribePlaceIndexRequest,
  ): Promise<s.DescribePlaceIndexResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribePlaceIndex",
      method: "GET",
      requestUri: cmnP.encodePath`/places/v0/indexes/${params["IndexName"]}`,
      responseCode: 200,
      hostPrefix: `places.`,
    });
    return jsonP.readObj({
      required: {
        "CreateTime": "d",
        "DataSource": "s",
        "DataSourceConfiguration": toDataSourceConfiguration,
        "Description": "s",
        "IndexArn": "s",
        "IndexName": "s",
        "UpdateTime": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async describeTracker(
    {abortSignal, ...params}: RequestConfig & s.DescribeTrackerRequest,
  ): Promise<s.DescribeTrackerResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeTracker",
      method: "GET",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "CreateTime": "d",
        "Description": "s",
        "TrackerArn": "s",
        "TrackerName": "s",
        "UpdateTime": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async disassociateTrackerConsumer(
    {abortSignal, ...params}: RequestConfig & s.DisassociateTrackerConsumerRequest,
  ): Promise<s.DisassociateTrackerConsumerResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DisassociateTrackerConsumer",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}/consumers/${params["ConsumerArn"]}`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getDevicePosition(
    {abortSignal, ...params}: RequestConfig & s.GetDevicePositionRequest,
  ): Promise<s.GetDevicePositionResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetDevicePosition",
      method: "GET",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}/devices/${params["DeviceId"]}/positions/latest`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "Position": ["n"],
        "ReceivedTime": "d",
        "SampleTime": "d",
      },
      optional: {
        "DeviceId": "s",
      },
    }, await resp.json());
  }

  async getDevicePositionHistory(
    {abortSignal, ...params}: RequestConfig & s.GetDevicePositionHistoryRequest,
  ): Promise<s.GetDevicePositionHistoryResponse> {
    const body: jsonP.JSONObject = {
      EndTimeExclusive: jsonP.serializeDate_iso8601(params["EndTimeExclusive"]),
      NextToken: params["NextToken"],
      StartTimeInclusive: jsonP.serializeDate_iso8601(params["StartTimeInclusive"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDevicePositionHistory",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}/devices/${params["DeviceId"]}/list-positions`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "DevicePositions": [toDevicePosition],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getGeofence(
    {abortSignal, ...params}: RequestConfig & s.GetGeofenceRequest,
  ): Promise<s.GetGeofenceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetGeofence",
      method: "GET",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}/geofences/${params["GeofenceId"]}`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "CreateTime": "d",
        "GeofenceId": "s",
        "Geometry": toGeofenceGeometry,
        "Status": "s",
        "UpdateTime": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async getMapGlyphs(
    {abortSignal, ...params}: RequestConfig & s.GetMapGlyphsRequest,
  ): Promise<s.GetMapGlyphsResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetMapGlyphs",
      method: "GET",
      requestUri: cmnP.encodePath`/maps/v0/maps/${params["MapName"]}/glyphs/${params["FontStack"]}/${params["FontUnicodeRange"]}`,
      responseCode: 200,
      hostPrefix: `maps.`,
    });
  return {
    ContentType: resp.headers.get("Content-Type"),
    Blob: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async getMapSprites(
    {abortSignal, ...params}: RequestConfig & s.GetMapSpritesRequest,
  ): Promise<s.GetMapSpritesResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetMapSprites",
      method: "GET",
      requestUri: cmnP.encodePath`/maps/v0/maps/${params["MapName"]}/sprites/${params["FileName"]}`,
      responseCode: 200,
      hostPrefix: `maps.`,
    });
  return {
    ContentType: resp.headers.get("Content-Type"),
    Blob: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async getMapStyleDescriptor(
    {abortSignal, ...params}: RequestConfig & s.GetMapStyleDescriptorRequest,
  ): Promise<s.GetMapStyleDescriptorResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetMapStyleDescriptor",
      method: "GET",
      requestUri: cmnP.encodePath`/maps/v0/maps/${params["MapName"]}/style-descriptor`,
      responseCode: 200,
      hostPrefix: `maps.`,
    });
  return {
    ContentType: resp.headers.get("Content-Type"),
    Blob: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async getMapTile(
    {abortSignal, ...params}: RequestConfig & s.GetMapTileRequest,
  ): Promise<s.GetMapTileResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetMapTile",
      method: "GET",
      requestUri: cmnP.encodePath`/maps/v0/maps/${params["MapName"]}/tiles/${params["Z"]}/${params["X"]}/${params["Y"]}`,
      responseCode: 200,
      hostPrefix: `maps.`,
    });
  return {
    ContentType: resp.headers.get("Content-Type"),
    Blob: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async listGeofenceCollections(
    {abortSignal, ...params}: RequestConfig & s.ListGeofenceCollectionsRequest = {},
  ): Promise<s.ListGeofenceCollectionsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListGeofenceCollections",
      requestUri: "/geofencing/v0/list-collections",
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "Entries": [toListGeofenceCollectionsResponseEntry],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listGeofences(
    {abortSignal, ...params}: RequestConfig & s.ListGeofencesRequest,
  ): Promise<s.ListGeofencesResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListGeofences",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}/list-geofences`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "Entries": [toListGeofenceResponseEntry],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listMaps(
    {abortSignal, ...params}: RequestConfig & s.ListMapsRequest = {},
  ): Promise<s.ListMapsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListMaps",
      requestUri: "/maps/v0/list-maps",
      responseCode: 200,
      hostPrefix: `maps.`,
    });
    return jsonP.readObj({
      required: {
        "Entries": [toListMapsResponseEntry],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPlaceIndexes(
    {abortSignal, ...params}: RequestConfig & s.ListPlaceIndexesRequest = {},
  ): Promise<s.ListPlaceIndexesResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPlaceIndexes",
      requestUri: "/places/v0/list-indexes",
      responseCode: 200,
      hostPrefix: `places.`,
    });
    return jsonP.readObj({
      required: {
        "Entries": [toListPlaceIndexesResponseEntry],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTrackerConsumers(
    {abortSignal, ...params}: RequestConfig & s.ListTrackerConsumersRequest,
  ): Promise<s.ListTrackerConsumersResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTrackerConsumers",
      requestUri: cmnP.encodePath`/tracking/v0/trackers/${params["TrackerName"]}/list-consumers`,
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "ConsumerArns": ["s"],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTrackers(
    {abortSignal, ...params}: RequestConfig & s.ListTrackersRequest = {},
  ): Promise<s.ListTrackersResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTrackers",
      requestUri: "/tracking/v0/list-trackers",
      responseCode: 200,
      hostPrefix: `tracking.`,
    });
    return jsonP.readObj({
      required: {
        "Entries": [toListTrackersResponseEntry],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async putGeofence(
    {abortSignal, ...params}: RequestConfig & s.PutGeofenceRequest,
  ): Promise<s.PutGeofenceResponse> {
    const body: jsonP.JSONObject = {
      Geometry: fromGeofenceGeometry(params["Geometry"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutGeofence",
      method: "PUT",
      requestUri: cmnP.encodePath`/geofencing/v0/collections/${params["CollectionName"]}/geofences/${params["GeofenceId"]}`,
      responseCode: 200,
      hostPrefix: `geofencing.`,
    });
    return jsonP.readObj({
      required: {
        "CreateTime": "d",
        "GeofenceId": "s",
        "UpdateTime": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async searchPlaceIndexForPosition(
    {abortSignal, ...params}: RequestConfig & s.SearchPlaceIndexForPositionRequest,
  ): Promise<s.SearchPlaceIndexForPositionResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      Position: params["Position"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SearchPlaceIndexForPosition",
      requestUri: cmnP.encodePath`/places/v0/indexes/${params["IndexName"]}/search/position`,
      responseCode: 200,
      hostPrefix: `places.`,
    });
    return jsonP.readObj({
      required: {
        "Results": [toSearchForPositionResult],
        "Summary": toSearchPlaceIndexForPositionSummary,
      },
      optional: {},
    }, await resp.json());
  }

  async searchPlaceIndexForText(
    {abortSignal, ...params}: RequestConfig & s.SearchPlaceIndexForTextRequest,
  ): Promise<s.SearchPlaceIndexForTextResponse> {
    const body: jsonP.JSONObject = {
      BiasPosition: params["BiasPosition"],
      FilterBBox: params["FilterBBox"],
      FilterCountries: params["FilterCountries"],
      MaxResults: params["MaxResults"],
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SearchPlaceIndexForText",
      requestUri: cmnP.encodePath`/places/v0/indexes/${params["IndexName"]}/search/text`,
      responseCode: 200,
      hostPrefix: `places.`,
    });
    return jsonP.readObj({
      required: {
        "Results": [toSearchForTextResult],
        "Summary": toSearchPlaceIndexForTextSummary,
      },
      optional: {},
    }, await resp.json());
  }

}

function fromDevicePositionUpdate(input?: s.DevicePositionUpdate | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DeviceId: input["DeviceId"],
    Position: input["Position"],
    SampleTime: jsonP.serializeDate_iso8601(input["SampleTime"]),
  }
}

function fromBatchPutGeofenceRequestEntry(input?: s.BatchPutGeofenceRequestEntry | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    GeofenceId: input["GeofenceId"],
    Geometry: fromGeofenceGeometry(input["Geometry"]),
  }
}

function fromGeofenceGeometry(input?: s.GeofenceGeometry | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Polygon: input["Polygon"],
  }
}
function toGeofenceGeometry(root: jsonP.JSONValue): s.GeofenceGeometry {
  return jsonP.readObj({
    required: {},
    optional: {
      "Polygon": [x => jsonP.readList(l => Array.isArray(l) ? l.map(Number) : [], x)],
    },
  }, root);
}

function fromMapConfiguration(input?: s.MapConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Style: input["Style"],
  }
}
function toMapConfiguration(root: jsonP.JSONValue): s.MapConfiguration {
  return jsonP.readObj({
    required: {
      "Style": "s",
    },
    optional: {},
  }, root);
}

function fromDataSourceConfiguration(input?: s.DataSourceConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    IntendedUse: input["IntendedUse"],
  }
}
function toDataSourceConfiguration(root: jsonP.JSONValue): s.DataSourceConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "IntendedUse": (x: jsonP.JSONValue) => cmnP.readEnum<s.IntendedUse>(x),
    },
  }, root);
}

function toBatchDeleteGeofenceError(root: jsonP.JSONValue): s.BatchDeleteGeofenceError {
  return jsonP.readObj({
    required: {
      "Error": toBatchItemError,
      "GeofenceId": "s",
    },
    optional: {},
  }, root);
}

function toBatchItemError(root: jsonP.JSONValue): s.BatchItemError {
  return jsonP.readObj({
    required: {},
    optional: {
      "Code": (x: jsonP.JSONValue) => cmnP.readEnum<s.BatchItemErrorCode>(x),
      "Message": "s",
    },
  }, root);
}

function toBatchEvaluateGeofencesError(root: jsonP.JSONValue): s.BatchEvaluateGeofencesError {
  return jsonP.readObj({
    required: {
      "DeviceId": "s",
      "Error": toBatchItemError,
      "SampleTime": "d",
    },
    optional: {},
  }, root);
}

function toDevicePosition(root: jsonP.JSONValue): s.DevicePosition {
  return jsonP.readObj({
    required: {
      "Position": ["n"],
      "ReceivedTime": "d",
      "SampleTime": "d",
    },
    optional: {
      "DeviceId": "s",
    },
  }, root);
}

function toBatchGetDevicePositionError(root: jsonP.JSONValue): s.BatchGetDevicePositionError {
  return jsonP.readObj({
    required: {
      "DeviceId": "s",
      "Error": toBatchItemError,
    },
    optional: {},
  }, root);
}

function toBatchPutGeofenceError(root: jsonP.JSONValue): s.BatchPutGeofenceError {
  return jsonP.readObj({
    required: {
      "Error": toBatchItemError,
      "GeofenceId": "s",
    },
    optional: {},
  }, root);
}

function toBatchPutGeofenceSuccess(root: jsonP.JSONValue): s.BatchPutGeofenceSuccess {
  return jsonP.readObj({
    required: {
      "CreateTime": "d",
      "GeofenceId": "s",
      "UpdateTime": "d",
    },
    optional: {},
  }, root);
}

function toBatchUpdateDevicePositionError(root: jsonP.JSONValue): s.BatchUpdateDevicePositionError {
  return jsonP.readObj({
    required: {
      "DeviceId": "s",
      "Error": toBatchItemError,
      "SampleTime": "d",
    },
    optional: {},
  }, root);
}

function toListGeofenceCollectionsResponseEntry(root: jsonP.JSONValue): s.ListGeofenceCollectionsResponseEntry {
  return jsonP.readObj({
    required: {
      "CollectionName": "s",
      "CreateTime": "d",
      "Description": "s",
      "UpdateTime": "d",
    },
    optional: {},
  }, root);
}

function toListGeofenceResponseEntry(root: jsonP.JSONValue): s.ListGeofenceResponseEntry {
  return jsonP.readObj({
    required: {
      "CreateTime": "d",
      "GeofenceId": "s",
      "Geometry": toGeofenceGeometry,
      "Status": "s",
      "UpdateTime": "d",
    },
    optional: {},
  }, root);
}

function toListMapsResponseEntry(root: jsonP.JSONValue): s.ListMapsResponseEntry {
  return jsonP.readObj({
    required: {
      "CreateTime": "d",
      "DataSource": "s",
      "Description": "s",
      "MapName": "s",
      "UpdateTime": "d",
    },
    optional: {},
  }, root);
}

function toListPlaceIndexesResponseEntry(root: jsonP.JSONValue): s.ListPlaceIndexesResponseEntry {
  return jsonP.readObj({
    required: {
      "CreateTime": "d",
      "DataSource": "s",
      "Description": "s",
      "IndexName": "s",
      "UpdateTime": "d",
    },
    optional: {},
  }, root);
}

function toListTrackersResponseEntry(root: jsonP.JSONValue): s.ListTrackersResponseEntry {
  return jsonP.readObj({
    required: {
      "CreateTime": "d",
      "Description": "s",
      "TrackerName": "s",
      "UpdateTime": "d",
    },
    optional: {},
  }, root);
}

function toSearchForPositionResult(root: jsonP.JSONValue): s.SearchForPositionResult {
  return jsonP.readObj({
    required: {
      "Place": toPlace,
    },
    optional: {},
  }, root);
}

function toPlace(root: jsonP.JSONValue): s.Place {
  return jsonP.readObj({
    required: {
      "Geometry": toPlaceGeometry,
    },
    optional: {
      "AddressNumber": "s",
      "Country": "s",
      "Label": "s",
      "Municipality": "s",
      "Neighborhood": "s",
      "PostalCode": "s",
      "Region": "s",
      "Street": "s",
      "SubRegion": "s",
    },
  }, root);
}

function toPlaceGeometry(root: jsonP.JSONValue): s.PlaceGeometry {
  return jsonP.readObj({
    required: {},
    optional: {
      "Point": ["n"],
    },
  }, root);
}

function toSearchPlaceIndexForPositionSummary(root: jsonP.JSONValue): s.SearchPlaceIndexForPositionSummary {
  return jsonP.readObj({
    required: {
      "DataSource": "s",
      "Position": ["n"],
    },
    optional: {
      "MaxResults": "n",
    },
  }, root);
}

function toSearchForTextResult(root: jsonP.JSONValue): s.SearchForTextResult {
  return jsonP.readObj({
    required: {
      "Place": toPlace,
    },
    optional: {},
  }, root);
}

function toSearchPlaceIndexForTextSummary(root: jsonP.JSONValue): s.SearchPlaceIndexForTextSummary {
  return jsonP.readObj({
    required: {
      "DataSource": "s",
      "Text": "s",
    },
    optional: {
      "BiasPosition": ["n"],
      "FilterBBox": ["n"],
      "FilterCountries": ["s"],
      "MaxResults": "n",
      "ResultBBox": ["n"],
    },
  }, root);
}
