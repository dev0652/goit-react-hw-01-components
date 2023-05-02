import styled from 'styled-components';

export const ProfileStats = styled.ul`
  list-style: none;
  display: flex;
  // justify-content: center;
  // gap: 20px;
  background-color: #f7f7f7;
  align-self: stretch;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;

  align-items: center;
  padding: 20px 0;

  flex-basis: 33.3%;

  border-top: 0.5px solid lightgray;

  &:nth-child(2) {
    border-left: 0.5px solid lightgray;
    border-right: 0.5px solid lightgray;
  }
`;

export const Label = styled.span`
  text-transform: capitalize;
  color: gray;
  font-size: 0.8rem;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
