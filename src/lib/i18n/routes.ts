export const routes = {
  home: {
    en: "",
    es: "es",
  },
  thank_you: {
    en: "thank-you",
    es: "es/gracias",
  },
} as const;

export type PageKey = keyof typeof routes;
