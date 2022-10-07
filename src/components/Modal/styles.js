import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(103, 91, 98, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  z-index: 100;
`;

export const Content = styled(motion.div)`
  width: 70%;
  padding: 5rem 2rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 770px) {
    width: 90%;
  }
`;

export const CloseButton = styled.div`
  height: 5rem;
  width: 20rem;
  margin-top: 2rem;
  border: 0.2rem solid var(--color-primary);
  border-radius: 0.5rem;
  background: transparent;

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
`;
