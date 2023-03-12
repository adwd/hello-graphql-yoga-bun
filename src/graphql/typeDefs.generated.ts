import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 6, end: 11 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1, end: 11 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 18, end: 26 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 13, end: 26 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 39, end: 44 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'book', loc: { start: 49, end: 53 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 54, end: 56 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 58, end: 60 } },
                  loc: { start: 58, end: 60 },
                },
                loc: { start: 58, end: 61 },
              },
              directives: [],
              loc: { start: 54, end: 61 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Book', loc: { start: 64, end: 68 } },
            loc: { start: 64, end: 68 },
          },
          directives: [],
          loc: { start: 49, end: 68 },
        },
      ],
      loc: { start: 27, end: 70 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 84, end: 92 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'markBookAsRead', loc: { start: 97, end: 111 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 112, end: 114 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 116, end: 118 } },
                  loc: { start: 116, end: 118 },
                },
                loc: { start: 116, end: 119 },
              },
              directives: [],
              loc: { start: 112, end: 119 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Book', loc: { start: 122, end: 126 } },
              loc: { start: 122, end: 126 },
            },
            loc: { start: 122, end: 127 },
          },
          directives: [],
          loc: { start: 97, end: 127 },
        },
      ],
      loc: { start: 72, end: 129 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Book', loc: { start: 136, end: 140 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 145, end: 147 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 149, end: 151 } },
              loc: { start: 149, end: 151 },
            },
            loc: { start: 149, end: 152 },
          },
          directives: [],
          loc: { start: 145, end: 152 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isbn', loc: { start: 155, end: 159 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 161, end: 167 } },
              loc: { start: 161, end: 167 },
            },
            loc: { start: 161, end: 168 },
          },
          directives: [],
          loc: { start: 155, end: 168 },
        },
      ],
      loc: { start: 131, end: 170 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 183, end: 188 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 193, end: 197 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 198, end: 200 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 202, end: 204 } },
                  loc: { start: 202, end: 204 },
                },
                loc: { start: 202, end: 205 },
              },
              directives: [],
              loc: { start: 198, end: 205 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'User', loc: { start: 208, end: 212 } },
            loc: { start: 208, end: 212 },
          },
          directives: [],
          loc: { start: 193, end: 212 },
        },
      ],
      loc: { start: 171, end: 214 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 221, end: 225 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 230, end: 232 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 234, end: 236 } },
              loc: { start: 234, end: 236 },
            },
            loc: { start: 234, end: 237 },
          },
          directives: [],
          loc: { start: 230, end: 237 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'fullName', loc: { start: 240, end: 248 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 250, end: 256 } },
              loc: { start: 250, end: 256 },
            },
            loc: { start: 250, end: 257 },
          },
          directives: [],
          loc: { start: 240, end: 257 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isAdmin', loc: { start: 260, end: 267 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 269, end: 276 } },
              loc: { start: 269, end: 276 },
            },
            loc: { start: 269, end: 277 },
          },
          directives: [],
          loc: { start: 260, end: 277 },
        },
      ],
      loc: { start: 216, end: 279 },
    },
  ],
  loc: { start: 0, end: 279 },
} as unknown as DocumentNode;
