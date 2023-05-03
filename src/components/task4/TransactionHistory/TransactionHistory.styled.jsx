import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 50%;
  font-size: 0.8rem;
  color: gray;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
`;

export const Row = styled.tr`
  :nth-child(odd) {
    background-color: #f7f7f7;
  }

  :hover {
    background-color: PowderBlue;
  }
`;

export const HeaderCell = styled.th`
  border: 1px solid lightgray;
  padding: 10px 0;
  background-color: #3ac3d6;
  color: white;
  text-transform: uppercase;
  font-size: 0.5rem;
  letter-spacing: 0.06rem;
`;

export const Cell = styled.td`
  border: 1px solid lightgray;
  text-align: center;
  padding: 10px 0;

  :nth-child(1) {
    text-transform: capitalize;
  }
`;
