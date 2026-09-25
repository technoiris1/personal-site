"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import type { BlogPost } from "./blognew";

type BlogClientProps = {
    className?: string;
    posts: BlogPost[];
};

export default function BlogClient({ className = "", posts }: BlogClientProps) {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        if (!selectedPost) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedPost(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedPost]);

    return (
        <main className="site-page">
            <div className={`construction-frame blog-frame ${selectedPost ? "is-reading" : ""} ${className}`}>
                <div className="frame-content blog-content">
                    <aside className="site-nav blog-sidebar" aria-label="Main navigation">
                        <Link href="/">Home</Link>
                        <Link href="/things">Things</Link>
                        <Link href="/journal">Journal</Link>
                        <Link href="/contact">Contact</Link>
                    </aside>
                    <section className="blog-panel" aria-labelledby="blog-title">
                        {!selectedPost ? (
                            <>
                                <h1 id="blog-title">Journal</h1>
                                <div className="blog-grid">
                                    {posts.map((post) => (
                                        <button key={post.slug} type="button" className="blog-card" onClick={() => setSelectedPost(post)}>
                                            <span className="blog-card-title">{post.title}</span>
                                            <span className="blog-card-description">{post.description}</span>
                                            <span className="blog-card-link">Read entry</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <article className="blog-article">
                                <button type="button" className="back-button" onClick={() => setSelectedPost(null)} aria-label="Back to journal" title="Back to journal">
                                    <span aria-hidden="true">&larr;</span>
                                </button>
                                <header className="blog-article-header">
                                    <h1>{selectedPost.title}</h1>
                                    <p>{selectedPost.description}</p>
                                </header>
                                <div className="markdown-content">
                                    <MDXRemote {...selectedPost.source} components={{
                                    h1: ({ children }) => (
                                        <h1 className="mb-4 text-4xl font-bold leading-tight text-[#1e1910]">{children}</h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="mb-3 mt-7 text-3xl font-semibold leading-tight text-[#241d12]">{children}</h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="mb-2 mt-6 text-2xl font-semibold leading-snug text-[#2a2115]">{children}</h3>
                                    ),
                                    p: ({ children }) => (
                                        <p className="mb-4 text-[1.12rem] font-medium leading-8 text-[#2f2618]">{children}</p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="mb-5 list-disc space-y-2 pl-6 text-[1.12rem] font-medium leading-8 text-[#2f2618]">
                                            {children}
                                        </ul>
                                    ),
                                    ol: ({ children }) => (
                                        <ol className="mb-5 list-decimal space-y-2 pl-6 text-[1.12rem] font-medium leading-8 text-[#2f2618]">
                                            {children}
                                        </ol>
                                    ),
                                    blockquote: ({ children }) => (
                                        <blockquote className="my-6 border-l-4 border-[#201d15] bg-[#f4e8d3] px-4 py-3 italic text-[#3f3424]">
                                            {children}
                                        </blockquote>
                                    ),
                                    code: ({ children }) => (
                                        <code className="rounded bg-[#efe2cc] px-1.5 py-0.5 text-sm text-[#2d2110]">{children}</code>
                                    ),
                                    img: ({ src = "", alt = "", width, height }) => (
                                        <img
                                            src={String(src)}
                                            alt={String(alt)}
                                            width={width ? Number(width) : undefined}
                                            height={height ? Number(height) : undefined}
                                            className="my-6 h-auto max-w-full border-2 border-[#201d15]"
                                        />
                                    ),
                                    }} />
                                </div>
                            </article>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}
