"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import HomepageQuickAnswers from "@/components/HomepageQuickAnswers";
import FindYourAIPath from "@/components/FindYourAIPath";
import AIProgramsSection from "@/components/AIProgramsSection";
import InstituteInNumbers from "@/components/InstituteInNumbers";
import PedagogicalPillars from "@/components/PedagogicalPillars";
import CurriculumCatalog from "@/components/CurriculumCatalog";
import CourseFinderWizard from "@/components/CourseFinderWizard";
import LearningMethodology from "@/components/LearningMethodology";
import WhyChooseOIAI from "@/components/WhyChooseOIAI";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import EnrollModal from "@/components/EnrollModal";

export default function Home() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedTrackTitle, setSelectedTrackTitle] = useState<string>("Generative AI");

  const handleOpenInquiry = (trackTitle?: string) => {
    if (trackTitle) {
      setSelectedTrackTitle(trackTitle);
    }
    setIsInquiryModalOpen(true);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById("curriculum");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDiscoverOiai = () => {
    const el = document.getElementById("why-oiai");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col antialiased selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Primary Navigation Bar */}
      <Navbar onOpenEnroll={() => handleOpenInquiry("Generative AI")} />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        
        {/* Section 1: Hero */}
        <Hero
          onExplorePrograms={handleExplorePrograms}
          onDiscoverOiai={handleDiscoverOiai}
          onTalkToAdvisor={() => handleOpenInquiry("AI Career Consultation")}
          onDownloadBrochure={() => handleOpenInquiry("Complete Curriculum Brochure")}
        />

        {/* Hero Trust Indicators */}
        <TrustIndicators />

        {/* Homepage Direct Answers Section (Item 8) */}
        <HomepageQuickAnswers onOpenEnroll={handleOpenInquiry} />

        {/* Signature Feature: Find Your AI Path (Item 9) */}
        <FindYourAIPath 
          onSelectCareer={(role) => handleOpenInquiry(role.title)} 
        />

        {/* AI Programs Section (Item 10) */}
        <AIProgramsSection onOpenEnroll={handleOpenInquiry} />

        {/* Interactive AI Course Finder (Item 11) */}
        <CourseFinderWizard />

        {/* Section 2: Institute in Numbers */}
        <InstituteInNumbers />

        {/* Section 3: Pedagogical Pillars */}
        <PedagogicalPillars />

        {/* Section 4: AI Programs Catalog (Item 10) */}
        <CurriculumCatalog onOpenInquiry={handleOpenInquiry} />

        {/* Section 5: AI Learning Methodology 7-Stage Progression (Item 13) */}
        <LearningMethodology />

        {/* Section 6: Why Choose OIAI 6 Pillars (Item 12) */}
        <WhyChooseOIAI />

        {/* Section 7: FAQ Accordion */}
        <FaqSection />

      </main>

      {/* Section 7 Anchor Continuation: Footer (#0B1026 / bg-[#0B1026]) */}
      <Footer />

      {/* Program Inquiry Dialog (Accessible Modal) */}
      <EnrollModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultProgram={selectedTrackTitle}
      />
    </div>
  );
}
