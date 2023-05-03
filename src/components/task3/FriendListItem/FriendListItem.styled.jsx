import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: white;
  padding: 10px;
  border-radius: 4px;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
`;

export const Status = styled.span`
  display: block;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;

  background-color: ${({ status }) => (status === 'online' ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 1.2rem;
`;
