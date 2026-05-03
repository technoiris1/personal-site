"use client";

import { useEffect, useState } from "react";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";

type BlogPost = {
    title: string;
    excerpt?: string;
    computedExcerpt: string;
    meta: string;
    tone: string;
    path: string;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
};

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
        <div className={`flex pb-0 h-full w-full flex-col border-[3px] border-[#201d15] ${className}`}>
            <div className="pt-8 lg:pt-3 pl-8">
                <p className="hero-name text-5xl tracking-normal text-[#201d15]">Blog</p>
            </div>

            <div className="flex-[0.95] min-h-0 pt-4 pl-8 pr-8 pb-0">
                <Carousel className="flex h-full flex-col" opts={{ loop: true }}>
                    <CarouselContent className="flex-1 min-h-0">
                        {posts.map((post) => (
                            <CarouselItem key={post.title} className="h-full">
                                <button
                                    type="button"
                                    className="h-full w-full text-left"
                                    onClick={() => setSelectedPost(post)}
                                    aria-label={`Open blog post: ${post.title}`}
                                >
                                    <article
                                        className="flex h-full flex-col justify-between border-[3px] border-[#201d15] p-8"
                                        style={{ backgroundImage: post.tone }}
                                    >
                                        <div className="space-y-5">
                                            <p
                                                className="text-3xl font-semibold text-[#201d15] lg:-mt-4"
                                                style={{ fontFamily: "var(--font-montserrat)" }}
                                            >
                                                {post.title}
                                            </p>
                                            <p
                                                className="text-base leading-7 text-[#201d15]"
                                                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 550 }}
                                            >
                                                {post.excerpt?.trim() ? post.excerpt : post.computedExcerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">

                                        </div>
                                    </article>
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2" />
                </Carousel>
            </div>
            {selectedPost && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1710]/85 px-4 py-8 backdrop-blur-[2px]"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Reading ${selectedPost.title}`}
                    onClick={() => setSelectedPost(null)}
                >
                    <div
                        className="relative max-h-full w-full max-w-4xl overflow-y-auto border-[3px] border-[#201d15] bg-[linear-gradient(180deg,#fffdf6_0%,#f8efde_100%)] p-0 shadow-[10px_10px_0px_0px_#201d15]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="sticky top-0 z-10 mb-6 flex w-full items-start justify-between gap-4 border-b-[3px] border-[#201d15] bg-[#f2e3c8] px-6 py-5 sm:px-10">
                            <div>
                                <p
                                    className="text-3xl font-semibold text-[#201d15]"
                                    style={{ fontFamily: "var(--font-montserrat)" }}
                                >
                                    {selectedPost.title}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="border-[3px] border-[#201d15] bg-[#fffdf6] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#201d15] transition-colors hover:bg-[#f1e4cf]"
                                onClick={() => setSelectedPost(null)}
                            >
                                Close
                            </button>
                        </div>

                        <article className="max-w-none px-6 pb-8 sm:px-10" style={{ fontFamily: "var(--font-montserrat)", color: "#201d15" }}>
                            <MDXRemote
                                {...selectedPost.mdxSource}
                                components={{
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
                                        <p className="mb-4 text-[1.02rem] leading-8 text-[#2f2618]">{children}</p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="mb-5 list-disc space-y-2 pl-6 text-[1.02rem] leading-8 text-[#2f2618]">{children}</ul>
                                    ),
                                    ol: ({ children }) => (
                                        <ol className="mb-5 list-decimal space-y-2 pl-6 text-[1.02rem] leading-8 text-[#2f2618]">{children}</ol>
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
                                }}
                            />
                        </article>
                    </div>
                </div>
            )}
        </div>
    );
}
