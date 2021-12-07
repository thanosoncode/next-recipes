import styled from "styled-components";

export const StyledMealDetails = styled.article`
  margin: 3rem 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  img {
    width: 350px;
  }
  h3 {
    margin: 1rem 0;
    font-size: 1.5rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 3rem;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
  p {
    margin-bottom: 0.3rem;
  }
`;

export const FlexList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  gap: 1rem;

  p:first-child {
    font-weight: 500;
  }
`;

export const StyledReadMore = styled.span`
  color: #ff0101;
  cursor: pointer;
`;
