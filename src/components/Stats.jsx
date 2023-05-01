export const Stats = ({ userStats }) => {
  const spreadStats = [...stats];

  return (
    <ul className="stats">
      {spreadStats.map((stat, index) => {
        return (
          <li key={stat.tag}>
            <span className="label">{stat[index]}</span>
            <span className="quantity">{stat.index(stats[index])}</span>
          </li>
        );
      })}
    </ul>
  );
};
