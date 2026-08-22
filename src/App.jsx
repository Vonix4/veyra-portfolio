import { useCallback, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  if (isLoading) {
    return <LoadingScreen onComplete={finishLoading} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <ScrollReveal animation="fade-up">
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={50}>
          <About />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={50}>
          <Experience />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={50}>
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={50}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
