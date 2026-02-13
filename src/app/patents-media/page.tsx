import SectionHeading from "@/components/SectionHeading";
import { patents, mediaItems } from "@/data/patents";

export default function PatentsMediaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Patents */}
      <SectionHeading
        title="Patents"
        subtitle="Intellectual property arising from translational diagnostic research"
      />
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {patents.map((patent) => (
          <div
            key={patent.id}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            {patent.image ? (
              <img src={patent.image} alt={patent.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            ) : (
              <div className="w-full h-32 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-sm">
                Patent Diagram
              </div>
            )}
            <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 mb-2">
              {patent.number}
            </span>
            <h3 className="text-lg font-semibold text-navy">{patent.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {patent.description}
            </p>
            <p className="mt-2 text-xs text-slate-400">Filed {patent.year}</p>
          </div>
        ))}
      </div>

      {/* Media */}
      <SectionHeading
        title="Media Coverage"
        subtitle="Research featured in major Singapore and international media outlets"
      />
      <div className="space-y-4">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="md:flex">
              {item.image ? (
                <img src={item.image} alt={item.title} className="md:w-48 object-cover min-h-[120px]" />
              ) : (
                <div className="md:w-48 bg-slate-100 flex items-center justify-center text-slate-400 text-sm p-6 min-h-[120px]">
                  Screenshot
                </div>
              )}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-accent">{item.source}</span>
                  <span className="text-xs text-slate-400">&middot; {item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-accent hover:text-accent-light font-medium"
                  >
                    Read Article &rarr;
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
