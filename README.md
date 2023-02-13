# ![screenshoot](public/favicon.svg) Link3

[![Playwright Tests](https://github.com/phidevz/link3/actions/workflows/playwright.yml/badge.svg)](https://github.com/phidevz/link3/actions/workflows/playwright.yml)

![screenshoot](readme.png)

Link3 is a free clone of LinkTree, a popular link aggregator for social media. The name is coming from a mispronounced "link three".

It is built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Feel free to use it as a template for your own projects.

## 👀 Demo

You can see a demo of the project at [https://link3.phimath.de/](https://link3.phimath.de/)

## 🚀 Quick start

### 1. **Setup environment**

To customize the link tree and build your own version, you need Node.js, at least version 18.

It is also recommended to have an editor or IDE with Typescript support. If you run Visual Studio Code, a free code editor excellent for working with Astro and Tailwind, make sure to have the Astro, Prettier and Tailwind CSS extensions installed.

Download the repository as a ZIP archive, extract the files to any location you like. Open a terminal in the corresponding folder and run the command `npm install` to install required dependencies.

### 2. **Customize your general settings**

Open `src/config.ts` and edit the variables (except links) to your liking.

The schema is:

```typescript
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
```

Some hints for choosing the values (especially if you do not know Typescript):

- A questionmark behind a property means, that it is optional. Everything else is required.
- `string` means any text.
- `boolean` means either `true` or `false`.
- The `|` means "or"; thus the `title` can be either a freely selectable title, or you can specify your first and last name.
- It is advisible to specify the `title` property as first and last name, so that it can be better indexed by search engines.
- You must supply the `locale` in the format `language_TERRITORY`, where `language` is a [two-letter ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and `TERRITORY` is the uppercase [two-letter ISO 3166 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
- The `searchEngines` property is rather advanced. Usually, you will good default settings, if you just do not specify this. If you do not want search engines like Google to index your site and show it in search results, you are generally good off to use `restrict-all` as a setting. If you definitely want search engines to fully index your site (not just some aspects), use the `no-restrictions` setting. If you know what you are doing, you can also customize the settings. For more information, see [this](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) Google documentation.

### 3. **Customize your links**

Now in the `src/config.ts` file, edit the `links` array.
In the example, you can see there are five links provided.

To add a new link, place a comma behind the last entry (denoted by the last closing `}` before the `]`) and place a new object:

```js
{
  title: "The title you wish",
  href: "https://example.com/where/you/want/the/link/to/point",
  ...
}
```

The `title` and `href` attributes are required.

Also, a third attribute is required, where above code has the three dots (`...`): You must specify a form of icon.
You can choose from some built-in icons, or use any of the free Fontawesome 6 icons.

#### 🔠 Use A Built-in Icon

Replace the `...` in the example above with:

```javascript
builtinIcon: "iconname"
```

For the `iconname`, you can use the following values:

- `behance`
- `discord`
- `github`
- `facebook`
- `instagram`
- `google`
- `linkedin`
- `pinterest`
- `vkontakte`
- `stackoverflow`
- `telegram`
- `youtube`
- `tiktok`
- `snapchat`
- `slack`
- `messenger`
- `dribbble`
- `reddit`
- `twitter`
- `whatsapp`
- `twitch`

#### Use A Fontawesome Icon

You can use your editor support to import any of the `faXxx` icons, e.g., use `import { faShop } from "@fortawesome/free-solid-svg-icons";` to import the icon `fa-solid fa-shop` or use `import { faShop } from "@fortawesome/free-regular-svg-icons";` to import the icon `fa-regular fa-shop`.

The following packs are installed:

- free-brands-svg-icons
- free-regular-svg-icons
- free-solid-svg-icons

If you do not know what exactly you are looking for, have a look at [https://fontawesome.com/icons/](https://fontawesome.com/icons/). Do not be fooled: A lot of the icons you will find there are only available through a Pro membership.

### 4. **Customize your avatar**

Replace the file `public/avatar.png` with your own avatar. If you want to use a file format other than PNG, you must change the file extension in `src/pages/index.astro`, Line 69.

You can also specify an externally hosted image by setting the `avatarUrl` in the configuration. Be sure that access to the external image is not restricted by CORS settings.

### 5. **Customize the footer (optional)**

If you want to hide the footer, use the config option

```javascript
footer: "hide"
```

In case you want to supply a link to a privacy policy and/or an imprint, you can specify details as such:

```javascript
footer: {
  imprint: {
    href: "https://example.com/imprint",
    label: "Imprint"
  },
  privacyPolicy: {
    href: "https://example.com/privacy",
    label: "Privacy Policy",
  }
}
```

### 6. **Deploy Your Link3**

Use the command `npm run build` and copy all assets from the `dist/` folder to a static web hosting service.

Popular, low-cost or free services are:

- GitHub Pages
- Cloudflare Pages
- Azure Static Web App
- Amazon S3

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                             |
| :---------------- | :------------------------------------------------- |
| `npm install`     | Installs dependencies                              |
| `npm run dev`     | Starts local dev server at `http://localhost:3000` |
| `npm run build`   | Build your production site to `dist/`              |
| `npm run preview` | Preview your build locally, before deploying       |

## 📝 License

Licensed under the [MIT License](./LICENSE).
