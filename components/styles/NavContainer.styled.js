import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;
