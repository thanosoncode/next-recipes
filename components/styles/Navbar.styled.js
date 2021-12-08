import styled from "styled-components";

export const Nav = styled.nav`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    width: 250px;
    gap: 10px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledDropDownMenu = styled.div`
  background-color: red;
  opacity: ${(props) => props.opacity};
  text-align: center;
  margin-top: 0.4rem;
  visibility: ${(props) => props.visibility};
  transition: 0.5s ease;

  div {
    cursor: pointer;
    padding: 0.3rem;
  }

  div:hover {
    background-color: lightsalmon;
  }
`;
