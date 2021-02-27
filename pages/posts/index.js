import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Category from "../../components/category";
import Articles from "../../components/articles";
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import DefaultLayout from "../../layouts/default";


const Home = ({ posts }) => {
  return (
    <DefaultLayout>

      <div className="relative bg-gray-50 pt-0 pb-20 px-4 sm:px-6 lg:pt-0 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Category title={"Posts"} description={"Blog Posts, Ramblings, and Such"} />
          <Articles posts={posts} />
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

 
  return { props: {posts} }
}

export default Home;