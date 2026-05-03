import path from "node:path";
import { readFile } from "node:fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import BlogClient from "./blog-client";

type BlogProps = {
    className?: string;
};

type Post = {
    title: string;
    excerpt?: string;
    meta: string;
    tone: string;
    path: string;
};

const posts: Post[] = [
    {
        title: "Overglade",
        excerpt: "Overglade was a 4-day long game jam in Singapore by Hack Club. It was one of most life changing experiences I've had. I met a lot of new amazing people and genuinely changed a lot as a person in that one week........ ",
        meta: "",
        tone: "linear-gradient(135deg, #ead8d1 0%, #c9b3aa 100%)",
        path: "/blogs/overglade.md",
    },
];

type HydratedPost = Post & {
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
    computedExcerpt: string;
};

function normalizePublicPath(inputPath: string) {
    const normalized = inputPath.startsWith("/") ? inputPath.slice(1) : inputPath;

    if (normalized.startsWith("blog/")) {
        return normalized.replace(/^blog\//, "blogs/");
    }

    return normalized;
}

function stripMarkdown(markdown: string) {
    return markdown
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/`([^`]*)`/g, "$1")
        .replace(/<[^>]+>/g, " ")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .replace(/^\s{0,3}#{1,6}\s+/gm, "")
        .replace(/^\s{0,3}>\s?/gm, "")
        .replace(/^\s*[-*+]\s+/gm, "")
        .replace(/^\s*\d+\.\s+/gm, "")
        .replace(/[*_~]/g, "")
        .replace(/\n+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function makeExcerpt(markdown: string, fallback = "") {
    const plain = stripMarkdown(markdown);

    if (!plain) {
        return fallback;
    }

    if (plain.length <= 180) {
        return plain;
    }

    return `${plain.slice(0, 180).trimEnd()}...`;
}

export default async function Blog({ className = "" }: BlogProps) {
    const hydratedPosts: HydratedPost[] = await Promise.all(
        posts.map(async (post) => {
            const publicPath = normalizePublicPath(post.path);
            const fullPath = path.join(process.cwd(), "public", publicPath);
            const content = await readFile(fullPath, "utf8");
            const mdxSource = await serialize(content);

            return {
                ...post,
                path: `/${publicPath}`,
                mdxSource,
                computedExcerpt: makeExcerpt(content, post.excerpt),
            };
        }),
    );

    return <BlogClient className={className} posts={hydratedPosts} />;
}