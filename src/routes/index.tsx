import { createFileRoute } from "@tanstack/react-router";
import { Background3D } from "@/components/roboclub/Background3D";
import { Cursor3D } from "@/components/roboclub/Cursor3D";
import { Nav } from "@/components/roboclub/Nav";
import { Hero } from "@/components/roboclub/Hero";
import { About } from "@/components/roboclub/About";
import { Objectives } from "@/components/roboclub/Objectives";
import { Events } from "@/components/roboclub/Events";
import { Team } from "@/components/roboclub/Team";
import { Contact } from "@/components/roboclub/Contact";
import { Footer } from "@/components/roboclub/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Robotics & Drones Club - 3D Cyber Ecosystem" },
      {
        name: "description",
        content:
          "Robotics & Drones Club is a build-first college robotics ecosystem — 3D interactive experience, events, executive members, objectives, and projects that ship.",
      },
      { property: "og:title", content: "Robotics & Drones Club - Engineering the Future" },
      {
        property: "og:description",
        content: "A build-first 3D robotics ecosystem. Build. Innovate. Engineer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground bg-[#070913]">
      <Background3D />
      <Cursor3D />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Objectives />
        <Events />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
