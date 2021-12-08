import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.color};
  padding: 1rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    padding: 0.5rem 0;
  }
`;
