const items = [
  { label: "Ph.D.", detail: "National University of Singapore (2011)" },
  { label: "20+", detail: "Peer-reviewed publications" },
  { label: "~400", detail: "Citations | h-index 11" },
  { label: "2", detail: "US patent applications" },
  { label: "Media", detail: "Straits Times / \u8054\u5408\u65e9\u62a5 / NUS News" },
  { label: "Role", detail: "Senior Research Fellow (Translational)" },
];

export default function SnapshotGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white border border-slate-200 rounded-xl p-5 text-center hover:shadow-md transition-shadow"
        >
          <div className="text-2xl font-bold text-navy">{item.label}</div>
          <div className="mt-1 text-sm text-slate-500">{item.detail}</div>
        </div>
      ))}
    </div>
  );
}
