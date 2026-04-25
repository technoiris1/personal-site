import Hero from "./components/hero";
import Projects from "./components/projects";
import Music from "./components/music";
import Hackathons from "./components/hackathons";
import Blog from "./components/blog";
import Photography from "./components/photography";
import Socials from "./components/socials";
export default function Home() {
  return (
    <div className="bg-[#fffdf6] h-screen w-screen overflow-hidden p-4">

      <div className="flex h-full w-full gap-4 min-w-0">
        <div className="flex w-[42%] min-w-0 flex-col gap-4">
          <div className="flex-[0.9] min-h-0">
            <Hero />
          </div>
          <div className="flex-[1.2] min-h-0 w-full">
            <Blog />
          </div>
        </div>

        <div className="grid flex-1 min-w-0 grid-cols-2 grid-rows-3 gap-4">
          <div className="min-h-0">
            <Projects />
          </div>
          <div className="min-h-0">
            <Music />
          </div>
          <div className="col-span-2 min-h-0">
            <Photography />
          </div>
          <div className="min-h-0">
            <Socials />
          </div>
          <div className="min-h-0">
            <Hackathons />
          </div>
        </div>
      </div>
    </div>
  );
}
