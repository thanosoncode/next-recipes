import styled from "styled-components";

export const Nav = styled.nav`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    width: 250px;
    gap: 10px;
    color: ${({ theme }) => theme.color};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    a {
      width: 100vw;
      margin: 0 auto;
      padding-top: 0.1rem;
    }
  }
`;

export const StyledDropDownMenu = styled.div`
  opacity: ${(props) => props.opacity};
  text-align: center;
  margin: 0.5rem auto;
  max-width: 400px;
  color: red;
  border-radius: 5px;
  border: 1px solid red;

  visibility: ${(props) => props.visibility};
  transition: 0.5s ease;

  div {
    cursor: pointer;
    padding: 0.3rem;
  }

  div:hover {
    background-color: lightsalmon;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;
