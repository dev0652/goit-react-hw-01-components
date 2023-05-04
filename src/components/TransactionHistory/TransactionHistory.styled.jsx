import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 50%;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.gray};

  box-shadow: ${p => p.theme.boxShadow};
`;

export const Row = styled.tr`
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.bgLight};
  }

  :hover {
    background-color: ${p => p.theme.colors.table.rowHover};
  }
`;

export const HeaderCell = styled.th`
  border: 1px solid ${p => p.theme.colors.lightGray};
  padding: 10px 0;
  background-color: ${p => p.theme.colors.table.header};
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
  font-size: 0.5rem;
  letter-spacing: 0.06rem;
`;

export const Cell = styled.td`
  border: 1px solid ${p => p.theme.colors.lightGray};
  text-align: center;
  padding: 10px 0;

  :nth-child(1) {
    text-transform: capitalize;
  }
`;
