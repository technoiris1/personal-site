"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselContextValue = {
  carouselRef: UseEmblaCarouselType[0];
  api: UseEmblaCarouselType[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
};

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  orientation?: "horizontal" | "vertical";
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function mergeClassNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useCarouselContext() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("Carousel components must be used inside a <Carousel />.");
  }

  return context;
}

export function Carousel({
  opts,
  plugins,
  orientation = "horizontal",
  className,
  children,
  ...props
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "vertical" ? "y" : "x",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const updateState = React.useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    updateState(api);
    api.on("reInit", updateState);
    api.on("select", updateState);

    return () => {
      api.off("reInit", updateState);
      api.off("select", updateState);
    };
  }, [api, updateState]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        orientation,
      }}
    >
      <div
        className={mergeClassNames("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { carouselRef, orientation } = useCarouselContext();

  return (
    <div ref={carouselRef} className={mergeClassNames("overflow-hidden h-full", className)}>
      <div
        className={mergeClassNames(
          "flex h-full items-stretch",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarouselContext();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={mergeClassNames(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type CarouselControlProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CarouselPrevious({ className, onClick, ...props }: CarouselControlProps) {
  const { scrollPrev, canScrollPrev, orientation } = useCarouselContext();

  return (
    <button
      type="button"
      aria-label="Previous slide"
      disabled={!canScrollPrev}
      onClick={(event) => {
        scrollPrev();
        onClick?.(event);
      }}
      className={mergeClassNames(
        "flex h-10 w-10 items-center justify-center border-[3px] border-[#201d15] bg-[#fffdf6] text-sm text-[#201d15] transition hover:bg-[#f3ead5] disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    >
      {orientation === "vertical" ? "↑" : "←"}
    </button>
  );
}

export function CarouselNext({ className, onClick, ...props }: CarouselControlProps) {
  const { scrollNext, canScrollNext, orientation } = useCarouselContext();

  return (
    <button
      type="button"
      aria-label="Next slide"
      disabled={!canScrollNext}
      onClick={(event) => {
        scrollNext();
        onClick?.(event);
      }}
      className={mergeClassNames(
        "flex h-10 w-10 items-center justify-center border-[3px] border-[#201d15] bg-[#fffdf6] text-sm text-[#201d15] transition hover:bg-[#f3ead5] disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    >
      {orientation === "vertical" ? "↓" : "→"}
    </button>
  );
}
