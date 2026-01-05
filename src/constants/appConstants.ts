// Animation constants
export const ANIMATION_CONSTANTS = {
  BIRD_FLY_DURATION: 3,
  BIRD_FLY_DELAY_LOAD: 2.5,
  BIRD_FLY_DELAY_SCROLL: 0.1,
  BIRD_STAGGER_DELAY: 0.5,
  HERO_FADE_DURATION: 0.6,
  SKY_FADE_DURATION: 1.5,
  SCROLL_BUTTON_ANIMATION_DURATION: 2,
} as const;

// Bird positions and configurations
export const BIRD_CONFIGURATIONS = {
  TOP_LAYER: {
    SCALE_MOBILE: 0.4,
    SCALE_DESKTOP: 1,
    BIRDS: [
      {
        top: 291,
        left: 298,
        src: "/Vector1.svg",
        width: 42,
        height: 14,
        delay: 0.2,
      },
      {
        top: 329,
        left: 495,
        src: "/Vector2.svg",
        width: 43,
        height: 14,
        delay: 0.3,
      },
      {
        top: 305,
        left: 1406,
        src: "/Vector3.svg",
        width: 43,
        height: 14,
        delay: 0.4,
      },
      {
        top: 465,
        left: 1446,
        src: "/Vector4.svg",
        width: 43,
        height: 14,
        delay: 0.5,
      },
    ],
  },
  SKY_LAYER: {
    SCALE_MOBILE: 0.5,
    SCALE_DESKTOP: 1,
    BIRDS: [
      {
        top: 925.39,
        left: 300.71,
        src: "/Group 1.svg",
        width: 103.38,
        height: 61.65,
        delay: 0.6,
      },
      {
        top: 881,
        left: 665.18,
        src: "/Group 2.svg",
        width: 87.74,
        height: 56.99,
        delay: 0.7,
      },
      {
        top: 882,
        left: 1577.18,
        src: "/Group 3.svg",
        width: 127.08,
        height: 41.89,
        delay: 0.8,
      },
      {
        top: 956,
        left: 1263.18,
        src: "/Group 4.svg",
        width: 128.93,
        height: 101.99,
        delay: 0.9,
      },
    ],
  },
  FLYING_BIRDS: {
    BIRD_1: { top: 900, left: -150, scale: 0.7, width: 103.38, height: 61.65 },
    BIRD_2: {
      top: 1000,
      left: 1600,
      scale: 0.8,
      width: 128.93,
      height: 101.99,
    },
  },
} as const;

// Hero section content
export const HERO_CONTENT = {
  SUBTITLE: "#1 iMessage Automation Tool",
  TITLE: {
    PART_1: "iMessage",
    PART_2: "Automation for Teams and AI Workflows.",
  },
  DESCRIPTION:
    "Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.",
  BUTTONS: {
    PRIMARY: "Get Started",
    SECONDARY: "Download the Mac app",
  },
} as const;

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { name: "How It Works", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Use Case", href: "#" },
  { name: "FAQ", href: "#" },
] as const;
