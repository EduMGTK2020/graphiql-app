import { Accordion } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { addVariables } from "../store/variablesSlice";
import { addQuery } from "../store/querySlice";

import "./EditorAccordion.css";

function AccordionFunction() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <textarea
        // defaultValue={`query {
        // characters{results{status}
        //   results{
        //     name
        //   }
        // }
        // }`}
        className="textarea_query "
        onChange={(e) => dispatch(addQuery(`${e.target.value}`))}
      ></textarea>

      <Accordion defaultValue="customization" transitionDuration={500}>
        <Accordion.Item value="customization">
          <Accordion.Control>
            <b>{t("titleVar")}</b>
          </Accordion.Control>

          <Accordion.Panel>
            <textarea
              className="textarea var-textarea"
              onChange={(e) => dispatch(addVariables(`${e.target.value}`))}
            ></textarea>{" "}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AccordionFunction;

