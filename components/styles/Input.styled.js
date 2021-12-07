import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  height: 30px;
  width: 240px;
  margin: 0 auto;
  span,
  div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    left: 0.5rem;
  }

  div {
    padding-right: 0.5rem;
    right: 0;
  }

  input {
    height: 100%;
    padding-left: 2rem;
    width: 100%;
  }
`;
