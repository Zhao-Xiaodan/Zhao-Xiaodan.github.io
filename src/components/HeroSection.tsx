export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-navy-dark to-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Portrait placeholder */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-slate-300 flex-shrink-0 flex items-center justify-center text-slate-500 text-sm border-4 border-white/20 overflow-hidden">
            <span className="text-center px-4">Portrait Photo</span>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Xiaodan Zhao, Ph.D.
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-blue-200">
              Senior Research Fellow | Translational Biophysics | Deep-tech Diagnostics | AI-enabled Bioengineering
            </p>
            <p className="mt-4 text-base text-slate-300 max-w-2xl">
              Bridging single-molecule biophysics with real-world diagnostic innovation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/research"
                className="px-5 py-2.5 bg-white text-navy font-medium rounded-lg hover:bg-slate-100 transition-colors text-sm"
              >
                View Research
              </a>
              <a
                href="/publications"
                className="px-5 py-2.5 border border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Publications
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
