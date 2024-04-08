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
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'books', loc: { start: 70, end: 75 } },
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
                    value: 'Book',
                    loc: { start: 78, end: 82 },
                  },
                  loc: { start: 78, end: 82 },
                },
                loc: { start: 78, end: 83 },
              },
              loc: { start: 77, end: 84 },
            },
            loc: { start: 77, end: 85 },
          },
          directives: [],
          loc: { start: 70, end: 85 },
        },
      ],
      loc: { start: 26, end: 87 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 101, end: 109 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'markBookAsRead',
            loc: { start: 114, end: 128 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 129, end: 131 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 133, end: 135 },
                  },
                  loc: { start: 133, end: 135 },
                },
                loc: { start: 133, end: 136 },
              },
              directives: [],
              loc: { start: 129, end: 136 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Book',
                loc: { start: 139, end: 143 },
              },
              loc: { start: 139, end: 143 },
            },
            loc: { start: 139, end: 144 },
          },
          directives: [],
          loc: { start: 114, end: 144 },
        },
      ],
      loc: { start: 89, end: 146 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Book', loc: { start: 153, end: 157 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 162, end: 164 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 166, end: 168 },
              },
              loc: { start: 166, end: 168 },
            },
            loc: { start: 166, end: 169 },
          },
          directives: [],
          loc: { start: 162, end: 169 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isbn', loc: { start: 172, end: 176 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 178, end: 184 },
              },
              loc: { start: 178, end: 184 },
            },
            loc: { start: 178, end: 185 },
          },
          directives: [],
          loc: { start: 172, end: 185 },
        },
      ],
      loc: { start: 148, end: 187 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 200, end: 205 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'diaries',
            loc: { start: 210, end: 217 },
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
                    loc: { start: 220, end: 225 },
                  },
                  loc: { start: 220, end: 225 },
                },
                loc: { start: 220, end: 226 },
              },
              loc: { start: 219, end: 227 },
            },
            loc: { start: 219, end: 228 },
          },
          directives: [],
          loc: { start: 210, end: 228 },
        },
      ],
      loc: { start: 188, end: 230 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 244, end: 252 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createDiary',
            loc: { start: 257, end: 268 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 269, end: 274 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateDiaryInput',
                    loc: { start: 276, end: 292 },
                  },
                  loc: { start: 276, end: 292 },
                },
                loc: { start: 276, end: 293 },
              },
              directives: [],
              loc: { start: 269, end: 293 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CreateDiaryPayload',
                loc: { start: 296, end: 314 },
              },
              loc: { start: 296, end: 314 },
            },
            loc: { start: 296, end: 315 },
          },
          directives: [],
          loc: { start: 257, end: 315 },
        },
      ],
      loc: { start: 232, end: 317 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateDiaryInput',
        loc: { start: 325, end: 341 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 346, end: 352 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 354, end: 356 },
              },
              loc: { start: 354, end: 356 },
            },
            loc: { start: 354, end: 357 },
          },
          directives: [],
          loc: { start: 346, end: 357 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 360, end: 365 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 367, end: 373 },
              },
              loc: { start: 367, end: 373 },
            },
            loc: { start: 367, end: 374 },
          },
          directives: [],
          loc: { start: 360, end: 374 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 377, end: 384 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 386, end: 392 },
              },
              loc: { start: 386, end: 392 },
            },
            loc: { start: 386, end: 393 },
          },
          directives: [],
          loc: { start: 377, end: 393 },
        },
      ],
      loc: { start: 319, end: 395 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateDiaryPayload',
        loc: { start: 402, end: 420 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'diary', loc: { start: 425, end: 430 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Diary',
              loc: { start: 432, end: 437 },
            },
            loc: { start: 432, end: 437 },
          },
          directives: [],
          loc: { start: 425, end: 437 },
        },
      ],
      loc: { start: 397, end: 439 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Diary', loc: { start: 446, end: 451 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 456, end: 458 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 460, end: 462 },
              },
              loc: { start: 460, end: 462 },
            },
            loc: { start: 460, end: 463 },
          },
          directives: [],
          loc: { start: 456, end: 463 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 466, end: 471 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 473, end: 479 },
              },
              loc: { start: 473, end: 479 },
            },
            loc: { start: 473, end: 480 },
          },
          directives: [],
          loc: { start: 466, end: 480 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 483, end: 490 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 492, end: 498 },
              },
              loc: { start: 492, end: 498 },
            },
            loc: { start: 492, end: 499 },
          },
          directives: [],
          loc: { start: 483, end: 499 },
        },
      ],
      loc: { start: 441, end: 501 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 514, end: 519 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 524, end: 528 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 529, end: 531 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 533, end: 535 },
                  },
                  loc: { start: 533, end: 535 },
                },
                loc: { start: 533, end: 536 },
              },
              directives: [],
              loc: { start: 529, end: 536 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 539, end: 543 },
            },
            loc: { start: 539, end: 543 },
          },
          directives: [],
          loc: { start: 524, end: 543 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'users', loc: { start: 546, end: 551 } },
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
                    loc: { start: 554, end: 558 },
                  },
                  loc: { start: 554, end: 558 },
                },
                loc: { start: 554, end: 559 },
              },
              loc: { start: 553, end: 560 },
            },
            loc: { start: 553, end: 561 },
          },
          directives: [],
          loc: { start: 546, end: 561 },
        },
      ],
      loc: { start: 502, end: 563 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 570, end: 574 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 579, end: 581 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 583, end: 585 },
              },
              loc: { start: 583, end: 585 },
            },
            loc: { start: 583, end: 586 },
          },
          directives: [],
          loc: { start: 579, end: 586 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 589, end: 597 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 599, end: 605 },
              },
              loc: { start: 599, end: 605 },
            },
            loc: { start: 599, end: 606 },
          },
          directives: [],
          loc: { start: 589, end: 606 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 609, end: 614 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 616, end: 622 },
              },
              loc: { start: 616, end: 622 },
            },
            loc: { start: 616, end: 623 },
          },
          directives: [],
          loc: { start: 609, end: 623 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isAdmin',
            loc: { start: 626, end: 633 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 635, end: 642 },
              },
              loc: { start: 635, end: 642 },
            },
            loc: { start: 635, end: 643 },
          },
          directives: [],
          loc: { start: 626, end: 643 },
        },
      ],
      loc: { start: 565, end: 645 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 659, end: 667 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createUser',
            loc: { start: 672, end: 682 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 683, end: 688 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateUserInput',
                    loc: { start: 690, end: 705 },
                  },
                  loc: { start: 690, end: 705 },
                },
                loc: { start: 690, end: 706 },
              },
              directives: [],
              loc: { start: 683, end: 706 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CreateUserPayload',
                loc: { start: 709, end: 726 },
              },
              loc: { start: 709, end: 726 },
            },
            loc: { start: 709, end: 727 },
          },
          directives: [],
          loc: { start: 672, end: 727 },
        },
      ],
      loc: { start: 647, end: 729 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateUserInput',
        loc: { start: 737, end: 752 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 757, end: 765 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 767, end: 773 },
              },
              loc: { start: 767, end: 773 },
            },
            loc: { start: 767, end: 774 },
          },
          directives: [],
          loc: { start: 757, end: 774 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 777, end: 782 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 784, end: 790 },
              },
              loc: { start: 784, end: 790 },
            },
            loc: { start: 784, end: 791 },
          },
          directives: [],
          loc: { start: 777, end: 791 },
        },
      ],
      loc: { start: 731, end: 793 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateUserPayload',
        loc: { start: 800, end: 817 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 822, end: 826 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 828, end: 832 },
            },
            loc: { start: 828, end: 832 },
          },
          directives: [],
          loc: { start: 822, end: 832 },
        },
      ],
      loc: { start: 795, end: 834 },
    },
  ],
  loc: { start: 0, end: 835 },
} as unknown as DocumentNode;
