interface ResearchCardProps {
  title: string;
  summary: string;
  link?: string;
}

export default function ResearchCard({ title, summary, link }: ResearchCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="w-full h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-sm">
        Research Figure
      </div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{summary}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-accent hover:text-accent-light font-medium"
        >
          View Publication &rarr;
        </a>
      )}
    </div>
  );
}
