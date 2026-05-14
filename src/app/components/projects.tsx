"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import Link from "next/link";

type ProjectsProps = {
    className?: string;
};

const projectCards = [
    {
        title: "Horizons Arcana",
        description: "Horizons Arcana is a 48-hour long 100+ person high-school hackathon in Singapore from July 31st- August 2nd, 2026. It's a Hack Club hackathon which I'm organising with a team of some other amazing high-schoolers at Hack Club. It's completely free to attend and open to all high-schoolers around the world, travel stipends available!",
        accent: "linear-gradient(180deg, #d8e3db 0%, #bccfbe 100%)",
        repoUrl: "https://github.com/technoiris1/horizons-arcana",
        liveUrl: "https://horizons-arcana.vercel.app/",
    },
    {
        title: "Airborne",
        description: "Airborne is a Hack Club YSWS(You ship, We ship) under which you design any machine which can fly, and in return you get a grant to build it physically. I'll be running this as an Summer Intern at Hack Club this summer.",
        accent: "linear-gradient(180deg, #f1e4cf 0%, #e2cfaf 100%)",
        repoUrl: "https://github.com/technoiris1/airborne",
        liveUrl: "https://airborne.dino.icu/",
    },

    {
        title: "Mind Your Steps",
        description: "Mind your steps is a small game I made in godot at a hackathon. It's a 2D platformer made on top of a theme 'Beneath the Surface'. You play as a monkey in it who has to collect bananas, while collecting them you fall inside a valley and get stuck in an ancient temple. You have to solve a puzzle to get out of there.",
        accent: "linear-gradient(180deg, #ebddd6 0%, #d8bfb3 100%)",
        repoUrl: "https://github.com/technoiris1/mind-your-steps",
        liveUrl: "https://manan-coder.itch.io/mind-your-steps",
    },
    {
        title: "nomad",
        description: "nomad is a foldable 3D printer which folds and turns into a suitcase. It is a cartesian bed-slinger print which has a build volume of 220*220*250mm.",
        accent: "linear-gradient(180deg, #ece8cf 0%, #d7ce9f 100%)",
        repoUrl: "https://github.com/technoiris1/nomad",
        liveUrl: "https://github.com/technoiris1/nomad/blob/main/JOURNAL.md",
    },
];

type ProjectCard = (typeof projectCards)[number];

