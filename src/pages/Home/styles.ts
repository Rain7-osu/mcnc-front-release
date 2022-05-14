import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  
  img.shown-img {
    width: 100%;
    position: absolute;
    top: 0;
    background-size: 100% 100%;
    transition: opacity .5s ease-out;
    opacity: 0;
    
    &.show {
      opacity: 1;
    }
  }
  
  img.placeholder-img {
    width: 100%;
    opacity: 0;
  }
`;

export const HomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #24222a;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  
  .register-button {
    margin-top: 80px;
    color: #c2b8e0;
    background-color: #302e38;
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 28px;
    
    &:hover {
      color: #ffffff;
      background-color: #302e38;
    }
  }
`;
