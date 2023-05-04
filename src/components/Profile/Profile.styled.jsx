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
  background-color: ${p => p.theme.colors.white};

  box-shadow: ${p => p.theme.boxShadow};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
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
  color: ${p => p.theme.colors.gray};
`;

export const ProfileStats = styled.ul`
  list-style: none;
  display: flex;

  background-color: ${p => p.theme.colors.bgLight};
  align-self: stretch;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};

  align-items: center;
  padding: 20px 0;

  flex-basis: 33.3%;

  border-top: 0.5px solid ${p => p.theme.colors.lightGray};

  &:nth-child(2) {
    border-left: 0.5px solid ${p => p.theme.colors.lightGray};
    border-right: 0.5px solid ${p => p.theme.colors.lightGray};
  }
`;

export const Label = styled.span`
  text-transform: capitalize;
  color: ${p => p.theme.colors.gray};
  font-size: 0.8rem;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
