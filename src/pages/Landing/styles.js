import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 60%;
  padding: 2rem 0 2rem 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1650px) {
    width: 70%;
  }

  @media (max-width: 1390px) {
    width: 80%;
  }

  @media (max-width: 1050px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  padding: 2rem 0;

  color: var(--color-white);
  font-size: 3.2rem;
`;

export const ListContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 1rem;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    height: 70%;
  }
`;
