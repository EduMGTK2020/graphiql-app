import { useState } from "react";
import { SegmentedControl, Center, Box } from "@mantine/core";

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState("en");

  const toggleLocale = () => {
    if (locale == "en") setLocale("ru");
    else setLocale("en");
  };

  return (
    <>
      <SegmentedControl
        value={locale}
        onChange={toggleLocale}
        data={[
          {
            value: "en",
            label: (
              <Center>
                <Box sx={{ color: locale == "en" ? "#228be6" : "" }}>En</Box>
              </Center>
            ),
          },
          {
            value: "ru",
            label: (
              <Center>
                <Box sx={{ color: locale == "ru" ? "#228be6" : "" }}>Ru</Box>
              </Center>
            ),
          },
        ]}
      />
    </>
  );
}
