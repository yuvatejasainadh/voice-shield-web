import React from 'react';
import { PROJECT_CONFIG } from '../../config/project';
import { CheckCircle2, Clock, Calendar, ArrowRight, Shield, Layers, Network, Cpu, AlertTriangle } from 'lucide-react';

export function VersionRoadmap() {
  const { VERSION_STAGES } = PROJECT_CONFIG;
  const v1 = VERSION_STAGES[0];
  const v2 = VERSION_STAGES[1];
  const v3 = VERSION_STAGES[2];

  return (
    <section id="version-roadmap" className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DCE3EA] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-xs font-bold tracking-wide uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              Maturity Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#13233A]">
              Three-Stage Architecture Evolution
            </h2>
            <p className="text-sm text-[#5E6E82] max-w-2xl mt-1 leading-relaxed">
              Clear demarcation between our current active demonstrator, upcoming research prototype, and long-term production architecture.
            </p>
          </div>

          {/* Stepper Progression Bar */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5E6E82] bg-white border border-[#DCE3EA] rounded-xl px-3.5 py-2 shadow-2xs">
            <span className="text-[#159570] font-bold">v1.0 Demonstrator</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] font-bold">CURRENT</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7A8798]" />
            <span className="text-[#5E6E82]">v2.0 SIH Prototype</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] font-bold">UPCOMING</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7A8798]" />
            <span className="text-[#7A8798]">v3.0 Production</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F1F4F8] text-[#5E6E82] font-mono font-bold">#FUTURE</span>
          </div>
        </div>

        {/* 3-Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* ============================================================ */}
          {/* STAGE 1: v1.0 — Demonstrator (CURRENT / EMPHASIZED) */}
          {/* ============================================================ */}
          <div className="relative rounded-2xl bg-white border-2 border-[#1F3B64] p-6 sm:p-7 shadow-md flex flex-col justify-between">
            {/* Active Pill Flag */}
            <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F3B64] text-white text-[11px] font-bold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#159570] animate-pulse"></span>
              ACTIVE DEMONSTRATOR
            </div>

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 pt-2 mb-4 pb-4 border-b border-[#DCE3EA]">
                <div>
                  <h3 className="text-xl font-bold text-[#13233A] tracking-tight">
                    {v1.version}
                  </h3>
                  <p className="text-xs text-[#1F3B64] font-semibold mt-0.5">
                    {v1.tagline}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7] shrink-0">
                  {v1.status}
                </span>
              </div>

              {/* Purpose */}
              <div className="mb-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A8798] mb-1.5">
                  Core Purpose
                </div>
                <p className="text-xs text-[#5E6E82] leading-relaxed">
                  {v1.summary}
                </p>
              </div>

              {/* Demonstrator Architecture Pipeline Flow */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1F3B64] mb-2">
                  <Network className="w-3.5 h-3.5" />
                  Demonstrator Pipeline Flow
                </div>
                <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-3 space-y-1.5 font-mono text-[11px]">
                  {v1.pipeline.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#13233A]">
                      <span className="w-4 h-4 rounded-full bg-[#1F3B64] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="truncate">{step}</span>
                      {idx < v1.pipeline.length - 1 && (
                        <span className="text-[#7A8798] ml-auto text-[10px]">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope Boundaries / Non-claims callout */}
              <div className="rounded-xl bg-[#F8FAFC] border border-[#DCE3EA] p-3.5 mb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5E6E82] mb-2">
                  <Shield className="w-3.5 h-3.5 text-[#1F3B64]" />
                  Demonstrator Boundaries
                </div>
                <ul className="space-y-1.5 text-[11px] text-[#5E6E82]">
                  {v1.scopeBoundaries?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#1F3B64] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#DCE3EA] flex items-center justify-between text-xs">
              <span className="font-semibold text-[#159570] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#159570]" />
                Live Demo Available
              </span>
              <span className="text-[#7A8798] font-medium">Status: {v1.statusBadge}</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STAGE 2: v2.0 — SIH Prototype (UPCOMING / MUTED) */}
          {/* ============================================================ */}
          <div className="rounded-2xl bg-[#F7F9FC] border border-dashed border-[#B8C5D3] p-6 sm:p-7 flex flex-col justify-between opacity-95">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-[#DCE3EA]">
                <div>
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#FDF5E6] text-[#C78316] mb-1">
                    IN DEVELOPMENT
                  </div>
                  <h3 className="text-xl font-bold text-[#13233A] tracking-tight">
                    {v2.version}
                  </h3>
                  <p className="text-xs text-[#5E6E82] font-semibold mt-0.5">
                    {v2.tagline}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#FDF5E6] text-[#C78316] border border-[#F0D09B] shrink-0">
                  {v2.status}
                </span>
              </div>

              {/* Purpose */}
              <div className="mb-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A8798] mb-1.5">
                  Planned Architecture
                </div>
                <p className="text-xs text-[#5E6E82] leading-relaxed">
                  {v2.summary}
                </p>
              </div>

              {/* Planned Pipeline */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5E6E82] mb-2">
                  <Network className="w-3.5 h-3.5" />
                  Planned Pipeline (3-VM LACR)
                </div>
                <div className="bg-white border border-[#DCE3EA] rounded-xl p-3 space-y-1.5 font-mono text-[11px]">
                  {v2.pipeline.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#5E6E82]">
                      <span className="w-4 h-4 rounded-full bg-[#E5ECF4] text-[#1F3B64] text-[9px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="truncate">{step}</span>
                      {idx < v2.pipeline.length - 1 && (
                        <span className="text-[#B8C5D3] ml-auto text-[10px]">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Planned Capabilities */}
              <div className="rounded-xl bg-white border border-[#DCE3EA] p-3.5 mb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5E6E82] mb-2">
                  <Cpu className="w-3.5 h-3.5 text-[#7A8798]" />
                  Planned Capabilities
                </div>
                <ul className="space-y-1.5 text-[11px] text-[#5E6E82]">
                  {v2.plannedCapabilities?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#C78316] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#DCE3EA] flex items-center justify-between text-xs">
              <span className="text-[#C78316] font-medium flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C78316]" />
                Upcoming Architecture
              </span>
              <span className="text-[11px] text-[#7A8798] italic">Not currently deployed</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STAGE 3: v3.0 — Production (#FUTURE / MUTED) */}
          {/* ============================================================ */}
          <div className="rounded-2xl bg-[#F7F9FC] border border-dashed border-[#B8C5D3] p-6 sm:p-7 flex flex-col justify-between opacity-90">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-[#DCE3EA]">
                <div>
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F1F4F8] text-[#5E6E82] mb-1">
                    #FUTURE
                  </div>
                  <h3 className="text-xl font-bold text-[#13233A] tracking-tight">
                    {v3.version}
                  </h3>
                  <p className="text-xs text-[#5E6E82] font-semibold mt-0.5">
                    {v3.tagline}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#F1F4F8] text-[#5E6E82] border border-[#DCE3EA] shrink-0">
                  {v3.status}
                </span>
              </div>

              {/* Purpose */}
              <div className="mb-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A8798] mb-1.5">
                  Long-Term Architecture
                </div>
                <p className="text-xs text-[#5E6E82] leading-relaxed">
                  {v3.summary}
                </p>
              </div>

              {/* Planned Pipeline */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5E6E82] mb-2">
                  <Network className="w-3.5 h-3.5" />
                  Planned Pipeline (7-VM Distributed)
                </div>
                <div className="bg-white border border-[#DCE3EA] rounded-xl p-3 space-y-1.5 font-mono text-[11px]">
                  {v3.pipeline.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#5E6E82]">
                      <span className="w-4 h-4 rounded-full bg-[#E5ECF4] text-[#5E6E82] text-[9px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="truncate">{step}</span>
                      {idx < v3.pipeline.length - 1 && (
                        <span className="text-[#B8C5D3] ml-auto text-[10px]">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Routing Groups */}
              <div className="rounded-xl bg-white border border-[#DCE3EA] p-3.5 mb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5E6E82] mb-2">
                  <Layers className="w-3.5 h-3.5 text-[#7A8798]" />
                  Planned 7-VM Language Groups
                </div>
                <div className="space-y-1 text-[10.5px] font-mono text-[#5E6E82]">
                  {v3.languageRoutingGroups?.map((group, idx) => (
                    <div key={idx} className="truncate py-0.5 border-b border-[#F1F4F8] last:border-none">
                      {group}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#DCE3EA] flex items-center justify-between text-xs">
              <span className="text-[#5E6E82] font-medium flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#7A8798]" />
                Long-Term Production Vision
              </span>
              <span className="text-[11px] text-[#7A8798] italic">Not implemented</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
