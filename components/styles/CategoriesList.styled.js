import styled from "styled-components";

export const StyledCategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 4rem;
`;

export const StyledCategory = styled.article`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0.5rem;
  max-width: 250px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h4 {
    font-size: 1.2rem;
  }
  img {
    width: 200px;
  }

  p {
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;
