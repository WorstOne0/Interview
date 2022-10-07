import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  padding-top: 1rem;
  background: var(--color-dark);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Loading = styled.div`
  height: 20rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled(motion.div)`
  height: 8rem;
  width: 100%;
  margin-top: 2rem;
  border-radius: 0.5rem;
  background: var(--color-white);

  display: flex;

  color: var(--color-black);
`;

export const ItemID = styled.div`
  height: 100%;
  width: 8%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 1000px) {
    width: 10%;
  }

  @media (max-width: 800px) {
    width: 15%;
  }

  @media (max-width: 600px) {
    width: 12%;
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ItemBody = styled.div`
  height: 100%;
  width: 65%;

  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    width: 75%;
    margin-left: 1rem;
  }
`;

export const ItemImage = styled.div`
  height: 7rem;
  width: 7rem;
  margin-right: 2rem;
  border-radius: 100%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    height: 6rem;
    width: 6rem;
  }

  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`;

export const ItemWrapper = styled.div`
  height: 100%;
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  .Icon {
    margin-right: 1rem;
  }
`;

export const ItemUser = styled.div`
  display: flex;
  align-items: center;

  color: var(--color-primary);
  font-size: 2.8rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const ItemEmail = styled.div`
  padding-top: 0.3rem;

  display: flex;
  align-items: center;

  color: var(--color-black);
  font-size: 1.8rem;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const ItemButtons = styled.div`
  height: 100%;
  width: 27%;
  padding: 0 5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    width: 25%;
  }

  @media (max-width: 800px) {
    width: 20%;
    padding: 0 2rem;
  }

  @media (max-width: 600px) {
    width: 22%;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    width: 25%;
  }
`;

export const UpdateButton = styled.button`
  height: 6.5rem;
  width: 6.5rem;
  border: none;
  border-radius: 50%;
  background: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f0a607;
  font-size: 3rem;

  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: #f4f4f4;
  }

  @media (max-width: 600px) {
    height: 5.5rem;
    width: 5.5rem;

    font-size: 2.4rem;
  }
`;

export const DeleteButton = styled.button`
  height: 7rem;
  width: 7rem;
  border: none;
  border-radius: 50%;
  background: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ef5b5b;
  font-size: 3rem;

  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: #f4f4f4;
  }

  @media (max-width: 600px) {
    height: 5.5rem;
    width: 5.5rem;

    font-size: 2.4rem;
  }
`;

export const Empty = styled.div`
  height: 25rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 1.8rem;
`;
