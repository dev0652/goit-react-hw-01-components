export const Description = ({ username, avatar, location, tag }) => (
  <div className="description">
    <img src={avatar} alt={`Avatar of ${username}`} className="avatar" />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
);
