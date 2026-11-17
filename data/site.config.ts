
export const siteConfig = {
  // Website identity
  name: "Her Journey, Our Greatest Miracle",
  language: "en",

  // =====================================
  // COLOR PALETTE
  // =====================================

  colors: {
    ivory: "#FFF9F2",
    warmWhite: "#FFFCF8",

    peach: "#F8C9B8",
    coral: "#EF927F",
    softCoral: "#F6B2A0",

    lavender: "#D9C9F0",
    purple: "#9B7BC5",

    babyBlue: "#C8E2F3",
    skyBlue: "#9BCBE8",

    butterYellow: "#F8E4A6",
    champagneGold: "#D6B779",

    mint: "#C6E5D5",
    softPink: "#F5D0D9",
    richPink: "#E99CB7",

    midnightBlue: "#252C4B",
    deepPurple: "#514568",

    textPrimary: "#413A3D",
    textSecondary: "#81777A",
    border: "#EDE2DA"
  },

  // =====================================
  // CHAPTER COLOR THEMES
  // =====================================

  chapterThemes: {
    peach: {
      background: "#FFF1E9",
      accent: "#E99A83",
      secondary: "#F8D2BE",
      text: "#59433D"
    },

    lavender: {
      background: "#F3EDFA",
      accent: "#A58ACB",
      secondary: "#DDD0F0",
      text: "#494054"
    },

    blue: {
      background: "#EDF6FC",
      accent: "#80B6D7",
      secondary: "#D0E8F5",
      text: "#354D61"
    },

    gold: {
      background: "#FBF2DF",
      accent: "#C6A35F",
      secondary: "#F2DFAD",
      text: "#51412C"
    },

    pink: {
      background: "#FFF0F3",
      accent: "#D98DA7",
      secondary: "#F5D1DC",
      text: "#59404A"
    }
  },

  // =====================================
  // TYPOGRAPHY
  // =====================================

  typography: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', Arial, sans-serif",
    handwritten: "'Caveat', cursive",

    sizes: {
      hero: "clamp(3.5rem, 9vw, 8rem)",
      chapter: "clamp(2.5rem, 5vw, 5rem)",
      section: "clamp(2rem, 4vw, 3.5rem)",
      subtitle: "1.25rem",
      body: "1.05rem",
      caption: "0.85rem"
    }
  },

  // =====================================
  // LAYOUT
  // =====================================

  layout: {
    maxWidth: "1440px",
    contentWidth: "1120px",
    readingWidth: "760px",
    pagePadding: "clamp(20px, 5vw, 80px)",
    sectionSpacing: "clamp(90px, 12vw, 170px)",
    borderRadius: "28px",
    imageRadius: "24px"
  },

  // =====================================
  // ANIMATIONS
  // =====================================

  animation: {
    enabled: true,

    revealDuration: 900,
    transitionDuration: 700,

    parallaxIntensity: 0.15,

    floatingElements: true,
    floatingFlowers: true,
    floatingHearts: true,
    floatingStars: true,

    pageTransitions: true,
    lineDrawing: true,

    respectReducedMotion: true
  },

  // =====================================
  // VISUAL EFFECTS
  // =====================================

  effects: {
    watercolorTexture: true,
    paperTexture: true,
    softShadows: true,
    organicShapes: true,
    floralDecorations: true,
    geometricPatterns: true,
    goldenAccents: true,
    glassEffects: false
  },

  // =====================================
  // INTERACTION SETTINGS
  // =====================================

  interactions: {
    smoothScrolling: true,
    imageLightbox: true,
    interactiveTimeline: true,
    birthReveal: true,
    storyProgress: true,
    mobileNavigation: true
  },

  // =====================================
  // ACCESSIBILITY
  // =====================================

  accessibility: {
    reducedMotionSupport: true,
    keyboardNavigation: true,
    imageAltText: true,
    sufficientContrast: true,
    focusIndicators: true
  },

  // =====================================
  // FOOTER
  // =====================================

  footer: {
    message: "A story written in love, faith and miracles.",
    signature: "Forever, your husband.",
    showYear: false
  }
} as const;

export type SiteConfig = typeof siteConfig;
