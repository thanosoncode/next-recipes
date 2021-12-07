import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  height: 30px;
  width: 240px;
  margin: 0 auto;
  span {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    color: red;
  }
  input {
    height: 100%;
    padding-left: 2rem;
    width: 100%;
  }
`;
