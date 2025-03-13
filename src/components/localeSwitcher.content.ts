import { Dictionary, t } from "intlayer";

const content = {
  key: "locale-switcher",
  content: {
    switchButton: t({
      en: "Switch to ",
      fr: "Changer en ",
      es: "Cangar por ",
    }),
  },
} satisfies Dictionary;

export default content;
