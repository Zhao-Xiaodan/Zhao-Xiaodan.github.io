export interface Patent {
  id: number;
  title: string;
  number: string;
  year: number;
  description: string;
  image?: string;
}

export interface MediaItem {
  id: number;
  title: string;
  source: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export const patents: Patent[] = [
  {
    id: 1,
    title: "Single-Molecule Mechanical Sensing (SMMS) Platform",
    number: "US Patent App. 17/924,958",
    year: 2023,
    description:
      "A platform technology for single-molecule mechanical sensing that enables rapid, high-sensitivity detection of biomarkers using force-based readout from magnetic tweezers. The invention supports point-of-care diagnostic applications with minimal sample preparation.",
    image: "/images/Patent_SMMS_Platform.webp",
  },
  {
    id: 2,
    title: "A Method for Virus and Biomarker Detection",
    number: "US Patent App. 17/928,221",
    year: 2023,
    description:
      "A multiplex diagnostic chip design that integrates mechanical immunoassay technology with microfluidic engineering, enabling simultaneous detection of multiple analytes from small sample volumes for clinical and field-deployable diagnostics.",
    image: "/images/Patent_A METHOD FOR VIRUS AND BIOMARKER DETECTION .webp",
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
    image: "/images/\u8054\u5408\u65e9\u62a5.webp",
  },
  {
    id: 2,
    title: "$49M for NUS Biomedical Innovations",
    source: "The Straits Times",
    date: "2024",
    description:
      "Coverage of $49 million funding awarded to NUS researchers for developing biomedical innovations targeting age-related conditions, highlighting translational diagnostic research.",
    link: "https://www.straitstimes.com/singapore/49m-for-nus-researchers-to-develop-biomedical-innovations-for-age-related-conditions",
    image: "/images/THESTRAITS TIMES.webp",
  },
  {
    id: 3,
    title: "NUS Mechanobiology Institute Receives S$49M Boost",
    source: "NUS News",
    date: "2024",
    description:
      "Feature on NUS Mechanobiology Institute receiving funding to develop biomedical innovations for age-related conditions.",
    link: "https://news.nus.edu.sg/nus-mechanobiology-institute-receives-s49m-boost-to-develop-biomedical-innovations-for-age-related-conditions/",
    image: "/images/NUS_news.webp",
  },
];
