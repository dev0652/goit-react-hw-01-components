import { PropTypes } from 'prop-types';

import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  SecondaryInfo,
  ProfileStats,
  ProfileStatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  const entries = Object.entries(stats);
  let counter = 0;

  return (
    <ProfileWrapper>
      <Avatar src={avatar} alt={`Avatar of ${username}`} />

      <Description>
        <Name>{username}</Name>
        <SecondaryInfo>@{tag}</SecondaryInfo>
        <SecondaryInfo>{location}</SecondaryInfo>
      </Description>

      <ProfileStats>
        {entries.map(entry => (
          <ProfileStatsItem key={(counter += 1)}>
            <Label>{entry[0]}</Label>
            <Quantity>
              {new Intl.NumberFormat('en-US', {
                maximumSignificantDigits: 3,
              }).format(entry[1])}
            </Quantity>
          </ProfileStatsItem>
        ))}
      </ProfileStats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
