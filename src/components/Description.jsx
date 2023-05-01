export const Description = ({
  userInfo: { username, avatar, location, tag },
}) => {
  console.log('username', username);

  return (
    <div className="description">
      <img src={avatar} alt={`Avatar of ${username}`} className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
