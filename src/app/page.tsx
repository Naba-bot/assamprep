import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import SupportedExams from "@/components/home/SupportedExams";
import HowItWorks from "@/components/home/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <SupportedExams />
      <HowItWorks />
    </>
  );
}