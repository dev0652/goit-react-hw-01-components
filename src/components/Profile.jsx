import { Stats } from './Stats';

export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt={`Avatar of ${username}`} className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <Stats stats={stats} />
  </div>
);

console.log('Profile', Profile);
