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
          name: {
            kind: 'Name',
            value: 'diaries',
            loc: { start: 192, end: 199 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Diary',
                    loc: { start: 202, end: 207 },
                  },
                  loc: { start: 202, end: 207 },
                },
                loc: { start: 202, end: 208 },
              },
              loc: { start: 201, end: 209 },
            },
            loc: { start: 201, end: 210 },
          },
          directives: [],
          loc: { start: 192, end: 210 },
        },
      ],
      loc: { start: 170, end: 212 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 226, end: 234 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createDiary',
            loc: { start: 239, end: 250 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 251, end: 256 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateDiaryInput',
                    loc: { start: 258, end: 274 },
                  },
                  loc: { start: 258, end: 274 },
                },
                loc: { start: 258, end: 275 },
              },
              directives: [],
              loc: { start: 251, end: 275 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CreateDiaryPayload',
                loc: { start: 278, end: 296 },
              },
              loc: { start: 278, end: 296 },
            },
            loc: { start: 278, end: 297 },
          },
          directives: [],
          loc: { start: 239, end: 297 },
        },
      ],
      loc: { start: 214, end: 299 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateDiaryInput',
        loc: { start: 307, end: 323 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 328, end: 334 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 336, end: 338 },
              },
              loc: { start: 336, end: 338 },
            },
            loc: { start: 336, end: 339 },
          },
          directives: [],
          loc: { start: 328, end: 339 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 342, end: 347 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 349, end: 355 },
              },
              loc: { start: 349, end: 355 },
            },
            loc: { start: 349, end: 356 },
          },
          directives: [],
          loc: { start: 342, end: 356 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 359, end: 366 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 368, end: 374 },
              },
              loc: { start: 368, end: 374 },
            },
            loc: { start: 368, end: 375 },
          },
          directives: [],
          loc: { start: 359, end: 375 },
        },
      ],
      loc: { start: 301, end: 377 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateDiaryPayload',
        loc: { start: 384, end: 402 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'diary', loc: { start: 407, end: 412 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Diary',
              loc: { start: 414, end: 419 },
            },
            loc: { start: 414, end: 419 },
          },
          directives: [],
          loc: { start: 407, end: 419 },
        },
      ],
      loc: { start: 379, end: 421 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Diary', loc: { start: 428, end: 433 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 438, end: 440 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 442, end: 444 },
              },
              loc: { start: 442, end: 444 },
            },
            loc: { start: 442, end: 445 },
          },
          directives: [],
          loc: { start: 438, end: 445 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 448, end: 453 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 455, end: 461 },
              },
              loc: { start: 455, end: 461 },
            },
            loc: { start: 455, end: 462 },
          },
          directives: [],
          loc: { start: 448, end: 462 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 465, end: 472 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 474, end: 480 },
              },
              loc: { start: 474, end: 480 },
            },
            loc: { start: 474, end: 481 },
          },
          directives: [],
          loc: { start: 465, end: 481 },
        },
      ],
      loc: { start: 423, end: 483 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 496, end: 501 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 506, end: 510 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 511, end: 513 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 515, end: 517 },
                  },
                  loc: { start: 515, end: 517 },
                },
                loc: { start: 515, end: 518 },
              },
              directives: [],
              loc: { start: 511, end: 518 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 521, end: 525 },
            },
            loc: { start: 521, end: 525 },
          },
          directives: [],
          loc: { start: 506, end: 525 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'users', loc: { start: 528, end: 533 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'User',
                    loc: { start: 536, end: 540 },
                  },
                  loc: { start: 536, end: 540 },
                },
                loc: { start: 536, end: 541 },
              },
              loc: { start: 535, end: 542 },
            },
            loc: { start: 535, end: 543 },
          },
          directives: [],
          loc: { start: 528, end: 543 },
        },
      ],
      loc: { start: 484, end: 545 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 552, end: 556 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 561, end: 563 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 565, end: 567 },
              },
              loc: { start: 565, end: 567 },
            },
            loc: { start: 565, end: 568 },
          },
          directives: [],
          loc: { start: 561, end: 568 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 571, end: 579 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 581, end: 587 },
              },
              loc: { start: 581, end: 587 },
            },
            loc: { start: 581, end: 588 },
          },
          directives: [],
          loc: { start: 571, end: 588 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 591, end: 596 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 598, end: 604 },
              },
              loc: { start: 598, end: 604 },
            },
            loc: { start: 598, end: 605 },
          },
          directives: [],
          loc: { start: 591, end: 605 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isAdmin',
            loc: { start: 608, end: 615 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 617, end: 624 },
              },
              loc: { start: 617, end: 624 },
            },
            loc: { start: 617, end: 625 },
          },
          directives: [],
          loc: { start: 608, end: 625 },
        },
      ],
      loc: { start: 547, end: 627 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 641, end: 649 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createUser',
            loc: { start: 654, end: 664 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 665, end: 670 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateUserInput',
                    loc: { start: 672, end: 687 },
                  },
                  loc: { start: 672, end: 687 },
                },
                loc: { start: 672, end: 688 },
              },
              directives: [],
              loc: { start: 665, end: 688 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CreateUserPayload',
                loc: { start: 691, end: 708 },
              },
              loc: { start: 691, end: 708 },
            },
            loc: { start: 691, end: 709 },
          },
          directives: [],
          loc: { start: 654, end: 709 },
        },
      ],
      loc: { start: 629, end: 711 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateUserInput',
        loc: { start: 719, end: 734 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 739, end: 747 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 749, end: 755 },
              },
              loc: { start: 749, end: 755 },
            },
            loc: { start: 749, end: 756 },
          },
          directives: [],
          loc: { start: 739, end: 756 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 759, end: 764 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 766, end: 772 },
              },
              loc: { start: 766, end: 772 },
            },
            loc: { start: 766, end: 773 },
          },
          directives: [],
          loc: { start: 759, end: 773 },
        },
      ],
      loc: { start: 713, end: 775 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateUserPayload',
        loc: { start: 782, end: 799 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 804, end: 808 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 810, end: 814 },
            },
            loc: { start: 810, end: 814 },
          },
          directives: [],
          loc: { start: 804, end: 814 },
        },
      ],
      loc: { start: 777, end: 816 },
    },
  ],
  loc: { start: 0, end: 817 },
} as unknown as DocumentNode;
