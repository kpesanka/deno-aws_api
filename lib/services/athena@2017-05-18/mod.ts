// Autogenerated API client for: Amazon Athena

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as uuidv4 from "https://deno.land/std@0.71.0/uuid/v4.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class Athena {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Athena.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-05-18",
    "endpointPrefix": "athena",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Athena",
    "serviceId": "Athena",
    "signatureVersion": "v4",
    "targetPrefix": "AmazonAthena",
    "uid": "athena-2017-05-18"
  };

  async batchGetNamedQuery(
    {abortSignal, ...params}: RequestConfig & BatchGetNamedQueryInput,
  ): Promise<BatchGetNamedQueryOutput> {
    const body: jsonP.JSONObject = {
      NamedQueryIds: params["NamedQueryIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchGetNamedQuery",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NamedQueries": [toNamedQuery],
        "UnprocessedNamedQueryIds": [toUnprocessedNamedQueryId],
      },
    }, await resp.json());
  }

  async batchGetQueryExecution(
    {abortSignal, ...params}: RequestConfig & BatchGetQueryExecutionInput,
  ): Promise<BatchGetQueryExecutionOutput> {
    const body: jsonP.JSONObject = {
      QueryExecutionIds: params["QueryExecutionIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchGetQueryExecution",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "QueryExecutions": [toQueryExecution],
        "UnprocessedQueryExecutionIds": [toUnprocessedQueryExecutionId],
      },
    }, await resp.json());
  }

  async createDataCatalog(
    {abortSignal, ...params}: RequestConfig & CreateDataCatalogInput,
  ): Promise<CreateDataCatalogOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      Type: params["Type"],
      Description: params["Description"],
      Parameters: params["Parameters"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDataCatalog",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async createNamedQuery(
    {abortSignal, ...params}: RequestConfig & CreateNamedQueryInput,
  ): Promise<CreateNamedQueryOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      Description: params["Description"],
      Database: params["Database"],
      QueryString: params["QueryString"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      WorkGroup: params["WorkGroup"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateNamedQuery",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NamedQueryId": "s",
      },
    }, await resp.json());
  }

  async createWorkGroup(
    {abortSignal, ...params}: RequestConfig & CreateWorkGroupInput,
  ): Promise<CreateWorkGroupOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      Configuration: fromWorkGroupConfiguration(params["Configuration"]),
      Description: params["Description"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateWorkGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteDataCatalog(
    {abortSignal, ...params}: RequestConfig & DeleteDataCatalogInput,
  ): Promise<DeleteDataCatalogOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteDataCatalog",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteNamedQuery(
    {abortSignal, ...params}: RequestConfig & DeleteNamedQueryInput,
  ): Promise<DeleteNamedQueryOutput> {
    const body: jsonP.JSONObject = {
      NamedQueryId: params["NamedQueryId"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteNamedQuery",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteWorkGroup(
    {abortSignal, ...params}: RequestConfig & DeleteWorkGroupInput,
  ): Promise<DeleteWorkGroupOutput> {
    const body: jsonP.JSONObject = {
      WorkGroup: params["WorkGroup"],
      RecursiveDeleteOption: params["RecursiveDeleteOption"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteWorkGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getDataCatalog(
    {abortSignal, ...params}: RequestConfig & GetDataCatalogInput,
  ): Promise<GetDataCatalogOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDataCatalog",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DataCatalog": toDataCatalog,
      },
    }, await resp.json());
  }

  async getDatabase(
    {abortSignal, ...params}: RequestConfig & GetDatabaseInput,
  ): Promise<GetDatabaseOutput> {
    const body: jsonP.JSONObject = {
      CatalogName: params["CatalogName"],
      DatabaseName: params["DatabaseName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDatabase",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Database": toDatabase,
      },
    }, await resp.json());
  }

  async getNamedQuery(
    {abortSignal, ...params}: RequestConfig & GetNamedQueryInput,
  ): Promise<GetNamedQueryOutput> {
    const body: jsonP.JSONObject = {
      NamedQueryId: params["NamedQueryId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetNamedQuery",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NamedQuery": toNamedQuery,
      },
    }, await resp.json());
  }

  async getQueryExecution(
    {abortSignal, ...params}: RequestConfig & GetQueryExecutionInput,
  ): Promise<GetQueryExecutionOutput> {
    const body: jsonP.JSONObject = {
      QueryExecutionId: params["QueryExecutionId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetQueryExecution",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "QueryExecution": toQueryExecution,
      },
    }, await resp.json());
  }

  async getQueryResults(
    {abortSignal, ...params}: RequestConfig & GetQueryResultsInput,
  ): Promise<GetQueryResultsOutput> {
    const body: jsonP.JSONObject = {
      QueryExecutionId: params["QueryExecutionId"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetQueryResults",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "UpdateCount": "n",
        "ResultSet": toResultSet,
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getTableMetadata(
    {abortSignal, ...params}: RequestConfig & GetTableMetadataInput,
  ): Promise<GetTableMetadataOutput> {
    const body: jsonP.JSONObject = {
      CatalogName: params["CatalogName"],
      DatabaseName: params["DatabaseName"],
      TableName: params["TableName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetTableMetadata",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "TableMetadata": toTableMetadata,
      },
    }, await resp.json());
  }

  async getWorkGroup(
    {abortSignal, ...params}: RequestConfig & GetWorkGroupInput,
  ): Promise<GetWorkGroupOutput> {
    const body: jsonP.JSONObject = {
      WorkGroup: params["WorkGroup"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetWorkGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "WorkGroup": toWorkGroup,
      },
    }, await resp.json());
  }

  async listDataCatalogs(
    {abortSignal, ...params}: RequestConfig & ListDataCatalogsInput = {},
  ): Promise<ListDataCatalogsOutput> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDataCatalogs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DataCatalogsSummary": [toDataCatalogSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listDatabases(
    {abortSignal, ...params}: RequestConfig & ListDatabasesInput,
  ): Promise<ListDatabasesOutput> {
    const body: jsonP.JSONObject = {
      CatalogName: params["CatalogName"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDatabases",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatabaseList": [toDatabase],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listNamedQueries(
    {abortSignal, ...params}: RequestConfig & ListNamedQueriesInput = {},
  ): Promise<ListNamedQueriesOutput> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      WorkGroup: params["WorkGroup"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListNamedQueries",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NamedQueryIds": ["s"],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listQueryExecutions(
    {abortSignal, ...params}: RequestConfig & ListQueryExecutionsInput = {},
  ): Promise<ListQueryExecutionsOutput> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      WorkGroup: params["WorkGroup"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListQueryExecutions",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "QueryExecutionIds": ["s"],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTableMetadata(
    {abortSignal, ...params}: RequestConfig & ListTableMetadataInput,
  ): Promise<ListTableMetadataOutput> {
    const body: jsonP.JSONObject = {
      CatalogName: params["CatalogName"],
      DatabaseName: params["DatabaseName"],
      Expression: params["Expression"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTableMetadata",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "TableMetadataList": [toTableMetadata],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceInput,
  ): Promise<ListTagsForResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listWorkGroups(
    {abortSignal, ...params}: RequestConfig & ListWorkGroupsInput = {},
  ): Promise<ListWorkGroupsOutput> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListWorkGroups",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "WorkGroups": [toWorkGroupSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async startQueryExecution(
    {abortSignal, ...params}: RequestConfig & StartQueryExecutionInput,
  ): Promise<StartQueryExecutionOutput> {
    const body: jsonP.JSONObject = {
      QueryString: params["QueryString"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      QueryExecutionContext: fromQueryExecutionContext(params["QueryExecutionContext"]),
      ResultConfiguration: fromResultConfiguration(params["ResultConfiguration"]),
      WorkGroup: params["WorkGroup"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartQueryExecution",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "QueryExecutionId": "s",
      },
    }, await resp.json());
  }

  async stopQueryExecution(
    {abortSignal, ...params}: RequestConfig & StopQueryExecutionInput,
  ): Promise<StopQueryExecutionOutput> {
    const body: jsonP.JSONObject = {
      QueryExecutionId: params["QueryExecutionId"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopQueryExecution",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceInput,
  ): Promise<TagResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceInput,
  ): Promise<UntagResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateDataCatalog(
    {abortSignal, ...params}: RequestConfig & UpdateDataCatalogInput,
  ): Promise<UpdateDataCatalogOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      Type: params["Type"],
      Description: params["Description"],
      Parameters: params["Parameters"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateDataCatalog",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateWorkGroup(
    {abortSignal, ...params}: RequestConfig & UpdateWorkGroupInput,
  ): Promise<UpdateWorkGroupOutput> {
    const body: jsonP.JSONObject = {
      WorkGroup: params["WorkGroup"],
      Description: params["Description"],
      ConfigurationUpdates: fromWorkGroupConfigurationUpdates(params["ConfigurationUpdates"]),
      State: params["State"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateWorkGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface BatchGetNamedQueryInput {
  NamedQueryIds: string[];
}

// refs: 1 - tags: named, input
export interface BatchGetQueryExecutionInput {
  QueryExecutionIds: string[];
}

// refs: 1 - tags: named, input
export interface CreateDataCatalogInput {
  Name: string;
  Type: DataCatalogType;
  Description?: string | null;
  Parameters?: { [key: string]: string | null | undefined } | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateNamedQueryInput {
  Name: string;
  Description?: string | null;
  Database: string;
  QueryString: string;
  ClientRequestToken?: string | null;
  WorkGroup?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateWorkGroupInput {
  Name: string;
  Configuration?: WorkGroupConfiguration | null;
  Description?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteDataCatalogInput {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DeleteNamedQueryInput {
  NamedQueryId: string;
}

// refs: 1 - tags: named, input
export interface DeleteWorkGroupInput {
  WorkGroup: string;
  RecursiveDeleteOption?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetDataCatalogInput {
  Name: string;
}

// refs: 1 - tags: named, input
export interface GetDatabaseInput {
  CatalogName: string;
  DatabaseName: string;
}

// refs: 1 - tags: named, input
export interface GetNamedQueryInput {
  NamedQueryId: string;
}

// refs: 1 - tags: named, input
export interface GetQueryExecutionInput {
  QueryExecutionId: string;
}

// refs: 1 - tags: named, input
export interface GetQueryResultsInput {
  QueryExecutionId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetTableMetadataInput {
  CatalogName: string;
  DatabaseName: string;
  TableName: string;
}

// refs: 1 - tags: named, input
export interface GetWorkGroupInput {
  WorkGroup: string;
}

// refs: 1 - tags: named, input
export interface ListDataCatalogsInput {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListDatabasesInput {
  CatalogName: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListNamedQueriesInput {
  NextToken?: string | null;
  MaxResults?: number | null;
  WorkGroup?: string | null;
}

// refs: 1 - tags: named, input
export interface ListQueryExecutionsInput {
  NextToken?: string | null;
  MaxResults?: number | null;
  WorkGroup?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTableMetadataInput {
  CatalogName: string;
  DatabaseName: string;
  Expression?: string | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceInput {
  ResourceARN: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListWorkGroupsInput {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface StartQueryExecutionInput {
  QueryString: string;
  ClientRequestToken?: string | null;
  QueryExecutionContext?: QueryExecutionContext | null;
  ResultConfiguration?: ResultConfiguration | null;
  WorkGroup?: string | null;
}

// refs: 1 - tags: named, input
export interface StopQueryExecutionInput {
  QueryExecutionId: string;
}

// refs: 1 - tags: named, input
export interface TagResourceInput {
  ResourceARN: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceInput {
  ResourceARN: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateDataCatalogInput {
  Name: string;
  Type: DataCatalogType;
  Description?: string | null;
  Parameters?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface UpdateWorkGroupInput {
  WorkGroup: string;
  Description?: string | null;
  ConfigurationUpdates?: WorkGroupConfigurationUpdates | null;
  State?: WorkGroupState | null;
}

// refs: 1 - tags: named, output
export interface BatchGetNamedQueryOutput {
  NamedQueries?: NamedQuery[] | null;
  UnprocessedNamedQueryIds?: UnprocessedNamedQueryId[] | null;
}

// refs: 1 - tags: named, output
export interface BatchGetQueryExecutionOutput {
  QueryExecutions?: QueryExecution[] | null;
  UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[] | null;
}

// refs: 1 - tags: named, output
export interface CreateDataCatalogOutput {
}

// refs: 1 - tags: named, output
export interface CreateNamedQueryOutput {
  NamedQueryId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateWorkGroupOutput {
}

// refs: 1 - tags: named, output
export interface DeleteDataCatalogOutput {
}

// refs: 1 - tags: named, output
export interface DeleteNamedQueryOutput {
}

// refs: 1 - tags: named, output
export interface DeleteWorkGroupOutput {
}

// refs: 1 - tags: named, output
export interface GetDataCatalogOutput {
  DataCatalog?: DataCatalog | null;
}

// refs: 1 - tags: named, output
export interface GetDatabaseOutput {
  Database?: Database | null;
}

// refs: 1 - tags: named, output
export interface GetNamedQueryOutput {
  NamedQuery?: NamedQuery | null;
}

// refs: 1 - tags: named, output
export interface GetQueryExecutionOutput {
  QueryExecution?: QueryExecution | null;
}

// refs: 1 - tags: named, output
export interface GetQueryResultsOutput {
  UpdateCount?: number | null;
  ResultSet?: ResultSet | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetTableMetadataOutput {
  TableMetadata?: TableMetadata | null;
}

// refs: 1 - tags: named, output
export interface GetWorkGroupOutput {
  WorkGroup?: WorkGroup | null;
}

// refs: 1 - tags: named, output
export interface ListDataCatalogsOutput {
  DataCatalogsSummary?: DataCatalogSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDatabasesOutput {
  DatabaseList?: Database[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListNamedQueriesOutput {
  NamedQueryIds?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListQueryExecutionsOutput {
  QueryExecutionIds?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTableMetadataOutput {
  TableMetadataList?: TableMetadata[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceOutput {
  Tags?: Tag[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListWorkGroupsOutput {
  WorkGroups?: WorkGroupSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartQueryExecutionOutput {
  QueryExecutionId?: string | null;
}

// refs: 1 - tags: named, output
export interface StopQueryExecutionOutput {
}

// refs: 1 - tags: named, output
export interface TagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UntagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UpdateDataCatalogOutput {
}

// refs: 1 - tags: named, output
export interface UpdateWorkGroupOutput {
}

// refs: 4 - tags: input, named, enum, output
export type DataCatalogType =
| "LAMBDA"
| "GLUE"
| "HIVE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}
function fromTag(input?: Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): Tag {
  return jsonP.readObj({
    required: {},
    optional: {
      "Key": "s",
      "Value": "s",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface WorkGroupConfiguration {
  ResultConfiguration?: ResultConfiguration | null;
  EnforceWorkGroupConfiguration?: boolean | null;
  PublishCloudWatchMetricsEnabled?: boolean | null;
  BytesScannedCutoffPerQuery?: number | null;
  RequesterPaysEnabled?: boolean | null;
}
function fromWorkGroupConfiguration(input?: WorkGroupConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ResultConfiguration: fromResultConfiguration(input["ResultConfiguration"]),
    EnforceWorkGroupConfiguration: input["EnforceWorkGroupConfiguration"],
    PublishCloudWatchMetricsEnabled: input["PublishCloudWatchMetricsEnabled"],
    BytesScannedCutoffPerQuery: input["BytesScannedCutoffPerQuery"],
    RequesterPaysEnabled: input["RequesterPaysEnabled"],
  }
}
function toWorkGroupConfiguration(root: jsonP.JSONValue): WorkGroupConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "ResultConfiguration": toResultConfiguration,
      "EnforceWorkGroupConfiguration": "b",
      "PublishCloudWatchMetricsEnabled": "b",
      "BytesScannedCutoffPerQuery": "n",
      "RequesterPaysEnabled": "b",
    },
  }, root);
}

// refs: 5 - tags: input, named, interface, output
export interface ResultConfiguration {
  OutputLocation?: string | null;
  EncryptionConfiguration?: EncryptionConfiguration | null;
}
function fromResultConfiguration(input?: ResultConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    OutputLocation: input["OutputLocation"],
    EncryptionConfiguration: fromEncryptionConfiguration(input["EncryptionConfiguration"]),
  }
}
function toResultConfiguration(root: jsonP.JSONValue): ResultConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "OutputLocation": "s",
      "EncryptionConfiguration": toEncryptionConfiguration,
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface EncryptionConfiguration {
  EncryptionOption: EncryptionOption;
  KmsKey?: string | null;
}
function fromEncryptionConfiguration(input?: EncryptionConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    EncryptionOption: input["EncryptionOption"],
    KmsKey: input["KmsKey"],
  }
}
function toEncryptionConfiguration(root: jsonP.JSONValue): EncryptionConfiguration {
  return jsonP.readObj({
    required: {
      "EncryptionOption": (x: jsonP.JSONValue) => cmnP.readEnum<EncryptionOption>(x),
    },
    optional: {
      "KmsKey": "s",
    },
  }, root);
}

// refs: 6 - tags: input, named, enum, output
export type EncryptionOption =
| "SSE_S3"
| "SSE_KMS"
| "CSE_KMS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface QueryExecutionContext {
  Database?: string | null;
  Catalog?: string | null;
}
function fromQueryExecutionContext(input?: QueryExecutionContext | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Database: input["Database"],
    Catalog: input["Catalog"],
  }
}
function toQueryExecutionContext(root: jsonP.JSONValue): QueryExecutionContext {
  return jsonP.readObj({
    required: {},
    optional: {
      "Database": "s",
      "Catalog": "s",
    },
  }, root);
}

// refs: 1 - tags: input, named, interface
export interface WorkGroupConfigurationUpdates {
  EnforceWorkGroupConfiguration?: boolean | null;
  ResultConfigurationUpdates?: ResultConfigurationUpdates | null;
  PublishCloudWatchMetricsEnabled?: boolean | null;
  BytesScannedCutoffPerQuery?: number | null;
  RemoveBytesScannedCutoffPerQuery?: boolean | null;
  RequesterPaysEnabled?: boolean | null;
}
function fromWorkGroupConfigurationUpdates(input?: WorkGroupConfigurationUpdates | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    EnforceWorkGroupConfiguration: input["EnforceWorkGroupConfiguration"],
    ResultConfigurationUpdates: fromResultConfigurationUpdates(input["ResultConfigurationUpdates"]),
    PublishCloudWatchMetricsEnabled: input["PublishCloudWatchMetricsEnabled"],
    BytesScannedCutoffPerQuery: input["BytesScannedCutoffPerQuery"],
    RemoveBytesScannedCutoffPerQuery: input["RemoveBytesScannedCutoffPerQuery"],
    RequesterPaysEnabled: input["RequesterPaysEnabled"],
  }
}

// refs: 1 - tags: input, named, interface
export interface ResultConfigurationUpdates {
  OutputLocation?: string | null;
  RemoveOutputLocation?: boolean | null;
  EncryptionConfiguration?: EncryptionConfiguration | null;
  RemoveEncryptionConfiguration?: boolean | null;
}
function fromResultConfigurationUpdates(input?: ResultConfigurationUpdates | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    OutputLocation: input["OutputLocation"],
    RemoveOutputLocation: input["RemoveOutputLocation"],
    EncryptionConfiguration: fromEncryptionConfiguration(input["EncryptionConfiguration"]),
    RemoveEncryptionConfiguration: input["RemoveEncryptionConfiguration"],
  }
}

// refs: 3 - tags: input, named, enum, output
export type WorkGroupState =
| "ENABLED"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface NamedQuery {
  Name: string;
  Description?: string | null;
  Database: string;
  QueryString: string;
  NamedQueryId?: string | null;
  WorkGroup?: string | null;
}
function toNamedQuery(root: jsonP.JSONValue): NamedQuery {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "Database": "s",
      "QueryString": "s",
    },
    optional: {
      "Description": "s",
      "NamedQueryId": "s",
      "WorkGroup": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface UnprocessedNamedQueryId {
  NamedQueryId?: string | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}
function toUnprocessedNamedQueryId(root: jsonP.JSONValue): UnprocessedNamedQueryId {
  return jsonP.readObj({
    required: {},
    optional: {
      "NamedQueryId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface QueryExecution {
  QueryExecutionId?: string | null;
  Query?: string | null;
  StatementType?: StatementType | null;
  ResultConfiguration?: ResultConfiguration | null;
  QueryExecutionContext?: QueryExecutionContext | null;
  Status?: QueryExecutionStatus | null;
  Statistics?: QueryExecutionStatistics | null;
  WorkGroup?: string | null;
}
function toQueryExecution(root: jsonP.JSONValue): QueryExecution {
  return jsonP.readObj({
    required: {},
    optional: {
      "QueryExecutionId": "s",
      "Query": "s",
      "StatementType": (x: jsonP.JSONValue) => cmnP.readEnum<StatementType>(x),
      "ResultConfiguration": toResultConfiguration,
      "QueryExecutionContext": toQueryExecutionContext,
      "Status": toQueryExecutionStatus,
      "Statistics": toQueryExecutionStatistics,
      "WorkGroup": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type StatementType =
| "DDL"
| "DML"
| "UTILITY"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface QueryExecutionStatus {
  State?: QueryExecutionState | null;
  StateChangeReason?: string | null;
  SubmissionDateTime?: Date | number | null;
  CompletionDateTime?: Date | number | null;
}
function toQueryExecutionStatus(root: jsonP.JSONValue): QueryExecutionStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<QueryExecutionState>(x),
      "StateChangeReason": "s",
      "SubmissionDateTime": "d",
      "CompletionDateTime": "d",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type QueryExecutionState =
| "QUEUED"
| "RUNNING"
| "SUCCEEDED"
| "FAILED"
| "CANCELLED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface QueryExecutionStatistics {
  EngineExecutionTimeInMillis?: number | null;
  DataScannedInBytes?: number | null;
  DataManifestLocation?: string | null;
  TotalExecutionTimeInMillis?: number | null;
  QueryQueueTimeInMillis?: number | null;
  QueryPlanningTimeInMillis?: number | null;
  ServiceProcessingTimeInMillis?: number | null;
}
function toQueryExecutionStatistics(root: jsonP.JSONValue): QueryExecutionStatistics {
  return jsonP.readObj({
    required: {},
    optional: {
      "EngineExecutionTimeInMillis": "n",
      "DataScannedInBytes": "n",
      "DataManifestLocation": "s",
      "TotalExecutionTimeInMillis": "n",
      "QueryQueueTimeInMillis": "n",
      "QueryPlanningTimeInMillis": "n",
      "ServiceProcessingTimeInMillis": "n",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface UnprocessedQueryExecutionId {
  QueryExecutionId?: string | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}
function toUnprocessedQueryExecutionId(root: jsonP.JSONValue): UnprocessedQueryExecutionId {
  return jsonP.readObj({
    required: {},
    optional: {
      "QueryExecutionId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DataCatalog {
  Name: string;
  Description?: string | null;
  Type: DataCatalogType;
  Parameters?: { [key: string]: string | null | undefined } | null;
}
function toDataCatalog(root: jsonP.JSONValue): DataCatalog {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<DataCatalogType>(x),
    },
    optional: {
      "Description": "s",
      "Parameters": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface Database {
  Name: string;
  Description?: string | null;
  Parameters?: { [key: string]: string | null | undefined } | null;
}
function toDatabase(root: jsonP.JSONValue): Database {
  return jsonP.readObj({
    required: {
      "Name": "s",
    },
    optional: {
      "Description": "s",
      "Parameters": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ResultSet {
  Rows?: Row[] | null;
  ResultSetMetadata?: ResultSetMetadata | null;
}
function toResultSet(root: jsonP.JSONValue): ResultSet {
  return jsonP.readObj({
    required: {},
    optional: {
      "Rows": [toRow],
      "ResultSetMetadata": toResultSetMetadata,
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Row {
  Data?: Datum[] | null;
}
function toRow(root: jsonP.JSONValue): Row {
  return jsonP.readObj({
    required: {},
    optional: {
      "Data": [toDatum],
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Datum {
  VarCharValue?: string | null;
}
function toDatum(root: jsonP.JSONValue): Datum {
  return jsonP.readObj({
    required: {},
    optional: {
      "VarCharValue": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ResultSetMetadata {
  ColumnInfo?: ColumnInfo[] | null;
}
function toResultSetMetadata(root: jsonP.JSONValue): ResultSetMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "ColumnInfo": [toColumnInfo],
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ColumnInfo {
  CatalogName?: string | null;
  SchemaName?: string | null;
  TableName?: string | null;
  Name: string;
  Label?: string | null;
  Type: string;
  Precision?: number | null;
  Scale?: number | null;
  Nullable?: ColumnNullable | null;
  CaseSensitive?: boolean | null;
}
function toColumnInfo(root: jsonP.JSONValue): ColumnInfo {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "Type": "s",
    },
    optional: {
      "CatalogName": "s",
      "SchemaName": "s",
      "TableName": "s",
      "Label": "s",
      "Precision": "n",
      "Scale": "n",
      "Nullable": (x: jsonP.JSONValue) => cmnP.readEnum<ColumnNullable>(x),
      "CaseSensitive": "b",
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type ColumnNullable =
| "NOT_NULL"
| "NULLABLE"
| "UNKNOWN"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface TableMetadata {
  Name: string;
  CreateTime?: Date | number | null;
  LastAccessTime?: Date | number | null;
  TableType?: string | null;
  Columns?: Column[] | null;
  PartitionKeys?: Column[] | null;
  Parameters?: { [key: string]: string | null | undefined } | null;
}
function toTableMetadata(root: jsonP.JSONValue): TableMetadata {
  return jsonP.readObj({
    required: {
      "Name": "s",
    },
    optional: {
      "CreateTime": "d",
      "LastAccessTime": "d",
      "TableType": "s",
      "Columns": [toColumn],
      "PartitionKeys": [toColumn],
      "Parameters": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 4 - tags: output, named, interface
export interface Column {
  Name: string;
  Type?: string | null;
  Comment?: string | null;
}
function toColumn(root: jsonP.JSONValue): Column {
  return jsonP.readObj({
    required: {
      "Name": "s",
    },
    optional: {
      "Type": "s",
      "Comment": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface WorkGroup {
  Name: string;
  State?: WorkGroupState | null;
  Configuration?: WorkGroupConfiguration | null;
  Description?: string | null;
  CreationTime?: Date | number | null;
}
function toWorkGroup(root: jsonP.JSONValue): WorkGroup {
  return jsonP.readObj({
    required: {
      "Name": "s",
    },
    optional: {
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<WorkGroupState>(x),
      "Configuration": toWorkGroupConfiguration,
      "Description": "s",
      "CreationTime": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface DataCatalogSummary {
  CatalogName?: string | null;
  Type?: DataCatalogType | null;
}
function toDataCatalogSummary(root: jsonP.JSONValue): DataCatalogSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "CatalogName": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<DataCatalogType>(x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface WorkGroupSummary {
  Name?: string | null;
  State?: WorkGroupState | null;
  Description?: string | null;
  CreationTime?: Date | number | null;
}
function toWorkGroupSummary(root: jsonP.JSONValue): WorkGroupSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<WorkGroupState>(x),
      "Description": "s",
      "CreationTime": "d",
    },
  }, root);
}
