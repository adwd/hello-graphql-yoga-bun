import type { QueryResolvers } from './../../../types.generated';
export const diaries: NonNullable<QueryResolvers['diaries']> = async (
  _parent,
  _arg,
  ctx,
) => {
  const diaries = await ctx.prisma.diary.findMany();

  return diaries.map((d) => ({
    __typename: 'Diary',
    id: d.id.toString(),
    title: d.title,
    content: d.content,
  }));
};
