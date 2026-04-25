import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";

type BlogProps = {
    className?: string;
};

const posts = [
    {
        title: "bro wrote a blog",
        excerpt: "okkokokokokokokoookokokokokokokok",
        meta: "idk smth",
        tone: "linear-gradient(135deg, #f4e0c4 0%, #d8c1a0 100%)",
    },
    {
        title: "grown ahh mfs be writing blogs",
        excerpt: "okokokookokokokokokokokokokokokokokokokokok",
        meta: "idk smth",
        tone: "linear-gradient(135deg, #d7e1d9 0%, #b4c3b4 100%)",
    },
    {
        title: "blogs in the big 26",
        excerpt: "okokkokokokokokooookokookookookokoko",
        meta: "idk smth",
        tone: "linear-gradient(135deg, #ead8d1 0%, #c9b3aa 100%)",
    },
];

export default function Blog({ className = "" }: BlogProps) {
    return (
        <div className={`flex h-full w-full flex-col border-[3px] border-[#201d15] bg-[#fffdf6] ${className}`}>
            <div className="pt-8 pl-8 pr-20">
                <p className="hero-name text-5xl tracking-normal text-[#201d15]">Blog</p>
            </div>

            <div className="flex-1 min-h-0 pt-4 pb-6 pl-8 pr-8">
                <Carousel className="h-full" opts={{ loop: true }}>
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent className="h-full">
                        {posts.map((post) => (
                            <CarouselItem key={post.title} className="h-full">
                                <article
                                    className="flex h-full flex-col justify-between border-[3px] border-[#201d15] p-8"
                                    style={{ backgroundImage: post.tone }}
                                >
                                    <div className="space-y-5">
                                        <p
                                            className="text-3xl font-semibold text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)" }}
                                        >
                                            {post.title}
                                        </p>
                                        <p
                                            className="max-w-sm text-base leading-7 text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 550 }}
                                        >
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between gap-4">
                                        <p
                                            className="text-xs uppercase tracking-[0.35em] text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                                        >
                                            {post.meta}
                                        </p>
                                        <p
                                            className="text-sm text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                                        >
                                            Embla carousel
                                        </p>
                                    </div>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}