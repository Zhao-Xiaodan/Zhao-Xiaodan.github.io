import SectionHeading from "@/components/SectionHeading";

const interests = [
  {
    title: "Marathon Running",
    description:
      "Completed the Standard Chartered Singapore Marathon, finishing in the top 12%. Long-distance running provides a mental reset and embodies the perseverance required in research \u2014 both demand pacing, patience, and pushing through barriers.",
    highlight: "Top 12% \u2014 Standard Chartered Singapore Marathon",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Advanced Scuba Diving",
    description:
      "PADI Advanced Open Water certified diver. Exploring underwater ecosystems cultivates observation skills and an appreciation for biological systems at every scale \u2014 from coral reef architecture to the molecular forces that hold life together.",
    highlight: "PADI Advanced Open Water Certified",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Languages",
    description:
      "Fluent in both Chinese (Mandarin) and English, enabling effective communication across international research communities and collaboration with diverse teams in Singapore\u2019s multilingual academic environment.",
    highlight: "Chinese (Mandarin) & English",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
];

export default function BeyondResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        title="Beyond Research"
        subtitle="The pursuits that keep life balanced and perspectives fresh"
      />

      <div className="grid sm:grid-cols-3 gap-6">
        {interests.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
          >
            <div className="w-16 h-16 rounded-full bg-slate-50 text-navy flex items-center justify-center mx-auto mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{item.highlight}</p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
