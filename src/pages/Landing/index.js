import React from "react";

import * as S from "./styles";

import { List, MyForm } from "../../components/";

const Landing = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Cadastro de Usúarios</S.Title>

        <MyForm />

        <S.ListContainer>
          <List />
        </S.ListContainer>
      </S.Content>
    </S.Container>
  );
};

export default Landing;
