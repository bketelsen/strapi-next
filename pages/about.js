import Head from 'next/head'
import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";
import Articles from "../components/articles";

import Category from "../components/category";
const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />

      <div className="relative bg-gray-50 pt-0 pb-20 px-4 sm:px-6 lg:pt-0 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
         <Category title={"About Me"} description={"Oversharing as a Service"} />
        </div>
      </div>

    </>
  );
};
export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?featured=true"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;