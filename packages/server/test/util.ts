import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { ExecutionResult, print as printGql } from 'graphql';
import { YogaServerInstance } from 'graphql-yoga';

export function createExecuter<
  TServerContext extends Record<string, any> = {},
  TUserContext extends Record<string, any> = {},
>(yoga: YogaServerInstance<TServerContext, TUserContext>) {
  return async function executeOperation<TResult, TVariables>(
    operation: TypedDocumentNode<TResult, TVariables>,
    ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
  ): Promise<ExecutionResult<TResult>> {
    const response = await Promise.resolve(
      yoga.fetch('http://yoga/test-graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: printGql(operation),
          variables: variables ?? undefined,
        }),
      }),
    );
    return await response.json();
  };
}
