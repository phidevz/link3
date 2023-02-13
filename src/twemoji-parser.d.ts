// Type definitions for twemoji-parser 14.0
declare module "twemoji-parser" {
  export const TypeName = "emoji";

  export type EmojiEntity = {
    type: string;
    text: string;
    url: string;
    indices: Array<number>;
  };

  export type ParsingOptions = {
    buildUrl?: (codepoints: string, assetType: string) => string;
    assetType?: "png" | "svg";
  };

  /**
   * Parser takes a string and returns an array of the emoji entities it finds.
   */
  export function parse(text: string, options?: ParsingOptions): EmojiEntity[];

  export function toCodePoints(unicodeSurrogates: string): string[];
}
