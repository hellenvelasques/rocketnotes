import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  margin-bottom: 8px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  width: 100%;

  display: flex;
  align-items: center;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0; 

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300}; 
    }
  }
  
  svg {
    margin-left: 16px;
  }
`;