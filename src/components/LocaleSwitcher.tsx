import type { FC } from "react";
import { useIntlayer, useLocale } from "react-intlayer";

export const LocaleSwitcher: FC = () => {
  const { switchButton } = useIntlayer("locale-switcher");
  const { setLocale, availableLocales } = useLocale();

  return (
    <>
      {availableLocales.map((locale) => (
        <button onClick={() => setLocale(locale)}>
          {switchButton}
          {locale}
        </button>
      ))}
    </>
  );
};
