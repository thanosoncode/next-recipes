import styled from "styled-components";

export const StyledMeal = styled.div`
  display: flex;
  border: 1px solid #aaa;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  p {
    padding-top: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;

export const StyledInfo = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;

  span {
    margin-right: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    div:last-child {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
