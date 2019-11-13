import React, { SyntheticEvent } from "react";
import { Form, FormCheck, InputGroup } from "react-bootstrap";
import { useField } from "formik";

export type initialValue = string | number | boolean;

interface Props {
  name: string;
  input: SmartFieldInput;
  setFieldValue(name: string, value: initialValue): void;
}

export interface SmartFieldInput {
  prepend?: string | HTMLElement | React.FC;
  append?: string | HTMLElement | React.FC;
  label?: string;
  type: any;
  as: any;
  onChange(e: SyntheticEvent): any;
}

export interface SmartField {
  name: string;
  initialValue: initialValue;
  validation(value: initialValue): initialValue;
  className?: string;
  input?: SmartFieldInput;
}

const TextInput: React.FC<Props> = ({
  name: string,
  input,
  ...props
}): JSX.Element => {
  const [field, meta] = useField(name);
  const { label, prepend, append, ...rest } = input;
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup>
        {prepend && (
          <InputGroup.Prepend>
            <InputGroup.Text>{prepend}</InputGroup.Text>
          </InputGroup.Prepend>
        )}
        <Form.Control {...field} {...rest} />
      </InputGroup>
    </Form.Group>
  );
};

const CheckboxInput: React.FC<Props> = ({
  name: string,
  input,
  setFieldValue
}): JSX.Element => {
  const [field, meta] = useField({ name, type: "checkbox" });
  const { label, type, ...rest } = input;
  const toggleCheckbox = () => setFieldValue(field.name, !field.value);
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Check custom type={type}>
        <FormCheck.Input {...field} {...rest} />
        <FormCheck.Label onClick={toggleCheckbox}>{label}</FormCheck.Label>
      </Form.Check>
    </Form.Group>
  );
};

const SmartField: React.FC<Props> = props =>
  props.input && ["checkbox", "switch", "radio"].includes(props.input.type) ? (
    <TextInput {...props} />
  ) : (
    <CheckboxInput {...props} />
  );

export default SmartField;
