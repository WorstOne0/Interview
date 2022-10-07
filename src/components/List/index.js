import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/user";

import api from "../../api";

import * as S from "./styles";

import { Modal, MyForm } from "../../components/";

import { AiOutlineUser, AiFillDelete, AiOutlineMail } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { SpiralSpinner, CircleSpinner } from "react-spinners-kit";

import defaultImage from "../../assets/150-1503945_transparent-user-png-default-user-image-png-png.png";

const List = () => {
  // Redux
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);

  // Variavel de controle
  const [control, setControl] = useState({
    loading: false,
    deleting: 0,
    isModalOpen: false,
    formName: "",
    formEmail: "",
    formId: 0,
  });

  // Fecth os dados quando o componente monta
  useEffect(() => {
    const fetchData = async () => {
      const res1 = await api.get(`/users?delay=1`);

      const res2 = await api.get(`/users?page=2`);

      setControl((oldControl) => ({ ...oldControl, loading: true }));

      res1.data.data.map((item) =>
        dispatch(
          add({
            name: `${item.first_name} ${item.last_name}`,
            email: item.email,
            avatar: item.avatar,
          })
        )
      );

      res2.data.data.map((item) =>
        dispatch(
          add({
            name: `${item.first_name} ${item.last_name}`,
            email: item.email,
            avatar: item.avatar,
          })
        )
      );
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setControl({ ...control, deleting: id });

    await api.delete("/users/2", { id });

    dispatch(remove({ id }));

    setControl({ ...control, deleting: 0 });
  };

  const handleUpdate = async (formId, formName, formEmail) => {
    setControl({ ...control, isModalOpen: true, formId, formName, formEmail });
  };

  return (
    <S.Container>
      {control.isModalOpen && (
        <Modal
          setModal={() => {
            setControl((oldControl) => ({ ...oldControl, isModalOpen: false }));
          }}
        >
          <MyForm
            propsId={control.formId}
            propsName={control.formName}
            propsEmail={control.formEmail}
            type="put"
          />
        </Modal>
      )}

      {!control.loading ? (
        <S.Loading>
          <SpiralSpinner frontColor={"var(--color-primary)"} />
        </S.Loading>
      ) : userList.length > 0 ? (
        userList.map((item, index) => (
          <S.ItemContainer
            key={item.id}
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: `0.${index}` }}
          >
            <S.ItemID>#{item.id}</S.ItemID>
            <S.ItemBody>
              <S.ItemImage url={item.avatar ? item.avatar : defaultImage} />
              <S.ItemWrapper>
                <S.ItemUser>
                  <AiOutlineUser className="Icon" />
                  {item.name}
                </S.ItemUser>
                <S.ItemEmail>
                  <AiOutlineMail className="Icon" />
                  {item.email}
                </S.ItemEmail>
              </S.ItemWrapper>
            </S.ItemBody>
            <S.ItemButtons>
              <S.UpdateButton
                onClick={() => handleUpdate(item.id, item.name, item.email)}
              >
                <MdUpdate className="Icon" />
              </S.UpdateButton>
              <S.DeleteButton onClick={() => handleDelete(item.id)}>
                {control.deleting === item.id ? (
                  <CircleSpinner color="#ef5b5b" />
                ) : (
                  <AiFillDelete className="Icon" />
                )}
              </S.DeleteButton>
            </S.ItemButtons>
          </S.ItemContainer>
        ))
      ) : (
        <S.Empty>Nenhum usúario cadastrado</S.Empty>
      )}
    </S.Container>
  );
};

export default List;
