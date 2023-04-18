import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 38, end: 43 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'book', loc: { start: 48, end: 52 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 53, end: 55 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 57, end: 59 },
                  },
                  loc: { start: 57, end: 59 },
                },
                loc: { start: 57, end: 60 },
              },
              directives: [],
              loc: { start: 53, end: 60 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Book', loc: { start: 63, end: 67 } },
            loc: { start: 63, end: 67 },
          },
          directives: [],
          loc: { start: 48, end: 67 },
        },
      ],
      loc: { start: 26, end: 69 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 83, end: 91 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'markBookAsRead',
            loc: { start: 96, end: 110 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 111, end: 113 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 115, end: 117 },
                  },
                  loc: { start: 115, end: 117 },
                },
                loc: { start: 115, end: 118 },
              },
              directives: [],
              loc: { start: 111, end: 118 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Book',
                loc: { start: 121, end: 125 },
              },
              loc: { start: 121, end: 125 },
            },
            loc: { start: 121, end: 126 },
          },
          directives: [],
          loc: { start: 96, end: 126 },
        },
      ],
      loc: { start: 71, end: 128 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Book', loc: { start: 135, end: 139 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 144, end: 146 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 148, end: 150 },
              },
              loc: { start: 148, end: 150 },
            },
            loc: { start: 148, end: 151 },
          },
          directives: [],
          loc: { start: 144, end: 151 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isbn', loc: { start: 154, end: 158 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 160, end: 166 },
              },
              loc: { start: 160, end: 166 },
            },
            loc: { start: 160, end: 167 },
          },
          directives: [],
          loc: { start: 154, end: 167 },
        },
      ],
      loc: { start: 130, end: 169 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 182, end: 187 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 192, end: 196 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 197, end: 199 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 201, end: 203 },
                  },
                  loc: { start: 201, end: 203 },
                },
                loc: { start: 201, end: 204 },
              },
              directives: [],
              loc: { start: 197, end: 204 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 207, end: 211 },
            },
            loc: { start: 207, end: 211 },
          },
          directives: [],
          loc: { start: 192, end: 211 },
        },
      ],
      loc: { start: 170, end: 213 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 220, end: 224 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 229, end: 231 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 233, end: 235 },
              },
              loc: { start: 233, end: 235 },
            },
            loc: { start: 233, end: 236 },
          },
          directives: [],
          loc: { start: 229, end: 236 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 239, end: 247 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 249, end: 255 },
              },
              loc: { start: 249, end: 255 },
            },
            loc: { start: 249, end: 256 },
          },
          directives: [],
          loc: { start: 239, end: 256 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isAdmin',
            loc: { start: 259, end: 266 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 268, end: 275 },
              },
              loc: { start: 268, end: 275 },
            },
            loc: { start: 268, end: 276 },
          },
          directives: [],
          loc: { start: 259, end: 276 },
        },
      ],
      loc: { start: 215, end: 278 },
    },
  ],
  loc: { start: 0, end: 279 },
} as unknown as DocumentNode;
