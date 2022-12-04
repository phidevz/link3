import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faYahoo } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export type BuiltinIcon =
  | "behance"
  | "discord"
  | "github"
  | "facebook"
  | "instagram"
  | "google"
  | "linkedin"
  | "pinterest"
  | "vkontakte"
  | "stackoverflow"
  | "telegram"
  | "youtube"
  | "tiktok"
  | "snapchat"
  | "slack"
  | "messenger"
  | "dribbble"
  | "reddit"
  | "twitter"
  | "whatsapp"
  | "twitch";

export type Link = {
  title: string;
  href: string;
} & (
  | {
      fontawesomeIcon: {
        icon: IconDefinition;
        color?: string;
      };
    }
  | { builtinIcon: BuiltinIcon }
);

export type Configuration = {
  title: string | { firstName: string; lastName: string };
  username?: string;
  locale: string;
  tagline?: string;
  showFooter?: boolean;
  avatarUrl?: string;
  searchEngines?:
    | "no-restrictions"
    | "restrict-all"
    | {
        indexSite?: boolean;
        followLinks?: boolean;
        archive?: boolean;
        showSnippet?: boolean;
        indexIfEmbedded?: boolean;
      };
  links: Link[];
};

export const CONFIGURATION: Configuration = {
  title: { firstName: "Jane", lastName: "Doe" },
  username: "janedoe",
  locale: "en_US",
  links: [
    {
      title: "YouTube",
      href: "https://example.com",
      builtinIcon: "youtube",
    },
    {
      title: "YouTube Live",
      href: "https://example.com",
      builtinIcon: "youtube",
    },
    {
      title: "Twitch",
      href: "https://example.com",
      builtinIcon: "twitch",
    },
    {
      title: "Yahoo",
      href: "https://yahoo.com",
      fontawesomeIcon: { icon: faYahoo, color: "purple" },
    },
    {
      title: "Shop",
      href: "https://example.com",
      fontawesomeIcon: { icon: faShoppingBag },
    },
  ],
};
