import type { IconDefinition } from "@fortawesome/fontawesome-common-types";


export type BuiltinIcon = "behance" |
  "discord" |
  "github" |
  "facebook" |
  "instagram" |
  "google" |
  "linkedin" |
  "pinterest" |
  "vkontakte" |
  "stackoverflow" |
  "telegram" |
  "youtube" |
  "tiktok" |
  "snapchat" |
  "slack" |
  "messenger" |
  "dribbble" |
  "reddit" |
  "twitter" |
  "whatsapp" |
  "twitch";

export type Link = {
  title: string;
  href: string;
} & ({
  fontawesomeIcon: {
    icon: IconDefinition;
    color?: string;
  };
} |
{ builtinIcon: BuiltinIcon; });

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterOptions = {
  privacyPolicy?: FooterLink;
  imprint?: FooterLink;
};

export type Configuration = {
  title: string | { firstName: string; lastName: string; };
  username?: string;
  locale: string;
  tagline?: string;
  footer?: "show" | "hide" | FooterOptions;
  avatarUrl?: string;
  searchEngines?: "no-restrictions" |
  "restrict-all" |
  {
    indexSite?: boolean;
    followLinks?: boolean;
    archive?: boolean;
    showSnippet?: boolean;
    indexIfEmbedded?: boolean;
  };
  links: Link[];
};
