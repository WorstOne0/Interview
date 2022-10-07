import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, update } from "../../store/user";

import api from "../../api";

import * as S from "./styles";

import { Input } from "../../components";

import { AiOutlineUserAdd, AiOutlineMail } from "react-icons/ai";

import { CircleSpinner } from "react-spinners-kit";

const MyForm = ({
  propsId = 0,
  propsName = "",
  propsEmail = "",
  type = "post",
}) => {
  const dispatch = useDispatch();

  // Objeto de controle
  const [control, setControl] = useState({
    loading: false,
    message: "",
    error: false,
  });
  // Inputs
  const [name, setName] = useState(propsName);
  const [email, setEmail] = useState(propsEmail);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Começo do envio, setar loading como true
    setControl({
      ...control,
      loading: true,
    });

    if (type === "post") {
      await api.post("/users", { name, email }).catch((error) => {
        // Algum erro aconteceu
        setControl({
          ...control,
          loading: false,
          message: "Algo de inesperado aconteceu",
          error: true,
        });
      });

      dispatch(add({ name, email }));
    } else if (type === "put") {
      await api.put("/users/2", { name, email }).catch((error) => {
        // Algum erro aconteceu
        setControl({
          ...control,
          loading: false,
          message: "Algo de inesperado aconteceu",
          error: true,
        });
      });

      dispatch(update({ id: propsId, name, email }));
    }

    // Se nao tiver nenhum problema
    setControl({
      ...control,
      loading: false,
      message: `Usúario ${
        type === "post" ? "adicionado" : "atualizado"
      } com sucesso`,
    });

    // Timeout para fazer a mensagem desaparecer
    setTimeout(() => {
      setControl({
        ...control,
        message: "",
      });
    }, 4000);

    // Reseta os campos
    setName("");
    setEmail("");
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormWrapper>
        <Input
          value={name}
          setValue={setName}
          label={
            <>
              <AiOutlineUserAdd className="Icon" /> Usúario
            </>
          }
          margin={"0 2rem 0 0"}
        />
        <Input
          value={email}
          setValue={setEmail}
          label={
            <>
              <AiOutlineMail className="Icon" /> Email
            </>
          }
          margin={"0 2rem 0 0"}
        />
        <S.SubmitButton type="submit">
          {control.loading ? (
            <CircleSpinner />
          ) : type === "post" ? (
            "Adicionar"
          ) : (
            "Atualizar"
          )}
        </S.SubmitButton>
      </S.FormWrapper>
      <S.FormLabel color={control.error ? "red" : "green"}>
        {control.message}
      </S.FormLabel>
    </S.Form>
  );
};

export default MyForm;
