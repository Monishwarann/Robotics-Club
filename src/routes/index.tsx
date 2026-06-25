import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/roboclub/Background";
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
      { title: "Robotics Club — Build. Innovate. Engineer." },
      {
        name: "description",
        content:
          "Robotics Club is a build-first college robotics ecosystem — events, executives, objectives, and projects that ship.",
      },
      { property: "og:title", content: "Robotics Club — Engineering the Future" },
      {
        property: "og:description",
        content: "A build-first robotics ecosystem. Build. Innovate. Engineer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Background />
      <Nav />
      <main>
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
