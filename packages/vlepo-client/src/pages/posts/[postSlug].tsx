import { format, parseISO } from 'date-fns';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { graphql } from 'react-relay';
import rehypeSlug from 'rehype-slug';
import { useMutation, useQuery } from 'relay-hooks';
import { fetchQuery } from 'relay-runtime';
import { PostSlugViewMutation } from 'src/__generated__/PostSlugViewMutation.graphql';
import Avatar from 'src/components/Avatar';
import CommentSection from 'src/components/Comment/CommentSection';
import HoverShare from 'src/components/HoverShare/HoverShare';
import Image from 'src/components/Image';
import { Column, Row } from 'src/components/Layout/style';
import components from 'src/components/MDXComponents';
import PlaceHolder from 'src/components/PlaceHolder';
import { H5 } from 'src/components/Typography';
import { initEnvironment } from 'src/relay';

import { KeyboardBackspace } from '@emotion-icons/material-outlined';
import { css, useTheme } from '@emotion/react';

import { PostSlugQuery } from '../../__generated__/PostSlugQuery.graphql';
import { themeProvider } from '../_app';
import { ArticleBody, Back, Content, Header, Title } from './style';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query, res } = context;
  const { environment, relaySSR } = initEnvironment();
  const postSlug = query.postSlug as string;

  await new Promise((resolve, reject) => {
    fetchQuery<PostSlugQuery>(environment, postSlugQuery, {
      slug: postSlug,
    }).subscribe({
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });

  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData ?? [];

  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  const renderedMDX = await renderToString(queryPayload?.data?.post.content, {
    components,
    provider: themeProvider,
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  });

  return {
    props: {
      relayData: relayData && 'json' in queryPayload ? [[queryString, queryPayload.json]] : null,
      renderedMDX,
    },
  };
};

const postSlugQuery = graphql`
  query PostSlugQuery($slug: String!) {
    post(where: { slug: $slug }) {
      title
      owner {
        name
        profileImageUrl
      }
      tags {
        name
      }
      minuteRead
      headerImageUrl
      content
      createdAt
      ...CommentSection_commendable
    }
  }
`;

const postSlugViewMutation = graphql`
  mutation PostSlugViewMutation($slug: String!) {
    viewPost(slug: $slug)
  }
`;

const Post = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const postSlug = router.query.postSlug as string;
  const {
    renderedMDX = {
      compiledSource: '',
      renderedOutput: '',
      scope: {},
    },
  } = props;
  const { error, data } = useQuery<PostSlugQuery>(postSlugQuery, { slug: postSlug });
  const mdxContent = hydrate(renderedMDX, { components });
  const [fullUrl, setFullUrl] = useState('');
  const theme = useTheme();

  const [mutate] = useMutation<PostSlugViewMutation>(postSlugViewMutation);

  useEffect(() => {
    setFullUrl(window.location.href);
    mutate({ variables: { slug: postSlug } });
  }, [postSlug, mutate]);

  if (error) return <div>{error.message}</div>;
  if (!data || !data.post || router.isFallback) return <PlaceHolder />;

  const { headerImageUrl, title, owner, tags, createdAt, minuteRead } = data.post;

  return (
    <>
      <Header height={['18rem', '20rem', '22rem']}>
        <Image
          objectFit="cover"
          width="100%"
          filter={theme.filter.headerImage}
          height={['18rem', '20rem', '22rem']}
          mt={theme.heights.navbar}
          css={css`
            margin-top: 0;
          `}
          src={headerImageUrl}
          textShadow={
            headerImageUrl && theme.name === 'light' ? 'rgba(0,0,0, 0.3) 0 0 8px' : 'none'
          }
        >
          <Column width="100%" mb="auto">
            <Back onClick={() => router.back()}>
              <KeyboardBackspace size={24} />
              <H5 ml="0.5rem">Back</H5>
            </Back>
            <Title fontSize={[3, 4, 5]} mx="auto" mt="2rem">
              {title}
            </Title>
            <H5 fontWeight="normal" mx="auto" mt="2rem">
              {format(parseISO(createdAt), 'eee, MMM dd yyyy')}
              {' • '}
              {`${minuteRead ?? 1} min read`}
            </H5>
            <Row mx="auto" mt="0.5rem">
              {owner.profileImageUrl && (
                <Avatar size={28} mr="0.5rem" src={owner.profileImageUrl} />
              )}
              {owner.name && (
                <H5 fontWeight="normal" my="auto">
                  {owner.name}
                </H5>
              )}
            </Row>
          </Column>
        </Image>
      </Header>
      <HoverShare title={title} url={fullUrl} tags={tags.map((t) => t.name)} />
      <Column mb="2rem" mx="auto" width={[0.95, 0.9, 0.85, 0.8]}>
        <Row>
          <ArticleBody>
            <Content>{mdxContent}</Content>
          </ArticleBody>
        </Row>
        <CommentSection variant="post" parent={data.post} />
      </Column>
    </>
  );
};

export default Post;