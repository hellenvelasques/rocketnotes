import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 37px;
  }

  .tags {
    margin-bottom: 34px;

    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    gap: 16px;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    > h1 {
      font-size: 36px;
      font-weight: 500;
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 20px;
      font-weight: 400;
    }
  }
`;