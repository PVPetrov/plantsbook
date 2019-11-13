import React from "react";
import { Formik, Form } from "formik";
import SmartField from "./SmartField";
import classNames from "classnames";

export type initialValue = string | number | boolean | null | undefined;

type SmartField = {
  name: string;
  initialValue: initialValue;
  className?: string;
  validation(props: {}): boolean;
  input: any;
};

interface Props {
  fields: Array<SmartField>;
  handleSubmit(values: Record<string, initialValue>): any;
  state?: Record<string, initialValue>;
  className?: string;
}

const SmartForm: React.FC<Props> = ({
  fields = [],
  state = {},
  className = "",
  handleSubmit
}) => {
  const initialValues: Record<string, initialValue> = {};
  const validationSchema: any = {};
  fields.forEach(field => {
    initialValues[field.name] = state[field.name] || field.initialValue;
    validationSchema[field.name] = field.validation;
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {props => (
        <div className={classNames(className)}>
          {fields.map(field => (
            <SmartField input={field.input} name={field.name} {...props} />
          ))}
        </div>
      )}
    </Formik>
  );
};

export default SmartForm;
