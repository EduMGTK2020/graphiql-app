import { useState } from "react";
import { SegmentedControl, Center, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState("en");
  const { i18n } = useTranslation();

  const toggleLocale = () => {
    if (locale == "en") {
      setLocale("ru");
      i18n.changeLanguage("ru");
    } else {
      setLocale("en");
      i18n.changeLanguage("en");
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
