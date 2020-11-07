// Autogenerated API client for: Redshift Data API Service

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class RedshiftData {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(RedshiftData.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-12-20",
    "endpointPrefix": "redshift-data",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Redshift Data API Service",
    "serviceId": "Redshift Data",
    "signatureVersion": "v4",
    "signingName": "redshift-data",
    "targetPrefix": "RedshiftData",
    "uid": "redshift-data-2019-12-20"
  };

  async cancelStatement(
    {abortSignal, ...params}: RequestConfig & CancelStatementRequest,
  ): Promise<CancelStatementResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CancelStatement",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": "b",
      },
    }, await resp.json());
  }

  async describeStatement(
    {abortSignal, ...params}: RequestConfig & DescribeStatementRequest,
  ): Promise<DescribeStatementResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeStatement",
    });
    return jsonP.readObj({
      required: {
        "Id": "s",
      },
      optional: {
        "ClusterIdentifier": "s",
        "CreatedAt": "d",
        "Database": "s",
        "DbUser": "s",
        "Duration": "n",
        "Error": "s",
        "QueryString": "s",
        "RedshiftPid": "n",
        "RedshiftQueryId": "n",
        "ResultRows": "n",
        "ResultSize": "n",
        "SecretArn": "s",
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<StatusString>(x),
        "UpdatedAt": "d",
      },
    }, await resp.json());
  }

  async describeTable(
    {abortSignal, ...params}: RequestConfig & DescribeTableRequest,
  ): Promise<DescribeTableResponse> {
    const body: jsonP.JSONObject = {
      ClusterIdentifier: params["ClusterIdentifier"],
      Database: params["Database"],
      DbUser: params["DbUser"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Schema: params["Schema"],
      SecretArn: params["SecretArn"],
      Table: params["Table"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeTable",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ColumnList": [toColumnMetadata],
        "NextToken": "s",
        "TableName": "s",
      },
    }, await resp.json());
  }

  async executeStatement(
    {abortSignal, ...params}: RequestConfig & ExecuteStatementInput,
  ): Promise<ExecuteStatementOutput> {
    const body: jsonP.JSONObject = {
      ClusterIdentifier: params["ClusterIdentifier"],
      Database: params["Database"],
      DbUser: params["DbUser"],
      SecretArn: params["SecretArn"],
      Sql: params["Sql"],
      StatementName: params["StatementName"],
      WithEvent: params["WithEvent"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ExecuteStatement",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ClusterIdentifier": "s",
        "CreatedAt": "d",
        "Database": "s",
        "DbUser": "s",
        "Id": "s",
        "SecretArn": "s",
      },
    }, await resp.json());
  }

  async getStatementResult(
    {abortSignal, ...params}: RequestConfig & GetStatementResultRequest,
  ): Promise<GetStatementResultResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetStatementResult",
    });
    return jsonP.readObj({
      required: {
        "Records": [x => jsonP.readList(toField, x)],
      },
      optional: {
        "ColumnMetadata": [toColumnMetadata],
        "NextToken": "s",
        "TotalNumRows": "n",
      },
    }, await resp.json());
  }

  async listDatabases(
    {abortSignal, ...params}: RequestConfig & ListDatabasesRequest,
  ): Promise<ListDatabasesResponse> {
    const body: jsonP.JSONObject = {
      ClusterIdentifier: params["ClusterIdentifier"],
      Database: params["Database"],
      DbUser: params["DbUser"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      SecretArn: params["SecretArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDatabases",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Databases": ["s"],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listSchemas(
    {abortSignal, ...params}: RequestConfig & ListSchemasRequest,
  ): Promise<ListSchemasResponse> {
    const body: jsonP.JSONObject = {
      ClusterIdentifier: params["ClusterIdentifier"],
      Database: params["Database"],
      DbUser: params["DbUser"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      SchemaPattern: params["SchemaPattern"],
      SecretArn: params["SecretArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListSchemas",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Schemas": ["s"],
      },
    }, await resp.json());
  }

  async listStatements(
    {abortSignal, ...params}: RequestConfig & ListStatementsRequest = {},
  ): Promise<ListStatementsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      StatementName: params["StatementName"],
      Status: params["Status"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListStatements",
    });
    return jsonP.readObj({
      required: {
        "Statements": [toStatementData],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTables(
    {abortSignal, ...params}: RequestConfig & ListTablesRequest,
  ): Promise<ListTablesResponse> {
    const body: jsonP.JSONObject = {
      ClusterIdentifier: params["ClusterIdentifier"],
      Database: params["Database"],
      DbUser: params["DbUser"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      SchemaPattern: params["SchemaPattern"],
      SecretArn: params["SecretArn"],
      TablePattern: params["TablePattern"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTables",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Tables": [toTableMember],
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CancelStatementRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DescribeStatementRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DescribeTableRequest {
  ClusterIdentifier: string;
  Database?: string | null;
  DbUser?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
  Schema?: string | null;
  SecretArn?: string | null;
  Table?: string | null;
}

// refs: 1 - tags: named, input
export interface ExecuteStatementInput {
  ClusterIdentifier: string;
  Database?: string | null;
  DbUser?: string | null;
  SecretArn?: string | null;
  Sql: string;
  StatementName?: string | null;
  WithEvent?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetStatementResultRequest {
  Id: string;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDatabasesRequest {
  ClusterIdentifier: string;
  Database?: string | null;
  DbUser?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
  SecretArn?: string | null;
}

// refs: 1 - tags: named, input
export interface ListSchemasRequest {
  ClusterIdentifier: string;
  Database: string;
  DbUser?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
  SchemaPattern?: string | null;
  SecretArn?: string | null;
}

// refs: 1 - tags: named, input
export interface ListStatementsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  StatementName?: string | null;
  Status?: StatusString | null;
}

// refs: 1 - tags: named, input
export interface ListTablesRequest {
  ClusterIdentifier: string;
  Database: string;
  DbUser?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
  SchemaPattern?: string | null;
  SecretArn?: string | null;
  TablePattern?: string | null;
}

// refs: 1 - tags: named, output
export interface CancelStatementResponse {
  Status?: boolean | null;
}

// refs: 1 - tags: named, output
export interface DescribeStatementResponse {
  ClusterIdentifier?: string | null;
  CreatedAt?: Date | number | null;
  Database?: string | null;
  DbUser?: string | null;
  Duration?: number | null;
  Error?: string | null;
  Id: string;
  QueryString?: string | null;
  RedshiftPid?: number | null;
  RedshiftQueryId?: number | null;
  ResultRows?: number | null;
  ResultSize?: number | null;
  SecretArn?: string | null;
  Status?: StatusString | null;
  UpdatedAt?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DescribeTableResponse {
  ColumnList?: ColumnMetadata[] | null;
  NextToken?: string | null;
  TableName?: string | null;
}

// refs: 1 - tags: named, output
export interface ExecuteStatementOutput {
  ClusterIdentifier?: string | null;
  CreatedAt?: Date | number | null;
  Database?: string | null;
  DbUser?: string | null;
  Id?: string | null;
  SecretArn?: string | null;
}

// refs: 1 - tags: named, output
export interface GetStatementResultResponse {
  ColumnMetadata?: ColumnMetadata[] | null;
  NextToken?: string | null;
  Records: Field[][];
  TotalNumRows?: number | null;
}

// refs: 1 - tags: named, output
export interface ListDatabasesResponse {
  Databases?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListSchemasResponse {
  NextToken?: string | null;
  Schemas?: string[] | null;
}

// refs: 1 - tags: named, output
export interface ListStatementsResponse {
  NextToken?: string | null;
  Statements: StatementData[];
}

// refs: 1 - tags: named, output
export interface ListTablesResponse {
  NextToken?: string | null;
  Tables?: TableMember[] | null;
}

// refs: 3 - tags: input, named, enum, output
export type StatusString =
| "ABORTED"
| "ALL"
| "FAILED"
| "FINISHED"
| "PICKED"
| "STARTED"
| "SUBMITTED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface ColumnMetadata {
  columnDefault?: string | null;
  isCaseSensitive?: boolean | null;
  isCurrency?: boolean | null;
  isSigned?: boolean | null;
  label?: string | null;
  length?: number | null;
  name?: string | null;
  nullable?: number | null;
  precision?: number | null;
  scale?: number | null;
  schemaName?: string | null;
  tableName?: string | null;
  typeName?: string | null;
}
function toColumnMetadata(root: jsonP.JSONValue): ColumnMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "columnDefault": "s",
      "isCaseSensitive": "b",
      "isCurrency": "b",
      "isSigned": "b",
      "label": "s",
      "length": "n",
      "name": "s",
      "nullable": "n",
      "precision": "n",
      "scale": "n",
      "schemaName": "s",
      "tableName": "s",
      "typeName": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Field {
  blobValue?: Uint8Array | string | null;
  booleanValue?: boolean | null;
  doubleValue?: number | null;
  isNull?: boolean | null;
  longValue?: number | null;
  stringValue?: string | null;
}
function toField(root: jsonP.JSONValue): Field {
  return jsonP.readObj({
    required: {},
    optional: {
      "blobValue": "a",
      "booleanValue": "b",
      "doubleValue": "n",
      "isNull": "b",
      "longValue": "n",
      "stringValue": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface StatementData {
  CreatedAt?: Date | number | null;
  Id: string;
  QueryString?: string | null;
  SecretArn?: string | null;
  StatementName?: string | null;
  Status?: StatusString | null;
  UpdatedAt?: Date | number | null;
}
function toStatementData(root: jsonP.JSONValue): StatementData {
  return jsonP.readObj({
    required: {
      "Id": "s",
    },
    optional: {
      "CreatedAt": "d",
      "QueryString": "s",
      "SecretArn": "s",
      "StatementName": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<StatusString>(x),
      "UpdatedAt": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface TableMember {
  name?: string | null;
  schema?: string | null;
  type?: string | null;
}
function toTableMember(root: jsonP.JSONValue): TableMember {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "schema": "s",
      "type": "s",
    },
  }, root);
}
