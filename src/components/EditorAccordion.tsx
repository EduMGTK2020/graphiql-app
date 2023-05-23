import { Accordion } from "@mantine/core";
import "./EditorAccordion.css";
import { useDispatch } from "react-redux";
import { addVariables } from "../store/variablesSlice";

function AccordionFunction() {
  const dispatch = useDispatch();

  return (
    <Accordion defaultValue="customization" transitionDuration={500}>
      <Accordion.Item value="customization">
        <Accordion.Control>
          <b>Variables</b>
        </Accordion.Control>

        <Accordion.Panel>
          <textarea
            className="textarea var-textarea"
            onChange={(e) => dispatch(addVariables(`${e.target.value}`))}
          ></textarea>
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

