import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import BytesLayout from '@/layouts/bytes';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <BytesLayout frontMatter={frontMatter}>{content}</BytesLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('bytes');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('bytes', params.slug);

  return { props: post };
}
