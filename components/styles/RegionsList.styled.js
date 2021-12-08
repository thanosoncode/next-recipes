import styled from "styled-components";

export const StyledRegionsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 4rem;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 2rem;
  }
`;

export const StyledRegion = styled.div`
  padding: 0.4rem 1rem;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 999px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  font-size: 1.05rem;
`;
