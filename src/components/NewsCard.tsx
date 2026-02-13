import type { NewsItem } from "@/data/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="w-20 h-20 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center text-slate-400 text-xs">
        Thumbnail
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-slate-400">{item.date}</span>
          {item.source && (
            <span className="text-xs text-slate-400">&middot; {item.source}</span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-navy truncate">{item.title}</h3>
        <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.summary}</p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs text-accent hover:text-accent-light font-medium"
          >
            Read more &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
