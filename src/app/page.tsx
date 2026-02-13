import HeroSection from "@/components/HeroSection";
import SnapshotGrid from "@/components/SnapshotGrid";
import SectionHeading from "@/components/SectionHeading";
import ResearchCard from "@/components/ResearchCard";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/data/news";

const featuredProjects = [
  {
    title: "SMMS Commercialization & US Patent",
    summary:
      "Developing a single-molecule mechanical sensing platform for rapid, point-of-care diagnostics. The technology converts molecular binding events into mechanical signals readable by compact instruments, enabling decentralized disease detection.",
    link: undefined,
  },
  {
    title: "TRF2 Single-Molecule Study",
    summary:
      "Revealed how TRF2 induces DNA distortion at telomeric sequences using magnetic tweezers, providing mechanistic insights into telomere protection with implications for aging and cancer biology.",
    link: "https://doi.org/10.1038/s42003-024-05838-x",
  },
  {
    title: "Mechanical Immunoassay",
    summary:
      "Developed a force-dependent rapid immunoassay achieving ELISA-comparable sensitivity within minutes, using magnetic bead displacement as readout — a new paradigm for low-cost point-of-care testing.",
  },
  {
    title: "Magnetic Tweezers Engineering",
    summary:
      "Designed magnetic tweezers with wide-range temperature control for single-molecule experiments, extending force spectroscopy capabilities to study temperature-dependent biomolecular processes.",
    link: "https://doi.org/10.1016/j.bpj.2023.08.004",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Professional Snapshot */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Professional Snapshot" />
          <SnapshotGrid />
        </div>
      </section>

      {/* Professional Bio */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="About" />
          <div className="max-w-3xl space-y-4 text-slate-600 leading-relaxed">
            <p>
              Dr. Xiaodan Zhao is a Senior Research Fellow specializing in translational biophysics and diagnostic technology development. He obtained his Ph.D. from the National University of Singapore in 2011 and has since built a research portfolio spanning single-molecule DNA mechanics, magnetic tweezers instrumentation, and point-of-care diagnostic innovation.
            </p>
            <p>
              Over the past decade, his work has contributed to more than 20 peer-reviewed publications, accumulating approximately 400 citations and resulting in two US patent applications. His research has been featured by major media outlets including The Straits Times and &#32852;&#21512;&#26089;&#25253;.
            </p>
            <p>
              Currently, he focuses on commercializing the SMMS platform and integrating AI-driven image analysis into rapid diagnostic systems. His work bridges fundamental molecular biophysics with scalable healthcare technologies, aiming to translate precision measurement into real-world clinical impact.
            </p>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Research Highlights"
            subtitle="Featured projects across biophysics, diagnostics, and AI"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <ResearchCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="News & Updates" />
          <div className="grid sm:grid-cols-2 gap-4">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact & External Links */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading title="Get in Touch" />
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Interested in collaboration, research opportunities, or just want to connect? Reach out through any of the channels below.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="mailto:xiaodan.zhao@nus.edu.sg" className="flex items-center gap-2 text-navy hover:text-accent transition-colors font-medium text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              Email
            </a>
            <a href="https://www.linkedin.com/in/xiaodan-zhao-64560240/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy hover:text-accent transition-colors font-medium text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Zhao-Xiaodan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy hover:text-accent transition-colors font-medium text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://huggingface.co/Dan2727" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy hover:text-accent transition-colors font-medium text-sm">
              HuggingFace
            </a>
            <a href="https://scholar.google.com/citations?user=PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy hover:text-accent transition-colors font-medium text-sm">
              Google Scholar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
