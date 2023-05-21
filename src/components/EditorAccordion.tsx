import { Accordion } from "@mantine/core";
import "./EditorAccordion.css";

function AccordionFunction() {
  return (
    <Accordion defaultValue="customization" transitionDuration={500}>
      <Accordion.Item value="customization">
        <Accordion.Control>
          <b>Variables</b>
        </Accordion.Control>

        <Accordion.Panel>
          <textarea className="textarea"></textarea>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>
          <b>Headers</b>
        </Accordion.Control>
        <Accordion.Panel>
          <textarea className="textarea"></textarea>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionFunction;
