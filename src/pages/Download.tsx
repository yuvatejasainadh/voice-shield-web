import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Smartphone, ShieldCheck, Clock } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { LockedSourceButton } from '../components/ui/LockedSourceButton';

export function Download() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header with Logo */}
        <div className="mb-8 pb-6 border-b border-[#DCE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <VoiceShieldLogo className="h-12 w-12" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">Voice Shield for Android</h1>
              <p className="text-sm text-[#5E6E82]">Real-time on-device voice protection client</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA] text-xs font-semibold text-[#1F3B64] self-start sm:self-auto">
            <Clock className="w-4 h-4 text-[#C78316]" />
            <span>Distribution Status: Coming Soon</span>
          </div>
        </div>

        {/* Primary Application Availability Card */}
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#DCE3EA]">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#F1F4F8] text-[#1F3B64] shrink-0">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold text-[#13233A]">VOICE SHIELD</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FDF5E6] text-[#C78316] border border-[#F0D09B]">
                    COMING SOON
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#1F3B64]">
                  Android Application
                </p>
                <p className="text-xs text-[#5E6E82] mt-0.5">
                  Voice Shield for Android will be available on the Google Play Store soon.
                </p>
              </div>
            </div>

            {/* Google Play-style non-clickable availability placeholder */}
            <div className="flex flex-col items-start md:items-end gap-1.5">
              <div 
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0B1320] text-white border border-[#1E293B] shadow-xs select-none opacity-90 cursor-not-allowed"
                aria-disabled="true"
                role="status"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.25 2.25 0 013 20.61V3.39c0-.608.225-1.168.609-1.576z" fill="#00E676" />
                  <path d="M17.207 8.586L13.793 12l3.414 3.414 3.966-2.288a1.35 1.35 0 000-2.54l-3.966-2.288z" fill="#FFD600" />
                  <path d="M3.609 1.814a2.27 2.27 0 011.831-.384l11.767 6.79-3.414 3.414L3.609 1.814z" fill="#00B0FF" />
                  <path d="M13.793 12l3.414 3.414-11.767 6.79a2.27 2.27 0 01-1.831-.384L13.793 12z" fill="#FF3D00" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-[#94A3B8] leading-tight">
                    Google Play
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight leading-snug">
                    Available on Google Play Soon
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-[#7A8798] font-medium">
                Official distribution will be through the Google Play Store.
              </span>
            </div>
          </div>

          {/* Distribution & Technical Status Overview */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="text-[#5E6E82] font-medium mb-1">Target Channel</div>
              <div className="font-bold text-[#13233A] text-sm">Google Play Store</div>
              <div className="text-[#7A8798] text-[11px] mt-1">Official store distribution in preparation</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="text-[#5E6E82] font-medium mb-1">Target Platform</div>
              <div className="font-bold text-[#13233A] text-sm">Android 8.0+ (API 26)</div>
              <div className="text-[#7A8798] text-[11px] mt-1">ARM64 &amp; universal device support</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="text-[#5E6E82] font-medium mb-1">Current Status</div>
              <div className="font-bold text-[#C78316] text-sm">Under Active Preparation</div>
              <div className="text-[#7A8798] text-[11px] mt-1">Pre-release development &amp; policy review</div>
            </div>
          </div>
        </div>

        {/* Release & Distribution Information */}
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
          <h2 className="text-lg font-bold text-[#13233A] mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#1F3B64]" />
            Official Distribution Notice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#1F3B64] text-white flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h3 className="font-bold text-sm text-[#13233A] mb-1">Active Development</h3>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                The Voice Shield Android application is currently under active development and internal testing for the Smart India Hackathon 2026 initiative.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#1F3B64] text-white flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h3 className="font-bold text-sm text-[#13233A] mb-1">Google Play Distribution</h3>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Official distribution will be through the Google Play Store to ensure verified app integrity, Google Play Protect security scanning, and seamless updates.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#1F3B64] text-white flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h3 className="font-bold text-sm text-[#13233A] mb-1">No Public Release Yet</h3>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                The application is not currently available for public installation. Please wait for the official Google Play Store release announcement.
              </p>
            </div>
          </div>
        </div>

        {/* Source Code Link */}
        <div className="p-6 rounded-2xl bg-[#F1F4F8] border border-[#DCE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-sm text-[#13233A]">Looking for the source code?</h3>
            <p className="text-xs text-[#5E6E82] mt-0.5">Explore the native Android architecture, Jetpack Compose UI, and ML runtime.</p>
          </div>
          <LockedSourceButton label="Android App LOCKED" />
        </div>

      </div>
    </Layout>
  );
}

