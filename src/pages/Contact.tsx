import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import {
  Send,
  CheckCircle2,
  Shield,
  Activity,
  Building2,
  Code2,
  Users,
  ArrowRight,
} from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Product Demo & Evaluation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Page Header */}
        <div className="mb-10 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-[11px] font-bold uppercase tracking-wider mb-2">
                {PROJECT_CONFIG.PUBLIC_NAME}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13233A] tracking-tight">
                Contact &amp; Request a Demo
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-2xl leading-relaxed">
                Connect with the VOICE SHIELD team regarding product demonstrations, incubation and pilot evaluations, research collaboration, or technical architecture inquiries.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="outline" size="md" href="/demo">
              <Activity className="w-4 h-4 mr-2 text-[#1F3B64]" />
              Try Interactive Web Demo Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inquiry Categories */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-sm font-bold text-[#7A8798] uppercase tracking-wider mb-2">
              Collaboration &amp; Evaluation Tracks
            </h2>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2">
                <Activity className="w-4 h-4 text-[#1F3B64]" />
                <h3 className="text-sm font-bold text-[#13233A]">Product Demo &amp; Technical Walkthrough</h3>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Request a guided walkthrough of the Android real-time audio windowing client, FastAPI WebSocket streaming pipeline, and web audio analysis console.
              </p>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2">
                <Building2 className="w-4 h-4 text-[#1F3B64]" />
                <h3 className="text-sm font-bold text-[#13233A]">Incubation &amp; Pilot Evaluation</h3>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Explore pilot testing, business incubation partnerships, and organizational voice safety workflows as VOICE SHIELD advances along its V2 roadmap.
              </p>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2">
                <Code2 className="w-4 h-4 text-[#1F3B64]" />
                <h3 className="text-sm font-bold text-[#13233A]">Research &amp; API Collaboration</h3>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Discuss acoustic spoofing benchmarks, multilingual call routing (LACR), or integration with the VOICE SHIELD REST and WebSocket APIs.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#DCE3EA] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#1F3B64]" />
                <h3 className="text-xs font-bold text-[#13233A] uppercase tracking-wider">
                  Immediate Self-Serve Evaluation
                </h3>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed mb-3">
                You can also test uploaded audio samples directly in the browser or inspect the API specification right now.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" href="/demo">
                  Web Analysis Console
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
                <Button variant="ghost" size="sm" href="/docs/api">
                  API Specification
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#13233A] mb-2">
                  Inquiry Recorded in Session
                </h2>
                <p className="text-xs sm:text-sm text-[#5E6E82] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you for your interest in <strong>{PROJECT_CONFIG.PUBLIC_NAME}</strong>. Your inquiry details for <strong>{formState.inquiryType}</strong> have been prepared below. While you await follow-up, you can explore the interactive web demo or review the system architecture documentation.
                </p>
                <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 text-left text-xs text-[#5E6E82] max-w-md mx-auto mb-6 space-y-1.5">
                  <div><strong className="text-[#13233A]">Name:</strong> {formState.name}</div>
                  <div><strong className="text-[#13233A]">Email:</strong> {formState.email}</div>
                  {formState.organization && (
                    <div><strong className="text-[#13233A]">Organization:</strong> {formState.organization}</div>
                  )}
                  <div><strong className="text-[#13233A]">Topic:</strong> {formState.inquiryType}</div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="primary" size="md" href="/demo">
                    Launch Web Analysis Demo
                  </Button>
                  <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-[#13233A]">
                    Request a Demo or Pilot Consultation
                  </h2>
                  <p className="text-xs text-[#5E6E82] mt-0.5">
                    Complete the form below to share your evaluation goals or technical requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13233A] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-sm text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13233A] mb-1.5">
                      Work or Academic Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@organization.org"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-sm text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13233A] mb-1.5">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      placeholder="Company, incubator, or lab"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-sm text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13233A] mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-sm text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white transition-colors"
                    >
                      <option value="Product Demo & Evaluation">Product Demo &amp; Evaluation</option>
                      <option value="Incubation & Pilot Partnership">Incubation &amp; Pilot Partnership</option>
                      <option value="Technical & Architecture Review">Technical &amp; Architecture Review</option>
                      <option value="Research & Dataset Collaboration">Research &amp; Dataset Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#13233A] mb-1.5">
                    Use Case or Technical Context *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your interest in real-time voice impersonation detection, pilot testing, or technical evaluation..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-sm text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[11px] text-[#7A8798]">
                    <Shield className="w-3.5 h-3.5 text-[#159570] shrink-0" />
                    <span>No unsolicited marketing. Evaluation &amp; collaboration inquiries only.</span>
                  </div>
                  <Button type="submit" variant="primary" size="md">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </Layout>
  );
}
