import { PropTypes } from 'prop-types';
import { Stats } from '../Stats/Stats';

import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  SecondaryInfo,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => (
  <ProfileWrapper>
    <Avatar src={avatar} alt={`Avatar of ${username}`} />

    <Description>
      <Name>{username}</Name>
      <SecondaryInfo>@{tag}</SecondaryInfo>
      <SecondaryInfo>{location}</SecondaryInfo>
    </Description>

    <Stats stats={stats} />
  </ProfileWrapper>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
