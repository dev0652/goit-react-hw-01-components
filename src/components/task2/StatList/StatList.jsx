import { PropTypes } from 'prop-types';

export const StatList = ({ stats }) => {
  console.log('stats: ', stats);

  return (
    <ul className="stat-list">
      {stats
        .map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))
        .join('')}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
