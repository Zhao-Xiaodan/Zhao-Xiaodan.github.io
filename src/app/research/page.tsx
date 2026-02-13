import SectionHeading from "@/components/SectionHeading";
import { researchDomains } from "@/data/research";

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        title="Research"
        subtitle="Four interconnected research domains spanning single-molecule biophysics to translational diagnostics and AI"
      />

      {/* Research Trajectory Timeline */}
      <section className="mb-16">
        <h3 className="text-xl font-bold text-navy mb-8">Research Trajectory</h3>
        <div className="relative border-l-2 border-slate-200 ml-4 space-y-10">
          {/* 2006-2011 */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-navy border-2 border-white" />
            <span className="text-sm font-semibold text-accent">2006–2011</span>
            <h4 className="text-lg font-semibold text-navy mt-1">Materials Physics &amp; Functional Surfaces</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Early research centered on nanostructured MnO&#8322; materials and tunable adhesion systems. This period established a strong foundation in surface engineering, materials characterization, and experimental design, culminating in publications in <em>Advanced Functional Materials</em> and <em>Langmuir</em>.
            </p>
          </div>

          {/* 2011-2020 */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-navy border-2 border-white" />
            <span className="text-sm font-semibold text-accent">2011–2020</span>
            <h4 className="text-lg font-semibold text-navy mt-1">Single-Molecule DNA Mechanics</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Transitioned into biophysics, focusing on magnetic tweezers and AFM-based interrogation of DNA-protein interactions.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                First single-molecule investigation of TRF2 supercoiling behavior
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Discovery of HMGA2&apos;s stabilization of both (+) and (&ndash;) supercoiled DNA
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Development of universal DNA-binding site scaffolding methods
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-500 italic">
              This phase established expertise in high-precision instrumentation, force spectroscopy, and DNA topology.
            </p>
          </div>

          {/* 2020-2025 */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-navy border-2 border-white" />
            <span className="text-sm font-semibold text-accent">2020–2025</span>
            <h4 className="text-lg font-semibold text-navy mt-1">Translational Diagnostics &amp; Commercialization</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Shifted toward translational research:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Developed COVID-19 antigen and antibody assays
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Engineered multiplex POCT microfluidic chips
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Advanced commercialization of SMMS platform (US Patent 17/924,958)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Built AI-based bead image analysis pipelines
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-500 italic">
              Research expanded from mechanistic understanding to product engineering, regulatory pathway preparation, and startup collaboration.
            </p>
          </div>

          {/* 2025-Future */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white" />
            <span className="text-sm font-semibold text-accent">2025–Future</span>
            <h4 className="text-lg font-semibold text-navy mt-1">AI-Enabled Biophysical Systems</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Current direction integrates:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Deep learning&ndash;based image interpretation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Cloud-deployed diagnostic analytics
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                Mechanobiology-informed assay design
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                AI-assisted research summarization and visualization
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-500 italic">
              The long-term goal is to develop intelligent biophysical platforms that unify precision molecular measurement, scalable hardware, and machine intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <SectionHeading title="Research Domains" />

      <div className="space-y-16">
        {researchDomains.map((domain) => (
          <section key={domain.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                {domain.id}
              </span>
              <h3 className="text-xl font-bold text-navy">{domain.title}</h3>
            </div>
            <p className="text-slate-600 mb-6 max-w-3xl">{domain.description}</p>

            <div className="space-y-8">
              {domain.entries.map((entry) => (
                <div
                  key={entry.title}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  <div className="md:flex">
                    {entry.image ? (
                      <div className="md:w-72 flex-shrink-0 bg-slate-50 flex items-center justify-center p-4">
                        <img src={entry.image} alt={entry.title} className="max-w-full max-h-[240px] object-contain" />
                      </div>
                    ) : (
                      <div className="md:w-72 flex-shrink-0 bg-slate-100 flex items-center justify-center text-slate-400 text-sm p-8 min-h-[180px]">
                        Research Figure
                      </div>
                    )}
                    <div className="p-6 flex-1">
                      <h4 className="text-lg font-semibold text-navy mb-3">
                        {entry.title}
                      </h4>
                      <div className="space-y-2 text-sm text-slate-600">
                        <p>
                          <span className="font-medium text-slate-700">Background: </span>
                          {entry.background}
                        </p>
                        <p>
                          <span className="font-medium text-slate-700">Innovation: </span>
                          {entry.innovation}
                        </p>
                        <p>
                          <span className="font-medium text-slate-700">Strategy: </span>
                          {entry.strategy}
                        </p>
                        <p>
                          <span className="font-medium text-slate-700">Key Finding: </span>
                          {entry.finding}
                        </p>
                        <p>
                          <span className="font-medium text-slate-700">Impact: </span>
                          {entry.impact}
                        </p>
                      </div>
                      {entry.pubLink && (
                        <a
                          href={entry.pubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-sm text-accent hover:text-accent-light font-medium"
                        >
                          View Publication &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
