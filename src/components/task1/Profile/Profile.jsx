import { PropTypes } from 'prop-types';
import { Stats } from '../Stats/Stats';

import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => (
  <ProfileWrapper>
    <Description>
      <Avatar src={avatar} alt={`Avatar of ${username}`} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats stats={stats} />
  </ProfileWrapper>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.string),
};
