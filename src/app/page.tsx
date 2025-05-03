import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Home | Trimagnetix - Advanced Magnetic Solutions",
  description: "Trimagnetix provides cutting-edge magnetic technologies for various industries. Explore our custom magnetic solutions, research capabilities, and system design services.",
  alternates: {
    canonical: "https://trimagnetix.com",
  },
  openGraph: {
    title: "Trimagnetix - Innovative Magnetic Solutions",
    description: "Pioneering advanced magnetic technologies for medical, industrial, and consumer applications.",
    url: "https://trimagnetix.com",
    siteName: "Trimagnetix",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
