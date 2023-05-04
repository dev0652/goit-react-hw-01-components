import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: ${p => p.theme.colors.white};
  padding: 10px;
  border-radius: 4px;

  box-shadow: ${p => p.theme.boxShadow};
`;

export const Status = styled.span`
  display: block;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;

  background-color: ${({ status }) =>
    status === 'online' ? p => p.theme.colors.green : p => p.theme.colors.red};
`;

export const Avatar = styled.img`
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 1.2rem;
`;
