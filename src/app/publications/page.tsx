import SectionHeading from "@/components/SectionHeading";
import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        title="Publications"
        subtitle={`${publications.length} peer-reviewed publications across biophysics, diagnostics, and materials science`}
      />

      <div className="space-y-4">
        {publications.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );
}
