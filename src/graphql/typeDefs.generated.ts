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
          name: { kind: 'Name', value: 'email', loc: { start: 259, end: 264 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 266, end: 272 },
              },
              loc: { start: 266, end: 272 },
            },
            loc: { start: 266, end: 273 },
          },
          directives: [],
          loc: { start: 259, end: 273 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isAdmin',
            loc: { start: 276, end: 283 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 285, end: 292 },
              },
              loc: { start: 285, end: 292 },
            },
            loc: { start: 285, end: 293 },
          },
          directives: [],
          loc: { start: 276, end: 293 },
        },
      ],
      loc: { start: 215, end: 295 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 309, end: 317 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createUser',
            loc: { start: 322, end: 332 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 333, end: 338 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateUserInput',
                    loc: { start: 340, end: 355 },
                  },
                  loc: { start: 340, end: 355 },
                },
                loc: { start: 340, end: 356 },
              },
              directives: [],
              loc: { start: 333, end: 356 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CreateUserPayload',
                loc: { start: 359, end: 376 },
              },
              loc: { start: 359, end: 376 },
            },
            loc: { start: 359, end: 377 },
          },
          directives: [],
          loc: { start: 322, end: 377 },
        },
      ],
      loc: { start: 297, end: 379 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateUserInput',
        loc: { start: 387, end: 402 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 407, end: 415 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 417, end: 423 },
              },
              loc: { start: 417, end: 423 },
            },
            loc: { start: 417, end: 424 },
          },
          directives: [],
          loc: { start: 407, end: 424 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 427, end: 432 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 434, end: 440 },
              },
              loc: { start: 434, end: 440 },
            },
            loc: { start: 434, end: 441 },
          },
          directives: [],
          loc: { start: 427, end: 441 },
        },
      ],
      loc: { start: 381, end: 443 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateUserPayload',
        loc: { start: 450, end: 467 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 472, end: 476 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 478, end: 482 },
            },
            loc: { start: 478, end: 482 },
          },
          directives: [],
          loc: { start: 472, end: 482 },
        },
      ],
      loc: { start: 445, end: 484 },
    },
  ],
  loc: { start: 0, end: 485 },
} as unknown as DocumentNode;
