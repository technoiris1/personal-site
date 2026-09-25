import path from "node:path";
import { readdir, readFile } from "node:fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import BlogClient from "./blog-client";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
};

function getMetadata(markdown: string, slug: string) {
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  const metadata = new Map<string, string>();

  frontmatter?.[1].split("\n").forEach((line) => {
    const match = line.match(/^([\w-]+):\s*["']?(.*?)["']?\s*$/);
    if (match) metadata.set(match[1], match[2]);
  });

  const heading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const body = markdown
    .replace(/^---\s*\n[\s\S]*?\n---\s*/m, "")
    .replace(/^#\s+.+$/m, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#*_>`~-]/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  return {
    title: metadata.get("title") || heading || slug.replace(/[-_]/g, " "),
    description: metadata.get("description") || metadata.get("excerpt") || body.slice(0, 180) || "A new entry in the journal.",
  };
}

async function loadPosts(): Promise<BlogPost[]> {
  const directory = path.join(process.cwd(), "public", "blogs");
  const filenames = (await readdir(directory)).filter((filename) => /\.(md|mdx)$/.test(filename)).sort();
  const seen = new Set<string>();
  const posts: BlogPost[] = [];

  for (const filename of filenames) {
    const slug = filename.replace(/\.(md|mdx)$/, "");
    if (seen.has(slug)) continue;
    seen.add(slug);

    const markdown = await readFile(path.join(directory, filename), "utf8");
    const metadata = getMetadata(markdown, slug);
    posts.push({ slug, ...metadata, source: await serialize(markdown) });
  }

  return posts;
}

export default async function Blogs() {
  return <BlogClient posts={await loadPosts()} />;
}
