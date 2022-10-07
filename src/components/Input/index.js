import React from "react";

import * as S from "./styles";

const Input = ({
  value = "",
  setValue,
  label,
  margin = "0",
  color = "var(--color-white)",
  backgroundName = "var(--color-dark)",
  borderColor = "var(--color-white)",
  borderColorHover = "var(--color-primary)",
}) => {
  const handleInput = (event) => {
    event.preventDefault();

    setValue(event.target.value);
  };

  return (
    <S.Container margin={margin} backgroundName={backgroundName}>
      <S.Input
        value={value}
        className="Input"
        autoComplete="off"
        required
        onChange={handleInput}
        color={color}
        borderColor={borderColor}
        borderColorHover={borderColorHover}
      />
      <S.Label className="Label">{label}</S.Label>
    </S.Container>
  );
};

export default Input;
