import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px; 
  padding: 0 10px;
  box-sizing: border-box;

  @media screen and (max-width: 1280px){
    max-width: 1024px; 
  }
  
  @media screen and (max-width: 1024px){
    max-width: 960px; 
  }
  
  @media screen and (max-width: 960px){
    max-width: 768px; 
  }
  
  @media screen and (max-width: 768px){
    max-width: 100%; 
  }
`

export default Container