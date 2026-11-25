import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import GithubProjects from "@/components/GithubProjects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <GithubProjects />
      <Skills />
      <Timeline />
    </main>
  );
}