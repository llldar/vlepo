import { objectType } from 'nexus';

import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';

import { Paper } from './Paper';
import { Post } from './Post';
import { Project } from './Project';
import { Thought } from './Thought';

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.posts();
    t.model.thoughts();
    t.model.projects();
    t.model.papers();
    t.model.createdAt();
    t.model.updatedAt();
    t.connectionField('postsConnection', {
      type: Post,
      async resolve(root, args, ctx, info) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.post.findMany(args),
          () => ctx.prisma.post.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('thoughtsConnection', {
      type: Thought,
      async resolve(root, args, ctx, info) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.thought.findMany(args),
          () => ctx.prisma.thought.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('projectConnection', {
      type: Project,
      async resolve(root, args, ctx, info) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.project.findMany(args),
          () => ctx.prisma.project.count(),
          args,
        );
        return result;
      },
    });
    t.connectionField('papersConnection', {
      type: Paper,
      async resolve(root, args, ctx, info) {
        const result = await findManyCursorConnection(
          (args) => ctx.prisma.paper.findMany(args),
          () => ctx.prisma.paper.count(),
          args,
        );
        return result;
      },
    });
  },
});
