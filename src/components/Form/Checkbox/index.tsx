import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <input type="checkbox" id={name} name={name} autoComplete="off" {...rest} />
      <label htmlFor={name}>{label}</label>
    </Container>
  );
};

export default Checkbox;
