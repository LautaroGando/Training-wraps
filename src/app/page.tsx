import {
  Hero,
  About,
  Courses,
  Evidence,
  Gallery,
  CallToAction,
  Contact,
} from "../components";

export default function Home() {
  return (
    <main className="min-h-screen bg-tertiary">
      <Hero />
      <About />
      <Courses />
      <Evidence />
      <Gallery />
      <CallToAction />
      <Contact />
    </main>
  );
}
