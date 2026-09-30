import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { Button } from '../components/ui/Button';
import {
  Send,
  CheckCircle2,
  Linkedin,
  Github,
  ExternalLink,
  Activity,
  Building2,
  Shield,
} from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: 'Pilot / Product Demo',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] tracking-tight">
                Request a Demo &amp; Connect
              </h1>
              <p className="text-sm text-[#5E6E82] mt-0.5">
                Incubation inquiries, pilot evaluations, technical collaborations, and product walkthroughs.
              </p>
            </div>
          </div>

          <Button variant="outline" size="sm" href="/demo">
            <Activity className="w-4 h-4 mr-1.5 text-[#1F3B64]" />
            Try Interactive Web Demo Now
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#E8F7F2] text-[#159570] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#13233A]">
                  Inquiry Recorded — Connect Directly with the Team
                </h2>
                <p className="text-sm text-[#5E6E82] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#13233A]">{formData.name || 'Evaluator'}</strong>. While our automated intake queue is being finalized, you can reach the founding engineers directly via LinkedIn or test the live analysis console right away.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <Button variant="primary" size="md" href="/demo">
                    Launch Live Web Demo
                  </Button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#1F3B64] border border-[#DCE3EA] rounded-lg hover:bg-[#F7F9FC] cursor-pointer"
                  >
                    Edit Inquiry Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-[#13233A] mb-1">
                    Pilot, Incubation &amp; Demo Request
                  </h2>
                  <p className="text-xs text-[#5E6E82]">
                    Share your evaluation context to schedule a guided walkthrough of the Android client and backend risk engine.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13233A] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#13233A] uppercase tracking-wider mb-1.5">
                      Organization / Program
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Incubator, Financial Institution, Lab..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13233A] uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#13233A] uppercase tracking-wider mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white"
                    >
                      <option value="Pilot / Product Demo">Pilot / Product Demo</option>
                      <option value="Business Incubation & Investment">Business Incubation &amp; Advisory</option>
                      <option value="Technical / Research Partnership">Technical / Research Collaboration</option>
                      <option value="Android Client Evaluation">Android Client Evaluation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#13233A] uppercase tracking-wider mb-1.5">
                    Evaluation Goals or Questions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your use case, pilot requirements, or technical questions..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE3EA] bg-[#F7F9FC] text-[#13233A] focus:outline-none focus:border-[#1F3B64] focus:bg-white"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Demo / Partnership Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Builder Contacts & Instant Evaluation */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#1F3B64]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#13233A]">
                  Direct Engineering Contacts
                </h3>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed mb-4">
                Connect directly with the VoiceShield builders for incubation discussions, architecture walkthroughs, and pilot coordination:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-[#13233A]">Yuvateja Sainadh</div>
                    <div className="text-[11px] text-[#5E6E82]">Applied AI Engineer &amp; Systems Architect</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/yuvateja-sainadh-b8b428321?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white border border-[#DCE3EA] text-[#1F3B64] hover:bg-[#1F3B64] hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/yuvatejasainadh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white border border-[#DCE3EA] text-[#1F3B64] hover:bg-[#1F3B64] hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-[#13233A]">Varun</div>
                    <div className="text-[11px] text-[#5E6E82]">MLOps Architect &amp; ML Infrastructure Engineer</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/varun-padavala-89463035b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white border border-[#DCE3EA] text-[#1F3B64] hover:bg-[#1F3B64] hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/varun-padavala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white border border-[#DCE3EA] text-[#1F3B64] hover:bg-[#1F3B64] hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#1F3B64]" />
                <h3 className="text-sm font-bold text-[#13233A]">
                  Public Technical Publication
                </h3>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed mb-4">
                Read our architectural background and motivation on AWS Builder:
              </p>
              <Button
                variant="outline"
                size="sm"
                href="https://builder.aws.com/content/3Ij4hQiorLDzSVYPJdQ74MYkqF6/why-i-started-building-voiceshield-fighting-ai-voice-impersonation"
                asExternal
                className="w-full justify-center"
              >
                Read Article on AWS Builder
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-75" />
              </Button>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}
