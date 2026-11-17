
export type StoryTheme =
  | "peach"
  | "lavender"
  | "blue"
  | "gold"
  | "pink";

export interface FamilyDetails {
  wifeName: string;
  daughterName: string;
  husbandName: string;
  discoveryMonth: string;
  discoveryYear: string;
  birthDate: string;
  birthTime: string;
  birthWeight: string;
  hospitalName: string;
  birthMonth: string;
}

export interface Memory {
  image: string;
  caption: string;
}

export interface StoryMoment {
  title: string;
  description: string;
  image: string;
}

export interface Chapter {
  id: string;
  number: string;
  label: string;
  title: string;
  subtitle: string;
  theme: StoryTheme;
  illustration: string;
  paragraphs: readonly string[];
  quote: string;
  memories?: readonly Memory[];
  gallery?: readonly Memory[];
  specialMoments?: readonly StoryMoment[];
  emotionalMoments?: readonly StoryMoment[];
  moments?: readonly StoryMoment[];
  handwrittenTribute?: string;
  birthAnnouncement?: string;
  newborn?: {
    image: string;
    caption: string;
    birthDate: string;
    birthTime: string;
    birthWeight: string;
  };
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  caption: string;
  category: string;
}

export interface PersonalLetter {
  eyebrow: string;
  title: string;
  greeting: string;
  paragraphs: readonly string[];
  signature: string;
  signedBy: string;
}
