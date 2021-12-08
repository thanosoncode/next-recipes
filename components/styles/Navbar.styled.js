import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  gap: 1.5rem;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
  }

  span,
  div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.4rem;
  }

  div:last-child {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 240px;
    a {
      width: 100vw;
      margin: 0 auto;
      padding-top: 0.1rem;
      justify-content: flex-start;
    }
    div:first-child {
      margin-right: 5px;
    }
    div:last-child {
      margin-top: 5px;
    }
  }
`;

export const StyledDropDownMenu = styled.div`
  display: flex;
  background-color: white;
  opacity: ${(props) => props.opacity};
  text-align: center;
  height: 40px;
  margin: 0 auto;
  max-width: 400px;
  color: black;
  font-size: 0.9rem;
  border-radius: 5px;
  border: 1px solid red;
  visibility: ${(props) => props.visibility};
  transition: 0.5s ease;

  div {
    cursor: pointer;
    padding: 0.3rem;
    margin: 0.1rem 0.5rem;
  }

  div:hover,
  div:active {
    background-color: lightsalmon;
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.1rem;
    width: 250px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
