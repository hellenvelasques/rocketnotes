import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;


  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }  
  }
`;

export const Form = styled.form`
  max-width: 380px;
  margin: -84px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 64px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    bottom: 7px;
    right: 7px;
    
    cursor: pointer;
    transition: filter 0.2s;

    input {
      display: none;
    }
    
    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      width: 20px;
      height: 20px;
    }
  }

  > label:hover {
    filter: brightness(0.9);
  }
 
`;