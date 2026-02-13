export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  link?: string;
  source?: string;
  image?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Publication in JACS (2025)",
    summary:
      "Co-authored study on the force-transducing mechanism of a motor\u2013stator complex published in the Journal of the American Chemical Society.",
    date: "2025",
    link: "https://doi.org/10.1021/jacs.4c18050",
    source: "JACS",
    image: "/images/logos/jacs.webp",
  },
  {
    id: 2,
    title: "Featured in The Straits Times",
    summary:
      "$49M for NUS researchers to develop biomedical innovations for age-related conditions \u2014 research highlighted in Singapore\u2019s leading English-language newspaper.",
    date: "2024",
    link: "https://www.straitstimes.com/singapore/49m-for-nus-researchers-to-develop-biomedical-innovations-for-age-related-conditions",
    source: "The Straits Times",
    image: "/images/THESTRAITS TIMES.webp",
  },
  {
    id: 3,
    title: "\u8054\u5408\u65e9\u62a5\u62a5\u9053 (Zaobao Coverage)",
    summary:
      "Research on biomedical diagnostic innovation featured in Zaobao, Singapore\u2019s leading Chinese-language newspaper.",
    date: "2024",
    link: "https://www.zaobao.com.sg/news/singapore/story20240125-1464185",
    source: "\u8054\u5408\u65e9\u62a5",
    image: "/images/\u8054\u5408\u65e9\u62a5.webp",
  },
  {
    id: 4,
    title: "NUS Mechanobiology Institute Receives S$49M Boost",
    summary:
      "NUS MBI receives funding to develop biomedical innovations for age-related conditions, featuring translational diagnostic research.",
    date: "2024",
    link: "https://news.nus.edu.sg/nus-mechanobiology-institute-receives-s49m-boost-to-develop-biomedical-innovations-for-age-related-conditions/",
    source: "NUS News",
    image: "/images/NUS_news.webp",
  },
  {
    id: 5,
    title: "TRF2 Study Published in Communications Biology",
    summary:
      "Single-DNA manipulation study exploring TRF2-dependent DNA distortion accepted in Nature Communications Biology.",
    date: "2024",
    link: "https://doi.org/10.1038/s42003-024-05838-x",
    source: "Communications Biology",
    image: "/images/logos/comms-bio.webp",
  },
  {
    id: 6,
    title: "AI Tool Development for Diagnostics",
    summary:
      "Ongoing development of deep-learning-based image analysis tools for automated bead detection in single-molecule mechanical sensing platforms.",
    date: "2024",
    link: "https://huggingface.co/spaces/Dan2727",
    source: "HuggingFace",
    image: "/images/logos/huggingface.webp",
  },
];
