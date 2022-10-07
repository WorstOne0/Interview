import React from "react";

import * as S from "./styles";

const Modal = ({ setModal, children }) => {
  return (
    <S.Container>
      <S.Content animate={{ scale: [0.5, 1] }} transition={{ duration: 0.3 }}>
        {children}

        <S.CloseButton onClick={() => setModal()}>Fechar</S.CloseButton>
      </S.Content>
    </S.Container>
  );
};

export default Modal;
