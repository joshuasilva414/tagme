import { Field, FieldType } from "@prisma/client";
import React from "react";
import Dropdown from "./inputs/Dropdown";
import { render } from "react-dom";

type Props = {
  field: Field;
};

const renderSwitch: (fieldInput: Field) => JSX.Element = (fieldInput) => {
  switch (fieldInput.fieldType) {
    case FieldType.SINGLE_CLASS:
      return <Dropdown options={fieldInput.options} />;
    case FieldType.MULTI_CLASS:
      return <Dropdown options={fieldInput.options} multiclass />;
    case FieldType.IMAGE:
      return <h1>Not Ready Yet</h1>;
    default:
      return <input type="text" />;
  }
};

const FieldCard = ({ field }: Props) => {
  return (
    <div>
      <h3>{field.prompt}</h3>
      {renderSwitch(field)}
    </div>
  );
};

export default FieldCard;
