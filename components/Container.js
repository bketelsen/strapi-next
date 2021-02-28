import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';
import Navigation from '@/components/Nav';
export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Brian Ketelsen',
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: 'https://brian.dev/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://brian.dev${router.asPath}`} />
        <link rel="canonical" href={`https://brian.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Brian Ketelsen" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@b" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navigation />
      <main
        id="skip"
      >
       <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

        {children}
          </div>
        <Footer />
      </main>
    </div>
  );
}
