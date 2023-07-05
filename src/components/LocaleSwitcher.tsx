import { useState } from "react";
import { SegmentedControl, Center, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "en");
  const { i18n } = useTranslation();

  const localeSwitch = (locale: string) => {
    setLocale(locale);
    i18n.changeLanguage(locale);
    localStorage.setItem("locale", locale);
  };

  const toggleLocale = () => {
    if (locale == "en") {
      localeSwitch("ru");
    } else {
      localeSwitch("en");
    }
  };

  const colorActive = "#228be6";

  return (
    <>
      <div className="locale_switcher">
        <SegmentedControl
          value={locale}
          onChange={toggleLocale}
          data={[
            {
              value: "en",
              label: (
                <Center>
                  <Box sx={{ color: locale == "en" ? colorActive : "" }}>
                    En
                  </Box>
                </Center>
              ),
            },
            {
              value: "ru",
              label: (
                <Center>
                  <Box sx={{ color: locale == "ru" ? colorActive : "" }}>
                    Рус
                  </Box>
                </Center>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
