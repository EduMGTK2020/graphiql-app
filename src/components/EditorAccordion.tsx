import { Accordion } from "@mantine/core";
import { useTranslation } from "react-i18next";

import "./EditorAccordion.css";

function AccordionFunction() {
  const { t } = useTranslation();
  return (
    <>
      <textarea className="textarea_query "></textarea>

      <Accordion defaultValue="customization" transitionDuration={500}>
        <Accordion.Item value="customization">
          <Accordion.Control>
            <b>{t("titleVar")}</b>
          </Accordion.Control>

          <Accordion.Panel>
            <textarea className="textarea"></textarea>
          </Accordion.Panel>
        </Accordion.Item>

        {/* <Accordion.Item value="flexibility">
        <Accordion.Control>
          <b>Headers</b>
        </Accordion.Control>
        <Accordion.Panel>
          <textarea className="textarea"></textarea>
        </Accordion.Panel>
      </Accordion.Item> */}
      </Accordion>
    </>
  );
}

export default AccordionFunction;
