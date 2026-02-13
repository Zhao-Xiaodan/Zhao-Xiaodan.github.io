export type PublicationCategory =
  | "Diagnostics & Translational Research"
  | "DNA Mechanics & Supercoiling"
  | "Magnetic Tweezers Engineering"
  | "Materials Physics (Early Career)";

export interface Publication {
  id: number;
  citation: string;
  year: number;
  category: PublicationCategory;
  summary: string;
  doi?: string;
}

export const categories: PublicationCategory[] = [
  "Diagnostics & Translational Research",
  "DNA Mechanics & Supercoiling",
  "Magnetic Tweezers Engineering",
  "Materials Physics (Early Career)",
];

export const publications: Publication[] = [
  {
    id: 1,
    citation:
      "Yeow J, Chia CG, Lim NZ-L, Zhao X, Yan J, Chng S-S. Structural Insights into the Force-Transducing Mechanism of a Motor\u2013Stator Complex Important for Bacterial Outer Membrane Lipid Homeostasis. Journal of the American Chemical Society 147, 24299\u201308 (2025).",
    year: 2025,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This study reveals the force-transducing mechanism of a motor\u2013stator complex critical for bacterial outer membrane lipid homeostasis, using single-molecule force spectroscopy combined with structural analysis to uncover how mechanical force is transmitted at the molecular level.",
    doi: "https://doi.org/10.1021/jacs.4c18050",
  },
  {
    id: 2,
    citation:
      "Ng J, Zhao X, Liu X, Soman A, Nordenski\u00f6ld L, et al. SMCHD1 compacts DNA directly in an ATP-regulated manner. bioRxiv:2025.07.08.663435 (2025).",
    year: 2025,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This preprint demonstrates that SMCHD1 directly compacts DNA in an ATP-regulated manner, providing insights into how this protein contributes to chromatin organization and X-chromosome inactivation through mechanical DNA manipulation studies.",
  },
  {
    id: 3,
    citation:
      "Zhao, X. et al. Exploring TRF2-Dependent DNA Distortion Through Single-DNA Manipulation Studies. Communications Biology 7, 148 (2024).",
    year: 2024,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "Using magnetic tweezers, this study reveals how TRF2 induces DNA distortion at telomeric sequences, providing mechanistic insights into telomere protection. The work shows TRF2 wraps DNA in a force- and topology-dependent manner, advancing understanding of chromosome end stability.",
    doi: "https://doi.org/10.1038/s42003-024-05838-x",
  },
  {
    id: 4,
    citation:
      "Zhao, X., Jiang, Y., Zhou, Y. & Yan, J. Force-Dependent Rapid Immunoassay of High Specificity and Sensitivity. Mechanobiology in Medicine, 100061 (2024).",
    year: 2024,
    category: "Diagnostics & Translational Research",
    summary:
      "This paper introduces a force-dependent rapid immunoassay that leverages mechanical signals for high-specificity and high-sensitivity antigen detection, representing a new paradigm in point-of-care testing that bypasses traditional optical readout limitations.",
  },
  {
    id: 5,
    citation:
      "Zhou, Y. et al. A Mechanical Assay for the Quantification of Anti-RBD IgG Levels in Finger-Prick Whole Blood. ACS Sensors 8, 2986\u20132995 (2023).",
    year: 2023,
    category: "Diagnostics & Translational Research",
    summary:
      "A novel mechanical assay quantifies anti-RBD IgG antibody levels directly from finger-prick whole blood samples. This technology enables rapid, low-cost seroprevalence assessment without laboratory equipment, demonstrating strong translational potential for pandemic response.",
    doi: "https://doi.org/10.1021/acssensors.3c00393",
  },
  {
    id: 6,
    citation:
      "Zhou, Y. et al. A novel design for magnetic tweezers with wide-range temperature control. Biophysical Journal 122, 3860\u20133868 (2023).",
    year: 2023,
    category: "Magnetic Tweezers Engineering",
    summary:
      "This work presents an innovative magnetic tweezers design enabling precise, wide-range temperature control during single-molecule experiments. The instrument extends the capability of force spectroscopy to study temperature-dependent biomolecular processes.",
    doi: "https://doi.org/10.1016/j.bpj.2023.08.004",
  },
  {
    id: 7,
    citation:
      "Lau, M. S. et al. Transcriptional repression by a secondary DNA binding surface of DNA topoisomerase I safeguards against hypertranscription. Nature Communications 14, 6464 (2023).",
    year: 2023,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This study uncovers a secondary DNA binding surface of topoisomerase I that acts as a safeguard against hypertranscription, revealing a dual-function mechanism in gene regulation through combined biochemical and single-molecule approaches.",
  },
  {
    id: 8,
    citation:
      "Zhao, X., Liu, X. P. & Yan, J. DNA-binding proteins studied by mechanical manipulation and AFM imaging of single DNA molecules. Biophysics Reports 8, 212\u2013224 (2022).",
    year: 2022,
    category: "Magnetic Tweezers Engineering",
    summary:
      "A comprehensive review covering how mechanical manipulation and AFM imaging of single DNA molecules reveal the binding dynamics and structural effects of DNA-binding proteins, highlighting the power of single-molecule biophysics in structural biology.",
    doi: "https://doi.org/10.52601/bpr.2022.220015",
  },
  {
    id: 9,
    citation:
      "Hu, X., Zhao, X., Loh, I. Y., Yan, J. & Wang, Z. Single-molecule mechanical study of an autonomous artificial translational molecular motor beyond bridge-burning design. Nanoscale 13, 13195\u201313207 (2021).",
    year: 2021,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This work presents single-molecule mechanical characterization of an autonomous artificial molecular motor that operates beyond traditional bridge-burning designs, demonstrating persistent directional motion along DNA tracks through a novel non-destructive mechanism.",
    doi: "https://doi.org/10.1039/D1NR02296B",
  },
  {
    id: 10,
    citation:
      "Zhao, X. et al. Single-molecule manipulation quantification of site-specific DNA binding. Current Opinion in Chemical Biology 53, 106\u2013117 (2019).",
    year: 2019,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This review summarizes advances in single-molecule manipulation techniques for quantifying site-specific DNA binding, covering force spectroscopy methods that enable precise measurement of protein-DNA interaction thermodynamics and kinetics.",
    doi: "https://doi.org/10.1016/j.cbpa.2019.08.006",
  },
  {
    id: 11,
    citation:
      "Ahmed, S. M. et al. The chromatin structuring protein HMGA2 influences human subtelomere stability and cancer chemosensitivity. PLoS One 14, e0215696 (2019).",
    year: 2019,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This study shows that HMGA2 influences subtelomere stability and cancer chemosensitivity, linking chromatin architecture to therapeutic response and providing insights into HMGA2 as a potential biomarker or therapeutic target in cancer treatment.",
  },
  {
    id: 12,
    citation:
      "You, H. et al. Two-state folding energy determination based on transition points in nonequilibrium single-molecule experiments. The Journal of Physical Chemistry Letters 9, 811\u2013816 (2018).",
    year: 2018,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "A novel approach to determine two-state folding energies from transition points in nonequilibrium single-molecule pulling experiments, providing a practical method to extract thermodynamic parameters from dynamic force spectroscopy data.",
  },
  {
    id: 13,
    citation:
      "Tong, Q. et al. ZYH005, a novel DNA intercalator, overcomes all-trans retinoic acid resistance in acute promyelocytic leukemia. Nucleic Acids Research 46, 3284\u20133297 (2018).",
    year: 2018,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This study identifies ZYH005 as a novel DNA intercalator capable of overcoming all-trans retinoic acid resistance in acute promyelocytic leukemia, demonstrating its mechanism of action through single-molecule DNA mechanics and cell biology approaches.",
  },
  {
    id: 14,
    citation:
      "Zhao, X., Zeng, X., Lu, C. & Yan, J. Studying the mechanical responses of proteins using magnetic tweezers. Nanotechnology 28, 414002 (2017).",
    year: 2017,
    category: "Magnetic Tweezers Engineering",
    summary:
      "A methodological study on using magnetic tweezers to probe the mechanical responses of proteins, detailing experimental protocols and analysis frameworks for studying protein unfolding, refolding, and force-dependent conformational changes.",
    doi: "https://doi.org/10.1088/1361-6528/aa837e",
  },
  {
    id: 15,
    citation:
      "Zhao, X., Peter, S., Dr\u00f6ge, P. & Yan, J. Oncofetal HMGA2 effectively curbs unconstrained (+) and (\u2212) DNA supercoiling. Scientific Reports 7, 8440 (2017).",
    year: 2017,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "Using single-molecule magnetic tweezers, this study demonstrates that HMGA2 effectively constrains both positive and negative DNA supercoiling, revealing a fundamental mechanism by which this oncofetal protein regulates DNA topology and potentially influences gene expression.",
    doi: "https://doi.org/10.1038/s41598-017-09104-5",
  },
  {
    id: 16,
    citation:
      "Yang, K., Lu, C., Zhao, X. & Kawamura, R. From bead to rod: Comparison of theories by measuring translational drag coefficients of micron-sized magnetic bead-chains in Stokes flow. PLoS One 12, e0188015 (2017).",
    year: 2017,
    category: "Magnetic Tweezers Engineering",
    summary:
      "This work compares theoretical predictions of drag coefficients for bead-chains in Stokes flow with experimental measurements, providing practical calibration guidance for magnetic tweezers and other micromanipulation techniques.",
  },
  {
    id: 17,
    citation:
      "Kulemzina, I. et al. A Reversible Association between Smc Coiled Coils Is Regulated by Lysine Acetylation and Is Required for Cohesin Association with the DNA. Molecular Cell 63, 1044\u20131054 (2016).",
    year: 2016,
    category: "DNA Mechanics & Supercoiling",
    summary:
      "This study reveals that reversible lysine acetylation regulates Smc coiled-coil association, which is essential for cohesin loading onto DNA. The findings link post-translational modification to the mechanical dynamics of chromosome cohesion.",
    doi: "https://doi.org/10.1016/j.molcel.2016.08.008",
  },
  {
    id: 18,
    citation:
      "Yu, B. Z. et al. Hierarchical \u03b1-MnO\u2082 Tube-on-Tube Arrays with Superior, Structure-Dependent Pseudocapacitor Performance Synthesized via a Selective Dissolution and Coherent Growth Mechanism. Advanced Materials Interfaces 3, 1500761 (2016).",
    year: 2016,
    category: "Materials Physics (Early Career)",
    summary:
      "Hierarchical MnO\u2082 tube-on-tube nanostructure arrays are synthesized via a selective dissolution mechanism, demonstrating superior pseudocapacitor performance dependent on their unique hierarchical architecture.",
  },
  {
    id: 19,
    citation:
      "Zhao, X. D. et al. Electrically adjustable, super adhesive force of a superhydrophobic aligned MnO\u2082 nanotube membrane. Advanced Functional Materials 21, 184\u2013190 (2011).",
    year: 2011,
    category: "Materials Physics (Early Career)",
    summary:
      "This study demonstrates electrically adjustable super-adhesive forces on a superhydrophobic aligned MnO\u2082 nanotube membrane, showing how electrical stimuli can dynamically control wetting and adhesion properties at the nanoscale.",
  },
  {
    id: 20,
    citation:
      "Zhao, X. D., Fan, H. M., Liu, X. Y., Pan, H. & Xu, H. Y. Pattern-dependent tunable adhesion of superhydrophobic MnO\u2082 nanostructured film. Langmuir 27, 3224\u20133228 (2011).",
    year: 2011,
    category: "Materials Physics (Early Career)",
    summary:
      "Pattern-dependent tunable adhesion is achieved on superhydrophobic MnO\u2082 nanostructured films, revealing how surface patterning controls the transition between lotus-like and rose-petal-like wetting states.",
  },
  {
    id: 21,
    citation:
      "Zhao, X., Xu, G. & Liu, X. Superhydrophobic surfaces: beyond lotus effect. Bioinspiration: From Nano to Micro Scales, 331\u2013378 (2012).",
    year: 2012,
    category: "Materials Physics (Early Career)",
    summary:
      "A comprehensive book chapter exploring superhydrophobic surfaces beyond the classic lotus effect, covering design principles, fabrication methods, and functional applications of biomimetic non-wetting surfaces.",
  },
];
