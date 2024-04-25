import type { MutationResolvers } from './../../../graphql/types.generated';
export const createDiary: NonNullable<
  MutationResolvers['createDiary']
> = async (_parent, { input }, ctx) => {
  const result = await ctx.prisma.diary.create({
    data: {
      content: input.content,
      title: input.title,
      authorId: parseInt(input.userId),
    },
  });

  return {
    __typename: 'CreateDiaryPayload',
    diary: {
      __typename: 'Diary',
      id: result.id.toString(),
      title: result.title,
      content: result.content,
    },
  };
};
