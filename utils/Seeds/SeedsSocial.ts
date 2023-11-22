// https://www.bezkoder.com/mongodb-many-to-many-mongoose/#Mongoose_Many-to-Many_Relationship_example
export const SeedsSocial: Entity[] = [
  {
    _id: 'fb80c35deae8c1d25f4acbbd',
    name: 'user',
    plural: 'users',
    label: 'User',
    pluralL: 'Users',
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: '5f6ab0bbfb54cf51242ddb6a',
        validators: [],
        validations: [],
      },
      {
        name: 'email',
        type: 'string',
        _id: '0ca1c138ce4ddacdcbbc49d6',
        validators: ['email', 'unique'],
        validations: [],
      },
      {
        name: 'firstName',
        type: 'string',
        _id: '5aab0a1efa84976ab3afea9e',
        validators: [],
        validations: [],
      },
      {
        name: 'lastName',
        type: 'string',
        _id: '040e9eeeec2ae4eb4fd1946e',
        validators: [],
        validations: [],
      },
      {
        name: 'age',
        type: 'number',
        _id: 'dcb9b448e5bce7c8bdea1ece',
        validators: [],
        validations: [],
      },
      {
        name: 'status',
        type: 'enumerator',
        _id: '077cb5ead63ef967d1adcc2c',
        validators: [],
        validations: [],
        options: 'open,closed,pending',
      },
    ],
  },
  {
    name: 'post',
    label: 'Post',
    plural: 'posts',
    pluralL: 'Posts',
    attributes: [
      {
        validators: [],
        validations: [],
        type: 'text',
        name: 'body',
        _id: 'b2f7ba1d54e96efde13eb8cb',
      },
      {
        validators: [],
        validations: [],
        type: 'mto',
        name: 'user',
        _id: 'edc7cb110e4ddcabd5a56e9b',
      },
      {
        validators: [],
        validations: [],
        type: 'otm',
        name: 'comments',
        _id: 'c95a6dabb57da6faed231683',
      },
      {
        validators: [],
        validations: [],
        type: 'otm',
        name: 'reactions',
        _id: 'bcb7aaf6a9c84ec2d3c4fae1',
      },
      {
        validators: [],
        validations: [],
        type: 'otm',
        name: 'photos',
        _id: 'ee2dba55b09fabf3901ab6c7',
      },
    ],
    _id: '59abcbce7aeedbbcd5d90b93',
  },
]
