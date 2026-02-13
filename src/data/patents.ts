export interface Patent {
  id: number;
  title: string;
  number: string;
  year: number;
  description: string;
}

export interface MediaItem {
  id: number;
  title: string;
  source: string;
  date: string;
  description: string;
  link?: string;
}

export const patents: Patent[] = [
  {
    id: 1,
    title: "Single-Molecule Mechanical Sensing (SMMS) Platform",
    number: "US Patent App. 17/924,958",
    year: 2023,
    description:
      "A platform technology for single-molecule mechanical sensing that enables rapid, high-sensitivity detection of biomarkers using force-based readout from magnetic tweezers. The invention supports point-of-care diagnostic applications with minimal sample preparation.",
  },
  {
    id: 2,
    title: "Multiplex Mechanical Diagnostic Chip",
    number: "US Patent App. 17/928,221",
    year: 2023,
    description:
      "A multiplex diagnostic chip design that integrates mechanical immunoassay technology with microfluidic engineering, enabling simultaneous detection of multiple analytes from small sample volumes for clinical and field-deployable diagnostics.",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "\u8054\u5408\u65e9\u62a5: Biomedical Diagnostic Innovation",
    source: "\u8054\u5408\u65e9\u62a5 (Zaobao)",
    date: "January 2024",
    description:
      "Featured coverage of research on innovative biomedical diagnostic technologies being developed at the National University of Singapore.",
    link: "https://www.zaobao.com.sg/news/singapore/story20240125-1464185",
  },
  {
    id: 2,
    title: "$49M for NUS Biomedical Innovations",
    source: "The Straits Times",
    date: "2024",
    description:
      "Coverage of $49 million funding awarded to NUS researchers for developing biomedical innovations targeting age-related conditions, highlighting translational diagnostic research.",
    link: "https://www.straitstimes.com/singapore/49m-for-nus-researchers-to-develop-biomedical-innovations-for-age-related-conditions",
  },
  {
    id: 3,
    title: "NUS Research Highlights",
    source: "NUS News",
    date: "2024",
    description:
      "Feature on translational biophysics research and diagnostic innovation at the National University of Singapore.",
  },
];
