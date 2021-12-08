import styled from "styled-components";

export const StyledMealDetails = styled.article`
  margin: 3rem 2rem;
  max-width: 700px;
  margin: 1rem auto 3rem auto;

  border: 1px solid lightgray;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h1,
  h2,
  h3 {
    margin-bottom: 0.5rem;
  }

  h2,
  h3 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }

  img {
    width: 350px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 1.5rem 1rem 4rem 1rem;
    padding: 0.5rem;

    img {
      width: 100%;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 3rem;

  section {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    section:last-child {
      margin-left: 0.5rem;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
  gap: 0.8rem 1rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.4rem;
  }
`;

export const Item = styled.span`
  border: 1px solid red;
  border-radius: 999px;
  padding: 0.2rem 0.4rem;
`;

export const StyledReadMore = styled.span`
  color: #ff0101;
  cursor: pointer;
`;
