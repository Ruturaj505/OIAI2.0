"use client";

import React, { useState, useMemo } from "react";
import { CURRICULUM_TRACKS, ProgramTrack, AudienceCategory, SkillLevel } from "@/data/curriculum";
import ProgramDetailModal from "./ProgramDetailModal";
import { 
  BookOpen, 
  Search, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  FilterX, 
  Tag, 
  SlidersHorizontal 
} from "lucide-react";

type FilterAudience = "All" | AudienceCategory;
type FilterLevel = "All" | SkillLevel;

interface CurriculumCatalogProps {
  onOpenInquiry?: (programTitle: string) => void;
}

export default function CurriculumCatalog({ onOpenInquiry }: CurriculumCatalogProps) {
  const [selectedAudience, setSelectedAudience] = useState<FilterAudience>("All");
  const [selectedLevel, setSelectedLevel] = useState<FilterLevel>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramTrack | null>(null);

  // Combined logical filtering
  const filteredPrograms = useMemo(() => {
    return CURRICULUM_TRACKS.filter((prog) => {
      // 1. Audience match
      const matchesAudience =
        selectedAudience === "All" || prog.audiences.includes(selectedAudience);

      // 2. Skill level match
      const matchesLevel =
        selectedLevel === "All" || prog.level === selectedLevel;

      // 3. Search query match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.description.toLowerCase().includes(q) ||
        prog.techTags.some((tag) => tag.toLowerCase().includes(q)) ||
        prog.keyOutcome.toLowerCase().includes(q);

      return matchesAudience && matchesLevel && matchesSearch;
    });
  }, [selectedAudience, selectedLevel, searchQuery]);

  const handleResetFilters = () => {
    setSelectedAudience("All");
    setSelectedLevel("All");
    setSearchQuery("");
  };

  const handleInquireFromModal = (prog: ProgramTrack) => {
    setActiveModalProgram(null);
    if (onOpenInquiry) {
      onOpenInquiry(prog.title);
    } else {
      const el = document.getElementById("faq");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isFiltered = selectedAudience !== "All" || selectedLevel !== "All" || searchQuery !== "";

  return (
    <section 
      id="curriculum"
      aria-label="Curriculum Tracks"
      className="w-full py-24 lg:py-32 bg-[#312E81] text-slate-50 border-b border-[#45416F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Staggered Cascade */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1B4B] border border-[#45416F] text-[#A5B4FC] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#A5B4FC]" aria-hidden="true" />
            <span>CURRICULUM CATALOG • 12 TRACKS</span>
          </div>

          <h2 className="section-heading text-[#F1F5F9]">
            Comprehensive AI Curriculum Catalog
          </h2>

          <p className="mt-4 body-paragraph text-[#CBD5E1]">
            Exactly twelve focused tracks spanning foundations, model training, computer vision, natural language processing, and autonomous agents.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-12 space-y-5 max-w-5xl mx-auto">
          
          <div className="p-4 sm:p-5 rounded-2xl bg-[#25234F] border border-[#45416F] shadow-xs space-y-4">
            
            {/* Top row: Audience Filter & Skill Level Filter */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Audience Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap no-scrollbar">
                <span className="text-xs font-mono text-[#CBD5E1] font-bold uppercase tracking-wider mr-1 shrink-0">Audience:</span>
                {(["All", "Students", "Corporate"] as FilterAudience[]).map((aud) => {
                  const isSelected = selectedAudience === aud;
                  return (
                    <button
                      key={aud}
                      onClick={() => setSelectedAudience(aud)}
                      className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#A5B4FC] text-[#1E1B4B] shadow-xs font-bold"
                          : "bg-[#1E1B4B]/80 hover:bg-[#1E1B4B] text-[#CBD5E1] border border-[#45416F]"
                      }`}
                    >
                      {aud === "All" ? "All Audiences" : aud}
                    </button>
                  );
                })}
              </div>

              {/* Skill Level Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap no-scrollbar">
                <span className="text-xs font-mono text-[#CBD5E1] font-bold uppercase tracking-wider mr-1 shrink-0">Level:</span>
                {(["All", "Beginner", "Intermediate", "Advanced"] as FilterLevel[]).map((lvl) => {
                  const isSelected = selectedLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#A5B4FC] text-[#1E1B4B] shadow-xs font-bold"
                          : "bg-[#1E1B4B]/80 hover:bg-[#1E1B4B] text-[#CBD5E1] border border-[#45416F]"
                      }`}
                    >
                      {lvl === "All" ? "All Levels" : lvl}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Bottom Row: Search Box & Reset Action */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-[#45416F]">
              <div className="relative w-full flex-1">
                <Search className="w-4 h-4 text-[#A5B4FC] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tracks by topic or keyword (e.g. Python, Agents, Vision, PyTorch)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-sm text-[#F1F5F9] placeholder-slate-400 focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                />
              </div>

              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#272451] text-xs font-mono text-[#CBD5E1] hover:text-white border border-[#45416F] flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <FilterX className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

          </div>

          {/* Result Count Status Indicator */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2">
            <span>
              Showing <strong className="text-slate-100 font-bold">{filteredPrograms.length}</strong> of {CURRICULUM_TRACKS.length} Program Tracks
            </span>
            <span className="hidden sm:inline">
              All tracks are proposed academic offerings
            </span>
          </div>

        </div>

        {/* 12 Program Cards Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                id={`program-card-${prog.id}`}
                className="group relative rounded-2xl bg-[#25234F] border border-[#45416F] p-6 shadow-xs hover:border-indigo-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Category Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#1E1B4B] text-[#A5B4FC] border border-[#45416F]">
                      Track {prog.number < 10 ? `0${prog.number}` : prog.number}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1E1B4B] text-slate-300 border border-[#45416F]">
                        {prog.level}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1E1B4B] text-[#A5B4FC] border border-[#45416F]">
                        {prog.audiences[0]}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="card-heading text-[#F1F5F9] group-hover:text-[#A5B4FC] transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-[15px] font-sans text-[#CBD5E1] leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Duration Note */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#A5B4FC]" aria-hidden="true" />
                    <span>Duration: {prog.duration}</span>
                  </div>

                  {/* Key Learning Outcome */}
                  <div className="mt-4 pt-3 border-t border-[#45416F]">
                    <p className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Key Learning Outcome:
                    </p>
                    <p className="text-xs text-[#CBD5E1] leading-relaxed flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{prog.keyOutcome}</span>
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {prog.techTags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E1B4B] text-slate-300 border border-[#45416F]">
                        {tag}
                      </span>
                    ))}
                    {prog.techTags.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1E1B4B] text-slate-300 border border-[#45416F]">
                        +{prog.techTags.length - 3}
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-[#45416F]">
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className="w-full py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#272451] hover:border-[#A5B4FC] border border-[#45416F] text-slate-200 hover:text-[#A5B4FC] button-typography text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>View Program</span>
                    <ArrowRight className="w-4 h-4 text-[#A5B4FC]" aria-hidden="true" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 rounded-2xl bg-[#25234F] border border-[#45416F] shadow-xs max-w-xl mx-auto">
            <FilterX className="w-10 h-10 text-slate-300 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-bold text-[#F1F5F9]">No programs match the selected filters</h3>
            <p className="text-sm text-[#CBD5E1] mt-1">Try adjusting your audience, skill level, or search keywords.</p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#4338CA] hover:bg-indigo-700 text-slate-50 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              Reset to All Programs
            </button>
          </div>
        )}

      </div>

      {/* Program Details Dialog */}
      <ProgramDetailModal
        program={activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
        onInquire={handleInquireFromModal}
      />
    </section>
  );
}
