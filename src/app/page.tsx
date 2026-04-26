import AnimatedBackground from "@/components/AnimatedBackground";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import DashboardPreview from "@/components/DashboardPreview";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Preloader from "@/components/Preloader";
import Problem from "@/components/Problem";
import OpenSourceBanner from "@/components/OpenSourceBanner";
import Reveal from "@/components/Reveal";
import Results from "@/components/Results";
import Solution from "@/components/Solution";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg-base text-text-mid">
      <AnimatedBackground />
      <Preloader />
      <div className="relative z-10">
        <Navbar />
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.05}>
          <TrustBar />
        </Reveal>
        <Reveal>
          <OpenSourceBanner />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <Problem />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <Solution />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <Comparison />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <Features />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <HowItWorks />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <DashboardPreview />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <Pricing />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <FAQ />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <Results />
        </Reveal>
        <hr className="border-border-dim" />
        <Reveal>
          <CTA />
        </Reveal>
        <Footer />
      </div>
    </main>
  );
}
