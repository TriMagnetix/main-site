import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressHero from "@/components/progress/ProgressHero";
import ProblemSection from "@/components/progress/ProblemSection";
import TechnologySection from "@/components/progress/TechnologySection";
import StatusSection from "@/components/progress/StatusSection";
import TractionSection from "@/components/progress/TractionSection";
import FundingSection from "@/components/progress/FundingSection";
import RoadmapSection from "@/components/progress/RoadmapSection";
import TeamSection from "@/components/progress/TeamSection";
import ContactCtaSection from "@/components/progress/ContactCtaSection";

export const metadata: Metadata = {
  title: "Technical & Business Progress | TriMagnetix™ - Nanomagnetic Computing",
  description:
    "See how TriMagnetix™ is bringing nanomagnetic computing from lab to field: proven 800x lower power, 64 nm fabrication, signed LOIs, and a clear 18-month roadmap to ASIC tape-out.",
  alternates: {
    canonical: "https://trimagnetix.com/progress",
  },
  openGraph: {
    title: "TriMagnetix™ - Technical & Business Progress",
    description:
      "Nanomagnetic processors with 800x lower power, zero standby loss, and ultra-low heat — now in fabrication at 64 nm.",
    url: "https://trimagnetix.com/progress",
    siteName: "TriMagnetix™",
    locale: "en_US",
    type: "website",
  },
};

export default function ProgressPage() {
  return (
    <>
      <Header />
      <main className="relative">
        <ProgressHero />
        <ProblemSection />
        <TechnologySection />
        <StatusSection />
        <TractionSection />
        <FundingSection />
        <RoadmapSection />
        <TeamSection />
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
