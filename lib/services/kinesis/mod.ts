// Autogenerated API client for: Amazon Kinesis

export * from "./structs.ts";
import * as Base64 from "https://deno.land/std@0.160.0/encoding/base64.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";
function serializeBlob(input: string | Uint8Array | null | undefined) {
  if (input == null) return input;
  return Base64.encode(input);
}

export class Kinesis {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Kinesis.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2013-12-02",
    "endpointPrefix": "kinesis",
    "jsonVersion": "1.1",
    "protocol": "json",
    "protocolSettings": {
      "h2": "eventstream"
    },
    "serviceAbbreviation": "Kinesis",
    "serviceFullName": "Amazon Kinesis",
    "serviceId": "Kinesis",
    "signatureVersion": "v4",
    "targetPrefix": "Kinesis_20131202",
    "uid": "kinesis-2013-12-02"
  };

  async addTagsToStream(
    params: s.AddTagsToStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "AddTagsToStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async createStream(
    params: s.CreateStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardCount: params["ShardCount"],
      StreamModeDetails: fromStreamModeDetails(params["StreamModeDetails"]),
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "CreateStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async decreaseStreamRetentionPeriod(
    params: s.DecreaseStreamRetentionPeriodInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      RetentionPeriodHours: params["RetentionPeriodHours"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DecreaseStreamRetentionPeriod",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async deleteStream(
    params: s.DeleteStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      EnforceConsumerDeletion: params["EnforceConsumerDeletion"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DeleteStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async deregisterStreamConsumer(
    params: s.DeregisterStreamConsumerInput = {},
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      ConsumerName: params["ConsumerName"],
      ConsumerARN: params["ConsumerARN"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DeregisterStreamConsumer",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async describeLimits(
    opts: client.RequestOptions = {},
  ): Promise<s.DescribeLimitsOutput> {
    const body: jsonP.JSONObject = {};
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DescribeLimits",
    });
    return jsonP.readObj({
      required: {
        "ShardLimit": "n",
        "OpenShardCount": "n",
        "OnDemandStreamCount": "n",
        "OnDemandStreamCountLimit": "n",
      },
      optional: {},
    }, await resp.json());
  }

  async describeStream(
    params: s.DescribeStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<s.DescribeStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      Limit: params["Limit"],
      ExclusiveStartShardId: params["ExclusiveStartShardId"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DescribeStream",
    });
    return jsonP.readObj({
      required: {
        "StreamDescription": toStreamDescription,
      },
      optional: {},
    }, await resp.json());
  }

  async describeStreamConsumer(
    params: s.DescribeStreamConsumerInput = {},
    opts: client.RequestOptions = {},
  ): Promise<s.DescribeStreamConsumerOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      ConsumerName: params["ConsumerName"],
      ConsumerARN: params["ConsumerARN"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DescribeStreamConsumer",
    });
    return jsonP.readObj({
      required: {
        "ConsumerDescription": toConsumerDescription,
      },
      optional: {},
    }, await resp.json());
  }

  async describeStreamSummary(
    params: s.DescribeStreamSummaryInput,
    opts: client.RequestOptions = {},
  ): Promise<s.DescribeStreamSummaryOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DescribeStreamSummary",
    });
    return jsonP.readObj({
      required: {
        "StreamDescriptionSummary": toStreamDescriptionSummary,
      },
      optional: {},
    }, await resp.json());
  }

  async disableEnhancedMonitoring(
    params: s.DisableEnhancedMonitoringInput,
    opts: client.RequestOptions = {},
  ): Promise<s.EnhancedMonitoringOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardLevelMetrics: params["ShardLevelMetrics"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "DisableEnhancedMonitoring",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamName": "s",
        "CurrentShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
        "DesiredShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
      },
    }, await resp.json());
  }

  async enableEnhancedMonitoring(
    params: s.EnableEnhancedMonitoringInput,
    opts: client.RequestOptions = {},
  ): Promise<s.EnhancedMonitoringOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardLevelMetrics: params["ShardLevelMetrics"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "EnableEnhancedMonitoring",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamName": "s",
        "CurrentShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
        "DesiredShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
      },
    }, await resp.json());
  }

  async getRecords(
    params: s.GetRecordsInput,
    opts: client.RequestOptions = {},
  ): Promise<s.GetRecordsOutput> {
    const body: jsonP.JSONObject = {
      ShardIterator: params["ShardIterator"],
      Limit: params["Limit"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "GetRecords",
    });
    return jsonP.readObj({
      required: {
        "Records": [toRecord],
      },
      optional: {
        "NextShardIterator": "s",
        "MillisBehindLatest": "n",
        "ChildShards": [toChildShard],
      },
    }, await resp.json());
  }

  async getShardIterator(
    params: s.GetShardIteratorInput,
    opts: client.RequestOptions = {},
  ): Promise<s.GetShardIteratorOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardId: params["ShardId"],
      ShardIteratorType: params["ShardIteratorType"],
      StartingSequenceNumber: params["StartingSequenceNumber"],
      Timestamp: jsonP.serializeDate_unixTimestamp(params["Timestamp"]),
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "GetShardIterator",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ShardIterator": "s",
      },
    }, await resp.json());
  }

  async increaseStreamRetentionPeriod(
    params: s.IncreaseStreamRetentionPeriodInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      RetentionPeriodHours: params["RetentionPeriodHours"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "IncreaseStreamRetentionPeriod",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async listShards(
    params: s.ListShardsInput = {},
    opts: client.RequestOptions = {},
  ): Promise<s.ListShardsOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      NextToken: params["NextToken"],
      ExclusiveStartShardId: params["ExclusiveStartShardId"],
      MaxResults: params["MaxResults"],
      StreamCreationTimestamp: jsonP.serializeDate_unixTimestamp(params["StreamCreationTimestamp"]),
      ShardFilter: fromShardFilter(params["ShardFilter"]),
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "ListShards",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Shards": [toShard],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listStreamConsumers(
    params: s.ListStreamConsumersInput,
    opts: client.RequestOptions = {},
  ): Promise<s.ListStreamConsumersOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      StreamCreationTimestamp: jsonP.serializeDate_unixTimestamp(params["StreamCreationTimestamp"]),
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "ListStreamConsumers",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Consumers": [toConsumer],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listStreams(
    params: s.ListStreamsInput = {},
    opts: client.RequestOptions = {},
  ): Promise<s.ListStreamsOutput> {
    const body: jsonP.JSONObject = {
      Limit: params["Limit"],
      ExclusiveStartStreamName: params["ExclusiveStartStreamName"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "ListStreams",
    });
    return jsonP.readObj({
      required: {
        "StreamNames": ["s"],
        "HasMoreStreams": "b",
      },
      optional: {},
    }, await resp.json());
  }

  async listTagsForStream(
    params: s.ListTagsForStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<s.ListTagsForStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ExclusiveStartTagKey: params["ExclusiveStartTagKey"],
      Limit: params["Limit"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "ListTagsForStream",
    });
    return jsonP.readObj({
      required: {
        "Tags": [toTag],
        "HasMoreTags": "b",
      },
      optional: {},
    }, await resp.json());
  }

  async mergeShards(
    params: s.MergeShardsInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardToMerge: params["ShardToMerge"],
      AdjacentShardToMerge: params["AdjacentShardToMerge"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "MergeShards",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async putRecord(
    params: s.PutRecordInput,
    opts: client.RequestOptions = {},
  ): Promise<s.PutRecordOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      Data: serializeBlob(params["Data"]),
      PartitionKey: params["PartitionKey"],
      ExplicitHashKey: params["ExplicitHashKey"],
      SequenceNumberForOrdering: params["SequenceNumberForOrdering"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "PutRecord",
    });
    return jsonP.readObj({
      required: {
        "ShardId": "s",
        "SequenceNumber": "s",
      },
      optional: {
        "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      },
    }, await resp.json());
  }

  async putRecords(
    params: s.PutRecordsInput,
    opts: client.RequestOptions = {},
  ): Promise<s.PutRecordsOutput> {
    const body: jsonP.JSONObject = {
      Records: params["Records"]?.map(x => fromPutRecordsRequestEntry(x)),
      StreamName: params["StreamName"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "PutRecords",
    });
    return jsonP.readObj({
      required: {
        "Records": [toPutRecordsResultEntry],
      },
      optional: {
        "FailedRecordCount": "n",
        "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      },
    }, await resp.json());
  }

  async registerStreamConsumer(
    params: s.RegisterStreamConsumerInput,
    opts: client.RequestOptions = {},
  ): Promise<s.RegisterStreamConsumerOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      ConsumerName: params["ConsumerName"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "RegisterStreamConsumer",
    });
    return jsonP.readObj({
      required: {
        "Consumer": toConsumer,
      },
      optional: {},
    }, await resp.json());
  }

  async removeTagsFromStream(
    params: s.RemoveTagsFromStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "RemoveTagsFromStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async splitShard(
    params: s.SplitShardInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardToSplit: params["ShardToSplit"],
      NewStartingHashKey: params["NewStartingHashKey"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "SplitShard",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async startStreamEncryption(
    params: s.StartStreamEncryptionInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      EncryptionType: params["EncryptionType"],
      KeyId: params["KeyId"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "StartStreamEncryption",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async stopStreamEncryption(
    params: s.StopStreamEncryptionInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      EncryptionType: params["EncryptionType"],
      KeyId: params["KeyId"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "StopStreamEncryption",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async updateShardCount(
    params: s.UpdateShardCountInput,
    opts: client.RequestOptions = {},
  ): Promise<s.UpdateShardCountOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      TargetShardCount: params["TargetShardCount"],
      ScalingType: params["ScalingType"],
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "UpdateShardCount",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamName": "s",
        "CurrentShardCount": "n",
        "TargetShardCount": "n",
      },
    }, await resp.json());
  }

  async updateStreamMode(
    params: s.UpdateStreamModeInput,
    opts: client.RequestOptions = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      StreamModeDetails: fromStreamModeDetails(params["StreamModeDetails"]),
    };
    const resp = await this.#client.performRequest({
      opts, body,
      action: "UpdateStreamMode",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  // Resource State Waiters

  /** Checks state up to 18 times, 10 seconds apart (about 3 minutes max wait time). */
  async waitForStreamExists(
    params: s.DescribeStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<s.DescribeStreamOutput> {
    const errMessage = 'ResourceNotReady: Resource is not in the state StreamExists';
    for (let i = 0; i < 18; i++) {
      const resp = await this.describeStream(params, opts);
      if (resp?.StreamDescription?.StreamStatus === "ACTIVE") return resp;
      await new Promise(r => setTimeout(r, 10000));
    }
    throw new Error(errMessage);
  }

  /** Checks state up to 18 times, 10 seconds apart (about 3 minutes max wait time). */
  async waitForStreamNotExists(
    params: s.DescribeStreamInput,
    opts: client.RequestOptions = {},
  ): Promise<Error | s.DescribeStreamOutput> {
    const errMessage = 'ResourceNotReady: Resource is not in the state StreamNotExists';
    for (let i = 0; i < 18; i++) {
      try {
        const resp = await this.describeStream(params, opts);
      } catch (err) {
        if (["ResourceNotFoundException"].includes(err.shortCode)) return err;
        throw err;
      }
      await new Promise(r => setTimeout(r, 10000));
    }
    throw new Error(errMessage);
  }

}

function fromStreamModeDetails(input?: s.StreamModeDetails | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    StreamMode: input["StreamMode"],
  }
}
function toStreamModeDetails(root: jsonP.JSONValue): s.StreamModeDetails {
  return jsonP.readObj({
    required: {
      "StreamMode": (x: jsonP.JSONValue) => cmnP.readEnum<s.StreamMode>(x),
    },
    optional: {},
  }, root);
}

function fromShardFilter(input?: s.ShardFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    ShardId: input["ShardId"],
    Timestamp: jsonP.serializeDate_unixTimestamp(input["Timestamp"]),
  }
}

