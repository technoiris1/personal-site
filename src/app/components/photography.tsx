import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";

type PhotographyProps = {
    className?: string;
};

const highlights = [
    {
        title: "A very good picture",
        caption: "pic pic pic pic pic pic pic pic pic pic pic pic pic pic pic pic",
        tone: "from-[#f4e0c4] to-[#d8c1a0]",
    },
    {
        title: "a very interesting picture",
        caption: "pic pic picppic picpicpicpic.",
        tone: "from-[#d7e1d9] to-[#b4c3b4]",
    },
    {
        title: "exceptional picture",
        caption: "picpicpicpicpicpci picpci picpic piccpi cpi",
        tone: "from-[#ead8d1] to-[#c9b3aa]",
    },
];

export default function Photography({ className = "" }: PhotographyProps) {
    return (
        <div className={`flex h-full w-full flex-col border-[3px] border-[#201d15] bg-[#fffdf6] ${className}`}>
            <div className="pt-8 pl-8 pr-20">
                <p className="hero-name text-5xl tracking-normal text-[#201d15]">Photography</p>
            </div>

            <div className="flex-1 min-h-0 pt-4 pb-6 pl-8 pr-8">
                <Carousel className="h-full" opts={{ loop: true }}>
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent className="h-full">
                        {highlights.map((item) => (
                            <CarouselItem key={item.title} className="h-full">
                                <div
                                    className={`flex h-full flex-col justify-between border-[3px] border-[#201d15] bg-linear-to-br ${item.tone} p-6`}
                                >
                                    <div className="space-y-3">
                                        <p
                                            className="text-2xl font-semibold text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)" }}
                                        >
                                            {item.title}
                                        </p>
                                        <p
                                            className="max-w-xs text-sm leading-6 text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 550 }}
                                        >
                                            {item.caption}
                                        </p>
                                    </div>

                                    <p
                                        className="text-xs uppercase tracking-[0.35em] text-[#201d15]"
                                        style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                                    >
                                        Embla carousel
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}