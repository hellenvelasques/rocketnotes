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


  .buttonSave {
      margin-top: 34px;
    }
    
  .content {
    display: flex;
    flex-direction: column;
  }

  .tags {
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 530px;
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

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 20px;
      font-weight: 400;
    }

    
  }
`;