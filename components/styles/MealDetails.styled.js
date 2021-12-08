import styled from "styled-components";

export const StyledMealDetails = styled.article`
  margin: 3rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 3rem;
  /* background-color: #eee; */
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
    margin: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 5rem;
    img {
      width: 100%;
    }
    section p {
      font-size: 0.9rem;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 3rem;

  section {
    flex: 1;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
  gap: 0.8rem 1rem;
  margin-top: 1rem;
`;

export const Item = styled.span`
  border: 1px solid red;
  border-radius: 999px;
  padding: 0.2rem 0.4rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.9rem;
  }
`;

export const StyledReadMore = styled.span`
  color: #ff0101;
  cursor: pointer;
`;
