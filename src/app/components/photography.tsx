import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";

type PhotographyProps = {
    className?: string;
};

const pictures = [
    "https://cdn.hackclub.com/019dc5da-0532-73f2-b4d6-f54fbb4e4e49/WhatsApp%20Image%202026-04-25%20at%2023.34.31.jpeg",
    "https://cdn.hackclub.com/019dc5d9-d554-7989-a95b-27055458ad7e/WhatsApp%20Image%202026-04-25%20at%2023.34.31%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d9-7ef4-7e2c-ba01-b398c7d29f19/WhatsApp%20Image%202026-04-25%20at%2023.34.30.jpeg",
    "https://cdn.hackclub.com/019dc5d9-43ef-717a-bd2e-39054bd6674c/WhatsApp%20Image%202026-04-25%20at%2023.34.30%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d9-10c5-7497-ac4a-a226cfe38989/WhatsApp%20Image%202026-04-25%20at%2023.34.29.jpeg",
    "https://cdn.hackclub.com/019dc5d8-ea54-7646-ad17-a41f74ec0d0f/WhatsApp%20Image%202026-04-25%20at%2023.34.29%20(2).jpeg",
    "https://cdn.hackclub.com/019dc5d8-d282-75bd-862f-193df1a3e2e8/WhatsApp%20Image%202026-04-25%20at%2023.34.29%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d8-bc84-72ae-9096-4bac0c3eabe4/WhatsApp%20Image%202026-04-25%20at%2023.34.27.jpeg",
    "https://cdn.hackclub.com/019dc5d8-971c-7fd5-a8a9-cb1ede4ecab5/WhatsApp%20Image%202026-04-25%20at%2023.34.28.jpeg",
    "https://cdn.hackclub.com/019dc5d8-67d2-79fc-b7a7-f20993c315db/WhatsApp%20Image%202026-04-25%20at%2023.34.26.jpeg",
    "https://cdn.hackclub.com/019dc5d8-53d3-79af-b191-03eba5cc2e1b/WhatsApp%20Image%202026-04-25%20at%2023.34.26%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d8-28e8-7839-93b0-13342e5451f1/WhatsApp%20Image%202026-04-25%20at%2023.34.21.jpeg",
    "https://cdn.hackclub.com/019dc5d7-89b3-76b2-a0c6-6af4355eeb1a/WhatsApp%20Image%202026-04-25%20at%2023.34.25.jpeg",
    "https://cdn.hackclub.com/019dc5d7-693b-7615-ab47-432df60cc612/WhatsApp%20Image%202026-04-25%20at%2023.34.25%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d7-3aba-7d1a-913c-99f001a383f4/WhatsApp%20Image%202026-04-25%20at%2023.34.21%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d7-2078-7580-8535-4b0c134235df/WhatsApp%20Image%202026-04-25%20at%2023.34.21.jpeg",
    "https://cdn.hackclub.com/019dc5d7-086c-772f-a9c6-c7fe025fe407/WhatsApp%20Image%202026-04-25%20at%2023.34.20.jpeg",
    "https://cdn.hackclub.com/019dc5d6-eda5-7e45-ae04-555af75d6bd5/WhatsApp%20Image%202026-04-25%20at%2023.34.20%20(2).jpeg",
    "https://cdn.hackclub.com/019dc5d6-d2b4-732b-b4de-f303b21c5430/WhatsApp%20Image%202026-04-25%20at%2023.34.20%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d6-bf6c-7cb3-9c8d-e77fbd16b483/WhatsApp%20Image%202026-04-25%20at%2023.34.19.jpeg",
    "https://cdn.hackclub.com/019dc5d6-aa93-7ae1-85ab-47fb6160ed88/WhatsApp%20Image%202026-04-25%20at%2023.34.19%20(1).jpeg",
    "https://cdn.hackclub.com/019dc5d6-4752-7ca2-b0bf-3e9f1680084d/WhatsApp%20Image%202026-04-25%20at%2023.34.18.jpeg"
]


export default function Photography({ className = "" }: PhotographyProps) {
    return (
        <div className={`flex h-full w-full flex-col border-[3px] border-[#201d15] bg-[#fffdf6] ${className}`}>
            <div className="pt-8 pl-8 pr-20">
                <p className="hero-name text-5xl tracking-normal text-[#201d15]">Random Clicks</p>
            </div>

            <div className="flex-1 min-h-0 pt-4 pb-6 pl-8 pr-8">
                <Carousel className="flex h-full flex-col" opts={{ loop: true, align: "start" }}>
                    <div className="min-h-0 flex-1">
                        <CarouselContent className="h-full">
                            {pictures.map((item) => (
                                <CarouselItem className="h-full basis-[82%] sm:basis-[58%] lg:basis-[42%] xl:basis-[36%]">
                                    <article className="flex h-full flex-col border-[3px] border-[#201d15] bg-[#f7f1e4]">
                                        <div className="min-h-0 flex-1 border-b-[3px] border-[#201d15]">
                                            <img
                                                src={item}
                                                alt="picture"
                                                className="h-full min-h-56 w-full object-cover"
                                                loading="lazy"
                                            />
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