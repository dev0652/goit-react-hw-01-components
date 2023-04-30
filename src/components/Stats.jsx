export const Stats = ({ stats }) => {
  const spreadedStats = [...stats];

  return (
    <ul className="stats">
      {spreadedStats.map((stat, index) => {
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
