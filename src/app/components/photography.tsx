import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";

type PhotographyProps = {
    className?: string;
};

const highlights = [
    {
        title: "Golden Hour Street",
        caption: "Evening light bouncing off old city walls.",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Misty Pine Ridge",
        caption: "Quiet mornings where the clouds sit low.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Desert Geometry",
        caption: "Patterns in dunes right before sunset.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Rainy Window",
        caption: "Soft city lights through monsoon drops.",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80",
    },
];

export default function Photography({ className = "" }: PhotographyProps) {
    return (
        <div className={`flex h-full w-full flex-col border-[3px] border-[#201d15] bg-[#fffdf6] ${className}`}>
            <div className="pt-8 pl-8 pr-20">
                <p className="hero-name text-5xl tracking-normal text-[#201d15]">Photography</p>
            </div>

            <div className="flex-1 min-h-0 pt-4 pb-6 pl-8 pr-8">
                <Carousel className="flex h-full flex-col" opts={{ loop: true, align: "start" }}>
                    <div className="min-h-0 flex-1">
                        <CarouselContent className="h-full">
                            {highlights.map((item) => (
                                <CarouselItem key={item.title} className="h-full basis-[82%] sm:basis-[58%] lg:basis-[42%] xl:basis-[36%]">
                                    <article className="flex h-full flex-col border-[3px] border-[#201d15] bg-[#f7f1e4]">
                                        <div className="min-h-0 flex-1 border-b-[3px] border-[#201d15]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full min-h-56 w-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="space-y-2 p-4">
                                            <p
                                                className="text-xl font-semibold text-[#201d15]"
                                                style={{ fontFamily: "var(--font-montserrat)" }}
                                            >
                                                {item.title}
                                            </p>
                                            <p
                                                className="text-sm leading-6 text-[#201d15]"
                                                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 550 }}
                                            >
                                                {item.caption}
                                            </p>
                                        </div>
                                    </article>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <CarouselPrevious className="static" />
                        <CarouselNext className="static" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}