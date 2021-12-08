import styled from "styled-components";

export const StyledMealList = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 2rem 4rem 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    padding: 0 0.2rem;
  }
`;
