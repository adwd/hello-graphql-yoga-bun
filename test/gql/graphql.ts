/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID']['output'];
  isbn: Scalars['String']['output'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserPayload;
  markBookAsRead: Book;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationMarkBookAsReadArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  user?: Maybe<User>;
};

export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
};

export type BookQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BookQueryQuery = {
  __typename?: 'Query';
  book?: { __typename?: 'Book'; id: string; isbn: string } | null;
};

export type CreateUserMutationMutationVariables = Exact<{
  [key: string]: never;
}>;

export type CreateUserMutationMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'CreateUserPayload';
    user?: {
      __typename?: 'User';
      id: string;
      fullName: string;
      email: string;
      isAdmin: boolean;
    } | null;
  };
};

export type UserQueryQueryVariables = Exact<{ [key: string]: never }>;

export type UserQueryQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: string;
    fullName: string;
    email: string;
    isAdmin: boolean;
  } | null;
};

export const BookQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BookQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'StringValue', value: '1', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isbn' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookQueryQuery, BookQueryQueryVariables>;
export const CreateUserMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUserMutation' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'fullName' },
                      value: {
                        kind: 'StringValue',
                        value: 'Test',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: {
                        kind: 'StringValue',
                        value: 'example@example.com',
                        block: false,
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fullName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAdmin' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables
>;
export const UserQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'StringValue', value: '1', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQueryQuery, UserQueryQueryVariables>;
