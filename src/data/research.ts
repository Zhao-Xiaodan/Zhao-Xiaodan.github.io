export interface ResearchDomain {
  id: string;
  title: string;
  description: string;
  image?: string;
  entries: ResearchEntry[];
}

export interface ResearchEntry {
  title: string;
  background: string;
  innovation: string;
  strategy: string;
  finding: string;
  impact: string;
  image?: string;
  pubLink?: string;
}

export const researchDomains: ResearchDomain[] = [
  {
    id: "A",
    title: "Materials Physics & Functional Surfaces",
    description:
      "Early research centered on nanostructured MnO\u2082 materials and tunable adhesion systems, establishing a strong foundation in surface engineering, materials characterization, and experimental design.",
    entries: [
      {
        title: "Electrically Adjustable Superhydrophobic MnO\u2082 Nanotube Membrane",
        background:
          "Controlling surface wetting and adhesion at the nanoscale is critical for applications ranging from self-cleaning coatings to microfluidic devices, yet dynamically switchable adhesion remained a challenge.",
        innovation:
          "Demonstrated electrically adjustable super-adhesive forces on a superhydrophobic aligned MnO\u2082 nanotube membrane, enabling dynamic control of wetting and adhesion through electrical stimuli.",
        strategy:
          "Fabricated aligned MnO\u2082 nanotube arrays and characterized their wetting behavior under varying electrical potentials using contact angle measurements and adhesion force spectroscopy.",
        finding:
          "Electrical stimuli can dynamically switch the membrane between superhydrophobic low-adhesion and high-adhesion states, providing a tunable platform for surface engineering applications.",
        impact:
          "Established design principles for electrically responsive surfaces, with implications for smart coatings, microfluidics, and bio-inspired material systems. Published in Advanced Functional Materials.",
        image: "/images/MnO2_Electric_adjustive_force.webp",
        pubLink: "https://doi.org/10.1002/adfm.201000513",
      },
    ],
  },
  {
    id: "B",
    title: "Single-Molecule DNA Mechanics & Topology",
    description:
      "Investigating how proteins such as HMGA2, TRF2, and other DNA-binding factors regulate DNA supercoiling, telomere structure, and chromosome stability using magnetic tweezers and AFM-based single-molecule approaches.",
    entries: [
      {
        title: "HMGA2 Regulation of DNA Supercoiling",
        background:
          "HMGA2, an oncofetal protein overexpressed in many cancers, binds to the minor groove of AT-rich DNA, but its effect on DNA topology was unclear.",
        innovation:
          "Used single-molecule magnetic tweezers to quantify how HMGA2 constrains both positive and negative DNA supercoiling.",
        strategy:
          "Performed systematic supercoiling measurements on individual DNA molecules in the presence of varying HMGA2 concentrations.",
        finding:
          "HMGA2 effectively curbs both (+) and (\u2212) unconstrained supercoiling, revealing a topological regulatory mechanism.",
        impact:
          "Links HMGA2\u2019s DNA topology modulation to its role in gene regulation and oncogenesis.",
        image: "/images/HMGA2.webp",
        pubLink: "https://doi.org/10.1038/s41598-017-09104-5",
      },
      {
        title: "TRF2-Dependent DNA Distortion",
        background:
          "Telomere protection relies on shelterin complex proteins, yet the mechanical basis of TRF2\u2019s interaction with telomeric DNA remained poorly understood.",
        innovation:
          "Applied single-DNA manipulation with magnetic tweezers to directly measure force- and topology-dependent TRF2 binding and DNA wrapping.",
        strategy:
          "Combined torsion-constrained and torsion-free DNA stretching assays to dissect TRF2-induced structural changes across a range of forces and supercoiling states.",
        finding:
          "TRF2 wraps telomeric DNA in a positive supercoiling-dependent manner, protecting chromosome ends through topology-specific interactions.",
        impact:
          "Provides a mechanistic framework for understanding telomere maintenance and has implications for aging and cancer biology.",
        pubLink: "https://doi.org/10.1038/s42003-024-05838-x",
      },
      {
        title: "Site-Specific DNA Binding Quantification",
        background:
          "Quantifying site-specific protein\u2013DNA binding with high precision remains challenging using ensemble methods.",
        innovation:
          "Developed single-molecule manipulation protocols for precise, site-resolved binding quantification.",
        strategy:
          "Reviewed and compared force spectroscopy, fluorescence, and tethered-particle approaches for measuring binding thermodynamics and kinetics.",
        finding:
          "Single-molecule methods uniquely resolve heterogeneous binding modes and rare events missed by ensemble averaging.",
        impact:
          "Established a methodological framework widely applicable to the study of transcription factors, histones, and architectural proteins.",
        image: "/images/Label-Free DNA Binding Quantification.webp",
        pubLink: "https://doi.org/10.1016/j.cbpa.2019.08.006",
      },
    ],
  },
  {
    id: "C",
    title: "Translational Diagnostics",
    description:
      "Engineering mechanical immunoassays and point-of-care testing (POCT) platforms that leverage single-molecule force technology for rapid, sensitive disease detection.",
    entries: [
      {
        title: "Force-Dependent Rapid Immunoassay",
        background:
          "Conventional immunoassays rely on optical signals and complex instrumentation, limiting their deployment in resource-limited settings.",
        innovation:
          "Developed a force-dependent mechanical immunoassay that uses magnetic bead displacement as a readout, eliminating optical detection requirements.",
        strategy:
          "Engineered antibody-functionalized DNA tethers on magnetic tweezers platforms with optimized force protocols for antigen discrimination.",
        finding:
          "The mechanical immunoassay achieves high specificity and sensitivity comparable to ELISA within minutes.",
        impact:
          "Establishes a new paradigm for low-cost, rapid, point-of-care diagnostics with pandemic response applications.",
        image: "/images/Force-Dependent Rapid Immunoassay.webp",
      },
      {
        title: "Anti-RBD IgG Quantification from Whole Blood",
        background:
          "Rapid assessment of COVID-19 antibody levels from finger-prick blood was urgently needed for seroprevalence studies.",
        innovation:
          "Created a mechanical assay capable of quantifying anti-RBD IgG directly from unprocessed whole blood.",
        strategy:
          "Combined surface-functionalized magnetic beads with force-based discrimination to detect antibodies in complex biological matrices.",
        finding:
          "Successfully quantified anti-RBD IgG levels from finger-prick samples with results in under 30 minutes.",
        impact:
          "Demonstrates translational readiness for decentralized seroprevalence monitoring during pandemics.",
        image: "/images/QuantificationofAnti-RBDIgGLevels.webp",
        pubLink: "https://doi.org/10.1021/acssensors.3c00393",
      },
    ],
  },
  {
    id: "D",
    title: "AI & Computational Tools",
    description:
      "Developing deep-learning models for automated bead detection, cloud-based image analysis pipelines, and CFD simulations for microfluidic optimization.",
    entries: [
      {
        title: "Deep Learning Bead Detection",
        background:
          "Manual identification and tracking of magnetic beads in microscopy images is time-consuming and limits experimental throughput.",
        innovation:
          "Trained deep learning models for automated bead detection and tracking in single-molecule experiments.",
        strategy:
          "Curated annotated microscopy datasets and developed CNN-based detection pipelines optimized for real-time analysis.",
        finding:
          "Automated detection achieves accuracy comparable to expert manual annotation at significantly higher throughput.",
        impact:
          "Enables high-throughput single-molecule experiments and accelerates data acquisition for translational diagnostics.",
      },
      {
        title: "CFD Simulation for Microfluidic Optimization",
        background:
          "Optimal microfluidic channel design for diagnostic assays requires understanding of complex fluid dynamics at the microscale.",
        innovation:
          "Applied computational fluid dynamics (CFD) simulations to optimize flow conditions in diagnostic chip designs.",
        strategy:
          "Modeled fluid flow, bead transport, and reagent mixing in custom microfluidic geometries using COMSOL Multiphysics.",
        finding:
          "Identified optimal channel geometries and flow rates that maximize assay sensitivity while minimizing sample volume.",
        impact:
          "Reduces design iteration cycles and accelerates development of multiplex diagnostic chips.",
      },
    ],
  },
];