function fromPutRecordsRequestEntry(input?: s.PutRecordsRequestEntry | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Data: serializeBlob(input["Data"]),
    ExplicitHashKey: input["ExplicitHashKey"],
    PartitionKey: input["PartitionKey"],
  }
}

function toStreamDescription(root: jsonP.JSONValue): s.StreamDescription {
  return jsonP.readObj({
    required: {
      "StreamName": "s",
      "StreamARN": "s",
      "StreamStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.StreamStatus>(x),
      "Shards": [toShard],
      "HasMoreShards": "b",
      "RetentionPeriodHours": "n",
      "StreamCreationTimestamp": "d",
      "EnhancedMonitoring": [toEnhancedMetrics],
    },
    optional: {
      "StreamModeDetails": toStreamModeDetails,
      "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      "KeyId": "s",
    },
  }, root);
}

function toShard(root: jsonP.JSONValue): s.Shard {
  return jsonP.readObj({
    required: {
      "ShardId": "s",
      "HashKeyRange": toHashKeyRange,
      "SequenceNumberRange": toSequenceNumberRange,
    },
    optional: {
      "ParentShardId": "s",
      "AdjacentParentShardId": "s",
    },
  }, root);
}

function toHashKeyRange(root: jsonP.JSONValue): s.HashKeyRange {
  return jsonP.readObj({
    required: {
      "StartingHashKey": "s",
      "EndingHashKey": "s",
    },
    optional: {},
  }, root);
}

