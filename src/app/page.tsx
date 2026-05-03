import Hero from "./components/hero";
import Projects from "./components/projects";
import Blog from "./components/blog";
import Photography from "./components/photography";
export default function Home() {
  return (
    <div className="bg-[#fffdf6] h-screen w-screen overflow-y-auto lg:overflow-hidden p-4">

      <div className="flex flex-col lg:flex-row h-full w-full gap-4 min-w-0">
        <div className="flex w-full lg:w-[42%] min-w-0 flex-col gap-4">
          <div className="flex-[0.9] min-h-0">
            <Hero />
          </div>
          <div className="flex-[2.0] min-h-0 w-full">
            <Blog />
          </div>
        </div>

        <div className="grid flex-1 min-w-0 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4">
          <div className="min-h-0 col-span-1 lg:col-span-2">
            <Projects />
          </div>
          <div className="col-span-1 lg:col-span-2 lg:row-span-2 min-h-0 mb-4 lg:mb-0">
            <Photography />
          </div>
        </div>
      </div>
    </div>
  );
}
