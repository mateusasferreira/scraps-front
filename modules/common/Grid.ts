import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  //gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`

export default Grid;