function toSequenceNumberRange(root: jsonP.JSONValue): s.SequenceNumberRange {
  return jsonP.readObj({
    required: {
      "StartingSequenceNumber": "s",
    },
    optional: {
      "EndingSequenceNumber": "s",
    },
  }, root);
}

function toEnhancedMetrics(root: jsonP.JSONValue): s.EnhancedMetrics {
  return jsonP.readObj({
    required: {},
    optional: {
      "ShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
    },
  }, root);
}

function toConsumerDescription(root: jsonP.JSONValue): s.ConsumerDescription {
  return jsonP.readObj({
    required: {
      "ConsumerName": "s",
      "ConsumerARN": "s",
      "ConsumerStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConsumerStatus>(x),
      "ConsumerCreationTimestamp": "d",
      "StreamARN": "s",
    },
    optional: {},
  }, root);
}

function toStreamDescriptionSummary(root: jsonP.JSONValue): s.StreamDescriptionSummary {
  return jsonP.readObj({
    required: {
      "StreamName": "s",
      "StreamARN": "s",
      "StreamStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.StreamStatus>(x),
      "RetentionPeriodHours": "n",
      "StreamCreationTimestamp": "d",
      "EnhancedMonitoring": [toEnhancedMetrics],
      "OpenShardCount": "n",
    },
    optional: {
      "StreamModeDetails": toStreamModeDetails,
      "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      "KeyId": "s",
      "ConsumerCount": "n",
    },
  }, root);
}

function toRecord(root: jsonP.JSONValue): s.Record {
  return jsonP.readObj({
    required: {
      "SequenceNumber": "s",
      "Data": "a",
      "PartitionKey": "s",
    },
    optional: {
      "ApproximateArrivalTimestamp": "d",
      "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
    },
  }, root);
}

function toChildShard(root: jsonP.JSONValue): s.ChildShard {
  return jsonP.readObj({
    required: {
      "ShardId": "s",
      "ParentShards": ["s"],
      "HashKeyRange": toHashKeyRange,
    },
    optional: {},
  }, root);
}

function toConsumer(root: jsonP.JSONValue): s.Consumer {
  return jsonP.readObj({
    required: {
      "ConsumerName": "s",
      "ConsumerARN": "s",
      "ConsumerStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConsumerStatus>(x),
      "ConsumerCreationTimestamp": "d",
    },
    optional: {},
  }, root);
}

function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
    },
    optional: {
      "Value": "s",
    },
  }, root);
}

function toPutRecordsResultEntry(root: jsonP.JSONValue): s.PutRecordsResultEntry {
  return jsonP.readObj({
    required: {},
    optional: {
      "SequenceNumber": "s",
      "ShardId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}
