import Link from 'next/link';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
         🤘🏻 Hey, I’m Brian
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a Cloud Developer Advocate at Microsoft, working on Open Source, cloud native, and emerging technologies.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Featured Blog Posts
        </h3>
        <BlogPost
          title="Improving My Next.js MDX Blog"
          summary="your mom"
          slug="mdx"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Featured Projects
        </h3>
        <ProjectCard
          title="React 2025"
          description="Build and deploy a modern Jamstack application using the most popular open-source software."
          href="https://react2025.com/"
          icon="react2025"
        />
      </div>
    </Container>
  );
}
