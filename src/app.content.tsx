// src/app.content.ts
import { t, type Dictionary } from "intlayer";
import { type ReactNode } from "react";

const appContent: Dictionary = {
  key: "app",
  content: {
    getStarted: t<ReactNode>({
      // N'oubliez pas d'importer React si vous utilisez un React node dans votre contenu
      en: (
        <>
          Edit <code>src/App.tsx</code> and save to reload
        </>
      ),
      fr: (
        <>
          Éditez <code>src/App.tsx</code> et enregistrez pour recharger
        </>
      ),
      es: (
        <>
          Edita <code>src/App.tsx</code> y guarda para recargar
        </>
      ),
    }),
    reactLink: {
      href: "https://reactjs.org",
      content: t({
        en: "Learn React",
        fr: "Apprendre React",
        es: "Aprender React",
      }),
    },
  },
};

export default appContent;
