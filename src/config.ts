import type { Configuration } from "./optionTypes";

import { faYahoo } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export const configuration: Configuration = {
  title: { firstName: "Jane", lastName: "Doe" },
  username: "janedoe",
  tagline: "🗡Survival 🏕Outdoor",
  locale: "en_US",
  footer: {
    imprint: { href: "https://example.com/imprint", label: "Imprint" },
    privacyPolicy: {
      href: "https://example.com/privacy",
      label: "Privacy Policy",
    },
  },
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
