import styled from "styled-components";

export const Form = styled.form`
  height: 13rem;
  width: 100%;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;

  color: white;

  .Icon {
    margin-right: 0.8rem;
  }

  @media (max-width: 600px) {
    height: 28rem;
  }
`;

export const FormWrapper = styled.div`
  height: 5.5rem;
  width: 100%;

  display: flex;

  @media (max-width: 600px) {
    height: 100%;
    flex-direction: column;

    justify-content: space-around;
  }
`;

export const FormLabel = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  color: ${(props) => props.color};
  font-size: 1.4rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SubmitButton = styled.button`
  height: 100%;
  width: 40rem;
  border: 0.2rem solid var(--color-primary);
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: var(--color-primary);

    color: var(--color-dark);
  }

  @media (max-width: 600px) {
    height: 5.5rem;
    width: 100%;
  }
`;
