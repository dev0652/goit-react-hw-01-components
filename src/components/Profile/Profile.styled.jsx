import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 30px;

  font-size: 1rem;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40%;
`;

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const SecondaryInfo = styled.p`
  font-size: 0.9rem;
  color: gray;
`;

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
