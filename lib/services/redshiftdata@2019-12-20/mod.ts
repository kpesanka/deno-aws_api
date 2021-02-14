// Autogenerated API client for: Redshift Data API Service

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class RedshiftData {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(RedshiftData.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
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
    {abortSignal, ...params}: RequestConfig & s.CancelStatementRequest,
  ): Promise<s.CancelStatementResponse> {
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
    {abortSignal, ...params}: RequestConfig & s.DescribeStatementRequest,
  ): Promise<s.DescribeStatementResponse> {
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
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.StatusString>(x),
        "UpdatedAt": "d",
      },
    }, await resp.json());
  }

  async describeTable(
    {abortSignal, ...params}: RequestConfig & s.DescribeTableRequest,
  ): Promise<s.DescribeTableResponse> {
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
    {abortSignal, ...params}: RequestConfig & s.ExecuteStatementInput,
  ): Promise<s.ExecuteStatementOutput> {
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
    {abortSignal, ...params}: RequestConfig & s.GetStatementResultRequest,
  ): Promise<s.GetStatementResultResponse> {
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
    {abortSignal, ...params}: RequestConfig & s.ListDatabasesRequest,
  ): Promise<s.ListDatabasesResponse> {
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
    {abortSignal, ...params}: RequestConfig & s.ListSchemasRequest,
  ): Promise<s.ListSchemasResponse> {
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
    {abortSignal, ...params}: RequestConfig & s.ListStatementsRequest = {},
  ): Promise<s.ListStatementsResponse> {
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
    {abortSignal, ...params}: RequestConfig & s.ListTablesRequest,
  ): Promise<s.ListTablesResponse> {
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

function toColumnMetadata(root: jsonP.JSONValue): s.ColumnMetadata {
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

function toField(root: jsonP.JSONValue): s.Field {
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

function toStatementData(root: jsonP.JSONValue): s.StatementData {
  return jsonP.readObj({
    required: {
      "Id": "s",
    },
    optional: {
      "CreatedAt": "d",
      "QueryString": "s",
      "SecretArn": "s",
      "StatementName": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.StatusString>(x),
      "UpdatedAt": "d",
    },
  }, root);
}

function toTableMember(root: jsonP.JSONValue): s.TableMember {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "schema": "s",
      "type": "s",
    },
  }, root);
}
