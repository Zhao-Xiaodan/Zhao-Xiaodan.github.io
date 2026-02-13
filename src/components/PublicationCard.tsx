import type { Publication } from "@/data/publications";

export default function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 text-slate-600 mb-3">
        {pub.category}
      </span>
      <p className="text-sm text-slate-800 leading-relaxed">{pub.citation}</p>
      <p className="mt-3 text-sm text-slate-500 italic leading-relaxed">{pub.summary}</p>
      {pub.doi && (
        <a
          href={pub.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-accent hover:text-accent-light font-medium"
        >
          DOI &rarr;
        </a>
      )}
    </div>
  );
}
