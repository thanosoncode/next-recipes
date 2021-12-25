import styled from "styled-components";

export const StyledLoading = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid lightgray;
  border-radius: 50%;
  border-top-color: #efa92e;
  animation: spinner 0.6s linear infinite;

  margin: 100px auto;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
