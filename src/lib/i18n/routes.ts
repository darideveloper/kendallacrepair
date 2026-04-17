export const routes = {
  home: {
    en: "",
    es: "es",
  },
  thank_you: {
    en: "thank-you",
    es: "es/gracias",
  },
  "404": {
    en: "404",
    es: "es/404",
  },
} as const;

export type PageKey = keyof typeof routes;