export default function Projects({ className = "" }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);

    useEffect(() => {
        if (!selectedProject) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedProject]);

    return (
        <div
            className={`w-full h-[min(70vh,32rem)] sm:h-[min(70vh,34rem)] lg:h-full border-[3px] border-[#201d15] flex flex-col ${className}`}
        >
            <div className="pt-8 xl:pt-3 pl-8 2xl:pt-8">
                <p className="hero-name text-5xl tracking-normal text-[#201d15]">Projects</p>
            </div>
            <div className="flex-1 min-h-0 pt-4 pl-8 pr-8 pb-6 lg:pt-3 lg:pb-3">
                <Carousel
                    className="h-full"
                    orientation="vertical"
                    opts={{ loop: true, align: "start", dragFree: false }}
                >
                    <CarouselContent className="h-full">
                        {projectCards.map((project) => (
                            <CarouselItem key={project.title} className="basis-full lg:min-h-0">
                                <article
                                    className="h-full border-[3px] border-[#201d15] px-5 py-4 md:px-7 md:py-5 lg:py-4 flex flex-col justify-between lg:overflow-hidden"
                                    style={{ backgroundImage: project.accent }}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setSelectedProject(project)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            setSelectedProject(project);
                                        }
                                    }}
                                >
                                    <div className="space-y-2 md:space-y-3">
                                        <p
                                            className="text-[1.35rem] leading-tight md:text-[1.6rem] md:leading-tight lg:text-[1.5rem] lg:leading-snug text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
                                        >
                                            {project.title}
                                        </p>
                                        <p
                                            className="project-description-clamp text-sm leading-6 md:text-base md:leading-7 lg:text-[0.95rem] lg:leading-6 text-[#201d15]"
                                            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 550 }}
                                        >
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 md:mt-5 lg:mt-3 space-y-2 md:space-y-3 shrink-0">
                                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                                            <Link
                                                href={project.repoUrl || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-disabled={!project.repoUrl}
                                                onClick={(event) => event.stopPropagation()}
                                                className={`flex items-center justify-center border-2 border-[#201d15] px-3 py-2 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.12em] sm:tracking-[0.14em] leading-none whitespace-nowrap transition ${
                                                    project.repoUrl ? "bg-[#f4e9d2] text-[#201d15] hover:bg-[#ead9ba]" : "pointer-events-none bg-[#e9ddc5] text-[#6f6250] opacity-60"
                                                }`}
                                                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                                            >
                                                GitHub Repo
                                            </Link>
                                            <Link
                                                href={project.liveUrl || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-disabled={!project.liveUrl}
                                                onClick={(event) => event.stopPropagation()}
                                                className={`flex items-center justify-center border-2 border-[#201d15] px-3 py-2 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.12em] sm:tracking-[0.14em] leading-none whitespace-nowrap transition ${
                                                    project.liveUrl ? "bg-[#f4e9d2] text-[#201d15] hover:bg-[#ead9ba]" : "pointer-events-none bg-[#e9ddc5] text-[#6f6250] opacity-60"
                                                }`}
                                                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                                            >
                                                Live Link
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 translate-x-1/2 flex-col gap-2">
                        <CarouselPrevious className="h-9 w-9" />
                        <CarouselNext className="h-9 w-9" />
                    </div>
                </Carousel>
            </div>
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1710]/85 px-4 py-8 backdrop-blur-[2px]"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Project details: ${selectedProject.title}`}
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative max-h-full w-full max-w-3xl overflow-y-auto border-[3px] border-[#201d15] p-0 shadow-[10px_10px_0px_0px_#201d15]"
                        style={{ backgroundImage: selectedProject.accent }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div
                            className="sticky top-0 z-10 mb-6 flex w-full items-start justify-between gap-4 border-b-[3px] border-[#201d15] px-6 py-5 sm:px-10"
                            style={{ backgroundImage: selectedProject.accent }}
                        >
                            <div>
                                <p
                                    className="text-3xl font-semibold text-[#201d15]"
                                    style={{ fontFamily: "var(--font-montserrat)" }}
                                >
                                    {selectedProject.title}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="border-[3px] border-[#201d15] bg-[#fffdf6] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#201d15] transition-colors hover:bg-[#f1e4cf]"
                                onClick={() => setSelectedProject(null)}
                            >
                                Close
                            </button>
                        </div>

                        <div
                            className="px-6 pb-8 sm:px-10"
                            style={{ fontFamily: "var(--font-montserrat)", color: "#201d15" }}
                        >
                            <p className="mb-6 text-[1.12rem] font-medium leading-8 text-[#2f2618]">
                                {selectedProject.description}
                            </p>
                            <div className="grid grid-cols-2 gap-2 md:gap-3">
                                <Link
                                    href={selectedProject.repoUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-disabled={!selectedProject.repoUrl}
                                    className={`flex items-center justify-center border-2 border-[#201d15] px-3 py-2 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.12em] sm:tracking-[0.14em] leading-none whitespace-nowrap transition ${
                                        selectedProject.repoUrl
                                            ? "bg-[#f4e9d2] text-[#201d15] hover:bg-[#ead9ba]"
                                            : "pointer-events-none bg-[#e9ddc5] text-[#6f6250] opacity-60"
                                    }`}
                                    style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                                >
                                    GitHub Repo
                                </Link>
                                <Link
                                    href={selectedProject.liveUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-disabled={!selectedProject.liveUrl}
                                    className={`flex items-center justify-center border-2 border-[#201d15] px-3 py-2 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.12em] sm:tracking-[0.14em] leading-none whitespace-nowrap transition ${
                                        selectedProject.liveUrl
                                            ? "bg-[#f4e9d2] text-[#201d15] hover:bg-[#ead9ba]"
                                            : "pointer-events-none bg-[#e9ddc5] text-[#6f6250] opacity-60"
                                    }`}
                                    style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
                                >
                                    Live Link
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}





