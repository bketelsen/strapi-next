import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Category from "../components/category";
import Articles from "../components/articles";
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { lptFilePaths, LPT_PATH } from '../utils/mdxUtils'
import { byteFilePaths, BYTES_PATH } from '../utils/mdxUtils'
import { projectFilePaths, PROJECTS_PATH } from '../utils/mdxUtils'

import DefaultLayout from "../layouts/default";
const Home = ({ posts,projects,bytes,lpts }) => {
  return (
    <DefaultLayout>

      <div className="relative bg-gray-50 pt-0 pb-20 px-4 sm:px-6 lg:pt-0 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Category title={"Featured"} description={"Recent and Popular Content"} />
          <Articles posts={posts} />
          <Articles posts={bytes} />
          <Articles posts={lpts} />
          <Articles posts={projects} />
        </div>
      </div>

    </DefaultLayout>
  );
};
export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  const lpts = lptFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(LPT_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  const bytes = byteFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BYTES_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  const projects = projectFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })
  return { props: { posts: posts, lpts: lpts, bytes: bytes, projects: projects } }
}

export default Home;