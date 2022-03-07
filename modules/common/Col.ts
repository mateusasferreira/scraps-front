import styled from "styled-components";

interface ICol {
  size: {
    large: string,
    medium: string,
    small: string
  }
}

const Col = styled.div<ICol>`
  grid-column: ${({size}) => size.large};

  @media screen and (max-width: 768px and min-width: 420px) {
    grid-column: ${({size}) => size.large};
  }

  @media screen and (max-width: 420px){
    grid-column: ${({size}) => size.small};
  }
`

export default Col