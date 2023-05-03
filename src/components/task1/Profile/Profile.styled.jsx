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
