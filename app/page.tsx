import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import Technology from "./components/Technology";
import Features from "./components/Features";
import WhyAI from "./components/WhyAI";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Navigation />
        <Hero />
        <Technology />
        <Features />
        <WhyAI />
        {/* <Portfolio /> - Временно скрыто */}
        <Pricing />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
