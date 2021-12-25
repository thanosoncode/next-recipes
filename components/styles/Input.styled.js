import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  height: 40px;
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
    padding-left: 3rem;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.secondary};
    outline: none;
  }
`;
