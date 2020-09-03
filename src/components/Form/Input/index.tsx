import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} autoComplete="off" {...rest} />
    </Container>
  );
};

export default Input;
