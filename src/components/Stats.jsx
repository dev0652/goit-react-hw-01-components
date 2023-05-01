export const Stats = ({ stats }) => {
  const entries = Object.entries(stats);

  return (
    <ul className="stats">
      {entries.map(entry => {
        let counter = 0;

        return (
          <li key={(counter += 1)}>
            <span className="label">{entry[0]}</span>
            <span className="quantity">{entry[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};
