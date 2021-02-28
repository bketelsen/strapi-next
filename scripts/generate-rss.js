const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'Brian Ketelsen',
    site_url: 'https://brian.dev',
    feed_url: 'https://brian.dev/feed.xml'
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'blog'));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(
        path.join(__dirname, '..', 'data', 'blog', name)
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: 'https://brian.dev/blog/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary
      });
    })
  );
  const bytes = await fs.readdir(path.join(__dirname, '..', 'data', 'bytes'));

  await Promise.all(
    bytes.map(async (name) => {
      const content = await fs.readFile(
        path.join(__dirname, '..', 'data', 'bytes', name)
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: 'https://brian.dev/bytes/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary
      });
    })
  );


  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
