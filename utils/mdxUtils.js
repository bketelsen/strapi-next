import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'content','posts')
export const BYTES_PATH = path.join(process.cwd(), 'content','bytes')
export const LPT_PATH = path.join(process.cwd(), 'content','lpt')
export const PROJECTS_PATH = path.join(process.cwd(), 'content','projects')


// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// byteFilePaths is the list of all mdx files inside the BYTES_PATH directory
export const byteFilePaths = fs
  .readdirSync(BYTES_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// lptFilePaths is the list of all mdx files inside the LPT_PATH directory
export const lptFilePaths = fs
  .readdirSync(LPT_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// projectFilePaths is the list of all mdx files inside the PROJECTS_PATH directory
export const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))